'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function MediaTalks() {
  const { t } = useLanguage();

  const mediaItems = [
    {
      key: 'talks',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
      ),
      color: '#0EA5A4',
      gradient: 'linear-gradient(135deg, #0EA5A4, #2EC4C3)',
    },
    {
      key: 'lectures',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
          <path d="M6 12v5c3 3 12 3 12 0v-5" />
        </svg>
      ),
      color: '#00D4A6',
      gradient: 'linear-gradient(135deg, #00D4A6, #0EA5A4)',
    },
    {
      key: 'interviews',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z" />
          <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
          <line x1="12" y1="19" x2="12" y2="23" />
          <line x1="8" y1="23" x2="16" y2="23" />
        </svg>
      ),
      color: '#2EC4C3',
      gradient: 'linear-gradient(135deg, #2EC4C3, #00D4A6)',
    },
    {
      key: 'panels',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      color: '#D4A63F',
      gradient: 'linear-gradient(135deg, #D4A63F, #E2BD6A)',
    },
  ];

  return (
    <section id="media" style={{
      background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
      position: 'relative',
    }}>
      <div className="section-container">
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="section-badge" style={{ margin: '0 auto 1.5rem' }}>{t('media.badge')}</div>
            <h2 className="section-headline">{t('media.headline')}</h2>
            <div className="accent-line" style={{ margin: '0 auto' }} />
          </div>
        </ScrollReveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.5rem',
        }}>
          {mediaItems.map((item, i) => (
            <ScrollReveal key={item.key} delay={i + 1}>
              <div className="card" style={{
                padding: '2.5rem 2rem',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden',
                height: '100%',
              }}>
                {/* Background decorative circle */}
                <div style={{
                  position: 'absolute',
                  top: '-30px',
                  right: '-30px',
                  width: '120px',
                  height: '120px',
                  borderRadius: '50%',
                  background: `${item.color}06`,
                  pointerEvents: 'none',
                }} />

                {/* Icon */}
                <div style={{
                  width: '70px',
                  height: '70px',
                  borderRadius: '20px',
                  background: item.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  margin: '0 auto 1.5rem',
                  boxShadow: `0 8px 25px ${item.color}30`,
                  transition: 'all 0.3s ease',
                }}>
                  {item.icon}
                </div>

                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: '#071426',
                  marginBottom: '0.75rem',
                }}>
                  {t(`media.${item.key}`)}
                </h3>

                <p style={{
                  fontSize: '0.85rem',
                  color: '#64748b',
                  lineHeight: 1.7,
                }}>
                  {t(`media.${item.key}Desc`)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
