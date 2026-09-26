import React, { useState } from 'react';
import { 
  Award, 
  Target, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  Layers, 
  FileText, 
  AlertCircle, 
  ShieldCheck, 
  ChevronRight,
  BookOpen,
  HelpCircle,
  Building2
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { PRE_TEST_LEVEL_CONFIGS, PRE_TEST_PATHWAY_STEPS, PreTestLevelConfig } from '../../data/preTestData';
import { OfficialTrustBadge } from '../common/OfficialTrustBadge';
import { NepalFlagEmblem } from '../common/NepalFlagEmblem';

export const PreTestScreen: React.FC = () => {
  const { setActiveTab, selectQuizSubCategory, tText } = useApp();
  const [activeLevel, setActiveLevel] = useState<'level-4' | 'level-5'>('level-4');

  const config: PreTestLevelConfig = PRE_TEST_LEVEL_CONFIGS[activeLevel];

  const handleStart50Sets = () => {
    selectQuizSubCategory('sangathit');
    setActiveTab('quiz');
  };

  return (
    <div className="space-y-12 pb-20 animate-fadeIn max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* =========================================================================
          1. TOP BREADCRUMB & PRODUCT HEADER
          ========================================================================= */}
      <div className="border-b border-slate-200/80 pb-6 pt-2">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <NepalFlagEmblem className="w-4 h-5 drop-shadow-2xs shrink-0" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-700 bg-rose-50 px-2.5 py-0.5 rounded border border-rose-200">
                GATEWAY ENTRANCE EXAMINATION
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <OfficialTrustBadge 
                sourceName="लोक सेवा आयोग संगठित संस्था पूर्वयोग्यता कार्यविधि" 
                verifiedYearBS="२०८१/८२ अद्यावधिक" 
              />
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
              PRE-TEST <span className="text-rose-700 font-bold">| संगठित संस्थाको प्रवेशद्वार</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-3xl leading-relaxed">
              सार्वजनिक संस्थान तथा बैंकहरूको खुला पदपूर्तिमा सहभागी हुन अनिवार्य गरिएको केन्द्रीय प्रारम्भिक योग्यता परीक्षण (Common Pre-Test Gateway)।
            </p>
          </div>

          {/* Level Switcher */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-100 border border-slate-200 self-start md:self-auto shrink-0">
            <button
              type="button"
              onClick={() => setActiveLevel('level-4')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition cursor-pointer ${
                activeLevel === 'level-4'
                  ? 'bg-[#0B2046] text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Level 4 (सहायक तह)
            </button>
            <button
              type="button"
              onClick={() => setActiveLevel('level-5')}
              className={`px-4 py-2 rounded-lg text-xs font-bold transition cursor-pointer ${
                activeLevel === 'level-5'
                  ? 'bg-[#0B2046] text-white shadow-2xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Level 5 (वरिष्ठ सहायक)
            </button>
          </div>
        </div>
      </div>

      {/* =========================================================================
          2. LIGHT EDITORIAL HERO OVERVIEW BANNER (No Heavy Dark Slate Container)
          ========================================================================= */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white border-2 border-slate-200/90 shadow-xs relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#C8102E]" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-2">
          
          <div className="lg:col-span-8 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-mono font-bold text-rose-700 uppercase tracking-wider">
                {config.titleEn}
              </span>
              <span aria-hidden="true" className="text-slate-300">·</span>
              <span className="text-xs text-slate-500 font-mono">वस्तुगत बहुवैकल्पिक परीक्षा प्रणाली</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              {config.titleNe}
            </h2>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl">
              {config.taglineNe}। पूर्वयोग्यता परीक्षा उत्तीर्ण भएपछि प्राप्त प्रमाणपत्रले विभिन्न संगठित संस्थाहरूको खुला विज्ञापनमा सिधै मुख्य लिखित परीक्षामा सहभागी हुन योग्य बनाउँछ।
            </p>

            {/* Metrics Ribbon (Unboxed Tabular Figures) */}
            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs font-medium border-t border-slate-100">
              <div>
                <span className="text-slate-400 block text-[10px] font-mono">पूर्णाङ्क (FULL MARKS)</span>
                <strong className="text-slate-900 text-sm tabular-nums">{config.fullMarks} अङ्क (५० MCQs)</strong>
              </div>
              <span aria-hidden="true" className="text-slate-200">|</span>
              <div>
                <span className="text-slate-400 block text-[10px] font-mono">उत्तीर्णाङ्क (PASS MARKS)</span>
                <strong className="text-emerald-700 text-sm tabular-nums">{config.passMarks} ({config.passPercentage}%)</strong>
              </div>
              <span aria-hidden="true" className="text-slate-200">|</span>
              <div>
                <span className="text-slate-400 block text-[10px] font-mono">समयसीमा (TIME LIMIT)</span>
                <strong className="text-blue-700 text-sm tabular-nums">{config.timeMinutes} मिनेट</strong>
              </div>
              <span aria-hidden="true" className="text-slate-200">|</span>
              <div>
                <span className="text-slate-400 block text-[10px] font-mono">ऋणात्मक अङ्क (NEGATIVE MARKING)</span>
                <strong className="text-rose-700 text-sm tabular-nums">-{config.negativeMarkingPercent}% (०.४ अङ्क कट्टी)</strong>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 flex flex-col gap-3">
            <button
              type="button"
              onClick={handleStart50Sets}
              className="w-full py-3.5 px-6 rounded-lg bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs sm:text-sm transition shadow-xs active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Award className="w-4 h-4" />
              <span>५० सेट अभ्यास सुरु गर्नुहोस्</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              type="button"
              onClick={() => setActiveTab('mock-tests')}
              className="w-full py-3 px-6 rounded-lg bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs transition border border-slate-200 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Clock className="w-4 h-4 text-blue-700" />
              <span>४५ मिनेट लाइभ मोक टेस्ट</span>
            </button>
          </div>

        </div>
      </div>

      {/* =========================================================================
          3. REFINED HORIZONTAL JOURNEY TIMELINE
          PRE-TEST -> PASS -> CERTIFICATE -> VALIDITY -> SANGATHIT SANSTHA -> EXAM
          ========================================================================= */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div>
            <h3 className="text-base font-bold text-slate-900">
              प्रवेशद्वार कार्यप्रणाली मार्गचित्र (Pre-Test Gateway Journey)
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              प्रारम्भिक परीक्षादेखि अन्तिम पदपूर्तिसम्मको ६ चरणबद्ध कानूनी प्रक्रिया
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-rose-700 bg-rose-50 px-2 py-0.5 rounded border border-rose-200">
            ६ चरणबद्ध प्रक्रिया
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 pt-1 text-center">
          
          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] font-mono font-bold text-rose-700 block">STEP 01</span>
            <p className="text-xs font-black text-slate-900 mt-1">PRE-TEST</p>
            <p className="text-[10px] text-slate-500 mt-0.5">१०० पूर्णाङ्क (५० MCQs)</p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] font-mono font-bold text-emerald-700 block">STEP 02</span>
            <p className="text-xs font-black text-slate-900 mt-1">PASS</p>
            <p className="text-[10px] text-slate-500 mt-0.5">४०% न्यूनतम उत्तीर्णाङ्क</p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] font-mono font-bold text-blue-700 block">STEP 03</span>
            <p className="text-xs font-black text-slate-900 mt-1">CERTIFICATE</p>
            <p className="text-[10px] text-slate-500 mt-0.5">उत्तीर्ण प्रमाणपत्र</p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] font-mono font-bold text-amber-700 block">STEP 04</span>
            <p className="text-xs font-black text-slate-900 mt-1">VALIDITY</p>
            <p className="text-[10px] text-slate-500 mt-0.5">निश्चित समयावधि मान्यता</p>
          </div>

          <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
            <span className="text-[10px] font-mono font-bold text-indigo-700 block">STEP 05</span>
            <p className="text-xs font-black text-slate-900 mt-1">SANSTHA</p>
            <p className="text-[10px] text-slate-500 mt-0.5">सम्बन्धित संस्था छनोट</p>
          </div>

          <div className="p-3.5 rounded-xl bg-[#0B2046] text-white border border-[#0B2046]">
            <span className="text-[10px] font-mono font-bold text-amber-300 block">FINAL STEP</span>
            <p className="text-xs font-black text-white mt-1">MAIN EXAM</p>
            <p className="text-[10px] text-slate-300 mt-0.5">संस्थाको मुख्य लिखित</p>
          </div>

        </div>

        {/* Regulatory Alert Banner */}
        <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200 flex items-start gap-3 text-xs text-amber-900 mt-4">
          <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <p className="font-bold text-slate-900">
              महत्वपूर्ण अवधारणागत नियम (Pre-Test Regulatory Notice):
            </p>
            <p className="text-amber-800 leading-relaxed font-normal">
              Pre-Test उत्तीर्ण हुनुले मात्र सबै संस्थामा स्वतः पदपूर्ति ग्यारेन्टी गर्दैन। Pre-Test पास गरी प्रमाणपत्र प्राप्त गरेपछि तपाईंले सम्बन्धित संस्था (NRB, RBB, ADBL, NEA, NTC आदि) को पद, उमेर, शैक्षिक योग्यता र सेवा समूह अनुसार प्रकाशित आधिकारिक विज्ञापनमा आवेदन दिनुपर्नेछ। प्रत्येक संस्थाको आफ्नो विशिष्ट मुख्य लिखित परीक्षा र अन्तर्वार्ता हुनेछ।
            </p>
          </div>
        </div>
      </div>

      {/* =========================================================================
          4. PREMIUM SPLIT LAYOUT: LEVEL 4 & LEVEL 5 (6 Core Pillars)
          ========================================================================= */}
      <div className="space-y-4">
        <div className="border-b border-slate-200/80 pb-2">
          <h3 className="text-xl sm:text-2xl font-black text-slate-900">
            तहगत पूर्वयोग्यता संरचना तथा तयारी (Level 4 & Level 5 Pathways)
          </h3>
          <p className="text-xs text-slate-500 mt-0.5">
            दुवै तहका पाठ्यक्रम, विगतका प्रश्नहरू, अभ्यास तथा नतिजा ट्र्याकिङ
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Level 4 Split Column */}
          <div className={`p-6 rounded-2xl bg-white border-2 transition-all shadow-2xs flex flex-col justify-between ${activeLevel === 'level-4' ? 'border-rose-500 ring-1 ring-rose-200' : 'border-slate-200/90'}`}>
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div>
                  <span className="text-xs font-mono font-bold text-rose-700 uppercase">PATHWAY 01</span>
                  <h4 className="text-lg font-black text-slate-900 mt-0.5">
                    LEVEL 4 (तह ४ - सहायक स्तर)
                  </h4>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-slate-800">१०० अङ्क</span>
                  <span className="text-[10px] text-slate-500 font-mono block">५० MCQs · ४५ मिनेट</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                प्रशासन, लेखा, नगद र सहायक पदहरूका लागि साझा प्रिटेस्ट। सामान्य ज्ञान, समसामयिक, कार्यालय सञ्चालन तथा आधारभूत ऐन-कानुन।
              </p>

              {/* 6 Core Pillars */}
              <div className="grid grid-cols-2 gap-2 text-xs font-medium">
                <button
                  type="button"
                  onClick={() => setActiveLevel('level-4')}
                  className="p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200/70 flex items-center gap-2 text-left transition cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span className="truncate">Syllabus (पाठ्यक्रम)</span>
                </button>

                <button
                  type="button"
                  onClick={handleStart50Sets}
                  className="p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200/70 flex items-center gap-2 text-left transition cursor-pointer"
                >
                  <HelpCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="truncate">Practice (५० MCQs)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('practice')}
                  className="p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200/70 flex items-center gap-2 text-left transition cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  <span className="truncate">Previous Questions</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('mock-tests')}
                  className="p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200/70 flex items-center gap-2 text-left transition cursor-pointer"
                >
                  <Award className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                  <span className="truncate">Mock Test (-२०%)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('revision')}
                  className="p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200/70 flex items-center gap-2 text-left transition cursor-pointer"
                >
                  <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span className="truncate">Revision (रिभिजन)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('dashboard')}
                  className="p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200/70 flex items-center gap-2 text-left transition cursor-pointer"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span className="truncate">Result / Status</span>
                </button>
              </div>
            </div>

            <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between">
              <button
                type="button"
                onClick={() => {
                  setActiveLevel('level-4');
                  handleStart50Sets();
                }}
                className="text-xs font-bold text-rose-700 hover:text-rose-800 flex items-center gap-1.5 cursor-pointer"
              >
                <span>तह ४ पूर्वयोग्यता अभ्यास सुरु गर्नुहोस्</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Level 5 Split Column */}
          <div className={`p-6 rounded-2xl bg-white border-2 transition-all shadow-2xs flex flex-col justify-between ${activeLevel === 'level-5' ? 'border-rose-500 ring-1 ring-rose-200' : 'border-slate-200/90'}`}>
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div>
                  <span className="text-xs font-mono font-bold text-rose-700 uppercase">PATHWAY 02</span>
                  <h4 className="text-lg font-black text-slate-900 mt-0.5">
                    LEVEL 5 (तह ५ - वरिष्ठ सहायक)
                  </h4>
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-slate-800">१०० अङ्क</span>
                  <span className="text-[10px] text-slate-500 font-mono block">५० MCQs · ४५ मिनेट</span>
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                वरिष्ठ सहायक, सुपरभाइजर तथा अधिकृत प्रारम्भिक पूर्वयोग्यता। व्यवस्थापन, लेखा, बैंकिङ्ग नीति, संस्थागत ऐन तथा विश्लेषणात्मक क्षमता।
              </p>

              {/* 6 Core Pillars */}
              <div className="grid grid-cols-2 gap-2 text-xs font-medium">
                <button
                  type="button"
                  onClick={() => setActiveLevel('level-5')}
                  className="p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200/70 flex items-center gap-2 text-left transition cursor-pointer"
                >
                  <BookOpen className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span className="truncate">Syllabus (पाठ्यक्रम)</span>
                </button>

                <button
                  type="button"
                  onClick={handleStart50Sets}
                  className="p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200/70 flex items-center gap-2 text-left transition cursor-pointer"
                >
                  <HelpCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                  <span className="truncate">Practice (५० MCQs)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('practice')}
                  className="p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200/70 flex items-center gap-2 text-left transition cursor-pointer"
                >
                  <FileText className="w-3.5 h-3.5 text-indigo-600 shrink-0" />
                  <span className="truncate">Previous Questions</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('mock-tests')}
                  className="p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200/70 flex items-center gap-2 text-left transition cursor-pointer"
                >
                  <Award className="w-3.5 h-3.5 text-rose-600 shrink-0" />
                  <span className="truncate">Mock Test (-२०%)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('revision')}
                  className="p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200/70 flex items-center gap-2 text-left transition cursor-pointer"
                >
                  <Clock className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                  <span className="truncate">Revision (रिभिजन)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab('dashboard')}
                  className="p-2.5 rounded-lg bg-slate-50 hover:bg-slate-100 border border-slate-200/70 flex items-center gap-2 text-left transition cursor-pointer"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                  <span className="truncate">Result / Status</span>
                </button>
              </div>
            </div>

            <div className="pt-4 mt-5 border-t border-slate-100 flex items-center justify-between">
              <button
                type="button"
                onClick={() => {
                  setActiveLevel('level-5');
                  handleStart50Sets();
                }}
                className="text-xs font-bold text-rose-700 hover:text-rose-800 flex items-center gap-1.5 cursor-pointer"
              >
                <span>तह ५ पूर्वयोग्यता अभ्यास सुरु गर्नुहोस्</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* =========================================================================
          5. SYLLABUS MODULES BREAKDOWN
          ========================================================================= */}
      <div className="space-y-4">
        <div className="flex items-center justify-between border-b border-slate-200/80 pb-2">
          <div>
            <h3 className="text-xl font-bold text-slate-900">
              {config.levelId === 'level-4' ? 'तह ४' : 'तह ५'} पूर्वयोग्यता पाठ्यक्रम मोड्युलहरू (Subject Modules)
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              कुल ५० प्रश्नहरूका लागि निर्धारित ८ विषयगत क्षेत्र र अङ्कभार विभाजन
            </p>
          </div>
          <span className="text-xs font-mono font-bold text-[#0B2046] bg-slate-100 px-2.5 py-1 rounded border border-slate-200">
            {config.modules.length} Modules
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {config.modules.map((mod) => (
            <div
              key={mod.id}
              className="p-5 rounded-xl bg-white border border-slate-200/90 flex flex-col justify-between space-y-4 hover:border-slate-400 transition shadow-2xs"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="w-5 h-5 rounded bg-slate-100 text-slate-700 text-[10px] font-mono font-bold flex items-center justify-center">
                    {mod.moduleNumber}
                  </span>
                  <span className="font-bold text-rose-700 font-mono text-[11px]">
                    {mod.totalQuestions} Qs ({mod.totalMarks} Marks)
                  </span>
                </div>

                <h4 className="text-sm font-bold text-slate-900 leading-tight">
                  {mod.titleNe}
                </h4>

                <ul className="text-[11px] text-slate-500 space-y-1 list-disc list-inside">
                  {mod.syllabusScopeNe.map((scope, sIdx) => (
                    <li key={sIdx} className="line-clamp-2">{scope}</li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() => {
                  selectQuizSubCategory('sangathit');
                  setActiveTab('quiz');
                }}
                className="w-full py-2 text-[11px] font-bold text-[#0B2046] bg-slate-50 hover:bg-slate-100 rounded-lg transition flex items-center justify-center gap-1 cursor-pointer border border-slate-200/70"
              >
                <span>यस खण्डको अभ्यास</span>
                <ChevronRight className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* =========================================================================
          6. APPLICABLE INSTITUTIONS DIRECTORY STRIP
          ========================================================================= */}
      <div className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-2xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div>
            <h4 className="text-sm font-bold text-slate-900">
              Pre-Test उत्तीर्ण गरेपछि आवेदन दिन मिल्ने संगठित संस्थाहरू (Applicable Public Institutions):
            </h4>
            <p className="text-xs text-slate-500 mt-0.5">
              प्रिटेस्ट प्रमाणपत्र प्राप्त उम्मेदवारहरूले यी संस्थाहरूको खुला पदपूर्तिमा सिधै लिखित परीक्षा दिन पाउनेछन्
            </p>
          </div>
          <button
            type="button"
            onClick={() => setActiveTab('sangathit-sanstha')}
            className="text-xs font-bold text-[#0B2046] hover:text-blue-700 flex items-center gap-1 cursor-pointer shrink-0"
          >
            <span>सबै संगठित संस्थाहरू हेर्नुहोस्</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {config.applicableInstitutions.map((inst, idx) => (
            <span
              key={idx}
              className="px-3 py-1.5 rounded-lg bg-slate-50 text-xs font-semibold text-slate-800 border border-slate-200"
            >
              {inst}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
};

export default PreTestScreen;
