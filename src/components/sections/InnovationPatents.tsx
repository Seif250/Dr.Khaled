'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function InnovationPatents() {
  const { t } = useLanguage();

  const patents = ['patent1', 'patent2', 'patent3'];

  return (
    <section style={{ background: 'var(--off-white)' }}>
      <div className="section-container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
          gap: 'clamp(60px, 10vw, 120px)',
        }}>
          {/* Content */}
          <div>
            <ScrollReveal>
              <div className="section-label">{t('innovation.label')}</div>
              <h2 style={{
                fontSize: 'clamp(36px, 4vw, 56px)',
                lineHeight: 1.2,
                marginBottom: '40px',
              }}>
                {t('innovation.headline')}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <p style={{
                fontSize: 'clamp(18px, 1.2vw, 22px)',
                color: 'var(--text)',
                lineHeight: 1.8,
              }}>
                {t('innovation.desc')}
              </p>
            </ScrollReveal>
          </div>

          {/* Minimal Patent List */}
          <div style={{ paddingTop: '10px' }}>
            {patents.map((patent, i) => (
              <ScrollReveal key={patent} delay={i + 2}>
                <div style={{
                  padding: '24px 0',
                  borderBottom: '1px solid rgba(0,0,0,0.06)',
                }}>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: 600,
                    marginBottom: '8px',
                    color: 'var(--text)',
                  }}>
                    {t(`innovation.${patent}`)}
                  </h3>
                  <p style={{
                    fontSize: '15px',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.6,
                  }}>
                    {t(`innovation.${patent}desc`)}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
