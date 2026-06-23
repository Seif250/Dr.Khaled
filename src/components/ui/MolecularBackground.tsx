'use client';

import React from 'react';

export default function MolecularBackground({ variant = 'light' }: { variant?: 'light' | 'dark' }) {
  const color = variant === 'light' ? 'rgba(14,165,233,0.07)' : 'rgba(14,165,233,0.15)';
  const colorGold = variant === 'light' ? 'rgba(212,168,83,0.05)' : 'rgba(212,168,83,0.1)';
  const strokeColor = variant === 'light' ? 'rgba(14,165,233,0.1)' : 'rgba(14,165,233,0.2)';

  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0 }}>
        {/* Hexagons */}
        <g className="animate-float-slow" style={{ animationDelay: '0s' }}>
          <polygon
            points="60,10 90,30 90,60 60,80 30,60 30,30"
            fill="none"
            stroke={strokeColor}
            strokeWidth="1.5"
            style={{ transform: 'translate(10%, 15%) scale(0.8)' }}
          />
        </g>
        <g className="animate-float-medium" style={{ animationDelay: '2s' }}>
          <polygon
            points="60,10 90,30 90,60 60,80 30,60 30,30"
            fill="none"
            stroke={strokeColor}
            strokeWidth="1"
            style={{ transform: 'translate(75%, 10%) scale(0.6)' }}
          />
        </g>
        <g className="animate-float-slow" style={{ animationDelay: '4s' }}>
          <polygon
            points="60,10 90,30 90,60 60,80 30,60 30,30"
            fill="none"
            stroke={strokeColor}
            strokeWidth="1"
            style={{ transform: 'translate(85%, 65%) scale(0.5)' }}
          />
        </g>
        
        {/* Connection lines */}
        <line x1="15%" y1="20%" x2="25%" y2="35%"
          stroke={strokeColor} strokeWidth="1" strokeDasharray="4 4"
          className="animate-dash"
        />
        <line x1="78%" y1="15%" x2="88%" y2="70%"
          stroke={strokeColor} strokeWidth="1" strokeDasharray="4 4"
          className="animate-dash" style={{ animationDelay: '1s' }}
        />
        
        {/* Circles / Atoms */}
        <circle cx="12%" cy="25%" r="4" fill={color} className="animate-pulse-glow" />
        <circle cx="88%" cy="18%" r="3" fill={color} className="animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <circle cx="78%" cy="72%" r="5" fill={colorGold} className="animate-pulse-glow" style={{ animationDelay: '2s' }} />
        <circle cx="25%" cy="80%" r="3" fill={color} className="animate-pulse-glow" style={{ animationDelay: '0.5s' }} />
        <circle cx="50%" cy="12%" r="2.5" fill={colorGold} className="animate-pulse-glow" style={{ animationDelay: '3s' }} />
        <circle cx="92%" cy="45%" r="3.5" fill={color} className="animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
        <circle cx="5%" cy="55%" r="2" fill={color} className="animate-pulse-glow" style={{ animationDelay: '2.5s' }} />
        <circle cx="40%" cy="90%" r="3" fill={colorGold} className="animate-pulse-glow" style={{ animationDelay: '4s' }} />
        
        {/* Molecule clusters */}
        <g className="animate-float-fast" style={{ animationDelay: '1s' }}>
          <circle cx="20%" cy="60%" r="6" fill={color} />
          <circle cx="23%" cy="57%" r="4" fill={colorGold} />
          <line x1="20%" y1="60%" x2="23%" y2="57%" stroke={strokeColor} strokeWidth="1.5" />
        </g>
        
        <g className="animate-float-medium" style={{ animationDelay: '3s' }}>
          <circle cx="70%" cy="40%" r="5" fill={color} />
          <circle cx="73%" cy="43%" r="3.5" fill={colorGold} />
          <circle cx="67%" cy="43%" r="3" fill={color} />
          <line x1="70%" y1="40%" x2="73%" y2="43%" stroke={strokeColor} strokeWidth="1" />
          <line x1="70%" y1="40%" x2="67%" y2="43%" stroke={strokeColor} strokeWidth="1" />
        </g>

        {/* Large decorative ring */}
        <circle cx="50%" cy="50%" r="200" fill="none" stroke={strokeColor} strokeWidth="0.5"
          strokeDasharray="8 12" className="animate-spin-slow" style={{ transformOrigin: '50% 50%' }}
        />
      </svg>
    </div>
  );
}
