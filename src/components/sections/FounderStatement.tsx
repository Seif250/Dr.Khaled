'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';
import NanoParticles from '@/components/ui/NanoParticles';

export default function FounderStatement() {
  const { t, language } = useLanguage();

  const isAr = language === 'ar';

  return (
    <section style={{
      background: 'linear-gradient(160deg, #0A1628 0%, #0A2E2A 60%, #0F1D32 100%)',
      color: 'var(--white)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <NanoParticles variant="dark" particleCount={15} />

      <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
          gap: 'clamp(60px, 8vw, 120px)',
          alignItems: 'center',
        }}>
          
          {/* Quote Column */}
          <div style={{ textAlign: isAr ? 'right' : 'left' }}>
            <ScrollReveal>
              <div style={{
                width: '48px',
                height: '3px',
                background: 'linear-gradient(90deg, var(--serene-blue), var(--emerald))',
                borderRadius: '2px',
                marginBottom: '40px',
                marginLeft: isAr ? 'auto' : '0',
                marginRight: isAr ? '0' : 'auto',
              }} />
              <h2 style={{
                fontSize: 'clamp(24px, 2.5vw, 36px)',
                lineHeight: 1.4,
                fontWeight: 300,
                marginBottom: '48px',
                fontFamily: isAr ? 'var(--font-cairo)' : 'var(--font-outfit)',
              }}>
                &quot;{t('rgnano.founderStatementQuote')}&quot;
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ fontSize: '24px', fontWeight: 600 }}>
                  {isAr ? 'البروفيسور خالد جريش' : 'Prof. Khaled Greish'}
                </div>
                <div style={{
                  fontSize: '14px',
                  color: 'var(--serene-blue)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.12em',
                  fontWeight: 500,
                }}>
                  {isAr ? 'المؤسس العلمي، جي آر نانو' : 'Scientific Founder, GR Nano'}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Image Column */}
          <div>
            <ScrollReveal delay={2}>
              <div className="editorial-image" style={{ aspectRatio: '3/4', position: 'relative', borderRadius: '20px' }}>
                <Image
                  src="/images/dr-khaled-headshot.png"
                  alt="Prof. Khaled Greish"
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
