'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Publications() {
  const { t, language } = useLanguage();

  const pubs = ['pub1', 'pub2', 'pub3'];

  return (
    <section id="publications" style={{ background: 'var(--white)' }}>
      <div className="section-container">
        <ScrollReveal>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px' }}>
            <div>
              <div className="section-label">{t('publications.label')}</div>
              <h2 style={{ fontSize: 'clamp(36px, 4vw, 56px)', lineHeight: 1.2 }}>
                {t('publications.headline')}
              </h2>
            </div>
            <a href="#" className="btn-link" style={{ display: 'none' /* Hide on mobile initially, could use CSS query */ }}>
              {t('publications.viewAll')}
            </a>
          </div>
        </ScrollReveal>

        {/* Magazine List */}
        <div>
          {pubs.map((pub, i) => (
            <ScrollReveal key={pub} delay={i + 1}>
              <a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="pub-item">
                  <div style={{
                    display: 'grid',
                    gridTemplateColumns: '120px 1fr',
                    gap: '24px',
                    alignItems: 'baseline',
                  }}>
                    {/* Year & Citations */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <span style={{
                        fontSize: '18px',
                        fontWeight: 300,
                        color: 'var(--text)',
                        fontFamily: 'var(--font-outfit)',
                      }}>
                        {t(`publications.${pub}year`)}
                      </span>
                      <span style={{
                        fontSize: '12px',
                        color: 'var(--green)',
                        fontWeight: 600,
                        textTransform: 'uppercase',
                        letterSpacing: '0.05em',
                      }}>
                        {t(`publications.${pub}citations`)}
                      </span>
                    </div>

                    {/* Content */}
                    <div>
                      <h3 style={{
                        fontSize: 'clamp(20px, 2vw, 28px)',
                        fontWeight: 500,
                        marginBottom: '12px',
                        lineHeight: 1.4,
                      }}>
                        {t(`publications.${pub}title`)}
                      </h3>
                      <div style={{
                        fontSize: '15px',
                        color: 'var(--text-secondary)',
                        fontStyle: 'italic',
                      }}>
                        {t(`publications.${pub}journal`)}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
        
        <ScrollReveal delay={4}>
           <div style={{ marginTop: '40px', textAlign: language === 'ar' ? 'left' : 'right' }}>
              <a href="#" className="btn-link">
                {t('publications.viewAll')}
              </a>
           </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
