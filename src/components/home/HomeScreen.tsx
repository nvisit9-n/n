import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { HeroBanner } from './HeroBanner';
import { FeatureCards } from './FeatureCards';
import { HomeCategoryGrid } from './HomeCategoryGrid';
import { HomeInteractiveSection } from './HomeInteractiveSection';
import { HomeBankQuickLinks } from './HomeBankQuickLinks';
import { RightSidebarWidget } from './RightSidebarWidget';
import { LessonDetailPage } from './LessonDetailPage';
import { PhaseTopicsPage } from './PhaseTopicsPage';
import { ExamOverviewPage } from './ExamOverviewPage';
import { CategoryExamsListPage } from './CategoryExamsListPage';
import { 
  EXAM_CATEGORIES, 
  TARGET_EXAMS_DATA, 
  ExamCategory, 
  TargetExam, 
  ExamPhase, 
  ExamTopicDetail 
} from '../../data/examDrillDownData';

type DrillDownLevel = 'home' | 'category' | 'exam' | 'phase' | 'topic';

interface DrillDownState {
  level: DrillDownLevel;
  selectedCategoryId: 'banking' | 'enterprises' | 'loksewa' | null;
  selectedExamId: string | null;
  selectedPhaseId: string | null;
  selectedTopicId: string | null;
}

export const HomeScreen: React.FC = () => {
  const [drillDown, setDrillDown] = useState<DrillDownState>({
    level: 'home',
    selectedCategoryId: null,
    selectedExamId: null,
    selectedPhaseId: null,
    selectedTopicId: null,
  });

  // Scroll to top smoothly whenever drill-down navigation occurs
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [
    drillDown.level, 
    drillDown.selectedCategoryId, 
    drillDown.selectedExamId, 
    drillDown.selectedPhaseId, 
    drillDown.selectedTopicId
  ]);

  const handleBackToHome = () => {
    setDrillDown({
      level: 'home',
      selectedCategoryId: null,
      selectedExamId: null,
      selectedPhaseId: null,
      selectedTopicId: null
    });
  };

  const handleBackToCategory = () => {
    setDrillDown(prev => ({
      level: 'category',
      selectedCategoryId: prev.selectedCategoryId || 'banking',
      selectedExamId: null,
      selectedPhaseId: null,
      selectedTopicId: null
    }));
  };

  const handleBackToExam = () => {
    setDrillDown(prev => ({
      ...prev,
      level: 'exam',
      selectedPhaseId: null,
      selectedTopicId: null
    }));
  };

  const handleBackToPhase = () => {
    setDrillDown(prev => ({
      ...prev,
      level: 'phase',
      selectedTopicId: null
    }));
  };

  const handleSelectTopic = (topicId: string) => {
    setDrillDown(prev => ({
      ...prev,
      level: 'topic',
      selectedTopicId: topicId
    }));
  };

  const handleSelectPhase = (phaseId: string) => {
    setDrillDown(prev => ({
      ...prev,
      level: 'phase',
      selectedPhaseId: phaseId,
      selectedTopicId: null
    }));
  };

  const handleSelectExam = (examId: string) => {
    const exam = TARGET_EXAMS_DATA[examId];
    setDrillDown(prev => ({
      level: 'exam',
      selectedCategoryId: exam?.categoryId || prev.selectedCategoryId || 'banking',
      selectedExamId: examId,
      selectedPhaseId: null,
      selectedTopicId: null
    }));
  };

  // Active Data Resolution
  const currentCategory: ExamCategory | undefined = drillDown.selectedCategoryId
    ? EXAM_CATEGORIES[drillDown.selectedCategoryId]
    : undefined;

  const currentExam: TargetExam | undefined = drillDown.selectedExamId 
    ? TARGET_EXAMS_DATA[drillDown.selectedExamId] || TARGET_EXAMS_DATA.nrb
    : undefined;

  const currentPhase: ExamPhase | undefined = currentExam && drillDown.selectedPhaseId
    ? currentExam.phases.find(p => p.id === drillDown.selectedPhaseId) || currentExam.phases[0]
    : undefined;

  const currentTopic: ExamTopicDetail | undefined = currentPhase && drillDown.selectedTopicId
    ? currentPhase.topics.find(t => t.id === drillDown.selectedTopicId) || currentPhase.topics[0]
    : undefined;

  // Level 4: Specific Lesson / Note Detail Page
  if (drillDown.level === 'topic' && currentExam && currentPhase && currentTopic) {
    return (
      <LessonDetailPage
        exam={currentExam}
        phase={currentPhase}
        topic={currentTopic}
        category={currentCategory}
        onBackToPhase={handleBackToPhase}
        onBackToExam={handleBackToExam}
        onBackToCategory={handleBackToCategory}
        onBackToHome={handleBackToHome}
      />
    );
  }

  // Level 3: Phase Topics Page
  if (drillDown.level === 'phase' && currentExam && currentPhase) {
    return (
      <PhaseTopicsPage
        exam={currentExam}
        phase={currentPhase}
        category={currentCategory}
        onBackToExam={handleBackToExam}
        onBackToCategory={handleBackToCategory}
        onBackToHome={handleBackToHome}
        onSelectTopic={handleSelectTopic}
      />
    );
  }

  // Level 2: Dedicated Exam Overview Page
  if (drillDown.level === 'exam' && currentExam) {
    return (
      <ExamOverviewPage
        exam={currentExam}
        category={currentCategory}
        onBackToHome={handleBackToHome}
        onBackToCategory={handleBackToCategory}
        onSelectPhase={handleSelectPhase}
      />
    );
  }

  // Level 1: Category Exams List Page
  if (drillDown.level === 'category' && currentCategory) {
    return (
      <CategoryExamsListPage
        category={currentCategory}
        onBackToHome={handleBackToHome}
        onSelectExam={handleSelectExam}
      />
    );
  }

  // Level 0: EXACT REFERENCE EDTECH DASHBOARD (Center Grid + Right Sidebar)
  return (
    <div className="w-full animate-fadeIn">
      <div className="flex flex-col lg:flex-row gap-5 items-start">
        
        {/* CENTER MAIN CONTENT AREA */}
        <div className="flex-1 min-w-0 w-full space-y-4 sm:space-y-5">
          {/* 1. Hero Banner */}
          <HeroBanner />

          {/* 2. Highlighted Feature Cards: Banking & Pre-Test */}
          <FeatureCards />

          {/* 3. Quick Category Grid: 7 Cards */}
          <HomeCategoryGrid />

          {/* 4. Lower Interactive Section: Continue Learning, Today's Practice, Latest Notices */}
          <HomeInteractiveSection />

          {/* 5. Bank Quick Links Carousel Bar */}
          <HomeBankQuickLinks />
        </div>

        {/* RIGHT SIDEBAR: Analytics & AI Sathi Widgets */}
        <div className="w-full lg:w-80 xl:w-88 shrink-0">
          <RightSidebarWidget />
        </div>

      </div>
    </div>
  );
};

export default HomeScreen;
