'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function MissionSection() {
  const { t } = useLanguage();

  return (
    <section style={{
      background: 'var(--off-white)',
      borderTop: '1px solid rgba(0,0,0,0.04)',
      borderBottom: '1px solid rgba(0,0,0,0.04)',
    }}>
      <div className="section-container" style={{ textAlign: 'center', maxWidth: '1000px' }}>
        <ScrollReveal>
          <div className="section-label">{t('mission.label')}</div>
          
          <blockquote style={{
            fontSize: 'clamp(28px, 4vw, 48px)',
            lineHeight: 1.5,
            color: 'var(--text)',
            fontWeight: 400,
            letterSpacing: '-0.01em',
          }}>
            {t('mission.text')}
          </blockquote>
        </ScrollReveal>
      </div>
    </section>
  );
}
