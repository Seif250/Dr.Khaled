'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';

const journeyData = ['egypt', 'japan', 'usa', 'nz', 'bahrain'] as const;
type JourneyKey = typeof journeyData[number];

export default function JourneySection() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<JourneyKey>('egypt');

  return (
    <section id="journey" style={{ background: 'var(--off-white)' }}>
      <div className="section-container">
        <ScrollReveal>
          <div className="section-label" style={{ textAlign: 'center' }}>{t('journey.label')}</div>
          <h2 style={{
            fontSize: 'clamp(36px, 4vw, 56px)',
            lineHeight: 1.2,
            marginBottom: '80px',
            textAlign: 'center',
          }}>
            {t('journey.headline')}
          </h2>
        </ScrollReveal>

        {/* Horizontal Navigation */}
        <ScrollReveal delay={1}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            borderBottom: '1px solid rgba(0,0,0,0.1)',
            marginBottom: '60px',
            overflowX: 'auto',
            scrollbarWidth: 'none',
          }}>
            {journeyData.map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`journey-tab ${activeTab === key ? 'active' : ''}`}
                style={{
                  fontFamily: language === 'ar' ? 'var(--font-cairo)' : 'var(--font-outfit)',
                  flex: 1,
                  textAlign: 'center',
                  minWidth: '120px',
                }}
              >
                {t(`journey.${key}`)}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Content Area */}
        <ScrollReveal delay={2}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))',
            gap: 'clamp(40px, 8vw, 80px)',
            alignItems: 'center',
          }}>
            {/* Text Side */}
            <div style={{ order: language === 'ar' ? 2 : 1 }}>
              <div style={{
                color: 'var(--green)',
                fontWeight: 600,
                letterSpacing: '0.1em',
                marginBottom: '16px',
                fontSize: '14px',
              }}>
                {t(`journey.${activeTab}Years`)}
              </div>
              <h3 style={{
                fontSize: 'clamp(28px, 3vw, 42px)',
                lineHeight: 1.3,
                marginBottom: '24px',
              }}>
                {t(`journey.${activeTab}Title`)}
              </h3>
              <p>
                {t(`journey.${activeTab}Desc`)}
              </p>
            </div>

            {/* Image Side */}
            <div style={{ order: language === 'ar' ? 1 : 2 }}>
              <div className="editorial-image" style={{
                aspectRatio: '16/10',
                background: 'var(--light-gray)',
              }}>
                <Image
                  key={activeTab} // Force re-render for animation
                  src={`/images/journey-${activeTab}.jpg`}
                  alt={t(`journey.${activeTab}`)}
                  fill
                  style={{ objectFit: 'cover' }}
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="reveal revealed"
                />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
