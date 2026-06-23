'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function ScienceBehindGRNano() {
  const { t, language } = useLanguage();

  return (
    <section style={{ background: 'var(--white)' }}>
      <div className="section-container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
          gap: 'clamp(60px, 10vw, 120px)',
          alignItems: 'center',
        }}>
          {/* Huge Image of Dr. Khaled */}
          <div style={{ order: language === 'ar' ? 2 : 1 }}>
            <ScrollReveal>
              <div className="editorial-image" style={{ aspectRatio: '4/5' }}>
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
              <div className="section-label">{t('rgnano.scienceBehindLabel')}</div>
              <h2 style={{
                fontSize: 'clamp(36px, 4vw, 56px)',
                lineHeight: 1.2,
                marginBottom: '32px',
                fontFamily: language === 'ar' ? 'var(--font-cairo)' : 'var(--font-outfit)',
              }}>
                {t('rgnano.scienceBehindHeadline')}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <p style={{
                fontSize: 'clamp(18px, 1.2vw, 22px)',
                color: 'var(--text-secondary)',
                lineHeight: 1.8,
                marginBottom: '48px',
              }}>
                {t('rgnano.scienceBehindDesc')}
              </p>

              <Link href="/about-dr-khaled" className="btn-link" style={{ fontSize: '18px' }}>
                {t('rgnano.scienceBehindLink')} →
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
