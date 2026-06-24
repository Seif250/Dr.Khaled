'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';
import NanoParticles from '@/components/ui/NanoParticles';

export default function GRNanoHero() {
  const { t, language } = useLanguage();

  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      background: 'var(--white)',
      paddingTop: '100px',
      paddingBottom: '40px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle nanoparticle background */}
      <NanoParticles variant="hero" />

      <div className="section-container" style={{ width: '100%', position: 'relative', zIndex: 2 }}>
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

        {/* Dr. Khaled Image — Centered below with particles behind */}
        <ScrollReveal delay={3}>
          <div style={{
            marginTop: 'clamp(60px, 8vw, 100px)',
            position: 'relative',
            maxWidth: '900px',
            margin: 'clamp(60px, 8vw, 100px) auto 0',
          }}>
            {/* Glow effect behind image */}
            <div style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: '80%',
              height: '80%',
              background: 'radial-gradient(ellipse, rgba(79, 168, 216, 0.12) 0%, rgba(15, 118, 110, 0.06) 40%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(40px)',
              zIndex: 0,
            }} />

            <div className="editorial-image" style={{
              aspectRatio: '16/9',
              position: 'relative',
              zIndex: 1,
              borderRadius: '20px',
              overflow: 'hidden',
            }}>
              <Image
                src="/images/dr-khaled-lab.png"
                alt="Dr. Khaled Greish in the laboratory"
                fill
                priority
                style={{ objectFit: 'cover', objectPosition: 'center 20%' }}
                sizes="(max-width: 768px) 100vw, 900px"
              />
              {/* Subtle gradient overlay at bottom */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '40%',
                background: 'linear-gradient(to top, rgba(10, 22, 40, 0.3), transparent)',
                pointerEvents: 'none',
              }} />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
