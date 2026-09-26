import React from 'react';

interface BrandLogoProps {
  variant?: 'full' | 'compact' | 'icon' | 'header';
  className?: string;
  showMotto?: boolean;
}

// Inlined vector emblem component for instant render with 0ms lag and no cache problems
export const BrandEmblemSvg: React.FC<{ className?: string }> = ({ className = 'w-9 h-9' }) => (
  <svg 
    viewBox="0 0 290 340" 
    fill="none" 
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Banking Tayari Nepal Emblem"
  >
    <g transform="translate(10, 12)">
      {/* Main Navy Body of the letter 'B' */}
      <path 
        d="M 28 8 L 175 8 C 218 8, 252 32, 252 76 C 252 112, 222 136, 182 144 C 226 154, 254 186, 254 228 C 254 246, 246 264, 234 278 C 225 272, 212 266, 196 264 C 224 250, 236 232, 236 212 C 236 178, 210 156, 166 156 L 76 156 L 76 250 L 28 250 Z" 
        fill="#0B2046" 
      />

      {/* Upper bowl cutout (white D-shape) */}
      <path 
        d="M 76 44 L 165 44 C 188 44, 206 56, 206 76 C 206 96, 188 110, 165 110 L 76 110 Z" 
        fill="#FFFFFF" 
      />

      {/* Open Book Pages (Navy Blue, fanning to bottom left) */}
      <path d="M 12 312 C 45 292, 85 282, 126 280 C 126 270, 126 262, 126 256 C 76 260, 38 274, 12 312 Z" fill="#0B2046" />
      <path d="M 20 288 C 52 268, 90 258, 128 255 C 128 247, 128 240, 128 234 C 84 238, 48 250, 20 288 Z" fill="#0B2046" />
      <path d="M 32 264 C 62 244, 98 234, 130 230 C 130 222, 130 216, 130 210 C 90 214, 56 226, 32 264 Z" fill="#0B2046" />

      {/* Red Swooshes / Flourish Pages (Crimson Red, curving to bottom right) */}
      <path d="M 136 308 C 178 288, 222 266, 260 224 C 260 248, 246 280, 218 300 C 190 316, 160 316, 136 308 Z" fill="#C8102E" />
      <path d="M 138 288 C 170 270, 206 252, 238 224 C 238 240, 228 262, 208 278 C 184 292, 160 294, 138 288 Z" fill="#C8102E" />

      {/* Central White Fountain Pen Nib (Pointing Upwards) */}
      <g transform="translate(94, 154)">
        <path 
          d="M 42 0 L 12 75 C 12 108, 24 135, 42 155 C 60 135, 72 108, 72 75 L 42 0 Z" 
          fill="#FFFFFF" 
          stroke="#0B2046" 
          strokeWidth="3" 
          strokeLinejoin="round" 
        />
        <circle cx="42" cy="76" r="6.5" fill="#0B2046" />
        <line x1="42" y1="70" x2="42" y2="4" stroke="#0B2046" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M 26 78 C 26 98, 33 116, 42 130 C 51 116, 58 98, 58 78" fill="none" stroke="#0B2046" strokeWidth="2.5" />
      </g>
    </g>
  </svg>
);

// Full Vector Logo with BANKING, TAYARI NEPAL, and PREPARE | PRACTICE | SUCCEED
export const BrandFullSvg: React.FC<{ className?: string; showMotto?: boolean }> = ({ 
  className = 'h-9 sm:h-10 md:h-11 w-auto object-contain',
  showMotto = true
}) => (
  <svg 
    viewBox="0 0 1050 340" 
    fill="none" 
    preserveAspectRatio="xMidYMid meet"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Banking Tayari Nepal Logo"
  >
    {/* Left Emblem */}
    <g id="emblem-group" transform="translate(15, 12)">
      <path 
        d="M 28 8 L 175 8 C 218 8, 252 32, 252 76 C 252 112, 222 136, 182 144 C 226 154, 254 186, 254 228 C 254 246, 246 264, 234 278 C 225 272, 212 266, 196 264 C 224 250, 236 232, 236 212 C 236 178, 210 156, 166 156 L 76 156 L 76 250 L 28 250 Z" 
        fill="#0B2046" 
      />
      <path 
        d="M 76 44 L 165 44 C 188 44, 206 56, 206 76 C 206 96, 188 110, 165 110 L 76 110 Z" 
        fill="#FFFFFF" 
      />

      <path d="M 12 312 C 45 292, 85 282, 126 280 C 126 270, 126 262, 126 256 C 76 260, 38 274, 12 312 Z" fill="#0B2046" />
      <path d="M 20 288 C 52 268, 90 258, 128 255 C 128 247, 128 240, 128 234 C 84 238, 48 250, 20 288 Z" fill="#0B2046" />
      <path d="M 32 264 C 62 244, 98 234, 130 230 C 130 222, 130 216, 130 210 C 90 214, 56 226, 32 264 Z" fill="#0B2046" />

      <path d="M 136 308 C 178 288, 222 266, 260 224 C 260 248, 246 280, 218 300 C 190 316, 160 316, 136 308 Z" fill="#C8102E" />
      <path d="M 138 288 C 170 270, 206 252, 238 224 C 238 240, 228 262, 208 278 C 184 292, 160 294, 138 288 Z" fill="#C8102E" />

      <g transform="translate(94, 154)">
        <path 
          d="M 42 0 L 12 75 C 12 108, 24 135, 42 155 C 60 135, 72 108, 72 75 L 42 0 Z" 
          fill="#FFFFFF" 
          stroke="#0B2046" 
          strokeWidth="3" 
          strokeLinejoin="round" 
        />
        <circle cx="42" cy="76" r="6.5" fill="#0B2046" />
        <line x1="42" y1="70" x2="42" y2="4" stroke="#0B2046" strokeWidth="3.5" strokeLinecap="round" />
        <path d="M 26 78 C 26 98, 33 116, 42 130 C 51 116, 58 98, 58 78" fill="none" stroke="#0B2046" strokeWidth="2.5" />
      </g>
    </g>

    {/* Right Brand Typography */}
    <g transform="translate(305, 12)">
      {/* "BANKING" */}
      <text 
        x="0" 
        y="132" 
        fill="#0B2046" 
        fontSize="138" 
        fontWeight="900" 
        letterSpacing="1.5"
        style={{ fontFamily: "'Plus Jakarta Sans', 'Arial Black', sans-serif" }}
      >
        BANKING
      </text>

      {/* Red Banner: "TAYARI NEPAL" */}
      <rect x="0" y="156" width="675" height="84" rx="5" fill="#C8102E" />
      <text 
        x="337" 
        y="218" 
        fill="#FFFFFF" 
        fontSize="48" 
        fontWeight="800" 
        textAnchor="middle" 
        letterSpacing="12"
        style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
      >
        TAYARI NEPAL
      </text>

      {/* Slogan Row: PREPARE | PRACTICE | SUCCEED */}
      {showMotto && (
        <g transform="translate(10, 260)">
          {/* 1. PREPARE */}
          <g transform="translate(0, 0)">
            <circle cx="28" cy="28" r="28" fill="none" stroke="#0B2046" strokeWidth="4.5" />
            <path d="M 16 21 C 21 19, 26 20, 28 22 C 30 20, 35 19, 40 21 L 40 37 C 35 35, 30 36, 28 38 C 26 36, 21 35, 16 37 Z" fill="#0B2046" />
            <line x1="28" y1="22" x2="28" y2="38" stroke="#FFFFFF" strokeWidth="2" />
            <text x="70" y="37" fill="#0B2046" fontSize="25" fontWeight="700" letterSpacing="2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              PREPARE
            </text>
          </g>

          <line x1="228" y1="6" x2="228" y2="50" stroke="#0B2046" strokeWidth="2.5" />

          {/* 2. PRACTICE */}
          <g transform="translate(250, 0)">
            <circle cx="28" cy="28" r="28" fill="none" stroke="#C8102E" strokeWidth="4.5" />
            <path d="M 38 16 L 41 19 L 26 34 L 19 37 L 22 30 Z" fill="#0B2046" />
            <path d="M 17 38 C 23 36, 31 38, 38 33" fill="none" stroke="#C8102E" strokeWidth="2.5" strokeLinecap="round" />
            <text x="70" y="37" fill="#0B2046" fontSize="25" fontWeight="700" letterSpacing="2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              PRACTICE
            </text>
          </g>

          <line x1="482" y1="6" x2="482" y2="50" stroke="#C8102E" strokeWidth="2.5" />

          {/* 3. SUCCEED */}
          <g transform="translate(504, 0)">
            <circle cx="28" cy="28" r="28" fill="none" stroke="#0B2046" strokeWidth="4.5" />
            <rect x="18" y="31" width="4.5" height="10" fill="#0B2046" rx="1" />
            <rect x="25.5" y="24" width="4.5" height="17" fill="#0B2046" rx="1" />
            <rect x="33" y="17" width="4.5" height="24" fill="#0B2046" rx="1" />
            <path d="M 18 24 L 28 16 L 39 12 M 34 12 L 39 12 L 39 17" fill="none" stroke="#0B2046" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <text x="70" y="37" fill="#0B2046" fontSize="25" fontWeight="700" letterSpacing="2" style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              SUCCEED
            </text>
          </g>
        </g>
      )}
    </g>
  </svg>
);

// Specialized Navbar Logo matching exact visual mockup: blue chart 'B' emblem + BANKING TAYARI NEPAL + Dream · Prepare · Succeed
export const BankingTayariNavbarLogo: React.FC<{ className?: string; onClick?: () => void }> = ({ 
  className = '',
  onClick 
}) => {
  return (
    <div 
      onClick={onClick}
      className={`flex items-center gap-2.5 cursor-pointer select-none group ${className}`}
    >
      {/* Blue Bar-Chart 'B' Emblem */}
      <div className="relative w-9 h-9 sm:w-10 sm:h-10 shrink-0 flex items-center justify-center transition-transform group-hover:scale-105">
        <svg viewBox="0 0 100 100" fill="none" className="w-full h-full drop-shadow-xs">
          {/* Stylized 'B' shape in Dark Navy */}
          <path
            d="M18 14 H52 C68 14 78 23 78 35 C78 43 72 49 63 52 C74 55 82 62 82 74 C82 86 70 96 52 96 H18 V14 Z"
            fill="#0F172A"
          />
          {/* Inner cutouts */}
          <path d="M32 26 H50 C58 26 64 30 64 36 C64 42 58 46 50 46 H32 V26 Z" fill="#FFFFFF" />
          <path d="M32 56 H52 C61 56 68 61 68 68 C68 75 61 80 52 80 H32 V56 Z" fill="#FFFFFF" />
          {/* Ascending Chart Bars in Tech Blue & Sky Blue */}
          <rect x="20" y="66" width="9" height="24" rx="2" fill="#0052FF" />
          <rect x="32" y="52" width="9" height="38" rx="2" fill="#0066FF" />
          <rect x="44" y="38" width="9" height="52" rx="2" fill="#38BDF8" />
        </svg>
      </div>

      {/* Brand Typography */}
      <div className="flex flex-col text-left leading-tight">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="font-black text-[16px] sm:text-[18px] tracking-tight text-[#0F172A]" style={{ fontFamily: "'Inter', sans-serif" }}>
            BANKING
          </span>
          <span className="font-black text-[16px] sm:text-[18px] tracking-tight text-[#0052FF]" style={{ fontFamily: "'Inter', sans-serif" }}>
            TAYARI NEPAL
          </span>
        </div>
        <span className="text-[10px] sm:text-[11px] font-semibold text-slate-500 tracking-wider">
          Dream · Prepare · Succeed
        </span>
      </div>
    </div>
  );
};

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'full',
  className = '',
  showMotto = true
}) => {
  // 1. Icon-only mark (used strictly when an icon-sized avatar is requested)
  if (variant === 'icon') {
    return (
      <div className={`relative inline-flex items-center justify-center shrink-0 ${className}`}>
        <BrandEmblemSvg className="w-full h-full object-contain" />
      </div>
    );
  }

  if (variant === 'header') {
    return <BankingTayariNavbarLogo className={className} />;
  }

  // 2. Official Brand Logo (Exact official brand asset, responsive, object-contain, no cropping or distortion)
  return (
    <div className={`inline-flex items-center justify-center shrink-0 ${className}`}>
      <BankingTayariNavbarLogo />
    </div>
  );
};
