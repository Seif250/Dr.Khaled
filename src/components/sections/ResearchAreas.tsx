'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function ResearchAreas() {
  const { t } = useLanguage();

  const areas = ['r1', 'r2', 'r3', 'r4', 'r5'];

  return (
    <section id="research" style={{ background: 'var(--off-white)' }}>
      <div className="section-container">
        <ScrollReveal>
          <div className="section-label">{t('research.label')}</div>
        </ScrollReveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))',
          gap: 'clamp(40px, 8vw, 100px)',
          alignItems: 'flex-start',
        }}>
          {/* Header */}
          <ScrollReveal delay={1}>
            <h2 style={{
              fontSize: 'clamp(36px, 4vw, 56px)',
              lineHeight: 1.2,
              position: 'sticky',
              top: '120px',
            }}>
              {t('research.headline')}
            </h2>
          </ScrollReveal>

          {/* Typography List */}
          <div style={{ paddingTop: '10px' }}>
            {areas.map((key, i) => (
              <ScrollReveal key={key} delay={i + 2}>
                <div className="research-item">
                  <div className="research-item-title">
                    {t(`research.${key}title`)}
                  </div>
                  <div className="research-item-desc">
                    <p style={{ fontSize: '16px', marginTop: '12px' }}>
                      {t(`research.${key}desc`)}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
