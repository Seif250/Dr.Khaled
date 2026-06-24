'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function HomeTechnologies() {
  const { t, language } = useLanguage();

  return (
    <section style={{ background: 'var(--white)' }}>
      <div className="section-container">
        <ScrollReveal>
          <div className="section-label">{t('tech.label')}</div>
          <h2 style={{
            fontSize: 'clamp(36px, 4.5vw, 60px)',
            lineHeight: 1.15,
            marginBottom: '80px',
            fontFamily: language === 'ar' ? 'var(--font-cairo)' : 'var(--font-outfit)',
          }}>
            {t('tech.headline')}
          </h2>
        </ScrollReveal>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '120px' }}>
          
          {/* Nano Silver */}
          <ScrollReveal delay={1}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
              gap: 'clamp(40px, 6vw, 80px)',
              alignItems: 'center',
            }}>
              <div className="editorial-image" style={{
                aspectRatio: '16/10',
                borderRadius: '20px',
                overflow: 'hidden',
                order: language === 'ar' ? 2 : 1,
              }}>
                <Image
                  src="/images/nano-silver-tech.png"
                  alt="Nano Silver Technology Visualization"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div style={{ order: language === 'ar' ? 1 : 2 }}>
                <h3 style={{
                  fontSize: 'clamp(32px, 3.5vw, 48px)',
                  marginBottom: '24px',
                  letterSpacing: '-0.02em',
                }}>
                  {t('tech.nanoSilver')}
                </h3>
                <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '32px' }}>
                  {t('tech.nanoSilverDesc')}
                </p>
                <Link href="/technologies/nano-silver" className="btn-link" style={{ fontSize: '18px' }}>
                  {t('tech.learnMore')} →
                </Link>
              </div>
            </div>
          </ScrollReveal>

          {/* Nano Copper (Reversed) */}
          <ScrollReveal delay={2}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
              gap: 'clamp(40px, 6vw, 80px)',
              alignItems: 'center',
            }}>
              <div style={{ order: language === 'ar' ? 1 : 2 }} className="editorial-image">
                <div style={{
                  aspectRatio: '16/10',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  position: 'relative',
                  width: '100%',
                }}>
                  <Image
                    src="/images/nano-copper-tech.png"
                    alt="Nano Copper Technology Visualization"
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div style={{ order: language === 'ar' ? 2 : 1 }}>
                <h3 style={{
                  fontSize: 'clamp(32px, 3.5vw, 48px)',
                  marginBottom: '24px',
                  letterSpacing: '-0.02em',
                }}>
                  {t('tech.nanoCopper')}
                </h3>
                <p style={{ fontSize: '18px', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '32px' }}>
                  {t('tech.nanoCopperDesc')}
                </p>
                <Link href="/technologies/nano-copper" className="btn-link" style={{ fontSize: '18px' }}>
                  {t('tech.learnMore')} →
                </Link>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
