'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';
import NanoParticles from '@/components/ui/NanoParticles';

export default function ScientificLeadershipBrief() {
  const { t, language } = useLanguage();

  return (
    <section id="leadership" style={{
      background: 'linear-gradient(160deg, #0A1628 0%, #0A2E2A 50%, #0F1D32 100%)',
      color: 'var(--white)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <NanoParticles variant="dark" particleCount={20} />

      <div className="section-container" style={{ position: 'relative', zIndex: 2 }}>
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
                fontSize: 'clamp(36px, 4.5vw, 60px)',
                lineHeight: 1.15,
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

              {/* Stats Grid — Updated colors */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '24px',
                marginBottom: '48px',
                borderTop: '1px solid rgba(255,255,255,0.08)',
                paddingTop: '32px',
              }}>
                <div>
                  <div style={{ fontSize: '32px', fontWeight: 300, color: 'var(--serene-blue)', marginBottom: '8px', letterSpacing: '-0.02em' }}>Top 2%</div>
                  <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'rgba(255,255,255,0.4)' }}>Global Ranking</div>
                </div>
                <div>
                  <div style={{ fontSize: '32px', fontWeight: 300, color: 'var(--emerald)', marginBottom: '8px', letterSpacing: '-0.02em' }}>170+</div>
                  <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'rgba(255,255,255,0.4)' }}>Publications</div>
                </div>
                <div>
                  <div style={{ fontSize: '32px', fontWeight: 300, color: 'var(--emerald)', marginBottom: '8px', letterSpacing: '-0.02em' }}>12,000+</div>
                  <div style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'rgba(255,255,255,0.4)' }}>Citations</div>
                </div>
              </div>

              <Link href="/about-dr-khaled" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                color: 'var(--white)',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.3)',
                paddingBottom: '4px',
                fontSize: '16px',
                fontWeight: 500,
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.borderBottomColor = 'var(--serene-blue)'; e.currentTarget.style.color = 'var(--serene-blue)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderBottomColor = 'rgba(255,255,255,0.3)'; e.currentTarget.style.color = 'var(--white)'; }}
              >
                {t('rgnano.exploreBio')} →
              </Link>
            </ScrollReveal>
          </div>

          {/* Image — Full color, larger */}
          <div style={{ order: language === 'ar' ? 1 : 2 }}>
            <ScrollReveal delay={2}>
              <div className="editorial-image" style={{ aspectRatio: '3/4', borderRadius: '20px' }}>
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
