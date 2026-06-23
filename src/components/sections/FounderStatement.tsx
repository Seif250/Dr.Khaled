'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function FounderStatement() {
  const { t, language } = useLanguage();

  return (
    <section style={{ background: 'var(--dark)', color: 'var(--white)', position: 'relative', overflow: 'hidden' }}>
      <div className="section-container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
          gap: 'clamp(60px, 8vw, 120px)',
          alignItems: 'center',
        }}>
          
          {/* Quote */}
          <div style={{ order: language === 'ar' ? 2 : 1 }}>
            <ScrollReveal>
              <h2 style={{
                fontSize: 'clamp(40px, 5vw, 64px)',
                lineHeight: 1.2,
                fontWeight: 300,
                marginBottom: '48px',
                fontFamily: language === 'ar' ? 'var(--font-cairo)' : 'var(--font-outfit)',
              }}>
                &quot;{t('rgnano.founderStatementQuote')}&quot;
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ fontSize: '24px', fontWeight: 600 }}>
                  {language === 'ar' ? 'البروفيسور خالد جريش' : 'Prof. Khaled Greish'}
                </div>
                <div style={{ fontSize: '16px', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                  Scientific Founder, GR Nano
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Image */}
          <div style={{ order: language === 'ar' ? 1 : 2 }}>
            <ScrollReveal delay={2}>
              <div className="editorial-image" style={{ aspectRatio: '3/4', position: 'relative' }}>
                <Image
                  src="/images/dr-khaled-headshot.png"
                  alt="Prof. Khaled Greish"
                  fill
                  style={{ objectFit: 'cover', filter: 'grayscale(100%) contrast(1.1)' }}
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
