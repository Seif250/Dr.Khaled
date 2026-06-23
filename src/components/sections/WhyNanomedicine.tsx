'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function WhyNanomedicine() {
  const { t, language } = useLanguage();

  const highlights = [
    {
      title: t('why.h1title'),
      desc: t('why.h1desc'),
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="3" />
          <line x1="12" y1="2" x2="12" y2="6" />
          <line x1="12" y1="18" x2="12" y2="22" />
          <line x1="2" y1="12" x2="6" y2="12" />
          <line x1="18" y1="12" x2="22" y2="12" />
        </svg>
      ),
    },
    {
      title: t('why.h2title'),
      desc: t('why.h2desc'),
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
    },
    {
      title: t('why.h3title'),
      desc: t('why.h3desc'),
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
          <polyline points="22 4 12 14.01 9 11.01" />
        </svg>
      ),
    },
  ];

  return (
    <section id="about" style={{
      background: '#ffffff',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle decorative */}
      <div style={{
        position: 'absolute',
        top: '0',
        right: '0',
        width: '40%',
        height: '100%',
        background: 'linear-gradient(to left, rgba(14,165,164,0.02) 0%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      <div className="section-container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
          gap: 'clamp(2rem, 5vw, 5rem)',
          alignItems: 'center',
        }}>
          {/* Image Side */}
          <ScrollReveal>
            <div style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              aspectRatio: '4/3',
              boxShadow: '0 20px 60px rgba(7,20,38,0.15)',
            }}>
              <Image
                src="/images/dr-khaled-lab.png"
                alt="Dr. Khaled Greish in the laboratory"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Gradient overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(7,20,38,0.5) 0%, transparent 50%)',
              }} />
              {/* Floating badge on image */}
              <div style={{
                position: 'absolute',
                bottom: '1.5rem',
                left: '1.5rem',
                right: '1.5rem',
                padding: '1rem 1.25rem',
                background: 'rgba(255,255,255,0.9)',
                backdropFilter: 'blur(10px)',
                borderRadius: '14px',
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
              }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #0EA5A4, #00D4A6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                    <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .962 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .962L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.962 0z" />
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.75rem', color: '#64748b', fontWeight: 500 }}>
                    {language === 'ar' ? 'أبحاث السرطان' : 'Cancer Research'}
                  </div>
                  <div style={{ fontSize: '0.85rem', color: '#071426', fontWeight: 600 }}>
                    {language === 'ar' ? 'مختبر طب النانو' : 'Nanomedicine Laboratory'}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Content Side */}
          <div>
            <ScrollReveal>
              <div className="section-badge">{t('why.badge')}</div>
              <h2 className="section-headline">{t('why.headline')}</h2>
              <div className="accent-line" />
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                marginBottom: '2.5rem',
              }}>
                <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.8 }}>{t('why.p1')}</p>
                <p style={{ color: '#64748b', lineHeight: 1.8 }}>{t('why.p2')}</p>
                <p style={{ color: '#64748b', lineHeight: 1.8 }}>{t('why.p3')}</p>
                <p style={{ color: '#071426', fontWeight: 600, fontSize: '1.05rem', lineHeight: 1.8 }}>{t('why.p4')}</p>
              </div>
            </ScrollReveal>

            {/* Highlights */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}>
              {highlights.map((h, i) => (
                <ScrollReveal key={i} delay={i + 2}>
                  <div className="card" style={{
                    display: 'flex',
                    gap: '1rem',
                    alignItems: 'flex-start',
                    padding: '1.25rem 1.5rem',
                  }}>
                    <div className="icon-circle">
                      {h.icon}
                    </div>
                    <div>
                      <h3 style={{
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: '#071426',
                        marginBottom: '0.25rem',
                      }}>{h.title}</h3>
                      <p style={{
                        fontSize: '0.875rem',
                        color: '#64748b',
                        lineHeight: 1.6,
                      }}>{h.desc}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
