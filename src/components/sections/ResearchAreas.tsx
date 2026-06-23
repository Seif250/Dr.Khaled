'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function ResearchAreas() {
  const { t } = useLanguage();

  const areas = [
    {
      key: 'r1',
      gradient: 'linear-gradient(135deg, #0EA5A4, #00D4A6)',
      bgColor: '#0EA5A4',
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v4" /><path d="M12 18v4" />
          <path d="M4.93 4.93l2.83 2.83" /><path d="M16.24 16.24l2.83 2.83" />
          <path d="M2 12h4" /><path d="M18 12h4" />
          <path d="M4.93 19.07l2.83-2.83" /><path d="M16.24 7.76l2.83-2.83" />
        </svg>
      ),
    },
    {
      key: 'r2',
      gradient: 'linear-gradient(135deg, #00D4A6, #0EA5A4)',
      bgColor: '#00D4A6',
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
    },
    {
      key: 'r3',
      gradient: 'linear-gradient(135deg, #0EA5A4, #2EC4C3)',
      bgColor: '#0EA5A4',
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
    },
    {
      key: 'r4',
      gradient: 'linear-gradient(135deg, #2EC4C3, #0EA5A4)',
      bgColor: '#2EC4C3',
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
    },
    {
      key: 'r5',
      gradient: 'linear-gradient(135deg, #00D4A6, #2EC4C3)',
      bgColor: '#00D4A6',
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="research" style={{
      background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 50%, #f8fafc 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="section-container">
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="section-badge" style={{ margin: '0 auto 1.5rem' }}>{t('research.badge')}</div>
            <h2 className="section-headline">{t('research.headline')}</h2>
            <div className="accent-line" style={{ margin: '0 auto' }} />
          </div>
        </ScrollReveal>

        {/* Hexagonal Grid */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0.75rem',
        }}>
          {/* Row 1: 3 hexagons */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            {areas.slice(0, 3).map((area, i) => (
              <ScrollReveal key={area.key} delay={i + 1}>
                <HexCard area={area} t={t} />
              </ScrollReveal>
            ))}
          </div>

          {/* Row 2: 2 hexagons (offset) */}
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            marginTop: '-1.5rem',
            flexWrap: 'wrap',
          }}>
            {areas.slice(3, 5).map((area, i) => (
              <ScrollReveal key={area.key} delay={i + 4}>
                <HexCard area={area} t={t} />
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Molecular connection lines (decorative SVG) */}
        <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          opacity: 0.08,
        }}>
          <svg width="100%" height="100%" viewBox="0 0 800 600">
            <circle cx="200" cy="150" r="4" fill="#0EA5A4" />
            <circle cx="600" cy="120" r="3" fill="#00D4A6" />
            <circle cx="150" cy="450" r="5" fill="#0EA5A4" />
            <circle cx="650" cy="420" r="3" fill="#00D4A6" />
            <line x1="200" y1="150" x2="400" y2="300" stroke="#0EA5A4" strokeWidth="1" strokeDasharray="4 4" />
            <line x1="600" y1="120" x2="400" y2="300" stroke="#00D4A6" strokeWidth="1" strokeDasharray="4 4" />
          </svg>
        </div>
      </div>
    </section>
  );
}

/* Hexagonal Card Component */
function HexCard({ area, t }: { area: { key: string; gradient: string; bgColor: string; icon: React.ReactNode }; t: (key: string) => string }) {
  return (
    <div className="hex-item" style={{
      background: area.gradient,
    }}>
      <div className="hex-item-inner" style={{
        background: '#ffffff',
      }}>
        {/* Icon */}
        <div style={{
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          background: `${area.bgColor}12`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: area.bgColor,
          marginBottom: '0.75rem',
          transition: 'all 0.3s ease',
        }}>
          {area.icon}
        </div>

        <h3 style={{
          fontSize: '0.9rem',
          fontWeight: 700,
          color: '#071426',
          marginBottom: '0.35rem',
          lineHeight: 1.2,
        }}>
          {t(`research.${area.key}title`)}
        </h3>

        <p style={{
          fontSize: '0.65rem',
          color: '#64748b',
          lineHeight: 1.5,
          maxWidth: '150px',
        }}>
          {t(`research.${area.key}desc`)}
        </p>
      </div>
    </div>
  );
}
