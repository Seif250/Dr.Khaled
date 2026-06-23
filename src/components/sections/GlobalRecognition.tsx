'use client';

import React from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';
import MolecularBackground from '@/components/ui/MolecularBackground';

export default function GlobalRecognition() {
  const { t } = useLanguage();

  return (
    <section className="dark-section" style={{
      position: 'relative',
      overflow: 'hidden',
    }}>
      <MolecularBackground variant="dark" />
      
      <div className="section-container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))',
          gap: 'clamp(2rem, 5vw, 5rem)',
          alignItems: 'center',
        }}>
          {/* Content */}
          <ScrollReveal>
            <div>
              <div className="section-badge" style={{
                borderColor: 'rgba(14,165,233,0.3)',
                background: 'rgba(14,165,233,0.1)',
              }}>
                {t('recognition.badge')}
              </div>

              <h2 className="font-display" style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700,
                color: '#ffffff',
                lineHeight: 1.2,
                marginBottom: '2rem',
              }}>
                {t('recognition.headline')}
              </h2>

              <div style={{
                width: '60px',
                height: '3px',
                background: 'linear-gradient(135deg, #0ea5e9, #d4a853)',
                borderRadius: '2px',
                marginBottom: '2rem',
              }} />

              <p style={{
                color: 'rgba(255,255,255,0.8)',
                fontSize: '1.05rem',
                lineHeight: 1.9,
                marginBottom: '1.5rem',
              }}>
                {t('recognition.p1')}
              </p>
              <p style={{
                color: 'rgba(255,255,255,0.65)',
                lineHeight: 1.9,
              }}>
                {t('recognition.p2')}
              </p>

              {/* Award badge */}
              <div style={{
                marginTop: '2.5rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1.25rem 2rem',
                background: 'rgba(212,168,83,0.1)',
                border: '1px solid rgba(212,168,83,0.25)',
                borderRadius: '16px',
              }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #d4a853, #e8c97a)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                }}>
                  🏆
                </div>
                <div>
                  <div style={{
                    fontSize: '1.75rem',
                    fontWeight: 800,
                    color: '#d4a853',
                    fontFamily: "'Playfair Display', serif",
                    lineHeight: 1,
                  }}>
                    Top 2%
                  </div>
                  <div style={{
                    fontSize: '0.8rem',
                    color: 'rgba(255,255,255,0.6)',
                    fontWeight: 500,
                  }}>
                    Stanford/Elsevier Ranking
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Image */}
          <ScrollReveal delay={2}>
            <div style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              aspectRatio: '1',
              maxWidth: '450px',
              margin: '0 auto',
            }}>
              <Image
                src="/images/dr-khaled-formal.png"
                alt="Professor Khaled Greish"
                fill
                style={{ objectFit: 'cover' }}
                sizes="(max-width: 768px) 100vw, 450px"
              />
              {/* Gradient overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(10,22,40,0.6) 0%, transparent 60%)',
                borderRadius: '24px',
              }} />
              {/* Border glow */}
              <div style={{
                position: 'absolute',
                inset: '-2px',
                borderRadius: '26px',
                background: 'linear-gradient(135deg, rgba(14,165,233,0.3), rgba(212,168,83,0.3), rgba(14,165,233,0.3))',
                zIndex: -1,
              }} />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
