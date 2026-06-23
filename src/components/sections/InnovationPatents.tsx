'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function InnovationPatents() {
  const { t } = useLanguage();

  const patents = [
    {
      key: 'patent1',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      ),
      color: '#0EA5A4',
    },
    {
      key: 'patent2',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      ),
      color: '#00D4A6',
    },
    {
      key: 'patent3',
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .962 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .962L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.962 0z" />
        </svg>
      ),
      color: '#2EC4C3',
    },
  ];

  return (
    <section style={{
      background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="section-container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
          gap: 'clamp(2rem, 5vw, 5rem)',
          alignItems: 'center',
        }}>
          {/* Content */}
          <div>
            <ScrollReveal>
              <div className="section-badge">{t('innovation.badge')}</div>
              <h2 className="section-headline">{t('innovation.headline')}</h2>
              <div className="accent-line" />
            </ScrollReveal>

            <ScrollReveal delay={1}>
              <div style={{ marginBottom: '2.5rem' }}>
                <p style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  color: '#071426',
                  marginBottom: '0.75rem',
                  lineHeight: 1.6,
                }}>
                  {t('innovation.p1')}
                </p>
                <p style={{
                  fontSize: '1.25rem',
                  fontWeight: 600,
                  background: 'linear-gradient(135deg, #0EA5A4, #00D4A6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '1.5rem',
                  lineHeight: 1.6,
                }}>
                  {t('innovation.p2')}
                </p>
                <p style={{
                  color: '#64748b',
                  lineHeight: 1.8,
                }}>
                  {t('innovation.p3')}
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Patent Cards */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
          }}>
            {patents.map((patent, i) => (
              <ScrollReveal key={patent.key} delay={i + 2}>
                <div className="card" style={{
                  display: 'flex',
                  gap: '1.25rem',
                  alignItems: 'flex-start',
                  borderLeft: `3px solid ${patent.color}`,
                  padding: '1.5rem',
                }}>
                  <div style={{
                    width: '52px',
                    height: '52px',
                    borderRadius: '14px',
                    background: `${patent.color}12`,
                    color: patent.color,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    {patent.icon}
                  </div>
                  <div>
                    <h3 style={{
                      fontSize: '1rem',
                      fontWeight: 700,
                      color: '#071426',
                      marginBottom: '0.35rem',
                    }}>
                      {t(`innovation.${patent.key}`)}
                    </h3>
                    <p style={{
                      fontSize: '0.85rem',
                      color: '#64748b',
                      lineHeight: 1.7,
                    }}>
                      {t(`innovation.${patent.key}desc`)}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative nanomedicine image */}
      <div style={{
        position: 'absolute',
        bottom: '-10%',
        right: '-5%',
        width: '300px',
        height: '300px',
        opacity: 0.05,
        borderRadius: '50%',
        overflow: 'hidden',
        pointerEvents: 'none',
      }}>
        <Image
          src="/images/nanomedicine-viz.png"
          alt=""
          fill
          style={{ objectFit: 'cover' }}
          sizes="300px"
        />
      </div>
    </section>
  );
}
