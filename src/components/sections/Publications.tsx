'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Publications() {
  const { t } = useLanguage();

  const pubs = [
    {
      key: 'pub1',
      color: '#0ea5e9',
      journalAbbr: 'JCR',
    },
    {
      key: 'pub2',
      color: '#d4a853',
      journalAbbr: 'JDT',
    },
    {
      key: 'pub3',
      color: '#10b981',
      journalAbbr: 'CAN',
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

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.5rem',
          marginBottom: '3rem',
        }}>
          {pubs.map((pub, i) => (
            <ScrollReveal key={pub.key} delay={i + 1}>
              <div className="card" style={{
                padding: 0,
                overflow: 'hidden',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
              }}>
                {/* Journal visual */}
                <div style={{
                  background: `linear-gradient(135deg, ${pub.color}15, ${pub.color}08)`,
                  padding: '2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottom: `1px solid ${pub.color}15`,
                  position: 'relative',
                  overflow: 'hidden',
                  minHeight: '140px',
                }}>
                  {/* Large abbreviated journal name */}
                  <div style={{
                    fontSize: '3rem',
                    fontWeight: 900,
                    fontFamily: "'Playfair Display', serif",
                    color: pub.color,
                    opacity: 0.15,
                    position: 'absolute',
                  }}>
                    {pub.journalAbbr}
                  </div>
                  <div style={{
                    textAlign: 'center',
                    position: 'relative',
                    zIndex: 1,
                  }}>
                    <div style={{
                      fontSize: '0.7rem',
                      fontWeight: 600,
                      color: pub.color,
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      marginBottom: '0.25rem',
                    }}>
                      {t(`publications.${pub.key}journal`)}
                    </div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '1.5rem',
                      marginTop: '0.75rem',
                    }}>
                      <span style={{
                        padding: '0.35rem 0.75rem',
                        background: `${pub.color}15`,
                        borderRadius: '6px',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: pub.color,
                      }}>
                        {t(`publications.${pub.key}year`)}
                      </span>
                      <span style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        color: '#64748b',
                      }}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M3 3v18h18" />
                          <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
                        </svg>
                        {t(`publications.${pub.key}citations`)} {t('publications.citations')}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '1.5rem 2rem', flex: 1 }}>
                  <h3 style={{
                    fontSize: '1rem',
                    fontWeight: 700,
                    color: '#0a1628',
                    lineHeight: 1.4,
                    marginBottom: '0.75rem',
                  }}>
                    {t(`publications.${pub.key}title`)}
                  </h3>
                  <p style={{
                    fontSize: '0.85rem',
                    color: '#64748b',
                    lineHeight: 1.7,
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
            <a href="#" className="btn-primary" style={{ display: 'inline-flex' }}>
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
