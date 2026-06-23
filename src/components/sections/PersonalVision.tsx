'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function PersonalVision() {
  const { t, language } = useLanguage();

  return (
    <section style={{
      background: 'linear-gradient(135deg, #0a1628 0%, #0f2139 40%, #162a4a 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background texture */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 30% 50%, rgba(14,165,233,0.08) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'radial-gradient(ellipse at 70% 50%, rgba(212,168,83,0.05) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
          gap: 'clamp(2rem, 5vw, 5rem)',
          alignItems: 'center',
        }}>
          {/* Portrait */}
          <ScrollReveal>
            <div style={{
              position: 'relative',
              maxWidth: '400px',
              margin: '0 auto',
              order: language === 'ar' ? 2 : 1,
            }}>
              {/* Glow behind */}
              <div style={{
                position: 'absolute',
                inset: '-20px',
                background: 'radial-gradient(ellipse, rgba(14,165,233,0.15) 0%, transparent 70%)',
                borderRadius: '50%',
              }} />
              
              <div style={{
                position: 'relative',
                borderRadius: '30px',
                overflow: 'hidden',
                aspectRatio: '3/4',
                border: '2px solid rgba(255,255,255,0.1)',
              }}>
                <Image
                  src="/images/dr-khaled-headshot.png"
                  alt="Professor Khaled Fathi Greish"
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 400px"
                />
                {/* Bottom gradient */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '50%',
                  background: 'linear-gradient(to top, rgba(10,22,40,0.8) 0%, transparent 100%)',
                }} />
              </div>
            </div>
          </ScrollReveal>

          {/* Quote & Message */}
          <div style={{ order: language === 'ar' ? 1 : 2 }}>
            <ScrollReveal>
              {/* Large quote marks */}
              <div style={{
                fontSize: '6rem',
                lineHeight: 0.5,
                color: 'rgba(14,165,233,0.2)',
                fontFamily: "'Playfair Display', serif",
                marginBottom: '1rem',
              }}>
                &ldquo;
              </div>

              <blockquote style={{ marginBottom: '2.5rem' }}>
                <p className="font-display" style={{
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                  fontWeight: 700,
                  color: '#ffffff',
                  lineHeight: 1.3,
                  marginBottom: '0.5rem',
                }}>
                  {t('vision.quote1')}
                </p>
                <p className="font-display" style={{
                  fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                  fontWeight: 700,
                  background: 'linear-gradient(135deg, #0ea5e9, #06b6d4, #d4a853)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: 1.3,
                }}>
                  {t('vision.quote2')}
                </p>
              </blockquote>
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <div style={{
                width: '60px',
                height: '2px',
                background: 'linear-gradient(to right, #0ea5e9, #d4a853)',
                marginBottom: '2rem',
              }} />

              <p style={{
                color: 'rgba(255,255,255,0.75)',
                fontSize: '1.05rem',
                lineHeight: 2,
                marginBottom: '2rem',
                fontStyle: 'italic',
              }}>
                {t('vision.message')}
              </p>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              }}>
                <div style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '2px solid rgba(14,165,233,0.3)',
                  position: 'relative',
                }}>
                  <Image
                    src="/images/dr-khaled-headshot.png"
                    alt=""
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="48px"
                  />
                </div>
                <div>
                  <div style={{
                    color: '#ffffff',
                    fontWeight: 700,
                    fontSize: '0.95rem',
                  }}>
                    {t('vision.author')}
                  </div>
                  <div style={{
                    color: '#0ea5e9',
                    fontSize: '0.75rem',
                    fontWeight: 500,
                  }}>
                    {language === 'ar' ? 'باحث في طب النانو' : 'Nanomedicine Researcher'}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
