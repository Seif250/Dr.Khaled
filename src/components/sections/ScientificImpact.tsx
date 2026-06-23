'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedCounter from '@/components/ui/AnimatedCounter';

export default function ScientificImpact() {
  const { t } = useLanguage();

  const impactData = [
    {
      target: 12000,
      suffix: '+',
      label: t('impact.citations'),
      desc: t('impact.citationsDesc'),
      color: '#0ea5e9',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 3v18h18" />
          <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3" />
        </svg>
      ),
    },
    {
      target: 170,
      suffix: '+',
      label: t('impact.publications'),
      desc: t('impact.publicationsDesc'),
      color: '#d4a853',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
      ),
    },
    {
      target: 0,
      suffix: '',
      displayText: t('impact.patentsLabel'),
      label: t('impact.patents'),
      desc: t('impact.patentsDesc'),
      color: '#10b981',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      ),
    },
    {
      target: 2,
      suffix: '%',
      prefix: 'Top ',
      displayText: t('impact.rankingLabel'),
      label: t('impact.ranking'),
      desc: t('impact.rankingDesc'),
      color: '#8b5cf6',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      ),
    },
  ];

  return (
    <section style={{
      background: '#ffffff',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="section-container">
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="section-badge" style={{ margin: '0 auto 1.5rem' }}>{t('impact.badge')}</div>
          </div>
        </ScrollReveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1.5rem',
        }}>
          {impactData.map((item, i) => (
            <ScrollReveal key={i} delay={i + 1}>
              <div className="card" style={{
                textAlign: 'center',
                padding: '2.5rem 2rem',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* Background accent */}
                <div style={{
                  position: 'absolute',
                  top: '-20px',
                  right: '-20px',
                  width: '100px',
                  height: '100px',
                  borderRadius: '50%',
                  background: `${item.color}08`,
                  pointerEvents: 'none',
                }} />

                {/* Icon */}
                <div style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: '18px',
                  background: `${item.color}10`,
                  color: item.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem',
                }}>
                  {item.icon}
                </div>

                {/* Number */}
                <div style={{
                  fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                  fontWeight: 800,
                  fontFamily: "'Playfair Display', serif",
                  color: item.color,
                  marginBottom: '0.5rem',
                  lineHeight: 1,
                }}>
                  {item.displayText ? (
                    item.displayText
                  ) : (
                    <AnimatedCounter
                      target={item.target}
                      suffix={item.suffix}
                      prefix={item.prefix || ''}
                    />
                  )}
                </div>

                {/* Label */}
                <div style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: '#0a1628',
                  marginBottom: '0.75rem',
                }}>
                  {item.label}
                </div>

                {/* Description */}
                <p style={{
                  fontSize: '0.85rem',
                  color: '#64748b',
                  lineHeight: 1.7,
                }}>
                  {item.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
