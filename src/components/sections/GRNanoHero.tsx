'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';
import NanoParticles from '@/components/ui/NanoParticles';

export default function GRNanoHero() {
  const { t, language } = useLanguage();

  return (
    <section style={{
      minHeight: '70vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      background: 'var(--white)',
      paddingTop: '120px',
      paddingBottom: '0px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle nanoparticle background */}
      <NanoParticles variant="hero" />

      <div className="section-container" style={{ width: '100%', position: 'relative', zIndex: 2, paddingBottom: '0px' }}>
        {/* Text Content — Centered */}
        <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
          <ScrollReveal>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px 20px',
              background: 'rgba(15, 118, 110, 0.08)',
              borderRadius: '60px',
              marginBottom: '32px',
            }}>
              <div style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: 'var(--emerald)',
              }} />
              <span style={{
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'var(--deep-teal)',
              }}>
                {t('rgnano.heroLabel')}
              </span>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h1 style={{
              fontSize: 'clamp(44px, 7vw, 88px)',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              marginBottom: '28px',
              fontFamily: language === 'ar' ? 'var(--font-cairo)' : 'var(--font-outfit)',
              fontWeight: 700,
            }}>
              <span style={{ display: 'block' }}>
                {language === 'ar' ? 'الارتقاء بتكنولوجيا النانو' : 'Advancing Nanotechnology'}
              </span>
              <span style={{
                display: 'block',
                background: 'linear-gradient(135deg, var(--deep-teal), var(--serene-blue))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>
                {language === 'ar' ? 'إلى ما وراء المختبر' : 'Beyond The Laboratory'}
              </span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={1}>
            <p style={{
              fontSize: 'clamp(17px, 1.4vw, 22px)',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              marginBottom: '48px',
              maxWidth: '640px',
              margin: '0 auto 48px',
            }}>
              {t('rgnano.heroDesc')}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={2}>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/technologies" className="btn-primary">
                {t('tech.exploreTech')}
              </Link>
              <Link href="/about-dr-khaled" className="btn-secondary">
                {t('rgnano.learnMore')}
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
