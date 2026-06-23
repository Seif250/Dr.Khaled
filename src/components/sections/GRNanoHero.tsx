'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function GRNanoHero() {
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
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))',
          gap: 'clamp(60px, 8vw, 120px)',
          alignItems: 'center',
        }}>
          {/* Content */}
          <div style={{ order: language === 'ar' ? 2 : 1 }}>
            <ScrollReveal>
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
                marginBottom: '48px',
              }}>
                {t('rgnano.heroDesc')}
              </p>

              <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
                <Link href="/technologies" className="btn-link" style={{ fontSize: '18px' }}>
                  {t('tech.exploreTech')}
                </Link>
                <Link href="/about-dr-khaled" className="btn-link" style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>
                  {t('rgnano.learnMore')}
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* Massive Image */}
          <div style={{ order: language === 'ar' ? 1 : 2 }}>
            <ScrollReveal delay={2}>
              <div className="editorial-image" style={{ aspectRatio: '1/1', background: 'var(--white)' }}>
                <Image
                  src="/images/nanomedicine-viz.png"
                  alt="Nanoparticles"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
