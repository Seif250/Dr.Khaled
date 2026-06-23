'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function AboutRGNano() {
  const { t } = useLanguage();

  return (
    <section id="about" style={{ background: 'var(--off-white)' }}>
      <div className="section-container">
        <ScrollReveal>
          <div className="section-label">{t('rgnano.aboutLabel')}</div>
          <h2 style={{
            fontSize: 'clamp(36px, 4vw, 56px)',
            lineHeight: 1.2,
            marginBottom: '80px',
            maxWidth: '800px',
          }}>
            {t('rgnano.aboutHeadline')}
          </h2>
        </ScrollReveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(40px, 6vw, 80px)',
        }}>
          {/* Vision */}
          <ScrollReveal delay={1}>
            <div>
              <h3 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '16px' }}>
                Vision
              </h3>
              <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {t('rgnano.aboutVision')}
              </p>
            </div>
          </ScrollReveal>

          {/* Mission */}
          <ScrollReveal delay={2}>
            <div>
              <h3 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '16px' }}>
                Mission
              </h3>
              <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {t('rgnano.aboutMission')}
              </p>
            </div>
          </ScrollReveal>

          {/* How we work */}
          <ScrollReveal delay={3}>
            <div>
              <h3 style={{ fontSize: '24px', fontWeight: 600, marginBottom: '16px' }}>
                {t('rgnano.howItWorks')}
              </h3>
              <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                {t('rgnano.howItWorksDesc')}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
