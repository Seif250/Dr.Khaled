'use client';

import React from 'react';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t, language } = useLanguage();

  const quickLinks = [
    { href: '#about', label: t('nav.about') },
    { href: '#research', label: t('nav.research') },
    { href: '#publications', label: t('nav.publications') },
    { href: '#journey', label: t('nav.journey') },
    { href: '#collaborations', label: t('nav.collaborations') },
    { href: '#media', label: t('nav.media') },
  ];

  const academicLinks = [
    { href: 'https://scholar.google.com', label: 'Google Scholar', icon: '🎓' },
    { href: 'https://researchgate.net', label: 'ResearchGate', icon: '🔬' },
    { href: 'https://orcid.org', label: 'ORCID', icon: '📋' },
    { href: 'https://linkedin.com', label: 'LinkedIn', icon: '💼' },
  ];

  return (
    <footer style={{
      background: 'linear-gradient(135deg, #0a1628 0%, #0f2139 100%)',
      color: 'white',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative top gradient line */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'linear-gradient(90deg, transparent, #0ea5e9, #d4a853, #0ea5e9, transparent)',
      }} />

      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 4vw, 3rem) 2rem',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '3rem',
          marginBottom: '3rem',
        }}>
          {/* Brand */}
          <div>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '1.5rem',
            }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '14px',
                background: 'linear-gradient(135deg, #0ea5e9, #06b6d4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                fontWeight: 800,
                fontSize: '1.15rem',
                fontFamily: "'Playfair Display', serif",
              }}>
                KG
              </div>
              <div>
                <div style={{
                  fontWeight: 700,
                  fontSize: '1rem',
                  fontFamily: language === 'ar' ? "'Noto Kufi Arabic', sans-serif" : "'Inter', sans-serif",
                }}>
                  {language === 'ar' ? 'د. خالد فتحي جريش' : 'Dr. Khaled F. Greish'}
                </div>
                <div style={{
                  fontSize: '0.7rem',
                  color: '#64748b',
                  fontWeight: 500,
                }}>
                  {language === 'ar' ? 'بروفيسور طب النانو' : 'Professor of Nanomedicine'}
                </div>
              </div>
            </div>
            <p style={{
              color: '#64748b',
              fontSize: '0.85rem',
              lineHeight: 1.8,
              maxWidth: '280px',
            }}>
              {language === 'ar'
                ? 'تحويل علاج السرطان من خلال أبحاث طب النانو المبتكرة وأنظمة توصيل الأدوية الذكية.'
                : 'Transforming cancer treatment through innovative nanomedicine research and intelligent drug delivery systems.'
              }
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#94a3b8',
              marginBottom: '1.25rem',
            }}>
              {t('footer.quickLinks')}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    textDecoration: 'none',
                    color: '#94a3b8',
                    fontSize: '0.85rem',
                    transition: 'color 0.3s ease',
                    padding: '0.25rem 0',
                    fontFamily: language === 'ar' ? "'Noto Sans Arabic', sans-serif" : "'Inter', sans-serif",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#0ea5e9'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#94a3b8'; }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Academic */}
          <div>
            <h3 style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#94a3b8',
              marginBottom: '1.25rem',
            }}>
              {t('footer.research')}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {academicLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: 'none',
                    color: '#94a3b8',
                    fontSize: '0.85rem',
                    transition: 'color 0.3s ease',
                    padding: '0.25rem 0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = '#0ea5e9'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = '#94a3b8'; }}
                >
                  <span style={{ fontSize: '0.9rem' }}>{link.icon}</span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{
              fontSize: '0.8rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: '#94a3b8',
              marginBottom: '1.25rem',
            }}>
              {t('footer.connect')}
            </h3>
            <div style={{
              padding: '1.25rem',
              background: 'rgba(14,165,233,0.05)',
              border: '1px solid rgba(14,165,233,0.1)',
              borderRadius: '14px',
            }}>
              <p style={{
                color: '#94a3b8',
                fontSize: '0.8rem',
                lineHeight: 1.7,
                marginBottom: '1rem',
              }}>
                {language === 'ar'
                  ? 'جامعة الخليج العربي، كلية الطب، البحرين'
                  : 'Arabian Gulf University, College of Medicine, Bahrain'
                }
              </p>
              <a
                href="mailto:contact@khaledgreish.com"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: '#0ea5e9',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                contact@khaledgreish.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.06)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1rem',
        }}>
          <p style={{
            color: '#475569',
            fontSize: '0.8rem',
          }}>
            {t('footer.rights')}
          </p>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: '#475569',
            fontSize: '0.75rem',
          }}>
            <span style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#10b981',
              display: 'inline-block',
            }} />
            {language === 'ar' ? 'يشكّل مستقبل الطب' : 'Shaping the future of medicine'}
          </div>
        </div>
      </div>
    </footer>
  );
}
