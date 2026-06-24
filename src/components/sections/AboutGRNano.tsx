'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Image from 'next/image';

export default function AboutGRNano() {
  const { t, language } = useLanguage();

  return (
    <section id="about" style={{ background: 'var(--white)' }}>
      <div className="section-container" style={{ paddingTop: 'clamp(40px, 6vw, 80px)' }}>
        <ScrollReveal>
          <div className="section-label">{t('rgnano.aboutLabel')}</div>
          <h2 style={{
            fontSize: 'clamp(36px, 4.5vw, 60px)',
            lineHeight: 1.15,
            marginBottom: '80px',
            maxWidth: '800px',
            fontFamily: language === 'ar' ? 'var(--font-cairo)' : 'var(--font-outfit)',
          }}>
            {t('rgnano.aboutHeadline')}
          </h2>
        </ScrollReveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
          gap: 'clamp(60px, 8vw, 100px)',
          alignItems: 'start',
        }}>
          {/* Text Content */}
          <div style={{ display: 'grid', gap: '48px', order: language === 'ar' ? 2 : 1 }}>
            <ScrollReveal delay={1}>
              <div>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: 600,
                  marginBottom: '16px',
                  color: 'var(--deep-teal)',
                }}>
                  {language === 'ar' ? 'الرؤية' : 'Vision'}
                </h3>
                <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  {t('rgnano.aboutVision')}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={2}>
              <div>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: 600,
                  marginBottom: '16px',
                  color: 'var(--deep-teal)',
                }}>
                  {language === 'ar' ? 'من نحن' : 'Who We Are'}
                </h3>
                <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  {t('rgnano.aboutMission')}
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={3}>
              <div>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: 600,
                  marginBottom: '16px',
                  color: 'var(--deep-teal)',
                }}>
                  {t('rgnano.howItWorks')}
                </h3>
                <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  {t('rgnano.howItWorksDesc')}
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Lab Image — Larger */}
          <div style={{ order: language === 'ar' ? 1 : 2 }}>
            <ScrollReveal delay={2}>
              <div className="editorial-image" style={{ aspectRatio: '2/3', borderRadius: '20px' }}>
                <Image
                  src="/images/dr-khaled-lab.png"
                  alt="GR Nano Laboratory"
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
