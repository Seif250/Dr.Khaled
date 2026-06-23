'use client';

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import LanguageToggle from '@/components/ui/LanguageToggle';

import Link from 'next/link';

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
    { href: '/', label: t('nav.home') },
    { href: '/technologies', label: t('nav.technologies') },
    { href: '/about-dr-khaled', label: t('nav.aboutDr') },
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
        padding: scrolled ? '16px 0' : '24px 0',
        background: scrolled ? undefined : 'var(--white)',
        borderBottom: scrolled ? 'none' : '1px solid rgba(0,0,0,0.04)',
        transition: 'all 0.4s var(--ease)',
      }}
    >
      <div style={{
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 var(--container-padding)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <Link href="/" style={{
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            lineHeight: 1.2,
          }}>
            <span style={{
              fontWeight: 700,
              fontSize: '22px',
              color: 'var(--text)',
              fontFamily: 'var(--font-outfit)',
              letterSpacing: '-0.04em',
            }}>
              GR Nano
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '40px',
        }} className="desktop-nav">
          <div style={{
            display: 'flex',
            gap: '32px',
            alignItems: 'center',
          }}>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="nav-link"
                style={{
                  textDecoration: 'none',
                  color: 'var(--text-secondary)',
                  fontSize: '15px',
                  fontWeight: 500,
                  transition: 'color 0.3s var(--ease)',
                  fontFamily: language === 'ar' ? 'var(--font-cairo)' : 'var(--font-outfit)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--text)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--text-secondary)'; }}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <LanguageToggle />
        </div>

        {/* Mobile Menu Button */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }} className="mobile-nav">
          <LanguageToggle />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle Menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'column',
              gap: mobileOpen ? '0' : '6px',
              alignItems: 'center',
              justifyContent: 'center',
              width: '24px',
              height: '24px',
            }}
          >
            <span style={{
              display: 'block',
              width: '100%',
              height: '1.5px',
              background: 'var(--text)',
              transition: 'all 0.3s ease',
              transform: mobileOpen ? 'rotate(45deg) translateY(1px)' : 'none',
            }} />
            <span style={{
              display: 'block',
              width: '100%',
              height: '1.5px',
              background: 'var(--text)',
              transition: 'all 0.3s ease',
              opacity: mobileOpen ? 0 : 1,
            }} />
            <span style={{
              display: 'block',
              width: '100%',
              height: '1.5px',
              background: 'var(--text)',
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
        transition: 'all 0.4s var(--ease)',
        background: 'var(--white)',
        borderBottom: mobileOpen ? '1px solid rgba(0,0,0,0.06)' : 'none',
      }}>
        <div style={{
          padding: '24px var(--container-padding)',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                textDecoration: 'none',
                color: 'var(--text)',
                fontSize: '16px',
                fontWeight: 500,
                fontFamily: language === 'ar' ? 'var(--font-cairo)' : 'var(--font-outfit)',
              }}
            >
              {link.label}
            </Link>
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
