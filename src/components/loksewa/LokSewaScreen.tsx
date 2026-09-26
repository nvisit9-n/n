import React, { useState } from 'react';
import { 
  Scale, 
  Search, 
  ExternalLink, 
  CheckCircle2, 
  ArrowRight, 
  BookOpen, 
  Award, 
  FileText, 
  ShieldCheck, 
  Layers, 
  Clock, 
  Calendar,
  Sparkles,
  HelpCircle,
  TrendingUp
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { OfficialTrustBadge } from '../common/OfficialTrustBadge';
import { NepalFlagEmblem } from '../common/NepalFlagEmblem';

interface LokSewaPostConfig {
  id: string;
  code: string;
  titleNe: string;
  titleEn: string;
  rankNe: string;
  levelNumber: string;
  minQualificationNe: string;
  ageLimitNe: string;
  stages: {
    phase: string;
    titleNe: string;
    subjectsNe: string;
    marks: number;
    format: string;
  }[];
  keyTopicsNe: string[];
  totalQuestions: number;
  sampleSyllabusUrl: string;
}

const PSC_POSTS: LokSewaPostConfig[] = [
  {
    id: 'kharidar',
    code: 'KHD',
    titleNe: 'खरिदार (सामान्य प्रशासन, लेखा, राजस्व)',
    titleEn: 'Kharidar (Non-Gazetted 2nd Class)',
    rankNe: 'राजपत्र अनंकित द्वितीय श्रेणी (तह ४ सरह)',
    levelNumber: '4',
    minQualificationNe: 'एसईई (SEE) मा कम्तीमा GPA २.० वा एसएलसी उत्तीर्ण।',
    ageLimitNe: '१८ वर्ष पूरा भई ३५ वर्ष ननाघेको (महिला तथा अपाङ्गता भएका व्यक्तिको हकमा ४० वर्ष)।',
    stages: [
      {
        phase: 'प्रथम चरण',
        titleNe: 'सामान्य ज्ञान र सामान्य अभिक्षमता परीक्षण (MCQs)',
        subjectsNe: 'नेपालको भूगोल, इतिहास, संविधान, आर्थिक अवस्था, समसामयिक र सामान्य गणित',
        marks: 100,
        format: '५० वस्तुगत बहुवैकल्पिक प्रश्न (प्रत्येक प्रश्न २ अंक, ४५ मिनेट, -२०% नेगेटिभ मार्किङ)'
      },
      {
        phase: 'दोस्रो चरण',
        titleNe: 'लिखित परीक्षा (विषयगत प्रश्नहरू)',
        subjectsNe: 'कार्यालय सञ्चालन, सामान्य प्रशासन, सेवा सम्बन्धी ऐन नियम र गणितीय क्षमता',
        marks: 200,
        format: 'वर्णनात्मक तथा विश्लेषणात्मक प्रश्नहरू (३ घण्टा)'
      },
      {
        phase: 'तेस्रो चरण',
        titleNe: 'कम्प्युटर सीप परीक्षण र अन्तर्वार्ता',
        subjectsNe: 'देवनागरी टाइप, वर्ड प्रोसेसिङ र व्यक्तिगत अन्तर्वार्ता',
        marks: 40,
        format: 'प्रयोगात्मक परीक्षा र मौखिक अन्तर्वार्ता'
      }
    ],
    keyTopicsNe: [
      'नेपालको संविधान (मौलिक हक, राज्यका नीतिहरू)',
      'नेपालको भूगोल, नदीनाला, हावापानी र संरक्षित क्षेत्रहरू',
      'नेपालको इतिहास (प्राचीन, मध्यकालीन र आधुनिक)',
      'सार्वजनिक सेवा प्रवाह र सुशासन',
      'सामान्य गणित तथा ऐकिक नियम, प्रतिशत, नाफा-नोक्सान'
    ],
    totalQuestions: 1420,
    sampleSyllabusUrl: 'https://psc.gov.np'
  },
  {
    id: 'nasu',
    code: 'NASU',
    titleNe: 'नायब सुब्बा (प्रशासन, राजस्व, लेखा, न्याय)',
    titleEn: 'Nayab Subba (Non-Gazetted 1st Class)',
    rankNe: 'राजपत्र अनंकित प्रथम श्रेणी (तह ५ सरह)',
    levelNumber: '5',
    minQualificationNe: 'मान्यता प्राप्त शिक्षण संस्थाबाट प्रविणता प्रमाणपत्र तह वा १०+२ उत्तीर्ण।',
    ageLimitNe: '१८ वर्ष पूरा भई ३५ वर्ष ननाघेको (महिला तथा अपाङ्गता भएका व्यक्तिको हकमा ४० वर्ष)।',
    stages: [
      {
        phase: 'प्रथम चरण',
        titleNe: 'सामान्य ज्ञान र बौद्धिक परीक्षण (GK + IQ MCQs)',
        subjectsNe: 'विश्व तथा नेपालको भूगोल, इतिहास, विज्ञान प्रविधि, अन्तर्राष्ट्रिय सम्बन्ध र IQ',
        marks: 100,
        format: '५० वस्तुगत प्रश्नहरू (GK ३० प्रश्न, IQ २० प्रश्न, ४५ मिनेट)'
      },
      {
        phase: 'दोस्रो चरण',
        titleNe: 'समसामयिक अध्ययन र सार्वजनिक सेवा व्यवस्थापन',
        subjectsNe: 'नेपालको विकास योजना, बजेट, आर्थिक नीति, शासकीय संरचना र सुशासन',
        marks: 100,
        format: 'विषयगत लिखित परीक्षा (३ घण्टा)'
      },
      {
        phase: 'तेस्रो चरण',
        titleNe: 'सेवा सम्बन्धी कार्यप्रणाली र अन्तर्वार्ता',
        subjectsNe: 'प्रशासनिक कानुन, कार्यालय व्यवस्थापन, सेवा समूहगत विषय र अन्तर्वार्ता',
        marks: 130,
        format: 'लिखित परीक्षा (१०० अंक) + कम्प्युटर परीक्षण (१० अंक) + अन्तर्वार्ता (२० अंक)'
      }
    ],
    keyTopicsNe: [
      'बौद्धिक परीक्षण (Verbal, Non-Verbal, Logical Reasoning)',
      'नेपालको संघीय संरचना र अन्तरतह सम्बन्ध',
      'सार्वजनिक खरिद, लेखापरीक्षण र वित्तीय जवाफदेहिता',
      'नेपालको १५औँ/१६औँ आवधिक योजना र दिगो विकास लक्ष्य (SDGs)',
      'समसामयिक राष्ट्रिय तथा अन्तर्राष्ट्रिय घटनाक्रम'
    ],
    totalQuestions: 1850,
    sampleSyllabusUrl: 'https://psc.gov.np'
  },
  {
    id: 'officer',
    code: 'OFFICER',
    titleNe: 'शाखा अधिकृत (सामान्य प्रशासन, परराष्ट्र, राजस्व, लेखा, न्याय)',
    titleEn: 'Section Officer (Gazetted 3rd Class)',
    rankNe: 'राजपत्र अनंकित/अंकित: राजपत्रांकित तृतीय श्रेणी (तह ६/अधिकृत)',
    levelNumber: '6',
    minQualificationNe: 'मान्यता प्राप्त विश्वविद्यालयबाट कुनै पनि विषयमा स्नातक तह (Bachelor Degree) उत्तीर्ण।',
    ageLimitNe: '२१ वर्ष पूरा भई ३५ वर्ष ननाघेको (महिला तथा अपाङ्गता भएका व्यक्तिको हकमा ४० वर्ष)।',
    stages: [
      {
        phase: 'प्रथम चरण',
        titleNe: 'प्रशासनिक अभिरुचि परीक्षण (Administrative Aptitude Test - AAT)',
        subjectsNe: 'सामान्य ज्ञान (GK), बौद्धिक परीक्षण (IQ) र अंग्रेजी भाषा दक्षता (English Comprehension)',
        marks: 100,
        format: '१०० वस्तुगत प्रश्नहरू (GK ५०, IQ ३०, English २० प्रश्न, ९० मिनेट)'
      },
      {
        phase: 'दोस्रो चरण',
        titleNe: 'शासन प्रणाली (Governance Systems)',
        subjectsNe: 'राज्य, सरकार, संविधान, लोकतन्त्र, सार्वजनिक नीति र समावेशीकरण',
        marks: 100,
        format: 'विषयगत विश्लेषणात्मक लिखित परीक्षा (३ घण्टा)'
      },
      {
        phase: 'तेस्रो चरण',
        titleNe: 'समसामयिक विषय (Contemporary Issues)',
        subjectsNe: 'आर्थिक, सामाजिक, वातावरणीय विकास र अन्तर्राष्ट्रिय सम्बन्ध',
        marks: 100,
        format: 'विषयगत विश्लेषणात्मक लिखित परीक्षा (३ घण्टा)'
      },
      {
        phase: 'चौथो चरण',
        titleNe: 'सेवा सम्बन्धी कार्यज्ञान, सामूहिक छलफल र अन्तर्वार्ता',
        subjectsNe: 'सेवा समूहगत लिखित परीक्षा (१०० अंक) + Case Study/GD (१० अंक) + अन्तर्वार्ता (४० अंक)',
        marks: 150,
        format: 'लिखित परीक्षा + प्रयोगात्मक + मौखिक अन्तर्वार्ता'
      }
    ],
    keyTopicsNe: [
      'प्रशासनिक अभिरुचि परीक्षण (AAT) सम्पूर्ण पाठ्यक्रम',
      'शासन प्रणाली, राज्य संरचना, शक्ति पृथकीकरण र नियन्त्रण-सन्तुलन',
      'नेपालको परराष्ट्र नीति, कूटनीति र अन्तर्राष्ट्रिय सन्धि-सम्झौता',
      'जलवायु परिवर्तन, विपद् व्यवस्थापन र हरित अर्थतन्त्र',
      'सार्वजनिक वित्त, प्रत्यक्ष/अप्रत्यक्ष कर प्रणाली र राजस्व प्रशासन'
    ],
    totalQuestions: 2400,
    sampleSyllabusUrl: 'https://psc.gov.np'
  }
];

export const LokSewaScreen: React.FC = () => {
  const { setActiveTab, startQuiz, tText } = useApp();
  const [selectedPostId, setSelectedPostId] = useState<string>('officer');

  const currentPost = PSC_POSTS.find(p => p.id === selectedPostId) || PSC_POSTS[0];

  return (
    <div className="space-y-10 pb-20 animate-fadeIn">
      {/* Top Header & Verification */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <NepalFlagEmblem className="w-4 h-5 drop-shadow-xs" />
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 bg-rose-50 dark:bg-rose-950/60 px-2.5 py-0.5 rounded-md border border-rose-200 dark:border-rose-800">
              Constitutional Body Ecosystem
            </span>
            <OfficialTrustBadge 
              sourceName="नेपालको संविधान धारा २४२ तथा लोक सेवा आयोग ऐन २०७९" 
              verifiedYearBS="२०८१/८२ अद्यावधिक" 
            />
          </div>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            {tText('लोक सेवा आयोग (निजामती सेवा तयारी)', 'Lok Sewa Aayog (Civil Service Preparation)')}
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-3xl leading-relaxed">
            नेपाल निजामती सेवाका खरिदार, नायब सुब्बा र शाखा अधिकृत पदहरूका लागि आधिकारिक पाठ्यक्रम, परीक्षा चरणहरू र तयारी सामग्रीहरू।
          </p>
        </div>

        {/* Official Portal Link */}
        <a
          href="https://psc.gov.np"
          target="_blank"
          rel="noopener noreferrer"
          className="self-start md:self-auto inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-bold text-slate-800 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-800 transition shadow-2xs"
        >
          <span>psc.gov.np आधिकारिक पोर्टल</span>
          <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
        </a>
      </div>

      {/* Post Selector Switcher */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {PSC_POSTS.map(post => {
          const isSelected = post.id === selectedPostId;
          return (
            <button
              key={post.id}
              onClick={() => setSelectedPostId(post.id)}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                isSelected
                  ? 'bg-rose-50/80 dark:bg-rose-950/30 border-rose-500 dark:border-rose-700 shadow-sm'
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <span className={`text-[11px] font-mono font-bold px-2 py-0.5 rounded-md ${
                  isSelected 
                    ? 'bg-rose-600 text-white' 
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                }`}>
                  {post.code}
                </span>
                <span className="text-[11px] font-semibold text-slate-500">
                  {post.totalQuestions} MCQs
                </span>
              </div>
              <div className="font-bold text-slate-900 dark:text-white text-sm">
                {post.titleNe}
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-1">
                {post.rankNe}
              </div>
            </button>
          );
        })}
      </div>

      {/* Selected Post Detailed Overview */}
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-slate-100 dark:border-slate-800">
          <div>
            <span className="text-[11px] font-mono font-bold text-rose-600 uppercase tracking-wider">
              Selected Examination Stream
            </span>
            <h2 className="text-2xl font-black text-slate-900 dark:text-white">
              {currentPost.titleNe}
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              {currentPost.titleEn} • {currentPost.rankNe}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setActiveTab('practice')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#0B2046] hover:bg-[#153468] text-white text-xs font-bold transition shadow-xs cursor-pointer"
            >
              <Award className="w-3.5 h-3.5" />
              <span>वस्तुगत प्रश्न अभ्यास</span>
            </button>
            <button
              onClick={() => setActiveTab('mock-tests')}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-800 dark:text-white text-xs font-bold transition cursor-pointer"
            >
              <Clock className="w-3.5 h-3.5" />
              <span>पूर्ण मोक टेस्ट</span>
            </button>
          </div>
        </div>

        {/* Eligibility Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700/60">
            <div className="text-xs font-bold text-slate-900 dark:text-white mb-1">
              न्यूनतम शैक्षिक योग्यता:
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-300">
              {currentPost.minQualificationNe}
            </div>
          </div>

          <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-slate-700/60">
            <div className="text-xs font-bold text-slate-900 dark:text-white mb-1">
              उमेरको हद:
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-300">
              {currentPost.ageLimitNe}
            </div>
          </div>
        </div>

        {/* Exam Stages Hierarchy */}
        <div className="space-y-3">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Layers className="w-4 h-4 text-rose-600" />
            <span>परीक्षा चरणहरू र पूर्णाङ्क (Examination Stages)</span>
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {currentPost.stages.map((stage, idx) => (
              <div 
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 space-y-2.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-rose-600">{stage.phase}</span>
                    <span className="font-mono font-bold bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded text-[11px]">
                      {stage.marks} पूर्णाङ्क
                    </span>
                  </div>
                  <div className="font-bold text-slate-900 dark:text-white text-sm mt-1">
                    {stage.titleNe}
                  </div>
                  <div className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">
                    {stage.subjectsNe}
                  </div>
                </div>

                <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-100 dark:border-slate-800">
                  {stage.format}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Focus Topics */}
        <div className="space-y-3 pt-2">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>प्रमुख प्राथमिकता प्राप्त विषयवस्तुहरू (High-Yield Focus Areas)</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {currentPost.keyTopicsNe.map((topic, i) => (
              <div key={i} className="flex items-center gap-2 text-xs p-3 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                <span>{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
