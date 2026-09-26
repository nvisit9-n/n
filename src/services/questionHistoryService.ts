export type MasteryStatus = 'UNSEEN' | 'LEARNING' | 'WEAK' | 'MASTERED' | 'REVIEW';

export interface UserQuestionRecord {
  userId: string;
  questionId: string;
  questionFamilyId: string;
  firstSeenAt: string;
  lastSeenAt: string;
  attemptCount: number;
  correctCount: number;
  wrongCount: number;
  lastAnswerIndex: number;
  lastScore: number;
  timeSpentSeconds: number;
  isBookmarked: boolean;
  confidence: 'Low' | 'Medium' | 'High';
  masteryStatus: MasteryStatus;
}

export interface PracticeSessionSummary {
  totalAttempted: number;
  correctAnswers: number;
  wrongAnswers: number;
  unseenDiscovered: number;
  masteredPromoted: number;
  weakIdentified: number;
  accuracyPercent: number;
}

const STORAGE_PREFIX = 'btn_user_question_history_';

export class QuestionHistoryService {
  private static getKey(userId: string): string {
    const safeId = userId || 'guest_user';
    return `${STORAGE_PREFIX}${safeId}`;
  }

  public static getHistory(userId: string): Record<string, UserQuestionRecord> {
    if (typeof window === 'undefined') return {};
    try {
      const raw = localStorage.getItem(this.getKey(userId));
      return raw ? JSON.parse(raw) : {};
    } catch (err) {
      console.warn('Failed to load user question history:', err);
      return {};
    }
  }

  public static saveHistory(userId: string, history: Record<string, UserQuestionRecord>): void {
    if (typeof window === 'undefined') return;
    try {
      localStorage.setItem(this.getKey(userId), JSON.stringify(history));
    } catch (err) {
      console.warn('Failed to persist user question history:', err);
    }
  }

  /**
   * Records an active answer submission.
   * NOTE: Merely displaying or loading a question is NOT an attempt.
   * An attempt is created strictly when the user answers, skips, or submits.
   */
  public static recordAttempt(
    userId: string,
    questionId: string,
    questionFamilyId: string,
    selectedOptionIndex: number,
    correctOptionIndex: number,
    timeSpentSeconds: number = 20,
    confidence: 'Low' | 'Medium' | 'High' = 'Medium'
  ): UserQuestionRecord {
    const history = this.getHistory(userId);
    const existing = history[questionId];
    const now = new Date().toISOString();
    const isCorrect = selectedOptionIndex === correctOptionIndex;

    const attemptCount = (existing?.attemptCount || 0) + 1;
    const correctCount = (existing?.correctCount || 0) + (isCorrect ? 1 : 0);
    const wrongCount = (existing?.wrongCount || 0) + (isCorrect ? 0 : 1);

    // Compute mastery status based on performance track
    let masteryStatus: MasteryStatus = 'LEARNING';
    if (correctCount >= 3 && wrongCount === 0) {
      masteryStatus = 'MASTERED';
    } else if (isCorrect && correctCount > wrongCount) {
      masteryStatus = 'REVIEW';
    } else if (!isCorrect || wrongCount > correctCount) {
      masteryStatus = 'WEAK';
    }

    const updatedRecord: UserQuestionRecord = {
      userId,
      questionId,
      questionFamilyId: questionFamilyId || questionId,
      firstSeenAt: existing?.firstSeenAt || now,
      lastSeenAt: now,
      attemptCount,
      correctCount,
      wrongCount,
      lastAnswerIndex: selectedOptionIndex,
      lastScore: isCorrect ? 2 : -0.4,
      timeSpentSeconds: (existing?.timeSpentSeconds || 0) + timeSpentSeconds,
      isBookmarked: existing?.isBookmarked || false,
      confidence,
      masteryStatus
    };

    history[questionId] = updatedRecord;
    this.saveHistory(userId, history);

    // Dispatch global event for live progress updates
    if (typeof window !== 'undefined') {
      window.dispatchEvent(
        new CustomEvent('btn:question-attempt-recorded', {
          detail: { questionId, masteryStatus, isCorrect }
        })
      );
    }

    return updatedRecord;
  }

  /**
   * Sorts questions for Adaptive Practice:
   * 1. Unseen question families FIRST
   * 2. Questions in WEAK / LEARNING status
   * 3. Filters out already MASTERED questions from fresh practice
   */
  public static prioritizeQuestions<T extends { id: string; questionFamilyId?: string }>(
    questions: T[],
    userId: string,
    mode: 'new_only' | 'weak_only' | 'review_all' = 'new_only'
  ): {
    prioritized: T[];
    isExhausted: boolean;
    totalUnseen: number;
    totalMastered: number;
    totalWeak: number;
  } {
    const history = this.getHistory(userId);
    const seenFamilyIds = new Set<string>();

    const unseen: T[] = [];
    const weak: T[] = [];
    const learning: T[] = [];
    const mastered: T[] = [];

    for (const q of questions) {
      const record = history[q.id];
      const famId = q.questionFamilyId || q.id;

      if (!record || record.attemptCount === 0) {
        if (!seenFamilyIds.has(famId)) {
          unseen.push(q);
          seenFamilyIds.add(famId);
        }
      } else if (record.masteryStatus === 'WEAK') {
        weak.push(q);
      } else if (record.masteryStatus === 'MASTERED') {
        mastered.push(q);
      } else {
        learning.push(q);
      }
    }

    let prioritized: T[] = [];
    if (mode === 'new_only') {
      prioritized = unseen;
    } else if (mode === 'weak_only') {
      prioritized = weak;
    } else {
      prioritized = [...unseen, ...weak, ...learning];
    }

    return {
      prioritized,
      isExhausted: mode === 'new_only' && unseen.length === 0,
      totalUnseen: unseen.length,
      totalMastered: mastered.length,
      totalWeak: weak.length
    };
  }

  public static getMasteryStats(userId: string): {
    totalMastered: number;
    totalWeak: number;
    totalLearning: number;
    overallAccuracy: number;
  } {
    const history = this.getHistory(userId);
    let totalMastered = 0;
    let totalWeak = 0;
    let totalLearning = 0;
    let totalCorrect = 0;
    let totalAttempts = 0;

    for (const rec of Object.values(history)) {
      if (rec.masteryStatus === 'MASTERED') totalMastered++;
      if (rec.masteryStatus === 'WEAK') totalWeak++;
      if (rec.masteryStatus === 'LEARNING' || rec.masteryStatus === 'REVIEW') totalLearning++;

      totalCorrect += rec.correctCount;
      totalAttempts += rec.attemptCount;
    }

    const overallAccuracy = totalAttempts > 0 ? Math.round((totalCorrect / totalAttempts) * 100) : 0;

    return {
      totalMastered,
      totalWeak,
      totalLearning,
      overallAccuracy
    };
  }
}
