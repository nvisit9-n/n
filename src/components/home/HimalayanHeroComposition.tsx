import React from 'react';
import { Award, Landmark, ShieldCheck } from 'lucide-react';

export const HimalayanHeroComposition: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <div className={`relative w-full aspect-[4/3] sm:aspect-[16/11] lg:aspect-auto lg:h-[460px] flex items-center justify-center select-none ${className}`}>
      
      {/* Background Mountain & Data Network SVG — Seamlessly Blends with Page, No Bordered Outer Container */}
      <svg 
        viewBox="0 0 620 440" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="w-full h-full pointer-events-none drop-shadow-xs"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          {/* Subtle Himalayan Gradients */}
          <linearGradient id="himalaya-gradient-primary" x1="310" y1="90" x2="310" y2="440" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0B2046" stopOpacity="0.10" />
            <stop offset="50%" stopColor="#1E40AF" stopOpacity="0.04" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="ridge-gradient-secondary" x1="310" y1="180" x2="310" y2="440" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0369A1" stopOpacity="0.07" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="nepal-accent-gradient" x1="480" y1="80" x2="480" y2="240" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#C8102E" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Ambient Topographic Contour Lines */}
        <g stroke="#94A3B8" strokeWidth="0.8" opacity="0.4">
          <path d="M-20 390 C 120 370, 220 420, 360 395 C 480 375, 560 410, 640 385" strokeDasharray="3 3" />
          <path d="M-20 320 C 100 280, 240 340, 360 300 C 460 270, 540 310, 640 280" stroke="#CBD5E1" strokeWidth="0.9" />
          <path d="M-20 250 C 130 210, 250 260, 380 220 C 490 190, 550 230, 640 205" strokeDasharray="4 4" />
          <path d="M-20 180 C 140 140, 270 190, 410 150 C 500 120, 570 150, 640 130" stroke="#E2E8F0" strokeWidth="0.9" />
          <path d="M-20 120 C 160 80, 290 130, 430 90 C 520 70, 580 100, 640 80" strokeDasharray="2 3" stroke="#CBD5E1" />
        </g>

        {/* Back Himalayan Ridge (Everest Massif) */}
        <path 
          d="M 10 390 L 120 250 L 190 295 L 300 140 L 370 210 L 460 85 L 540 190 L 610 130 L 630 440 L 10 440 Z" 
          fill="url(#himalaya-gradient-primary)" 
          stroke="#0B2046" 
          strokeWidth="1.2" 
          strokeOpacity="0.25"
        />

        {/* Front Ridge Line (Machapuchare / Annapurna Silhouette) */}
        <path 
          d="M -10 410 L 80 320 L 170 350 L 270 240 L 360 290 L 470 185 L 560 260 L 630 200 L 630 440 L -10 440 Z" 
          fill="url(#ridge-gradient-secondary)" 
          stroke="#1E40AF" 
          strokeWidth="1" 
          strokeOpacity="0.20"
        />

        {/* Nepal Crimson Accent Wash at Apex Peak */}
        <path 
          d="M 420 200 L 460 85 L 510 195 Z" 
          fill="url(#nepal-accent-gradient)" 
          stroke="#C8102E" 
          strokeWidth="0.8" 
          strokeOpacity="0.35"
        />

        {/* Geometric Data Constellation Lines */}
        <g stroke="#2563EB" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.35">
          <line x1="300" y1="140" x2="140" y2="120" />
          <line x1="300" y1="140" x2="460" y2="85" />
          <line x1="460" y1="85" x2="420" y2="260" />
          <line x1="140" y1="120" x2="170" y2="270" />
          <line x1="460" y1="85" x2="570" y2="140" />
        </g>

        {/* Precision Nodes & Summit Coordinates */}
        {/* Node 1: Primary Central Peak */}
        <circle cx="300" cy="140" r="3.5" fill="#0B2046" />
        <circle cx="300" cy="140" r="7.5" stroke="#0B2046" strokeWidth="0.8" strokeOpacity="0.3" fill="none" />
        <text x="312" y="144" fill="#0B2046" fontSize="9" fontWeight="700" fontFamily="monospace" opacity="0.6">8848.86m</text>

        {/* Node 2: Red Apex Accent Peak */}
        <circle cx="460" cy="85" r="4" fill="#C8102E" />
        <circle cx="460" cy="85" r="9" stroke="#C8102E" strokeWidth="0.8" strokeOpacity="0.4" fill="none" />
        <text x="474" y="89" fill="#C8102E" fontSize="9" fontWeight="800" fontFamily="monospace" opacity="0.8">NRB/PSC APEX</text>

        {/* Node 3: Gateway Node */}
        <circle cx="140" cy="120" r="3" fill="#15803D" />
        <circle cx="140" cy="120" r="6" stroke="#15803D" strokeWidth="0.8" strokeOpacity="0.3" fill="none" />
        <text x="75" y="112" fill="#15803D" fontSize="8" fontWeight="700" fontFamily="monospace" opacity="0.7">PRE-TEST GATE</text>

        {/* Node 4: Sangathit Node */}
        <circle cx="570" cy="140" r="3" fill="#0284C7" />
        <circle cx="570" cy="140" r="6" stroke="#0284C7" strokeWidth="0.8" strokeOpacity="0.3" fill="none" />
      </svg>

      {/* Floating Verified Trust Metadata Points (Restrained Editorial Presentation) */}
      
      {/* Indicator 1: Central Pre-Test Gateway (Top-Left) */}
      <div className="absolute top-4 left-2 sm:left-4 bg-white/95 backdrop-blur-xs border border-slate-200/80 rounded-xl p-3 shadow-xs max-w-[190px]">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-6 h-6 rounded-md bg-rose-50 border border-rose-200/80 flex items-center justify-center text-rose-700 shrink-0">
            <Award className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="text-[9px] font-mono font-bold tracking-wider text-rose-700 block uppercase">Gateway</span>
            <p className="text-xs font-bold text-slate-900 leading-none">Pre-Test द्वार</p>
          </div>
        </div>
        <div className="flex items-center justify-between text-[10px] text-slate-500 pt-1.5 border-t border-slate-100 font-medium">
          <span>तह ४ र ५</span>
          <span className="text-slate-900 font-bold tabular-nums">५० अनलाइन सेट</span>
        </div>
      </div>

      {/* Indicator 2: Central Banking Pillar (Bottom-Right) */}
      <div className="absolute bottom-4 right-2 sm:right-4 bg-white/95 backdrop-blur-xs border border-slate-200/80 rounded-xl p-3.5 shadow-xs max-w-[210px]">
        <div className="flex items-center gap-2 mb-1.5">
          <div className="w-7 h-7 rounded-lg bg-[#0B2046] flex items-center justify-center text-white shrink-0">
            <Landmark className="w-3.5 h-3.5" />
          </div>
          <div>
            <span className="text-[9px] font-mono font-bold text-slate-400 block uppercase">NRB · RBB · ADBL · NBL</span>
            <p className="text-xs font-bold text-[#0B2046] leading-none">केन्द्रीय बैंकिङ्ग पाठ्यक्रम</p>
          </div>
        </div>
        <div className="text-[10px] text-slate-500 pt-1.5 border-t border-slate-100 flex items-center justify-between font-mono">
          <span>प्रथम चरण (MCQ)</span>
          <span className="font-bold text-slate-900">१०० अङ्क</span>
        </div>
      </div>

      {/* Indicator 3: PSC Regulatory Alignment (Center Subtle Badge) */}
      <div className="hidden sm:flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white/95 backdrop-blur-xs border border-slate-200/80 rounded-lg px-3 py-1.5 shadow-2xs items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <div className="text-left">
          <p className="text-[10px] font-bold text-slate-900 leading-tight">लोक सेवा आयोग मार्गदर्शन</p>
          <p className="text-[9px] text-slate-500 font-mono">२०८१/८२ अद्यावधिक</p>
        </div>
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 ml-0.5" />
      </div>

    </div>
  );
};
