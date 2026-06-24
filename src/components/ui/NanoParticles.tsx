'use client';

import React, { useRef, useEffect, useCallback } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  color: string;
  pulseSpeed: number;
  pulseOffset: number;
}

interface NanoParticlesProps {
  variant?: 'hero' | 'section' | 'dark';
  particleCount?: number;
  className?: string;
  style?: React.CSSProperties;
}

const COLORS_LIGHT = [
  'rgba(79, 168, 216, 0.3)',   // Serene Blue
  'rgba(15, 118, 110, 0.25)',  // Deep Teal
  'rgba(16, 185, 129, 0.2)',   // Emerald
  'rgba(79, 168, 216, 0.15)',  // Serene Blue lighter
  'rgba(15, 118, 110, 0.15)',  // Deep Teal lighter
];

const COLORS_DARK = [
  'rgba(79, 168, 216, 0.25)',
  'rgba(15, 118, 110, 0.3)',
  'rgba(16, 185, 129, 0.2)',
  'rgba(79, 168, 216, 0.15)',
  'rgba(16, 185, 129, 0.15)',
];

export default function NanoParticles({ 
  variant = 'section', 
  particleCount,
  className = '',
  style = {},
}: NanoParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationRef = useRef<number>(0);
  const isVisibleRef = useRef(true);

  const count = particleCount ?? (variant === 'hero' ? 45 : 25);
  const isDark = variant === 'dark';
  const connectionDistance = variant === 'hero' ? 120 : 100;
  const colors = isDark ? COLORS_DARK : COLORS_LIGHT;
  const lineColor = isDark 
    ? 'rgba(79, 168, 216, 0.08)' 
    : 'rgba(15, 118, 110, 0.06)';

  const initParticles = useCallback((width: number, height: number) => {
    const particles: Particle[] = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 3 + 1.5,
        opacity: Math.random() * 0.5 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        pulseSpeed: Math.random() * 0.01 + 0.005,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }
    return particles;
  }, [count, colors]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Handle resize
    const resizeCanvas = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + 'px';
      canvas.style.height = rect.height + 'px';
      ctx.scale(dpr, dpr);
      particlesRef.current = initParticles(rect.width, rect.height);
    };

    resizeCanvas();

    // IntersectionObserver for performance
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisibleRef.current = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );
    observer.observe(canvas);

    let time = 0;

    const animate = () => {
      animationRef.current = requestAnimationFrame(animate);
      
      if (!isVisibleRef.current) return;

      const rect = canvas.parentElement?.getBoundingClientRect();
      if (!rect) return;
      const width = rect.width;
      const height = rect.height;

      ctx.clearRect(0, 0, width, height);
      time += 1;

      const particles = particlesRef.current;

      // Update & draw particles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Gentle organic movement
        p.x += p.vx + Math.sin(time * 0.005 + p.pulseOffset) * 0.1;
        p.y += p.vy + Math.cos(time * 0.004 + p.pulseOffset) * 0.08;

        // Wrap around edges
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Pulse opacity
        const pulse = Math.sin(time * p.pulseSpeed + p.pulseOffset) * 0.15 + 0.85;
        const currentOpacity = p.opacity * pulse;

        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color.replace(/[\d.]+\)$/, `${currentOpacity})`);
        ctx.fill();

        // Subtle glow for larger particles
        if (p.radius > 2.5) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = p.color.replace(/[\d.]+\)$/, `${currentOpacity * 0.15})`);
          ctx.fill();
        }
      }

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const opacity = (1 - dist / connectionDistance) * 0.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = lineColor.replace(/[\d.]+\)$/, `${opacity * 0.3})`);
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
    };

    animate();

    const handleResize = () => resizeCanvas();
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationRef.current);
      observer.disconnect();
      window.removeEventListener('resize', handleResize);
    };
  }, [initParticles, connectionDistance, lineColor]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 1,
        ...style,
      }}
    />
  );
}
