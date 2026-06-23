'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function GlobalRecognition() {
  const { t, language } = useLanguage();

  return (
    <section style={{ background: 'var(--dark)' }}>
      <div className="section-container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
          gap: 'clamp(60px, 10vw, 120px)',
          alignItems: 'center',
        }}>
          {/* Content */}
          <div style={{ order: language === 'ar' ? 2 : 1 }}>
            <ScrollReveal>
              <div className="section-label-light">{t('recognition.label')}</div>
              <h2 style={{
                fontSize: 'clamp(36px, 4vw, 56px)',
                lineHeight: 1.2,
                color: 'var(--white)',
                marginBottom: '40px',
              }}>
                {t('recognition.headline')}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '48px' }}>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: 'clamp(18px, 1.2vw, 22px)' }}>
                  {t('recognition.p1')}
                </p>
                <p style={{ color: 'rgba(255,255,255,0.6)' }}>
                  {t('recognition.p2')}
                </p>
              </div>

              {/* Minimal Top 2% indicator */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '16px',
              }}>
                <div style={{
                  fontSize: '32px',
                  fontWeight: 300,
                  color: 'var(--gold)',
                  fontFamily: 'var(--font-outfit)',
                  lineHeight: 1,
                }}>
                  {t('recognition.ranking')}
                </div>
                <div style={{
                  width: '1px',
                  height: '32px',
                  background: 'rgba(255,255,255,0.2)',
                }} />
                <div style={{
                  fontSize: '14px',
                  color: 'rgba(255,255,255,0.5)',
                  fontWeight: 500,
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}>
                  {t('recognition.rankingSource')}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Image */}
          <div style={{ order: language === 'ar' ? 1 : 2 }}>
            <ScrollReveal delay={2}>
              <div className="editorial-image" style={{ aspectRatio: '3/4' }}>
                <Image
                  src="/images/dr-khaled-formal.png"
                  alt="Global Recognition"
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
