import React, { useState } from 'react';
import { 
  Sprout, 
  Target, 
  ChevronRight, 
  ArrowRight,
  Send, 
  Search, 
  Lightbulb, 
  FileText, 
  BarChart3, 
  Sparkles, 
  Trophy, 
  Mountain 
} from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const RightSidebarWidget: React.FC = () => {
  const { user, setActiveTab, setIsAiModalOpen } = useApp();
  const [promptText, setPromptText] = useState('');

  const userName = user?.displayName || user?.name || 'Sushant';

  const handleSendPrompt = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (setIsAiModalOpen) {
      setIsAiModalOpen(true);
    } else {
      setActiveTab('ai-sathi');
    }
  };

  const handleQuickAction = (actionTitle: string) => {
    if (setIsAiModalOpen) {
      setIsAiModalOpen(true);
    } else {
      setActiveTab('ai-sathi');
    }
  };

  return (
    <aside className="w-full lg:w-80 xl:w-88 shrink-0 space-y-4">
      
      {/* =========================================================================
          1. USER PROGRESS CARD (SVG Circular Ring + Breakdown + Daily Target)
          ========================================================================= */}
      <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm space-y-4">
        
        {/* Top Greeting */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
            <Sprout className="w-5 h-5 stroke-[2]" />
          </div>
          <div className="min-w-0">
            <h3 className="text-base font-bold text-slate-900 leading-tight">
              नमस्ते, {userName}!
            </h3>
            <p className="text-xs text-slate-500 font-medium truncate">
              आफ्नो लक्ष्यतर्फ आज एक कदम अगाडि
            </p>
          </div>
        </div>

        {/* Section Title */}
        <div className="pt-1">
          <h4 className="text-xs font-bold text-slate-800 tracking-tight">
            तपाईंको कुल प्रगति
          </h4>
        </div>

        {/* Progress Display: Circular Gauge (Left) + Category Breakdown (Right) */}
        <div className="flex items-center justify-between gap-4">
          
          {/* Circular SVG Ring (68%) */}
          <div className="relative w-24 h-24 shrink-0 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full -rotate-90 transform">
              {/* Background Ring Track */}
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#F1F5F9"
                strokeWidth="9"
                fill="none"
              />
              {/* Animated / Teal Progress Stroke */}
              <circle
                cx="50"
                cy="50"
                r="40"
                stroke="#0D9488"
                strokeWidth="9"
                strokeDasharray="251.2"
                strokeDashoffset={251.2 * (1 - 0.68)}
                strokeLinecap="round"
                fill="none"
                className="transition-all duration-1000 ease-out"
              />
            </svg>
            {/* Center Label */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <span className="text-2xl font-black text-slate-900 tracking-tight">
                68%
              </span>
            </div>
          </div>

          {/* Breakdown Stats */}
          <div className="flex-1 space-y-1.5 text-xs font-semibold text-slate-600">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span>Banking</span>
              </div>
              <span className="font-bold text-slate-800">8/10</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Pre-Test</span>
              </div>
              <span className="font-bold text-slate-800">3/6</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span>Practice</span>
              </div>
              <span className="font-bold text-slate-800">6/10</span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                <span>Mock Test</span>
              </div>
              <span className="font-bold text-slate-800">4/10</span>
            </div>
          </div>
        </div>

        {/* Daily Target Banner */}
        <div 
          onClick={() => setActiveTab('practice')}
          className="p-3 rounded-xl bg-emerald-50/70 border border-emerald-100 flex items-center justify-between gap-2 cursor-pointer hover:bg-emerald-50 transition-colors group"
        >
          <div className="flex items-center gap-2 min-w-0">
            <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <Target className="w-3.5 h-3.5 stroke-[2.2]" />
            </div>
            <div className="min-w-0">
              <span className="text-[11px] font-bold text-slate-800 block truncate">
                आजको लक्ष्य
              </span>
              <span className="text-[10px] text-slate-600 font-medium block truncate">
                कमजोर विषयहरूमा २ वटा अभ्यास गर्नुहोस्
              </span>
            </div>
          </div>
          <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-700 group-hover:translate-x-0.5 transition-all shrink-0" />
        </div>

      </div>

      {/* =========================================================================
          2. AI SATHI BOT CARD (Avatar + Prompt Input + 4 Action Pills)
          ========================================================================= */}
      <div className="relative bg-gradient-to-b from-[#F0F7FF] via-white to-white rounded-2xl p-5 border border-blue-100/80 shadow-sm overflow-hidden text-center space-y-4">
        
        {/* Soft Ambient Radial Blue Glow behind avatar */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-40 h-40 bg-blue-400/15 rounded-full blur-2xl pointer-events-none" />

        {/* 3D Robot Avatar Image */}
        <div className="relative mx-auto w-24 h-24 rounded-full overflow-hidden border-2 border-white shadow-lg bg-gradient-to-tr from-blue-600 via-indigo-600 to-sky-400 p-1 flex items-center justify-center">
          <img
            src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
            alt="AI Sathi Robot Avatar"
            className="w-full h-full object-contain rounded-full bg-blue-50"
            onError={(e) => {
              const target = e.currentTarget;
              target.onerror = null;
              target.src = "https://api.dicebear.com/7.x/bottts/svg?seed=AISathi";
            }}
          />
        </div>

        {/* Title & Subtitle */}
        <div>
          <h3 className="text-lg font-black text-slate-900 tracking-tight">
            AI Sathi
          </h3>
          <p className="text-xs text-slate-500 font-medium mt-0.5">
            कुनै पनि प्रश्न सोध्नुहोस्... म तपाईंसँगै छु।
          </p>
        </div>

        {/* Prompt Text Input Field */}
        <form onSubmit={handleSendPrompt} className="relative">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 pointer-events-none" />
            <input
              type="text"
              value={promptText}
              onChange={(e) => setPromptText(e.target.value)}
              placeholder="तपाईं के जान्न चाहनुहुन्छ?"
              className="w-full pl-9 pr-10 py-2.5 rounded-full bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 placeholder-slate-400 focus:bg-white focus:outline-none focus:border-[#0052FF] focus:ring-1 focus:ring-[#0052FF] shadow-2xs transition-all"
            />
            <button
              type="submit"
              className="w-7 h-7 rounded-full bg-[#0066FF] text-white flex items-center justify-center absolute right-1.5 hover:bg-[#0052FF] transition-transform active:scale-90 cursor-pointer shadow-xs"
              title="Send Prompt"
            >
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </form>

        {/* 4 Quick Action Pills (2x2 Grid) */}
        <div className="grid grid-cols-2 gap-2 pt-1 text-left">
          <button
            type="button"
            onClick={() => handleQuickAction('Explain Topic')}
            className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 hover:border-blue-200 hover:bg-blue-50/40 text-slate-700 text-xs font-bold transition-all shadow-2xs cursor-pointer group"
          >
            <Lightbulb className="w-4 h-4 text-emerald-500 group-hover:scale-110 transition-transform shrink-0" />
            <span className="truncate">Explain Topic</span>
          </button>

          <button
            type="button"
            onClick={() => handleQuickAction('Make MCQs')}
            className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 hover:border-blue-200 hover:bg-blue-50/40 text-slate-700 text-xs font-bold transition-all shadow-2xs cursor-pointer group"
          >
            <FileText className="w-4 h-4 text-blue-500 group-hover:scale-110 transition-transform shrink-0" />
            <span className="truncate">Make MCQs</span>
          </button>

          <button
            type="button"
            onClick={() => handleQuickAction('Create Graph')}
            className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 hover:border-blue-200 hover:bg-blue-50/40 text-slate-700 text-xs font-bold transition-all shadow-2xs cursor-pointer group"
          >
            <BarChart3 className="w-4 h-4 text-rose-500 group-hover:scale-110 transition-transform shrink-0" />
            <span className="truncate">Create Graph</span>
          </button>

          <button
            type="button"
            onClick={() => handleQuickAction('Deep Research')}
            className="flex items-center gap-2 p-2.5 rounded-xl bg-white border border-slate-200/80 hover:border-blue-200 hover:bg-blue-50/40 text-slate-700 text-xs font-bold transition-all shadow-2xs cursor-pointer group"
          >
            <Sparkles className="w-4 h-4 text-purple-500 group-hover:scale-110 transition-transform shrink-0" />
            <span className="truncate">Deep Research</span>
          </button>
        </div>

      </div>

      {/* =========================================================================
          3. BOTTOM MOTIVATIONAL CARD (Himalayan Mountains Art + Commitment)
          ========================================================================= */}
      <div className="relative rounded-2xl p-5 bg-gradient-to-br from-white to-blue-50/60 border border-slate-100 shadow-sm overflow-hidden">
        {/* Mountain illustration background */}
        <div className="absolute right-0 bottom-0 pointer-events-none opacity-20 select-none">
          <svg width="180" height="80" viewBox="0 0 180 80" fill="none">
            <path d="M0 80 L50 30 L90 60 L140 20 L180 50 L180 80 Z" fill="#0052FF" />
          </svg>
        </div>

        <div className="relative z-10 space-y-1">
          <div className="flex items-center gap-2">
            <Trophy className="w-4 h-4 text-amber-500" />
            <h4 className="text-xs font-bold text-slate-900">
              तपाईंको लक्ष्य, हाम्रो प्रतिबद्धता
            </h4>
          </div>
          <p className="text-[11px] text-slate-500 font-medium pl-6">
            आजको तयारी भोलिको सफलता
          </p>
        </div>
      </div>

      {/* 4. PROMOTIONAL BLUE CARD */}
      <div 
        onClick={() => setActiveTab('ai-sathi')}
        className="rounded-2xl p-4 bg-gradient-to-r from-blue-700 to-indigo-800 text-white shadow-sm flex items-center justify-between gap-3 cursor-pointer hover:opacity-95 transition-opacity"
      >
        <div className="space-y-0.5">
          <h5 className="text-xs font-bold">
            AI सँग लक्ष्य सम्भव बनाउनुहोस्,
          </h5>
          <p className="text-[10px] text-blue-200">
            आजको तयारी भोलिको सफलता
          </p>
        </div>
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
          <Sparkles className="w-4 h-4 text-amber-300" />
        </div>
      </div>

    </aside>
  );
};
