'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useLanguage } from '@/context/LanguageContext';
import ScrollReveal from '@/components/ui/ScrollReveal';

const nodes = [
  { key: 'agu', emoji: '🇧🇭', angle: 0, distance: 38 },
  { key: 'kumamoto', emoji: '🇯🇵', angle: 72, distance: 40 },
  { key: 'utah', emoji: '🇺🇸', angle: 144, distance: 38 },
  { key: 'otago', emoji: '🇳🇿', angle: 216, distance: 40 },
  { key: 'others', emoji: '🌍', angle: 288, distance: 38 },
];

export default function Collaborations() {
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Calculate node positions using angle and distance (percentage from center)
  const getNodePosition = (angle: number, distance: number) => {
    const radian = (angle - 90) * (Math.PI / 180);
    return {
      x: 50 + distance * Math.cos(radian),
      y: 50 + distance * Math.sin(radian),
    };
  };

  return (
    <section id="collaborations" ref={sectionRef} style={{
      background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <div className="section-container">
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-badge" style={{ margin: '0 auto 1.5rem' }}>{t('collaborations.badge')}</div>
            <h2 className="section-headline">{t('collaborations.headline')}</h2>
            <div className="accent-line" style={{ margin: '0 auto' }} />
          </div>
        </ScrollReveal>

        {/* Network Graph */}
        <div className="network-container" style={{
          maxWidth: '600px',
          aspectRatio: '1',
          margin: '0 auto',
        }}>
          {/* SVG Connection Lines */}
          <svg
            viewBox="0 0 100 100"
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              zIndex: 1,
            }}
          >
            {/* Orbital rings */}
            <circle cx="50" cy="50" r="38" fill="none" stroke="rgba(14,165,164,0.08)" strokeWidth="0.3" strokeDasharray="2 2" />
            <circle cx="50" cy="50" r="25" fill="none" stroke="rgba(14,165,164,0.05)" strokeWidth="0.2" strokeDasharray="1 3" />

            {/* Connection lines from center to each node */}
            {nodes.map((node, i) => {
              const pos = getNodePosition(node.angle, node.distance);
              return (
                <line
                  key={`line-${node.key}`}
                  x1="50"
                  y1="50"
                  x2={pos.x}
                  y2={pos.y}
                  stroke="#0EA5A4"
                  strokeWidth="0.4"
                  strokeDasharray="200"
                  style={{
                    strokeDashoffset: isVisible ? 0 : 200,
                    opacity: isVisible ? 0.4 : 0,
                    transition: `stroke-dashoffset 1.5s ease ${0.3 + i * 0.2}s, opacity 0.5s ease ${0.3 + i * 0.2}s`,
                  }}
                />
              );
            })}

            {/* Cross connections between adjacent nodes */}
            {nodes.map((node, i) => {
              const pos1 = getNodePosition(node.angle, node.distance);
              const nextNode = nodes[(i + 1) % nodes.length];
              const pos2 = getNodePosition(nextNode.angle, nextNode.distance);
              return (
                <line
                  key={`cross-${node.key}`}
                  x1={pos1.x}
                  y1={pos1.y}
                  x2={pos2.x}
                  y2={pos2.y}
                  stroke="#00D4A6"
                  strokeWidth="0.2"
                  strokeDasharray="1 2"
                  style={{
                    opacity: isVisible ? 0.2 : 0,
                    transition: `opacity 1s ease ${1 + i * 0.15}s`,
                  }}
                />
              );
            })}
          </svg>

          {/* Center Node — Dr. Khaled */}
          <div className="network-center" style={{
            opacity: isVisible ? 1 : 0,
            transition: 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s',
            transform: isVisible ? 'translate(-50%, -50%) scale(1)' : 'translate(-50%, -50%) scale(0.5)',
          }}>
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              overflow: 'hidden',
              border: '3px solid #0EA5A4',
              boxShadow: '0 0 30px rgba(14,165,164,0.3)',
              margin: '0 auto 0.5rem',
              position: 'relative',
            }}>
              <Image
                src="/images/dr-khaled-headshot.png"
                alt="Dr. Khaled Greish"
                fill
                style={{ objectFit: 'cover' }}
                sizes="80px"
              />
            </div>
            <div style={{
              fontSize: '0.7rem',
              fontWeight: 700,
              color: '#071426',
              whiteSpace: 'nowrap',
            }}>
              {t('collaborations.centerLabel')}
            </div>
          </div>

          {/* Satellite Nodes */}
          {nodes.map((node, i) => {
            const pos = getNodePosition(node.angle, node.distance);
            return (
              <div
                key={node.key}
                className="network-node"
                style={{
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                  opacity: isVisible ? 1 : 0,
                  transition: `opacity 0.6s ease ${0.6 + i * 0.2}s, transform 0.6s ease ${0.6 + i * 0.2}s`,
                }}
              >
                <div style={{
                  background: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '16px',
                  padding: '0.75rem 1rem',
                  textAlign: 'center',
                  boxShadow: '0 4px 20px rgba(7,20,38,0.08)',
                  border: '1px solid rgba(14,165,164,0.12)',
                  minWidth: '100px',
                  transition: 'all 0.3s ease',
                }}>
                  {/* Flag */}
                  <div style={{
                    fontSize: '1.5rem',
                    marginBottom: '0.25rem',
                    filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))',
                  }}>
                    {node.emoji}
                  </div>

                  {/* Name */}
                  <div style={{
                    fontSize: '0.65rem',
                    fontWeight: 700,
                    color: '#071426',
                    marginBottom: '0.15rem',
                    lineHeight: 1.2,
                  }}>
                    {t(`collaborations.${node.key}`)}
                  </div>

                  {/* Desc */}
                  <div style={{
                    fontSize: '0.55rem',
                    color: '#94a3b8',
                    lineHeight: 1.3,
                  }}>
                    {t(`collaborations.${node.key}Desc`)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
