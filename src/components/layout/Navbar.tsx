'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import LanguageToggle from '@/components/ui/LanguageToggle';

export default function Navbar() {
  const { t, language } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#about', label: t('nav.about') },
    { href: '#research', label: t('nav.research') },
    { href: '#publications', label: t('nav.publications') },
    { href: '#journey', label: t('nav.journey') },
    { href: '#collaborations', label: t('nav.collaborations') },
    { href: '#media', label: t('nav.media') },
  ];

  return (
    <nav
      id="main-nav"
      className={scrolled ? 'navbar-scrolled' : ''}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? '0.75rem 0' : '1.25rem 0',
        background: scrolled ? undefined : 'transparent',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <div style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '0 clamp(1.5rem, 4vw, 3rem)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <a href="#" style={{
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #0EA5A4, #00D4A6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: 800,
            fontSize: '1.1rem',
            fontFamily: "'Playfair Display', serif",
          }}>
            KG
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            lineHeight: 1.2,
          }}>
            <span style={{
              fontWeight: 700,
              fontSize: '0.95rem',
              color: scrolled ? '#ffffff' : '#ffffff',
              fontFamily: language === 'ar' ? "'Noto Kufi Arabic', sans-serif" : "'Inter', sans-serif",
            }}>
              {language === 'ar' ? 'د. خالد جريش' : 'Dr. K. Greish'}
            </span>
            <span style={{
              fontSize: '0.65rem',
              color: scrolled ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.5)',
              fontWeight: 500,
              letterSpacing: language === 'ar' ? '0' : '0.03em',
            }}>
              {language === 'ar' ? 'طب النانو' : 'Nanomedicine'}
            </span>
          </div>
        </a>

        {/* Desktop Links */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '2rem',
        }} className="desktop-nav">
          <div style={{
            display: 'flex',
            gap: '0.25rem',
            alignItems: 'center',
          }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                style={{
                  textDecoration: 'none',
                  color: 'rgba(255,255,255,0.6)',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  padding: '0.5rem 0.75rem',
                  borderRadius: '8px',
                  transition: 'all 0.3s ease',
                  fontFamily: language === 'ar' ? "'Noto Sans Arabic', sans-serif" : "'Inter', sans-serif",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#0EA5A4';
                  e.currentTarget.style.background = 'rgba(14,165,164,0.08)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
          <LanguageToggle />
        </div>

        {/* Mobile Menu Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }} className="mobile-nav">
          <LanguageToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '8px',
              display: 'flex',
              flexDirection: 'column',
              gap: mobileOpen ? '0' : '5px',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
            }}
          >
            <span style={{
              display: 'block',
              width: '22px',
              height: '2px',
              background: '#ffffff',
              borderRadius: '1px',
              transition: 'all 0.3s ease',
              transform: mobileOpen ? 'rotate(45deg) translateY(1px)' : 'none',
            }} />
            <span style={{
              display: 'block',
              width: '22px',
              height: '2px',
              background: '#ffffff',
              borderRadius: '1px',
              transition: 'all 0.3s ease',
              opacity: mobileOpen ? 0 : 1,
            }} />
            <span style={{
              display: 'block',
              width: '22px',
              height: '2px',
              background: '#ffffff',
              borderRadius: '1px',
              transition: 'all 0.3s ease',
              transform: mobileOpen ? 'rotate(-45deg) translateY(-1px)' : 'none',
            }} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div style={{
        maxHeight: mobileOpen ? '400px' : '0',
        overflow: 'hidden',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        background: 'rgba(7,20,38,0.95)',
        backdropFilter: 'blur(20px)',
      }}>
        <div style={{
          padding: '1rem clamp(1.5rem, 4vw, 3rem)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.25rem',
        }}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                textDecoration: 'none',
                color: 'rgba(255,255,255,0.7)',
                fontSize: '0.95rem',
                fontWeight: 500,
                padding: '0.75rem 1rem',
                borderRadius: '10px',
                transition: 'all 0.2s ease',
                fontFamily: language === 'ar' ? "'Noto Sans Arabic', sans-serif" : "'Inter', sans-serif",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(14,165,164,0.1)';
                e.currentTarget.style.color = '#0EA5A4';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'transparent';
                e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <style jsx>{`
        @media (min-width: 769px) {
          .mobile-nav { display: none !important; }
        }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </nav>
  );
}
