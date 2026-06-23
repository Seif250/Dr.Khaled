'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function NanoCopperPage() {
  const { t } = useLanguage();

  return (
    <main style={{ padding: '160px 0 80px', background: 'var(--white)', minHeight: '100vh' }}>
      <div className="section-container">
        <ScrollReveal>
          <div className="section-label">TECHNOLOGY</div>
          <h1 style={{
            fontSize: 'clamp(48px, 6vw, 84px)',
            lineHeight: 1.1,
            marginBottom: '40px',
          }}>
            {t('tech.nanoCopper')}
          </h1>
          <p style={{
            fontSize: 'clamp(20px, 2vw, 28px)',
            color: 'var(--text-secondary)',
            lineHeight: 1.6,
            maxWidth: '800px',
            marginBottom: '80px',
          }}>
            {t('tech.nanoCopperDesc')}
          </p>
        </ScrollReveal>

        {/* Content sections */}
        <div style={{ display: 'grid', gap: '80px', borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '80px' }}>
          
          <ScrollReveal delay={1}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
              <h2 style={{ fontSize: '32px' }}>{t('tech.evidence')}</h2>
              <div style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                <p>Detailed scientific evidence and clinical study summaries for Nano Copper will be placed here.</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', borderTop: '1px solid rgba(0,0,0,0.1)', paddingTop: '80px' }}>
              <h2 style={{ fontSize: '32px' }}>{t('tech.applications')}</h2>
              <div style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                <p>Specific therapeutic applications and use cases for Nano Copper.</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Section at bottom */}
          <ScrollReveal delay={3}>
            <div style={{
              background: 'var(--off-white)',
              padding: '80px',
              textAlign: 'center',
              marginTop: '40px',
            }}>
              <h2 style={{ fontSize: '36px', marginBottom: '24px' }}>{t('tech.contactLabel')}</h2>
              <a href="mailto:contact@rgnano.com" className="btn-link" style={{ fontSize: '20px' }}>
                {t('tech.contactBtn')}
              </a>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </main>
  );
}
