'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t, language } = useLanguage();

  const quickLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/#about', label: t('nav.aboutRg') },
    { href: '/technologies', label: t('nav.technologies') },
    { href: '/about-dr-khaled', label: t('nav.aboutDr') },
  ];

  const techLinks = [
    { href: '/technologies/nano-silver', label: t('tech.nanoSilver') },
    { href: '/technologies/nano-copper', label: t('tech.nanoCopper') },
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
              fontWeight: 700,
              fontSize: '24px',
              fontFamily: 'var(--font-outfit)',
              marginBottom: '24px',
              letterSpacing: '-0.04em',
            }}>
              GR Nano
            </div>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '15px',
              lineHeight: 1.8,
              maxWidth: '280px',
            }}>
              {t('rgnano.heroDesc')}
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
              Company
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {quickLinks.map((link) => (
                <Link
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
                </Link>
              ))}
            </div>
          </div>

          {/* Technologies */}
          <div>
            <h3 style={{
              fontSize: '13px',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--text)',
              marginBottom: '24px',
            }}>
              {t('nav.technologies')}
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {techLinks.map((link) => (
                <Link
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
                </Link>
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
              Contact
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <Link href="mailto:contact@grnano.com" className="btn-link" style={{ fontSize: '15px', display: 'inline-block', width: 'fit-content' }}>
                {t('tech.contactBtn')}
              </Link>
              <div style={{ color: 'var(--text-secondary)', fontSize: '15px', lineHeight: 1.6 }}>
                <strong>Email:</strong> contact@grnano.com<br />
                <strong>Phone:</strong> +973 1234 5678<br />
                <strong>Location:</strong> Arabian Gulf University, Bahrain
              </div>
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
            © {new Date().getFullYear()} GR Nano. All rights reserved.
          </p>
          <div style={{
            color: 'var(--text-muted)',
            fontSize: '14px',
          }}>
            Pioneering Precision Medicine
          </div>
        </div>
      </div>
    </footer>
  );
}
