'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';
import NanoParticles from '@/components/ui/NanoParticles';

export default function ScienceBehindGRNano() {
  const { t, language } = useLanguage();

  return (
    <section style={{
      background: 'linear-gradient(160deg, #0A1628 0%, #0A2E2A 50%, #0F1D32 100%)',
      color: 'var(--white)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Nanoparticle animation for the background */}
      <NanoParticles variant="dark" particleCount={20} />

      <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
          gap: 'clamp(60px, 10vw, 120px)',
          alignItems: 'center',
        }}>
          {/* Image of Dr. Khaled — Larger */}
          <div style={{ order: language === 'ar' ? 2 : 1 }}>
            <ScrollReveal>
              <div className="editorial-image" style={{ aspectRatio: '3/4', borderRadius: '20px' }}>
                <Image
                  src="/images/dr-khaled-casual.png"
                  alt="Professor Khaled Greish"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Content */}
          <div style={{ order: language === 'ar' ? 1 : 2 }}>
            <ScrollReveal delay={1}>
              <div className="section-label-light">{t('rgnano.scienceBehindLabel')}</div>
              <h2 style={{
                fontSize: 'clamp(36px, 4.5vw, 60px)',
                lineHeight: 1.15,
                marginBottom: '32px',
                fontFamily: language === 'ar' ? 'var(--font-cairo)' : 'var(--font-outfit)',
                color: 'var(--white)',
              }}>
                {t('rgnano.scienceBehindHeadline')}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <p style={{
                fontSize: 'clamp(18px, 1.2vw, 22px)',
                color: 'rgba(255, 255, 255, 0.7)',
                lineHeight: 1.8,
                marginBottom: '48px',
              }}>
                {t('rgnano.scienceBehindDesc')}
              </p>

              {/* Research → Innovation → Technology → Product flow */}
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '48px',
                flexWrap: 'wrap',
              }}>
                {['Research', 'Innovation', 'Technology', 'Product'].map((step, i) => (
                  <React.Fragment key={step}>
                    <span style={{
                      padding: '6px 16px',
                      borderRadius: '60px',
                      background: i === 0 ? 'rgba(16, 185, 129, 0.15)' : 'rgba(79, 168, 216, 0.12)',
                      color: i === 0 ? 'var(--emerald)' : 'var(--serene-blue)',
                      fontSize: '13px',
                      fontWeight: 600,
                      letterSpacing: '0.02em',
                    }}>
                      {step}
                    </span>
                    {i < 3 && (
                      <span style={{ color: 'rgba(255, 255, 255, 0.3)', fontSize: '16px' }}>→</span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              <Link href="/about-dr-khaled" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--white)',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.3)',
                paddingBottom: '4px',
                fontSize: '18px',
                fontWeight: 500,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderBottomColor = 'var(--serene-blue)'; e.currentTarget.style.color = 'var(--serene-blue)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderBottomColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = 'var(--white)'; }}
              >
                {t('rgnano.scienceBehindLink')} →
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
