'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function MediaTalks() {
  const { t } = useLanguage();

  const mediaItems = ['talks', 'lectures', 'interviews', 'panels'];

  return (
    <section id="media" style={{ background: 'var(--off-white)' }}>
      <div className="section-container">
        <ScrollReveal>
          <div className="section-label">{t('media.label')}</div>
          <h2 style={{
            fontSize: 'clamp(36px, 4vw, 56px)',
            lineHeight: 1.2,
            marginBottom: '80px',
          }}>
            {t('media.headline')}
          </h2>
        </ScrollReveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '60px',
        }}>
          {mediaItems.map((item, i) => (
            <ScrollReveal key={item} delay={i + 1}>
              <div style={{
                borderLeft: '2px solid var(--green)',
                paddingLeft: '24px',
              }}>
                <h3 style={{
                  fontSize: '20px',
                  fontWeight: 600,
                  color: 'var(--text)',
                  marginBottom: '12px',
                }}>
                  {t(`media.${item}`)}
                </h3>
                <p style={{
                  fontSize: '15px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                }}>
                  {t(`media.${item}Desc`)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
