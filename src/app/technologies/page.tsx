'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function TechnologiesPage() {
  const { t } = useLanguage();

  return (
    <main style={{ padding: '160px 0 80px', background: 'var(--white)', minHeight: '100vh' }}>
      <div className="section-container">
        <ScrollReveal>
          <div className="section-label">{t('tech.label')}</div>
          <h1 style={{
            fontSize: 'clamp(48px, 6vw, 84px)',
            lineHeight: 1.1,
            marginBottom: '80px',
          }}>
            {t('tech.headline')}
          </h1>
        </ScrollReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '120px' }}>
          {/* Nano Silver */}
          <ScrollReveal delay={1}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
              gap: '60px',
              alignItems: 'center',
            }}>
              <div className="editorial-image" style={{ aspectRatio: '16/10', background: 'var(--light-gray)' }}>
                {/* Placeholder for Nano Silver image */}
                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                  Nano Silver Image
                </div>
              </div>
              <div>
                <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', marginBottom: '24px' }}>
                  {t('tech.nanoSilver')}
                </h2>
                <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '32px' }}>
                  {t('tech.nanoSilverDesc')}
                </p>
                <Link href="/technologies/nano-silver" className="btn-link" style={{ fontSize: '18px' }}>
                  {t('tech.learnMore')} →
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Nano Copper */}
          <ScrollReveal delay={2}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
              gap: '60px',
              alignItems: 'center',
            }}>
              <div className="editorial-image" style={{ aspectRatio: '16/10', background: 'var(--light-gray)' }}>
                {/* Placeholder for Nano Copper image */}
                <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
                  Nano Copper Image
                </div>
              </div>
              <div>
                <h2 style={{ fontSize: 'clamp(32px, 4vw, 48px)', marginBottom: '24px' }}>
                  {t('tech.nanoCopper')}
                </h2>
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
    </main>
  );
}
