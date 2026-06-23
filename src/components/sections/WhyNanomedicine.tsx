'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function WhyNanomedicine() {
  const { t } = useLanguage();

  return (
    <section id="about" style={{ background: 'var(--white)' }}>
      <div className="section-container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
          gap: 'clamp(60px, 10vw, 120px)',
          alignItems: 'center',
        }}>
          {/* Editorial Image Side */}
          <ScrollReveal>
            <div className="editorial-image" style={{ aspectRatio: '3/4' }}>
              <Image
                src="/images/dr-khaled-lab.png"
                alt="Dr. Khaled Greish in the laboratory"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>

          {/* Text Side */}
          <div>
            <ScrollReveal>
              <div className="section-label">{t('why.label')}</div>
              <h2 style={{
                fontSize: 'clamp(36px, 4vw, 56px)',
                lineHeight: 1.2,
                marginBottom: '40px',
              }}>
                {t('why.headline')}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <p style={{ color: 'var(--text)', fontSize: 'clamp(18px, 1.2vw, 22px)' }}>
                  {t('why.p1')}
                </p>
                <p>
                  {t('why.p2')}
                </p>
                <p style={{ color: 'var(--text)', fontWeight: 500 }}>
                  {t('why.p3')}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
