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
    { num: t('hero.stat4num'), label: t('hero.stat4label') },
  ];

  return (
    <section id="hero" style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #ffffff 0%, #f0f9ff 30%, #f8fafc 70%, #ffffff 100%)',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      overflow: 'hidden',
    }}>
      <MolecularBackground variant="light" />

      {/* Decorative blobs */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: language === 'ar' ? 'auto' : '5%',
        left: language === 'ar' ? '5%' : 'auto',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(ellipse, rgba(14,165,233,0.06) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        bottom: '15%',
        left: language === 'ar' ? 'auto' : '10%',
        right: language === 'ar' ? '10%' : 'auto',
        width: '400px',
        height: '400px',
        background: 'radial-gradient(ellipse, rgba(212,168,83,0.04) 0%, transparent 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '8rem clamp(1.5rem, 4vw, 3rem) 2rem',
        position: 'relative',
        zIndex: 1,
        width: '100%',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
          gap: '3rem',
          alignItems: 'center',
        }}>
          {/* Text Content */}
          <div style={{ order: language === 'ar' ? 2 : 1 }}>
            {/* Badge */}
            <div className="section-badge animate-fade-in-up">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
              {t('hero.badge')}
            </div>

            {/* Headline */}
            <h1 className="font-display" style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              color: '#0a1628',
              marginBottom: '1.5rem',
              animation: 'fade-in-up 0.8s ease-out 0.2s both',
            }}>
              {language === 'en' ? (
                <>
                  Transforming Cancer Treatment{' '}
                  <span style={{
                    background: 'linear-gradient(135deg, #0ea5e9, #06b6d4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>Through Nanomedicine</span>
                </>
              ) : (
                <>
                  تحويل علاج السرطان{' '}
                  <span style={{
                    background: 'linear-gradient(135deg, #0ea5e9, #06b6d4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}>من خلال طب النانو</span>
                </>
              )}
            </h1>

            {/* Subheadline */}
            <p style={{
              fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
              color: '#64748b',
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

          {/* Portrait */}
          <div style={{
            order: language === 'ar' ? 1 : 2,
            display: 'flex',
            justifyContent: 'center',
            position: 'relative',
          }}>
            {/* Organic shape behind */}
            <div className="animate-float-slow" style={{
              position: 'absolute',
              width: '110%',
              height: '110%',
              background: 'linear-gradient(135deg, rgba(14,165,233,0.08) 0%, rgba(212,168,83,0.06) 50%, rgba(6,182,212,0.08) 100%)',
              borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
              top: '-5%',
              left: '-5%',
              zIndex: 0,
            }} />
            <div className="animate-float-medium" style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(225deg, rgba(14,165,233,0.05) 0%, rgba(16,185,129,0.04) 100%)',
              borderRadius: '40% 60% 70% 30% / 40% 70% 30% 60%',
              top: '0',
              left: '0',
              zIndex: 0,
            }} />

            {/* Portrait Image */}
            <div style={{
              position: 'relative',
              zIndex: 1,
              width: 'clamp(280px, 40vw, 420px)',
              height: 'clamp(350px, 50vw, 520px)',
            }}>
              <div className="hero-portrait-mask" style={{
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                position: 'relative',
              }}>
                <Image
                  src="/images/dr-khaled-casual.png"
                  alt="Professor Khaled Fathi Greish"
                  fill
                  style={{ objectFit: 'cover', objectPosition: 'center top' }}
                  priority
                  sizes="(max-width: 768px) 280px, 420px"
                />
              </div>

              {/* Decorative orbit ring */}
              <div className="animate-spin-slow" style={{
                position: 'absolute',
                width: '120%',
                height: '120%',
                top: '-10%',
                left: '-10%',
                border: '1px dashed rgba(14,165,233,0.15)',
                borderRadius: '50%',
                pointerEvents: 'none',
              }} />

              {/* Small floating orbs */}
              <div className="animate-float-fast" style={{
                position: 'absolute',
                top: '10%',
                right: '-8%',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #0ea5e9, #06b6d4)',
                boxShadow: '0 0 20px rgba(14,165,233,0.4)',
              }} />
              <div className="animate-float-medium" style={{
                position: 'absolute',
                bottom: '20%',
                left: '-6%',
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #d4a853, #e8c97a)',
                boxShadow: '0 0 15px rgba(212,168,83,0.4)',
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
        <div className="glass" style={{
          borderRadius: '20px',
          padding: 'clamp(1.5rem, 3vw, 2rem) clamp(1rem, 3vw, 2.5rem)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
          gap: '1.5rem',
          boxShadow: '0 10px 40px rgba(10,22,40,0.06)',
          animation: 'fade-in-up 0.8s ease-out 0.8s both',
        }}>
          {stats.map((stat, i) => (
            <div key={i} style={{
              textAlign: 'center',
              padding: '0.5rem',
              borderRight: i < stats.length - 1 ? '1px solid rgba(14,165,233,0.1)' : 'none',
            }}>
              <div style={{
                fontSize: 'clamp(1.5rem, 2.5vw, 2rem)',
                fontWeight: 800,
                background: 'linear-gradient(135deg, #0ea5e9, #0284c7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '0.25rem',
                fontFamily: "'Playfair Display', serif",
              }}>
                {stat.num}
              </div>
              <div style={{
                fontSize: '0.78rem',
                color: '#64748b',
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
