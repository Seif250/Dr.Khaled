'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function PersonalVision() {
  const { t, language } = useLanguage();

  return (
    <section style={{ background: 'var(--dark)', color: 'var(--white)' }}>
      <div className="section-container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
          gap: 'clamp(60px, 10vw, 120px)',
          alignItems: 'center',
        }}>
          {/* Portrait Image */}
          <div style={{ order: language === 'ar' ? 2 : 1 }}>
            <ScrollReveal>
            <div className="editorial-image" style={{ aspectRatio: '3/4' }}>
              <Image
                src="/images/dr-khaled-headshot.png"
                alt={t('vision.author')}
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </ScrollReveal>
          </div>


          {/* Quote & Message */}
          <div style={{ order: language === 'ar' ? 1 : 2 }}>
            <ScrollReveal delay={1}>
              <div className="section-label-light">{t('vision.label')}</div>
              
              <blockquote style={{
                fontSize: 'clamp(32px, 4vw, 48px)',
                lineHeight: 1.3,
                fontWeight: 300,
                color: 'var(--white)',
                marginBottom: '40px',
                fontFamily: language === 'ar' ? 'var(--font-cairo)' : 'var(--font-outfit)',
              }}>
                &quot;{t('vision.quote')}&quot;
              </blockquote>

              <p style={{
                color: 'rgba(255,255,255,0.7)',
                fontSize: 'clamp(18px, 1.2vw, 22px)',
                lineHeight: 1.8,
                marginBottom: '48px',
              }}>
                {t('vision.message')}
              </p>

              <div>
                <div style={{
                  color: 'var(--white)',
                  fontWeight: 600,
                  fontSize: '18px',
                  marginBottom: '4px',
                }}>
                  {t('vision.author')}
                </div>
                <div style={{
                  color: 'var(--green)',
                  fontSize: '14px',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                }}>
                  {t('vision.role')}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
