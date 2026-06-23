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
  ];

  const academicLinks = [
    { href: 'https://scholar.google.com', label: 'Google Scholar' },
    { href: 'https://researchgate.net', label: 'ResearchGate' },
    { href: 'https://orcid.org', label: 'ORCID' },
    { href: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <footer style={{
      background: 'var(--white)',
      borderTop: '1px solid rgba(0,0,0,0.06)',
      color: 'var(--text)',
    }}>
      <div style={{
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: 'clamp(60px, 8vw, 100px) var(--container-padding) 40px',
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '60px',
          marginBottom: '80px',
        }}>
          {/* Brand */}
          <div>
            <div style={{
              fontWeight: 600,
              fontSize: '20px',
              fontFamily: language === 'ar' ? 'var(--font-cairo)' : 'var(--font-outfit)',
              marginBottom: '24px',
              letterSpacing: '-0.02em',
            }}>
              {language === 'ar' ? 'د. خالد فتحي جريش' : 'Dr. Khaled F. Greish'}
            </div>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '15px',
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
              fontSize: '13px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--text)',
              marginBottom: '24px',
            }}>
              {t('footer.quickLinks')}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {quickLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  style={{
                    textDecoration: 'none',
                    color: 'var(--text-secondary)',
                    fontSize: '15px',
                    transition: 'color 0.3s ease',
                    fontFamily: language === 'ar' ? 'var(--font-cairo)' : 'var(--font-outfit)',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Academic */}
          <div>
            <h3 style={{
              fontSize: '13px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--text)',
              marginBottom: '24px',
            }}>
              {t('footer.research')}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {academicLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: 'none',
                    color: 'var(--text-secondary)',
                    fontSize: '15px',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{
              fontSize: '13px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--text)',
              marginBottom: '24px',
            }}>
              {t('footer.connect')}
            </h3>
            <div>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '15px',
                lineHeight: 1.7,
                marginBottom: '16px',
              }}>
                {language === 'ar'
                  ? 'جامعة الخليج العربي، كلية الطب، البحرين'
                  : 'Arabian Gulf University, College of Medicine, Bahrain'
                }
              </p>
              <a
                href="mailto:contact@khaledgreish.com"
                style={{
                  color: 'var(--text)',
                  textDecoration: 'none',
                  fontSize: '15px',
                  fontWeight: 500,
                  borderBottom: '1px solid var(--text)',
                  paddingBottom: '2px',
                }}
              >
                contact@khaledgreish.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          borderTop: '1px solid rgba(0,0,0,0.06)',
          paddingTop: '32px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
        }}>
          <p style={{
            color: 'var(--text-muted)',
            fontSize: '14px',
          }}>
            {t('footer.rights')}
          </p>
          <div style={{
            color: 'var(--text-muted)',
            fontSize: '14px',
          }}>
            {t('footer.tagline')}
          </div>
        </div>
      </div>
    </footer>
  );
}
