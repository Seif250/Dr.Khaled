'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function RGNanoHero() {
  const { t, language } = useLanguage();

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: 'var(--white)',
      paddingTop: '80px', // Account for navbar
    }}>
      <div className="section-container" style={{ width: '100%' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
          <ScrollReveal>
            <div className="section-label" style={{ justifyContent: 'center' }}>
              {t('rgnano.heroLabel')}
            </div>
            
            <h1 style={{
              fontSize: 'clamp(48px, 6vw, 84px)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              marginBottom: '32px',
              fontFamily: language === 'ar' ? 'var(--font-cairo)' : 'var(--font-outfit)',
            }}>
              {t('rgnano.heroHeadline')}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <p style={{
              fontSize: 'clamp(18px, 1.5vw, 24px)',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              maxWidth: '600px',
              margin: '0 auto 48px',
            }}>
              {t('rgnano.heroDesc')}
            </p>

            <a href="#about" className="btn-link" style={{ fontSize: '18px' }}>
              {t('tech.learnMore')}
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
