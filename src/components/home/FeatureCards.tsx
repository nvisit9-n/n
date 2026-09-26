import React from 'react';
import { Landmark, Target, ArrowRight, ChevronRight, Calendar } from 'lucide-react';
import { useApp } from '../../context/AppContext';

export const FeatureCards: React.FC = () => {
  const { setActiveTab } = useApp();

  const bankingTags = ['NRB', 'RBB', 'ADBL', 'NBL', 'EPF', 'CIT'];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
      
      {/* 1. BANKING CARD */}
      <div 
        onClick={() => setActiveTab('banking')}
        className="group relative bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer overflow-hidden flex flex-col justify-between"
      >
        {/* Mountain illustration background */}
        <div className="absolute right-0 bottom-0 pointer-events-none opacity-30 select-none">
          <svg width="240" height="120" viewBox="0 0 240 120" fill="none">
            <path d="M20 120 L90 40 L140 85 L190 30 L240 75 L240 120 Z" fill="#93C5FD" fillOpacity="0.45" />
            <path d="M100 120 L150 60 L185 90 L220 50 L240 80 L240 120 Z" fill="#3B82F6" fillOpacity="0.25" />
          </svg>
        </div>

        <div className="relative z-10">
          <div className="flex items-start justify-between">
            {/* Blue Bank Icon */}
            <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
              <Landmark className="w-6 h-6 stroke-[2]" />
            </div>

            {/* Blue Circular Arrow Button */}
            <div className="w-8 h-8 rounded-full bg-[#0066FF] text-white flex items-center justify-center shadow-xs group-hover:bg-[#0052FF] group-hover:translate-x-0.5 transition-all">
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-black text-slate-900 tracking-tight group-hover:text-[#0066FF] transition-colors">
              Banking
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
              बैंकिङ्ग तथा वित्तीय संस्थाहरूको तयारी
            </p>
          </div>
        </div>

        {/* Sub-tags Pill Row */}
        <div className="relative z-10 flex items-center gap-1.5 flex-wrap mt-5">
          {bankingTags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-[11px] font-bold text-slate-700 bg-slate-50 border border-slate-200/80 rounded-lg group-hover:border-blue-200 group-hover:bg-blue-50/40 transition-colors"
            >
              {tag}
            </span>
          ))}
          <span className="w-6 h-6 rounded-lg bg-slate-100 text-slate-500 text-xs font-bold flex items-center justify-center border border-slate-200/80">
            +
          </span>
        </div>
      </div>

      {/* 2. PRE-TEST CARD */}
      <div 
        onClick={() => setActiveTab('pre-test')}
        className="group relative bg-white rounded-2xl p-5 sm:p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer overflow-hidden flex flex-col justify-between"
      >
        {/* Subtle Background Vector Accent */}
        <div className="absolute right-0 bottom-0 pointer-events-none opacity-15 select-none">
          <svg width="200" height="100" viewBox="0 0 200 100" fill="none">
            <circle cx="160" cy="80" r="70" stroke="#F97316" strokeWidth="20" />
          </svg>
        </div>

        <div className="relative z-10">
          <div className="flex items-start justify-between">
            {/* Orange/Red Bullseye Target Icon */}
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-rose-500 to-orange-500 text-white flex items-center justify-center shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform">
              <Target className="w-6 h-6 stroke-[2.2]" />
            </div>

            {/* Circular Chevron Arrow Button */}
            <div className="w-8 h-8 rounded-full bg-blue-50 text-[#0052FF] flex items-center justify-center border border-blue-200/60 group-hover:bg-[#0052FF] group-hover:text-white group-hover:translate-x-0.5 transition-all">
              <ChevronRight className="w-4 h-4 stroke-[2.5]" />
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-xl font-black text-slate-900 tracking-tight group-hover:text-[#0052FF] transition-colors">
              Pre-Test
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 font-medium mt-0.5">
              संगठित संस्थाको प्रवेशद्वार
            </p>
          </div>
        </div>

        {/* Level Badges Row */}
        <div className="relative z-10 flex items-center gap-2.5 mt-5">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-orange-50/70 border border-orange-200 text-orange-800 text-xs font-bold">
            <Calendar className="w-3.5 h-3.5 text-orange-600" />
            <span>Level 4</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-blue-50/70 border border-blue-200 text-blue-800 text-xs font-bold">
            <Calendar className="w-3.5 h-3.5 text-blue-600" />
            <span>Level 5</span>
          </div>
        </div>
      </div>

    </div>
  );
};
