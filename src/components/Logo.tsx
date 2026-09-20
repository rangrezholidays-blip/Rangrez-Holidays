import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'dark',
  size = 'md',
}) => {
  // Brand colors taken directly from user's uploaded logo:
  // Plum / Burgundy: #4A0E35, Sunset orange: #F05A28, Saffron gold: #FFA000
  const isDark = variant === 'dark';
  const textColor = isDark ? '#4A0E35' : '#FFFFFF';
  const subtextColor = isDark ? '#E65100' : '#FF9E80';

  const heights = {
    sm: 'h-10',
    md: 'h-14',
    lg: 'h-20',
    xl: 'h-28',
  };

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <svg
        viewBox="0 0 460 180"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`${heights[size]} w-auto max-w-full`}
        role="img"
        aria-label="Rangrez Holidays Logo"
      >
        <defs>
          {/* Saffron to sunset orange gradient for the flowing flourish */}
          <linearGradient id="flourishGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFA000" />
            <stop offset="45%" stopColor="#F05A28" />
            <stop offset="100%" stopColor="#D84315" />
          </linearGradient>

          {/* Sunset disc gradient */}
          <linearGradient id="sunGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#F05A28" />
            <stop offset="100%" stopColor="#FF7043" />
          </linearGradient>

          {/* Shadow for depth */}
          <filter id="subtleGlow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow dx="0" dy="2" stdDeviation="2" floodOpacity="0.15" />
          </filter>
        </defs>

        {/* --- Top-Right: Setting Sun Disc --- */}
        <circle cx="310" cy="46" r="32" fill="url(#sunGrad)" />

        {/* --- Royal Chhatri / Indian Palace Dome Pavilion Silhouette --- */}
        <g fill={textColor}>
          {/* Base plinth */}
          <rect x="306" y="66" width="46" height="4" rx="1" />
          {/* Pillars */}
          <rect x="312" y="50" width="3.5" height="16" rx="0.5" />
          <rect x="323" y="50" width="3" height="16" rx="0.5" />
          <rect x="333" y="50" width="3" height="16" rx="0.5" />
          <rect x="342" y="50" width="3.5" height="16" rx="0.5" />
          {/* Arch curves */}
          <path d="M312 50 C317 45, 320 45, 324 50 Z" />
          <path d="M324 50 C328 44, 331 44, 334 50 Z" />
          <path d="M334 50 C338 45, 341 45, 345 50 Z" />
          {/* Cornice cornice beam */}
          <rect x="308" y="44" width="42" height="3" rx="1" />
          {/* Jharokha dome with kalash spire */}
          <path d="M313 44 C313 30, 321 21, 329 18 C337 21, 345 30, 345 44 Z" />
          {/* Finial / Spire */}
          <path d="M328 18 L329 7 L330 18 Z" />
          <circle cx="329" cy="8" r="2.5" />
          <circle cx="329" cy="4" r="1.5" />

          {/* Sweeping palace skyline horizon ridge */}
          <path
            d="M260 70 C280 66, 305 69, 325 68 C355 67, 390 70, 425 80 C395 73, 360 71, 328 71 C295 71, 275 73, 260 70 Z"
            opacity="0.95"
          />
        </g>

        {/* --- Flowing Calligraphic Saffron/Orange Swash under 'R' extending across --- */}
        <path
          d="M62 68 C74 72, 88 95, 96 118 C104 140, 118 152, 142 148 C175 142, 215 132, 255 130 C275 129, 290 126, 305 123 C280 128, 250 133, 210 136 C165 140, 130 136, 114 116 C102 96, 90 76, 76 66 C70 61, 65 64, 62 68 Z"
          fill="url(#flourishGrad)"
        />

        {/* Secondary subtle flame flourish */}
        <path
          d="M74 78 C84 94, 94 115, 108 128 C122 139, 145 138, 175 134 C150 138, 130 137, 118 127 C106 115, 96 95, 84 80 Z"
          fill="#FFB300"
          opacity="0.85"
        />

        {/* --- Main Wordmark: "Rangrez" --- */}
        <text
          x="30"
          y="118"
          fontFamily="'Playfair Display', 'Cinzel', serif"
          fontSize="96"
          fontWeight="800"
          letterSpacing="-1.5px"
          fill={textColor}
          style={{ textRendering: 'geometricPrecision' }}
        >
          <tspan>R</tspan>
          <tspan dx="-2">a</tspan>
          <tspan dx="-2">n</tspan>
          <tspan dx="-2">g</tspan>
          <tspan dx="-1">r</tspan>
          <tspan dx="-2">e</tspan>
          <tspan dx="-1">z</tspan>
        </text>

        {/* --- Sub-Wordmark Divider Line with Diamond Stars and "H O L I D A Y S" --- */}
        <g>
          {/* Left diamond accent */}
          <circle cx="48" cy="158" r="3.5" fill={subtextColor} />
          <path d="M48 150 L50 158 L48 166 L46 158 Z" fill={subtextColor} />
          {/* Left rule line */}
          <line x1="56" y1="158" x2="115" y2="158" stroke={subtextColor} strokeWidth="1.5" />

          {/* Left star ✦ */}
          <polygon points="125,158 128,154 133,158 128,162" fill={subtextColor} />

          {/* "H O L I D A Y S" text */}
          <text
            x="240"
            y="163"
            textAnchor="middle"
            fontFamily="'Cinzel', 'Playfair Display', serif"
            fontSize="18"
            fontWeight="700"
            letterSpacing="9px"
            fill={subtextColor}
          >
            HOLIDAYS
          </text>

          {/* Right star ✦ */}
          <polygon points="345,158 350,154 355,158 350,162" fill={subtextColor} />

          {/* Right rule line */}
          <line x1="365" y1="158" x2="424" y2="158" stroke={subtextColor} strokeWidth="1.5" />
          {/* Right diamond accent */}
          <circle cx="432" cy="158" r="3.5" fill={subtextColor} />
          <path d="M432 150 L434 158 L432 166 L430 158 Z" fill={subtextColor} />
        </g>
      </svg>
    </div>
  );
};
