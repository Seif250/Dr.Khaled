'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import NanoParticles from '@/components/ui/NanoParticles';

export default function HeroSection() {
  const { t, language } = useLanguage();

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      background: 'var(--white)',
      paddingTop: '80px', // account for navbar
      overflow: 'hidden',
    }}>
      {/* Dynamic Nanoparticle Background */}
      <NanoParticles variant="hero" />

      <div className="section-container" style={{ width: '100%', position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 500px), 1fr))',
          gap: 'clamp(40px, 8vw, 100px)',
          alignItems: 'center',
        }}>
          {/* Text Content */}
          <div className="reveal revealed" style={{ order: language === 'ar' ? 2 : 1 }}>
            <div className="section-label">{t('hero.label')}</div>
            
            <h1 style={{
              fontSize: 'clamp(48px, 6vw, 84px)',
              lineHeight: 1.1,
              marginBottom: '32px',
              color: 'var(--text)',
            }}>
              {t('hero.headline1')}<br/>
              <span style={{ color: 'var(--deep-teal)' }}>{t('hero.headline2')}</span><br/>
              {t('hero.headline3')}
            </h1>

            <p style={{
              fontSize: 'clamp(18px, 1.5vw, 24px)',
              color: 'var(--text-secondary)',
              lineHeight: 1.6,
              marginBottom: '48px',
              maxWidth: '600px',
            }}>
              {t('hero.subheadline')}
            </p>

            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', alignItems: 'center' }}>
              <a href="#research" className="btn-primary">
                {t('hero.cta1')}
              </a>
              <a href="#journey" className="btn-link">
                {t('hero.cta2')}
              </a>
            </div>
          </div>

          {/* Editorial Image */}
          <div className="reveal revealed reveal-delay-2" style={{ order: language === 'ar' ? 1 : 2 }}>
            <div style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '4/5',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 40px 100px -20px rgba(15, 118, 110, 0.15)',
            }}>
              {/* Soft gradient behind */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top right, var(--light-gray), var(--white))',
                zIndex: -1,
              }} />
              
              <Image
                src="/images/dr-khaled-casual.png"
                alt="Professor Khaled Fathi Greish"
                fill
                style={{ objectFit: 'cover', objectPosition: 'center top' }}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              
              {/* Very subtle vignette */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.2) 0%, transparent 40%)',
                pointerEvents: 'none',
              }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
