import React, { useState } from 'react';
import { Bot, ArrowRight, Sparkles } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { NepalFlagEmblem } from '../common/NepalFlagEmblem';

export const HeroBanner: React.FC = () => {
  const { setActiveTab, setIsAiModalOpen } = useApp();
  const [flagImgError, setFlagImgError] = useState(false);

  return (
    <div className="relative w-full rounded-2xl overflow-hidden shadow-sm border border-slate-200/60 min-h-[380px] bg-[url('https://images.unsplash.com/photo-1544735716-392fe2489ffa?q=80&w=2000')] bg-cover bg-[center_top] text-white flex items-center">
      
      {/* Soft transparent gradient strictly on the left side for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/40 to-transparent pointer-events-none" />

      {/* Callout Badge: Curved white capsule badge "सपना अब सम्भव छ..." with blue text, placed top-right over ridge with light -rotate-6 angle */}
      <div className="hidden sm:flex absolute top-8 sm:top-10 right-28 sm:right-32 md:right-36 lg:right-40 bg-white/95 text-[#0066FF] font-bold px-4 py-1.5 sm:px-5 sm:py-2 rounded-full shadow-lg border border-blue-100 transform -rotate-6 items-center gap-1.5 z-20 pointer-events-none select-none">
        <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-500 fill-amber-400" />
        <span className="text-xs sm:text-sm font-extrabold" style={{ fontFamily: "'Mukta', sans-serif" }}>सपना अब सम्भव छ...</span>
      </div>

      {/* Live Animated Nepal Flag: Realistic waving Nepal flag on top right over mountain peak */}
      <div className="absolute top-8 right-8 sm:right-10 z-20 animate-wave filter drop-shadow-[0_10px_15px_rgba(0,0,0,0.4)] pointer-events-none select-none flex items-start">
        {/* Flagpole */}
        <div className="w-1.5 h-24 sm:h-28 bg-gradient-to-b from-slate-100 via-slate-300 to-slate-700 rounded-full shadow-md shrink-0" />
        
        {/* Realistic waving Nepal flag */}
        {!flagImgError ? (
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg"
            alt="National Flag of Nepal"
            className="h-20 sm:h-24 w-auto object-contain -ml-0.5 origin-left"
            onError={() => setFlagImgError(true)}
          />
        ) : (
          <div className="-ml-0.5 origin-left">
            <NepalFlagEmblem className="h-20 sm:h-24 w-auto" />
          </div>
        )}
      </div>

      {/* Banner Content Container */}
      <div className="relative z-10 px-5 sm:px-8 md:px-10 py-8 sm:py-10 max-w-2xl space-y-3.5 sm:space-y-4">
        
        {/* Top Eyebrow Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/20 text-white text-[11px] sm:text-xs font-semibold shadow-xs">
          <span className="text-amber-400">🏛️</span>
          <span>नेपालको No.1 Competitive Exam Platform</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-black tracking-tight leading-[1.15] text-white text-balance drop-shadow-md">
          तपाईंको सफलताको साथी – <br />
          <span className="text-white">बैंकिङ्ग तयारी नेपाल</span>
        </h1>

        {/* Subtitle Tags Line */}
        <p className="text-xs sm:text-sm md:text-[15px] font-medium text-slate-200/95 tracking-wide drop-shadow-xs">
          Banking <span className="text-slate-400">|</span> Pre-Test <span className="text-slate-400">|</span> Sangathit Sanstha <span className="text-slate-400">|</span> Lok Sewa <span className="text-slate-400">|</span> Public Enterprises and More
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          {/* Primary CTA Button (Electric Blue #0066FF) */}
          <button
            type="button"
            onClick={() => setActiveTab('banking')}
            className="flex items-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl bg-[#0066FF] hover:bg-[#0052FF] active:scale-95 text-white text-xs sm:text-sm font-bold shadow-lg shadow-blue-600/40 transition-all cursor-pointer group"
          >
            <span>बैंकिङ्ग तयारी सुरू गर्नुहोस्</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Secondary AI Sathi Button (Frosted Glass) */}
          <button
            type="button"
            onClick={() => {
              if (setIsAiModalOpen) setIsAiModalOpen(true);
              else setActiveTab('ai-sathi');
            }}
            className="flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-xl bg-white/95 hover:bg-white text-slate-900 active:scale-95 text-xs sm:text-sm font-bold backdrop-blur-md shadow-md transition-all cursor-pointer group border border-white/50"
          >
            <Bot className="w-4 h-4 text-[#0066FF] transition-transform group-hover:scale-110" />
            <span>AI Sathi सँग सोध्नुहोस्</span>
          </button>
        </div>

      </div>

    </div>
  );
};
