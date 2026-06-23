'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Collaborations() {
  const { t } = useLanguage();

  const nodes = ['agu', 'kumamoto', 'utah', 'otago'];

  return (
    <section id="collaborations" style={{ background: 'var(--white)' }}>
      <div className="section-container">
        <ScrollReveal>
          <div className="section-label">{t('collaborations.label')}</div>
          <h2 style={{
            fontSize: 'clamp(36px, 4vw, 56px)',
            lineHeight: 1.2,
            marginBottom: '80px',
          }}>
            {t('collaborations.headline')}
          </h2>
        </ScrollReveal>

        {/* Minimal Grid List */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '40px',
          borderTop: '1px solid rgba(0,0,0,0.06)',
          paddingTop: '60px',
        }}>
          {nodes.map((node, i) => (
            <ScrollReveal key={node} delay={i + 1}>
              <div>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: 600,
                  color: 'var(--text)',
                  marginBottom: '12px',
                }}>
                  {t(`collaborations.${node}`)}
                </h3>
                <p style={{
                  fontSize: '15px',
                  color: 'var(--text-secondary)',
                  lineHeight: 1.6,
                }}>
                  {t(`collaborations.${node}Role`)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
