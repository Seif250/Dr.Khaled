'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function MissionSection() {
  const { t } = useLanguage();

  return (
    <section style={{
      background: 'linear-gradient(180deg, #071426 0%, #0C1E3A 50%, #071426 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle grid background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: 'radial-gradient(rgba(14,165,164,0.06) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
        pointerEvents: 'none',
      }} />

      {/* Ambient glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(14,165,164,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="section-container" style={{
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        maxWidth: '900px',
        margin: '0 auto',
        padding: 'clamp(4rem, 8vw, 7rem) clamp(1.5rem, 4vw, 3rem)',
      }}>
        <ScrollReveal>
          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.5rem 1.25rem',
            background: 'linear-gradient(135deg, rgba(14,165,164,0.1) 0%, rgba(0,212,166,0.06) 100%)',
            border: '1px solid rgba(14,165,164,0.2)',
            borderRadius: '100px',
            fontSize: '0.75rem',
            fontWeight: 600,
            letterSpacing: '0.1em',
            textTransform: 'uppercase' as const,
            color: '#0EA5A4',
            marginBottom: '3rem',
          }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
            {t('mission.badge')}
          </div>
        </ScrollReveal>

        <ScrollReveal delay={1}>
          {/* Mission statement — large cinematic text */}
          <blockquote style={{
            fontSize: 'clamp(1.35rem, 3vw, 2rem)',
            fontWeight: 400,
            color: 'rgba(255,255,255,0.85)',
            lineHeight: 1.7,
            marginBottom: '2.5rem',
            fontStyle: 'italic',
            position: 'relative',
          }}>
            {/* Decorative quotes */}
            <span style={{
              position: 'absolute',
              top: '-2rem',
              left: '50%',
              transform: 'translateX(-50%)',
              fontSize: '5rem',
              lineHeight: 1,
              color: 'rgba(14,165,164,0.15)',
              fontFamily: "'Playfair Display', serif",
              fontStyle: 'normal',
            }}>
              &ldquo;
            </span>
            {t('mission.text')}
          </blockquote>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          {/* Highlight line */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
            marginTop: '1rem',
          }}>
            <div style={{
              height: '1px',
              width: '60px',
              background: 'linear-gradient(to right, transparent, rgba(14,165,164,0.5))',
            }} />
            <span style={{
              fontSize: 'clamp(0.85rem, 1.5vw, 1.1rem)',
              fontWeight: 700,
              background: 'linear-gradient(135deg, #0EA5A4, #00D4A6)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '0.15em',
              textTransform: 'uppercase' as const,
            }}>
              {t('mission.highlight')}
            </span>
            <div style={{
              height: '1px',
              width: '60px',
              background: 'linear-gradient(to left, transparent, rgba(14,165,164,0.5))',
            }} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
