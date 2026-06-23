'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import MolecularBackground from '@/components/ui/MolecularBackground';

export default function HeroSection() {
  const { t, language } = useLanguage();

  const stats = [
    { num: t('hero.stat1num'), label: t('hero.stat1label') },
    { num: t('hero.stat2num'), label: t('hero.stat2label') },
    { num: t('hero.stat3num'), label: t('hero.stat3label') },
    { num: t('hero.stat4num'), label: t('hero.stat4label'), isGold: true },
  ];

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #071426 0%, #0C1E3A 40%, #071426 80%, #0A1830 100%)',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      overflow: 'hidden',
    }}>
      <MolecularBackground variant="dark" />

      {/* Ambient glow blobs */}
      <div style={{
        position: 'absolute',
        top: '5%',
        right: language === 'ar' ? 'auto' : '-5%',
        left: language === 'ar' ? '-5%' : 'auto',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(ellipse, rgba(14,165,164,0.08) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: language === 'ar' ? 'auto' : '5%',
        right: language === 'ar' ? '5%' : 'auto',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(ellipse, rgba(0,212,166,0.05) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        top: '40%',
        left: '50%',
        width: '800px',
        height: '800px',
        background: 'radial-gradient(ellipse, rgba(212,166,63,0.03) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        transform: 'translateX(-50%)',
      }} />

      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '9rem clamp(1.5rem, 4vw, 3rem) 2rem',
        position: 'relative',
        zIndex: 1,
        width: '100%',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 420px), 1fr))',
          gap: 'clamp(2rem, 5vw, 4rem)',
          alignItems: 'center',
        }}>
          {/* Text Content */}
          <div style={{ order: language === 'ar' ? 2 : 1 }}>
            {/* Badge */}
            <div className="animate-fade-in-up" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.5rem 1.25rem',
              background: 'linear-gradient(135deg, rgba(212,166,63,0.15) 0%, rgba(212,166,63,0.05) 100%)',
              border: '1px solid rgba(212,166,63,0.3)',
              borderRadius: '100px',
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
              textTransform: 'uppercase' as const,
              color: '#D4A63F',
              marginBottom: '2rem',
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              {t('hero.badge')}
            </div>

            {/* Headline */}
            <h1 className="font-display" style={{
              fontSize: 'clamp(2.75rem, 5.5vw, 4.5rem)',
              fontWeight: 800,
              lineHeight: 1.08,
              color: '#ffffff',
              marginBottom: '1.75rem',
              animation: 'fade-in-up 0.8s ease-out 0.2s both',
            }}>
              {t('hero.headline1')}{' '}
              <span style={{
                background: 'linear-gradient(135deg, #0EA5A4, #00D4A6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}>{t('hero.headline2')}</span>
              <br />
              {t('hero.headline3')}
            </h1>

            {/* Subheadline */}
            <p style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.8,
              marginBottom: '2.5rem',
              maxWidth: '540px',
              animation: 'fade-in-up 0.8s ease-out 0.4s both',
            }}>
              {t('hero.subheadline')}
            </p>

            {/* Buttons */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              animation: 'fade-in-up 0.8s ease-out 0.6s both',
            }}>
              <a href="#research" className="btn-primary">
                {t('hero.cta1')}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={language === 'ar' ? 'M19 12H5' : 'M5 12h14'} />
                  <path d={language === 'ar' ? 'M12 19l-7-7 7-7' : 'M12 5l7 7-7 7'} />
                </svg>
              </a>
              <a href="#journey" className="btn-secondary">
                {t('hero.cta2')}
              </a>
            </div>
          </div>

          {/* Portrait — 40% bigger with glow + abstract shape */}
          <div style={{
            order: language === 'ar' ? 1 : 2,
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
          }}>
            {/* Abstract Shape Behind */}
            <svg className="hero-abstract-shape animate-float-slow" viewBox="0 0 500 500" style={{
              position: 'absolute',
              width: '140%',
              height: '140%',
              top: '-20%',
              left: '-20%',
              zIndex: 0,
              pointerEvents: 'none',
            }}>
              <defs>
                <linearGradient id="abstractGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0EA5A4" stopOpacity="0.15" />
                  <stop offset="50%" stopColor="#00D4A6" stopOpacity="0.08" />
                  <stop offset="100%" stopColor="#0EA5A4" stopOpacity="0.12" />
                </linearGradient>
              </defs>
              <path d="M250,50 C350,50 450,120 450,250 C450,350 380,430 280,450 C180,470 80,400 50,280 C20,180 120,50 250,50Z" fill="url(#abstractGrad)" />
            </svg>

            {/* Second organic shape */}
            <div className="animate-float-medium" style={{
              position: 'absolute',
              width: '120%',
              height: '120%',
              background: 'linear-gradient(225deg, rgba(14,165,164,0.06) 0%, rgba(0,212,166,0.04) 100%)',
              borderRadius: '40% 60% 70% 30% / 40% 70% 30% 60%',
              top: '-10%',
              left: '-10%',
              zIndex: 0,
            }} />

            {/* Portrait Image Container */}
            <div className="hero-portrait-container" style={{
              position: 'relative',
              zIndex: 1,
              width: 'clamp(340px, 48vw, 560px)',
              height: 'clamp(420px, 60vw, 680px)',
            }}>
              {/* Glow effect */}
              <div className="hero-image-glow" />

              {/* Image */}
              <div style={{
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                position: 'relative',
                borderRadius: '30% 70% 60% 40% / 50% 40% 60% 50%',
                border: '2px solid rgba(14,165,164,0.15)',
              }}>
                <Image
                  src="/images/dr-khaled-casual.png"
                  alt="Professor Khaled Fathi Greish"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  priority
                  sizes="(max-width: 768px) 340px, 560px"
                />
                {/* Bottom gradient fade */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '40%',
                  background: 'linear-gradient(to top, rgba(7,20,38,0.8) 0%, transparent 100%)',
                  pointerEvents: 'none',
                }} />
              </div>

              {/* Decorative orbit ring */}
              <div className="animate-spin-slow" style={{
                position: 'absolute',
                width: '115%',
                height: '115%',
                top: '-7.5%',
                left: '-7.5%',
                border: '1px dashed rgba(14,165,164,0.15)',
                borderRadius: '50%',
                pointerEvents: 'none',
              }} />

              {/* Floating orbs */}
              <div className="animate-float-fast" style={{
                position: 'absolute',
                top: '10%',
                right: '-5%',
                width: '14px',
                height: '14px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #0EA5A4, #00D4A6)',
                boxShadow: '0 0 25px rgba(14,165,164,0.5)',
              }} />
              <div className="animate-float-medium" style={{
                position: 'absolute',
                bottom: '25%',
                left: '-4%',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #D4A63F, #E2BD6A)',
                boxShadow: '0 0 20px rgba(212,166,63,0.5)',
              }} />
              <div className="animate-float-slow" style={{
                position: 'absolute',
                top: '50%',
                right: '-8%',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: 'rgba(0,212,166,0.6)',
                boxShadow: '0 0 15px rgba(0,212,166,0.4)',
              }} />
            </div>
          </div>
        </div>
      </div>

      {/* Floating Statistics Bar */}
      <div style={{
        position: 'relative',
        zIndex: 2,
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 clamp(1.5rem, 4vw, 3rem) 3rem',
        width: '100%',
      }}>
        <div className="glass-dark" style={{
          borderRadius: '20px',
          padding: 'clamp(1.5rem, 3vw, 2rem) clamp(1rem, 3vw, 2.5rem)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '1.5rem',
          animation: 'fade-in-up 0.8s ease-out 0.8s both',
        }}>
          {stats.map((stat, i) => (
            <div key={i} style={{
              textAlign: 'center',
              padding: '0.5rem',
              borderRight: i < stats.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
            }}>
              <div style={{
                fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                fontWeight: 800,
                background: stat.isGold 
                  ? 'linear-gradient(135deg, #D4A63F, #E2BD6A)' 
                  : 'linear-gradient(135deg, #0EA5A4, #00D4A6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '0.25rem',
                fontFamily: "'Inter', sans-serif",
                letterSpacing: '-0.02em',
              }}>
                {stat.num}
              </div>
              <div style={{
                fontSize: '0.78rem',
                color: 'rgba(255,255,255,0.5)',
                fontWeight: 500,
              }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
