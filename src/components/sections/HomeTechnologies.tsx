'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function HomeTechnologies() {
  const { t, language } = useLanguage();

  return (
    <section style={{ background: 'var(--off-white)', paddingBottom: '0' }}>
      <div className="section-container">
        <ScrollReveal>
          <div className="section-label">{t('tech.label')}</div>
          <h2 style={{
            fontSize: 'clamp(36px, 4vw, 56px)',
            lineHeight: 1.2,
            marginBottom: '80px',
            fontFamily: language === 'ar' ? 'var(--font-cairo)' : 'var(--font-outfit)',
          }}>
            {t('tech.headline')}
          </h2>
        </ScrollReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '120px' }}>
          
          {/* Nano Silver Full Width */}
          <ScrollReveal delay={1}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))',
              gap: 'clamp(40px, 6vw, 80px)',
              alignItems: 'center',
            }}>
              <div className="editorial-image" style={{ aspectRatio: '16/10', background: 'var(--white)' }}>
                {/* Visual placeholder or real image if available */}
                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                  [Nano Silver Visual]
                </div>
              </div>
              <div style={{ padding: '0 40px' }}>
                <h3 style={{ fontSize: 'clamp(32px, 3.5vw, 48px)', marginBottom: '24px' }}>
                  {t('tech.nanoSilver')}
                </h3>
                <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '32px' }}>
                  {t('tech.nanoSilverDesc')}
                </p>
                <Link href="/technologies/nano-silver" className="btn-link" style={{ fontSize: '18px' }}>
                  {t('tech.learnMore')} →
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Nano Copper Full Width (Reversed order) */}
          <ScrollReveal delay={2}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))',
              gap: 'clamp(40px, 6vw, 80px)',
              alignItems: 'center',
            }}>
              <div style={{ order: language === 'ar' ? 1 : 2 }} className="editorial-image">
                <div style={{ aspectRatio: '16/10', background: 'var(--white)', width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                  [Nano Copper Visual]
                </div>
              </div>
              <div style={{ order: language === 'ar' ? 2 : 1, padding: '0 40px' }}>
                <h3 style={{ fontSize: 'clamp(32px, 3.5vw, 48px)', marginBottom: '24px' }}>
                  {t('tech.nanoCopper')}
                </h3>
                <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '32px' }}>
                  {t('tech.nanoCopperDesc')}
                </p>
                <Link href="/technologies/nano-copper" className="btn-link" style={{ fontSize: '18px' }}>
                  {t('tech.learnMore')} →
                </Link>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
