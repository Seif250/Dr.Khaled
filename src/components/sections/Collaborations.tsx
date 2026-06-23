'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Collaborations() {
  const { t } = useLanguage();

  const institutions = [
    {
      key: 'agu',
      emoji: '🇧🇭',
      color: '#0ea5e9',
    },
    {
      key: 'kumamoto',
      emoji: '🇯🇵',
      color: '#ef4444',
    },
    {
      key: 'utah',
      emoji: '🇺🇸',
      color: '#3b82f6',
    },
    {
      key: 'otago',
      emoji: '🇳🇿',
      color: '#10b981',
    },
    {
      key: 'others',
      emoji: '🌍',
      color: '#d4a853',
    },
  ];

  return (
    <section id="collaborations" style={{
      background: '#ffffff',
      position: 'relative',
    }}>
      <div className="section-container">
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="section-badge" style={{ margin: '0 auto 1.5rem' }}>{t('collaborations.badge')}</div>
            <h2 className="section-headline">{t('collaborations.headline')}</h2>
            <div className="accent-line" style={{ margin: '0 auto' }} />
          </div>
        </ScrollReveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem',
          maxWidth: '1000px',
          margin: '0 auto',
        }}>
          {institutions.map((inst, i) => (
            <ScrollReveal key={inst.key} delay={i + 1}>
              <div className="card" style={{
                textAlign: 'center',
                padding: '2rem 1.5rem',
                position: 'relative',
                overflow: 'hidden',
                height: '100%',
              }}>
                {/* Decorative top gradient */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: `linear-gradient(90deg, transparent, ${inst.color}, transparent)`,
                }} />

                {/* Flag */}
                <div style={{
                  fontSize: '2.5rem',
                  marginBottom: '1rem',
                  filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.1))',
                }}>
                  {inst.emoji}
                </div>

                <h3 style={{
                  fontSize: '1rem',
                  fontWeight: 700,
                  color: '#0a1628',
                  marginBottom: '0.5rem',
                }}>
                  {t(`collaborations.${inst.key}`)}
                </h3>

                <p style={{
                  fontSize: '0.8rem',
                  color: '#64748b',
                  lineHeight: 1.6,
                }}>
                  {t(`collaborations.${inst.key}Desc`)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
