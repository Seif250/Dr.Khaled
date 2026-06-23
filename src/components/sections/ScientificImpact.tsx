'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function ScientificImpact() {
  const { t } = useLanguage();

  return (
    <section style={{
      background: 'var(--white)',
      padding: 'var(--section-padding) 0',
      borderTop: '1px solid rgba(0,0,0,0.04)',
      borderBottom: '1px solid rgba(0,0,0,0.04)',
    }}>
      <div className="section-container" style={{ textAlign: 'center' }}>
        <ScrollReveal>
          <div className="section-label">{t('impact.label')}</div>
        </ScrollReveal>

        {/* HERO NUMBER */}
        <ScrollReveal delay={1}>
          <div style={{
            fontSize: 'clamp(80px, 15vw, 200px)',
            fontWeight: 300,
            lineHeight: 1,
            color: 'var(--text)',
            letterSpacing: '-0.04em',
            margin: '20px 0',
            fontFamily: 'var(--font-outfit)',
          }}>
            {t('stats.citations')}
          </div>
          
          <div style={{
            fontSize: 'clamp(18px, 2vw, 24px)',
            fontWeight: 500,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--text-secondary)',
            marginBottom: '80px',
          }}>
            {t('stats.citationsLabel')}
          </div>
        </ScrollReveal>

        {/* Secondary Stats — Minimal text row */}
        <ScrollReveal delay={2}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: 'clamp(40px, 8vw, 120px)',
            borderTop: '1px solid rgba(0,0,0,0.08)',
            paddingTop: '60px',
          }}>
            {[
              { num: t('stats.publications'), label: t('stats.publicationsLabel') },
              { num: t('stats.countries'), label: t('stats.countriesLabel') },
              { num: t('stats.ranking'), label: t('stats.rankingLabel'), isGold: true },
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <div style={{
                  fontSize: 'clamp(32px, 4vw, 48px)',
                  fontWeight: 400,
                  color: stat.isGold ? 'var(--gold)' : 'var(--text)',
                  marginBottom: '8px',
                  letterSpacing: '-0.02em',
                }}>
                  {stat.num}
                </div>
                <div style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: 'var(--text-muted)',
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
