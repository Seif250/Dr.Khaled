'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function ScientificLeadershipBrief() {
  const { t, language } = useLanguage();

  return (
    <section id="leadership" style={{ background: 'var(--dark)', color: 'var(--white)' }}>
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
              <div className="section-label-light">{t('rgnano.leadershipLabel')}</div>
              <h2 style={{
                fontSize: 'clamp(36px, 4vw, 56px)',
                lineHeight: 1.2,
                marginBottom: '32px',
                fontFamily: language === 'ar' ? 'var(--font-cairo)' : 'var(--font-outfit)',
              }}>
                {language === 'ar' ? 'د. خالد جريش' : 'Dr. Khaled Greish'}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <p style={{
                fontSize: 'clamp(18px, 1.2vw, 22px)',
                color: 'rgba(255,255,255,0.7)',
                lineHeight: 1.8,
                marginBottom: '48px',
              }}>
                {t('rgnano.leadershipDesc')}
              </p>

              {/* Stats Grid */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '24px',
                marginBottom: '48px',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                paddingTop: '32px',
              }}>
                <div>
                  <div style={{ fontSize: '32px', fontWeight: 300, color: 'var(--gold)', marginBottom: '8px' }}>Top 2%</div>
                  <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'rgba(255,255,255,0.5)' }}>Global Ranking</div>
                </div>
                <div>
                  <div style={{ fontSize: '32px', fontWeight: 300, color: 'var(--green)', marginBottom: '8px' }}>170+</div>
                  <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'rgba(255,255,255,0.5)' }}>Publications</div>
                </div>
                <div>
                  <div style={{ fontSize: '32px', fontWeight: 300, color: 'var(--green)', marginBottom: '8px' }}>12,000+</div>
                  <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'rgba(255,255,255,0.5)' }}>Citations</div>
                </div>
              </div>

              <Link href="/about-dr-khaled" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--white)',
                textDecoration: 'none',
                borderBottom: '1px solid var(--white)',
                paddingBottom: '4px',
                fontSize: '16px',
                fontWeight: 500,
              }}>
                {t('rgnano.exploreBio')} →
              </Link>
            </ScrollReveal>
          </div>

          {/* Image */}
          <div style={{ order: language === 'ar' ? 1 : 2 }}>
            <ScrollReveal delay={2}>
              <div className="editorial-image" style={{ aspectRatio: '3/4' }}>
                <Image
                  src="/images/dr-khaled-formal.png"
                  alt="Dr. Khaled Greish"
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
