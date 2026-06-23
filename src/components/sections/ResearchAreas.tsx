'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function ResearchAreas() {
  const { t } = useLanguage();

  const areas = [
    {
      key: 'r1',
      gradient: 'linear-gradient(135deg, #0ea5e9, #06b6d4)',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2v4" /><path d="M12 18v4" />
          <path d="M4.93 4.93l2.83 2.83" /><path d="M16.24 16.24l2.83 2.83" />
          <path d="M2 12h4" /><path d="M18 12h4" />
          <path d="M4.93 19.07l2.83-2.83" /><path d="M16.24 7.76l2.83-2.83" />
        </svg>
      ),
    },
    {
      key: 'r2',
      gradient: 'linear-gradient(135deg, #d4a853, #e8c97a)',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
          <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
      ),
    },
    {
      key: 'r3',
      gradient: 'linear-gradient(135deg, #10b981, #34d399)',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      ),
    },
    {
      key: 'r4',
      gradient: 'linear-gradient(135deg, #8b5cf6, #a78bfa)',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
        </svg>
      ),
    },
    {
      key: 'r5',
      gradient: 'linear-gradient(135deg, #f43f5e, #fb7185)',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="research" style={{
      background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="section-container">
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <div className="section-badge" style={{ margin: '0 auto 1.5rem' }}>{t('research.badge')}</div>
            <h2 className="section-headline">{t('research.headline')}</h2>
            <div className="accent-line" style={{ margin: '0 auto' }} />
          </div>
        </ScrollReveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '1.5rem',
        }}>
          {areas.map((area, i) => (
            <ScrollReveal key={area.key} delay={i + 1}>
              <div className="card" style={{
                padding: '2rem',
                position: 'relative',
                overflow: 'hidden',
                height: '100%',
                cursor: 'default',
              }}>
                {/* Gradient accent top */}
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: area.gradient,
                  borderRadius: '20px 20px 0 0',
                }} />

                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: area.gradient,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'white',
                  marginBottom: '1.25rem',
                  transition: 'all 0.3s ease',
                }}>
                  {area.icon}
                </div>

                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: 700,
                  color: '#0a1628',
                  marginBottom: '0.75rem',
                }}>
                  {t(`research.${area.key}title`)}
                </h3>

                <p style={{
                  fontSize: '0.875rem',
                  color: '#64748b',
                  lineHeight: 1.7,
                }}>
                  {t(`research.${area.key}desc`)}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
