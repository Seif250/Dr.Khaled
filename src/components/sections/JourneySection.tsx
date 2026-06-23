'use client';

import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';

const journeyData = [
  { key: 'egypt', emoji: '🇪🇬', color: '#D4A63F', x: 360, y: 200, label: 'Cairo' },
  { key: 'japan', emoji: '🇯🇵', color: '#ef4444', x: 680, y: 165, label: 'Kumamoto' },
  { key: 'usa', emoji: '🇺🇸', color: '#0EA5A4', x: 140, y: 155, label: 'Utah' },
  { key: 'nz', emoji: '🇳🇿', color: '#00D4A6', x: 740, y: 340, label: 'Otago' },
  { key: 'bahrain', emoji: '🇧🇭', color: '#0EA5A4', x: 410, y: 210, label: 'Bahrain' },
];

// Simplified world map path (continents silhouette)
const worldMapPath = "M45,120 L55,115 L60,100 L80,95 L95,100 L100,110 L110,115 L120,105 L140,100 L160,90 L175,85 L190,80 L195,85 L200,95 L195,105 L185,120 L175,140 L170,160 L165,180 L155,200 L140,220 L130,240 L115,260 L100,275 L85,280 L70,270 L60,255 L55,235 L50,210 L45,190 L42,170 L43,150 L45,120 M280,80 L290,75 L310,72 L330,68 L345,65 L360,70 L375,80 L390,85 L405,78 L418,75 L430,80 L440,90 L448,100 L455,115 L460,130 L462,150 L458,170 L450,185 L440,195 L425,200 L415,210 L420,225 L425,240 L420,260 L410,275 L395,285 L380,290 L365,280 L355,265 L350,245 L345,225 L340,210 L330,200 L320,195 L310,200 L300,210 L290,225 L280,235 L275,225 L278,210 L280,190 L275,170 L270,150 L268,130 L270,110 L275,95 L280,80 M480,100 L500,92 L520,88 L545,85 L570,82 L595,80 L620,82 L645,88 L660,95 L672,105 L680,115 L685,130 L688,145 L690,160 L688,170 L685,178 L680,185 L670,188 L660,185 L650,180 L640,175 L630,172 L620,175 L610,180 L600,188 L590,195 L580,198 L570,195 L560,190 L548,185 L535,182 L525,180 L515,178 L505,175 L498,168 L492,158 L488,145 L485,130 L482,115 L480,100 M620,250 L640,245 L660,248 L680,255 L700,260 L715,268 L725,278 L730,290 L728,305 L720,318 L710,328 L695,335 L680,340 L665,345 L650,348 L635,345 L625,338 L618,325 L615,310 L614,295 L615,278 L618,265 L620,250";

export default function JourneySection() {
  const { t } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Flight path connecting the countries in order
  const flightPath = `M${journeyData[0].x},${journeyData[0].y} C${journeyData[0].x + 100},${journeyData[0].y - 80} ${journeyData[1].x - 100},${journeyData[1].y - 60} ${journeyData[1].x},${journeyData[1].y} C${journeyData[1].x - 200},${journeyData[1].y - 100} ${journeyData[2].x + 100},${journeyData[2].y - 80} ${journeyData[2].x},${journeyData[2].y} C${journeyData[2].x + 200},${journeyData[2].y + 100} ${journeyData[3].x - 100},${journeyData[3].y - 50} ${journeyData[3].x},${journeyData[3].y} C${journeyData[3].x - 150},${journeyData[3].y - 80} ${journeyData[4].x + 100},${journeyData[4].y + 50} ${journeyData[4].x},${journeyData[4].y}`;

  return (
    <section id="journey" ref={sectionRef} style={{
      background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 50%, #ffffff 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="section-container">
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-badge" style={{ margin: '0 auto 1.5rem' }}>{t('journey.badge')}</div>
            <h2 className="section-headline">{t('journey.headline')}</h2>
            <div className="accent-line" style={{ margin: '0 auto 1.5rem' }} />
          </div>
        </ScrollReveal>

        {/* World Map Container */}
        <ScrollReveal delay={1}>
          <div style={{
            position: 'relative',
            maxWidth: '900px',
            margin: '0 auto',
            aspectRatio: '16/9',
          }}>
            <svg
              viewBox="0 0 800 400"
              style={{ width: '100%', height: '100%' }}
              fill="none"
            >
              {/* World map silhouette */}
              <path
                d={worldMapPath}
                fill="none"
                stroke="rgba(14,165,164,0.12)"
                strokeWidth="1.5"
              />
              {/* Subtle filled continents */}
              <path
                d={worldMapPath}
                fill="rgba(14,165,164,0.03)"
                stroke="none"
              />

              {/* Grid dots for texture */}
              {Array.from({ length: 20 }).map((_, i) =>
                Array.from({ length: 10 }).map((_, j) => (
                  <circle
                    key={`dot-${i}-${j}`}
                    cx={40 + i * 38}
                    cy={40 + j * 35}
                    r="0.8"
                    fill="rgba(14,165,164,0.06)"
                  />
                ))
              )}

              {/* Flight path */}
              <path
                d={flightPath}
                stroke="url(#flightGradient)"
                strokeWidth="2"
                fill="none"
                strokeDasharray="8 6"
                style={{
                  strokeDashoffset: isVisible ? 0 : 2000,
                  transition: 'stroke-dashoffset 3s ease-in-out',
                  strokeDasharray: isVisible ? '8 6' : '2000',
                }}
              />

              {/* Gradient for flight path */}
              <defs>
                <linearGradient id="flightGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#D4A63F" />
                  <stop offset="25%" stopColor="#0EA5A4" />
                  <stop offset="50%" stopColor="#0EA5A4" />
                  <stop offset="75%" stopColor="#00D4A6" />
                  <stop offset="100%" stopColor="#0EA5A4" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Country dots */}
              {journeyData.map((item, i) => (
                <g key={item.key} style={{
                  opacity: isVisible ? 1 : 0,
                  transition: `opacity 0.6s ease ${0.5 + i * 0.4}s`,
                }}>
                  {/* Glow ring */}
                  <circle
                    cx={item.x}
                    cy={item.y}
                    r="15"
                    fill="none"
                    stroke={item.color}
                    strokeWidth="1"
                    opacity="0.3"
                    className={isVisible ? 'flight-dot' : ''}
                  />
                  {/* Outer ring */}
                  <circle
                    cx={item.x}
                    cy={item.y}
                    r="8"
                    fill={`${item.color}20`}
                    stroke={item.color}
                    strokeWidth="1.5"
                    filter="url(#glow)"
                  />
                  {/* Inner dot */}
                  <circle
                    cx={item.x}
                    cy={item.y}
                    r="4"
                    fill={item.color}
                    className="map-glow-dot"
                  />
                </g>
              ))}
            </svg>

            {/* Country labels — positioned absolutely over the SVG */}
            {journeyData.map((item, i) => (
              <div
                key={`label-${item.key}`}
                style={{
                  position: 'absolute',
                  left: `${(item.x / 800) * 100}%`,
                  top: `${(item.y / 400) * 100}%`,
                  transform: i % 2 === 0 ? 'translate(-50%, -180%)' : 'translate(-50%, 120%)',
                  opacity: isVisible ? 1 : 0,
                  transition: `opacity 0.6s ease ${0.8 + i * 0.4}s, transform 0.6s ease ${0.8 + i * 0.4}s`,
                  textAlign: 'center',
                  pointerEvents: 'none',
                  zIndex: 5,
                }}
              >
                <div style={{
                  background: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '12px',
                  padding: '0.5rem 0.85rem',
                  boxShadow: '0 4px 20px rgba(7,20,38,0.08)',
                  border: `1px solid ${item.color}25`,
                  whiteSpace: 'nowrap',
                }}>
                  <div style={{ fontSize: '1.1rem', marginBottom: '0.15rem' }}>{item.emoji}</div>
                  <div style={{
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color: item.color,
                    textTransform: 'uppercase' as const,
                    letterSpacing: '0.05em',
                  }}>
                    {t(`journey.${item.key}`)}
                  </div>
                  <div style={{
                    fontSize: '0.6rem',
                    color: '#64748b',
                    maxWidth: '120px',
                    lineHeight: 1.3,
                  }}>
                    {t(`journey.${item.key}Desc`)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Closing text */}
        <ScrollReveal>
          <p style={{
            textAlign: 'center',
            fontSize: 'clamp(1rem, 1.5vw, 1.15rem)',
            color: '#64748b',
            fontStyle: 'italic',
            maxWidth: '600px',
            margin: '3rem auto 0',
            lineHeight: 1.8,
          }}>
            {t('journey.closing')}
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
