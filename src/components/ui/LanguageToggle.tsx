'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      aria-label="Toggle Language"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '4px',
        padding: '6px 14px',
        borderRadius: '100px',
        border: '1.5px solid rgba(14,165,164,0.25)',
        background: 'rgba(14,165,164,0.08)',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        fontSize: '0.8rem',
        fontWeight: 600,
        color: '#0EA5A4',
        backdropFilter: 'blur(10px)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(14,165,164,0.15)';
        e.currentTarget.style.borderColor = 'rgba(14,165,164,0.4)';
        e.currentTarget.style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'rgba(14,165,164,0.08)';
        e.currentTarget.style.borderColor = 'rgba(14,165,164,0.25)';
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      <span style={{ 
        opacity: language === 'en' ? 1 : 0.5,
        transition: 'opacity 0.3s',
        fontFamily: "'Inter', sans-serif",
      }}>EN</span>
      <span style={{ opacity: 0.3, fontSize: '0.75rem' }}>|</span>
      <span style={{ 
        opacity: language === 'ar' ? 1 : 0.5,
        transition: 'opacity 0.3s',
        fontFamily: "'Noto Kufi Arabic', sans-serif",
      }}>عربي</span>
    </button>
  );
}
