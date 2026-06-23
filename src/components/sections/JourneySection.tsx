'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';

const journeyData = [
  { key: 'egypt', emoji: '🇪🇬', color: '#d4a853' },
  { key: 'japan', emoji: '🇯🇵', color: '#ef4444' },
  { key: 'usa', emoji: '🇺🇸', color: '#3b82f6' },
  { key: 'nz', emoji: '🇳🇿', color: '#10b981' },
  { key: 'bahrain', emoji: '🇧🇭', color: '#0ea5e9' },
];

export default function JourneySection() {
  const { t, language } = useLanguage();

  return (
    <section id="journey" style={{
      background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 50%, #f8fafc 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="section-container">
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="section-badge" style={{ margin: '0 auto 1.5rem' }}>{t('journey.badge')}</div>
            <h2 className="section-headline">{t('journey.headline')}</h2>
            <div className="accent-line" style={{ margin: '0 auto 1.5rem' }} />
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div style={{
          position: 'relative',
          maxWidth: '800px',
          margin: '0 auto',
        }}>
          {/* Vertical line */}
          <div style={{
            position: 'absolute',
            left: language === 'ar' ? 'auto' : '32px',
            right: language === 'ar' ? '32px' : 'auto',
            top: '0',
            bottom: '0',
            width: '3px',
            background: 'linear-gradient(to bottom, #0ea5e9, #d4a853, #10b981)',
            borderRadius: '2px',
          }} />

          {journeyData.map((item, i) => (
            <ScrollReveal key={item.key} delay={i + 1}>
              <div style={{
                display: 'flex',
                gap: '2rem',
                marginBottom: '2.5rem',
                position: 'relative',
                alignItems: 'flex-start',
                flexDirection: language === 'ar' ? 'row-reverse' : 'row',
              }}>
                {/* Timeline dot */}
                <div style={{
                  flexShrink: 0,
                  width: '64px',
                  display: 'flex',
                  justifyContent: 'center',
                  position: 'relative',
                  zIndex: 2,
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '16px',
                    background: '#ffffff',
                    border: `2px solid ${item.color}20`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '1.5rem',
                    boxShadow: `0 4px 15px ${item.color}20`,
                    transition: 'all 0.3s ease',
                  }}>
                    {item.emoji}
                  </div>
                </div>

                {/* Content card */}
                <div className="card" style={{
                  flex: 1,
                  borderLeft: language === 'ar' ? 'none' : `3px solid ${item.color}`,
                  borderRight: language === 'ar' ? `3px solid ${item.color}` : 'none',
                  textAlign: language === 'ar' ? 'right' : 'left',
                }}>
                  <div style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color: item.color,
                    textTransform: 'uppercase',
                    letterSpacing: '0.08em',
                    marginBottom: '0.5rem',
                  }}>
                    {t(`journey.${item.key}`)}
                  </div>
                  <p style={{
                    color: '#475569',
                    fontSize: '0.95rem',
                    lineHeight: 1.7,
                  }}>
                    {t(`journey.${item.key}Desc`)}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Closing text */}
        <ScrollReveal>
          <p style={{
            textAlign: 'center',
            fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
            color: '#64748b',
            fontStyle: 'italic',
            maxWidth: '600px',
            margin: '2rem auto 0',
            lineHeight: 1.8,
          }}>
            {t('journey.closing')}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
