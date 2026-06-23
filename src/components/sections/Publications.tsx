'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Publications() {
  const { t } = useLanguage();

  const pubs = [
    {
      key: 'pub1',
      color: '#0EA5A4',
      gradient: 'linear-gradient(135deg, #0EA5A4, #00D4A6)',
    },
    {
      key: 'pub2',
      color: '#00D4A6',
      gradient: 'linear-gradient(135deg, #00D4A6, #2EC4C3)',
    },
    {
      key: 'pub3',
      color: '#2EC4C3',
      gradient: 'linear-gradient(135deg, #2EC4C3, #0EA5A4)',
    },
  ];

  return (
    <section id="publications" style={{
      background: '#ffffff',
      position: 'relative',
    }}>
      <div className="section-container">
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="section-badge" style={{ margin: '0 auto 1.5rem' }}>{t('publications.badge')}</div>
            <h2 className="section-headline">{t('publications.headline')}</h2>
            <div className="accent-line" style={{ margin: '0 auto' }} />
          </div>
        </ScrollReveal>

        {/* Horizontal Publication Cards */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          marginBottom: '3rem',
          maxWidth: '900px',
          margin: '0 auto 3rem',
        }}>
          {pubs.map((pub, i) => (
            <ScrollReveal key={pub.key} delay={i + 1}>
              <div className="card" style={{
                padding: 0,
                overflow: 'hidden',
                display: 'grid',
                gridTemplateColumns: 'clamp(140px, 20%, 200px) 1fr',
                minHeight: '180px',
              }}>
                {/* Journal Cover Side */}
                <div style={{
                  background: pub.gradient,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '1.5rem 1rem',
                  position: 'relative',
                  overflow: 'hidden',
                }}>
                  {/* Decorative circles */}
                  <div style={{
                    position: 'absolute',
                    top: '-20px',
                    right: '-20px',
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.1)',
                  }} />
                  <div style={{
                    position: 'absolute',
                    bottom: '-15px',
                    left: '-15px',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: 'rgba(255,255,255,0.08)',
                  }} />

                  {/* Journal icon */}
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" style={{ marginBottom: '0.75rem', opacity: 0.9 }}>
                    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  </svg>

                  <div style={{
                    color: 'white',
                    fontSize: '0.65rem',
                    fontWeight: 600,
                    textAlign: 'center',
                    textTransform: 'uppercase' as const,
                    letterSpacing: '0.05em',
                    lineHeight: 1.3,
                    opacity: 0.9,
                  }}>
                    {t(`publications.${pub.key}journal`)}
                  </div>
                </div>

                {/* Content Side */}
                <div style={{
                  padding: '1.5rem 2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}>
                  {/* Meta row */}
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    marginBottom: '0.75rem',
                    flexWrap: 'wrap',
                  }}>
                    {/* Year badge */}
                    <span style={{
                      padding: '0.3rem 0.7rem',
                      background: `${pub.color}12`,
                      borderRadius: '6px',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: pub.color,
                    }}>
                      {t(`publications.${pub.key}year`)}
                    </span>

                    {/* Citations */}
                    <span style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.35rem',
                      fontSize: '0.72rem',
                      fontWeight: 600,
                      color: '#64748b',
                    }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M3 3v18h18" />
                        <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
                      </svg>
                      {t(`publications.${pub.key}citations`)} {t('publications.citations')}
                    </span>

                    {/* Impact Badge */}
                    <span style={{
                      padding: '0.25rem 0.6rem',
                      background: 'linear-gradient(135deg, rgba(212,166,63,0.12), rgba(212,166,63,0.06))',
                      border: '1px solid rgba(212,166,63,0.2)',
                      borderRadius: '6px',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      color: '#D4A63F',
                      letterSpacing: '0.03em',
                    }}>
                      {t(`publications.${pub.key}impact`)}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#071426',
                    lineHeight: 1.4,
                    marginBottom: '0.5rem',
                  }}>
                    {t(`publications.${pub.key}title`)}
                  </h3>

                  {/* Summary */}
                  <p style={{
                    fontSize: '0.82rem',
                    color: '#64748b',
                    lineHeight: 1.6,
                  }}>
                    {t(`publications.${pub.key}summary`)}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* View All CTA */}
        <ScrollReveal>
          <div style={{ textAlign: 'center' }}>
            <a href="#" className="btn-secondary-light" style={{ display: 'inline-flex' }}>
              {t('publications.viewAll')}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
