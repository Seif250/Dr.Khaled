'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedCounter from '@/components/ui/AnimatedCounter';
import MolecularBackground from '@/components/ui/MolecularBackground';

export default function ScientificImpact() {
  const { t } = useLanguage();

  const secondaryStats = [
    {
      value: t('impact.publications'),
      label: t('impact.publicationsLabel'),
      desc: t('impact.publicationsDesc'),
      color: '#0EA5A4',
    },
    {
      value: t('impact.patents'),
      label: t('impact.patentsLabel'),
      desc: t('impact.patentsDesc'),
      color: '#00D4A6',
    },
    {
      value: t('impact.ranking'),
      label: t('impact.rankingLabel'),
      desc: t('impact.rankingDesc'),
      color: '#D4A63F',
      isGold: true,
    },
  ];

  return (
    <section style={{
      background: 'linear-gradient(135deg, #071426 0%, #0C1E3A 40%, #071426 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <MolecularBackground variant="dark" />

      {/* Ambient glow behind number */}
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(14,165,164,0.08) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <div className="section-container" style={{
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
      }}>
        <ScrollReveal>
          <div style={{ marginBottom: '1rem' }}>
            <div className="section-badge" style={{
              margin: '0 auto 2rem',
              borderColor: 'rgba(14,165,164,0.3)',
              background: 'rgba(14,165,164,0.1)',
              color: '#0EA5A4',
            }}>
              {t('impact.badge')}
            </div>
          </div>
        </ScrollReveal>

        {/* HERO NUMBER — Tesla style */}
        <ScrollReveal delay={1}>
          <div style={{
            marginBottom: '0.5rem',
          }}>
            <div className="tesla-stat-hero" style={{
              background: 'linear-gradient(135deg, #0EA5A4, #00D4A6, #2EC4C3)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              <AnimatedCounter target={12000} suffix="+" duration={2500} />
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={2}>
          <div className="tesla-stat-sub" style={{
            color: 'rgba(255,255,255,0.5)',
            marginBottom: '1rem',
          }}>
            {t('impact.heroLabel')}
          </div>
          <p style={{
            color: 'rgba(255,255,255,0.4)',
            fontSize: '1rem',
            maxWidth: '500px',
            margin: '0 auto 4rem',
            lineHeight: 1.8,
          }}>
            {t('impact.heroDesc')}
          </p>
        </ScrollReveal>

        {/* Secondary stats row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem',
          maxWidth: '800px',
          margin: '0 auto',
        }}>
          {secondaryStats.map((stat, i) => (
            <ScrollReveal key={i} delay={i + 3}>
              <div className="card-dark" style={{
                textAlign: 'center',
                padding: '2rem 1.5rem',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* Top accent line */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: '20%',
                  right: '20%',
                  height: '2px',
                  background: `linear-gradient(to right, transparent, ${stat.color}, transparent)`,
                }} />

                {/* Number */}
                <div style={{
                  fontSize: 'clamp(2rem, 4vw, 2.75rem)',
                  fontWeight: 800,
                  color: stat.isGold ? '#D4A63F' : stat.color,
                  marginBottom: '0.35rem',
                  lineHeight: 1,
                  fontFamily: "'Inter', sans-serif",
                  letterSpacing: '-0.02em',
                  ...(stat.isGold ? {
                    textShadow: '0 0 30px rgba(212,166,63,0.3)',
                  } : {}),
                }}>
                  {stat.value}
                </div>

                {/* Label */}
                <div style={{
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: 'rgba(255,255,255,0.8)',
                  marginBottom: '0.75rem',
                  textTransform: 'uppercase' as const,
                  letterSpacing: '0.1em',
                }}>
                  {stat.label}
                </div>

                {/* Description */}
                <p style={{
                  fontSize: '0.78rem',
                  color: 'rgba(255,255,255,0.4)',
                  lineHeight: 1.6,
                }}>
                  {stat.desc}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
