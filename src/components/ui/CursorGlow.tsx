'use client';

import React, { useEffect, useRef } from 'react';

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    if (!glow) return;

    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // Smooth follow with lerp
      currentX += (mouseX - currentX) * 0.08;
      currentY += (mouseY - currentY) * 0.08;
      
      glow.style.left = `${currentX}px`;
      glow.style.top = `${currentY}px`;
      
      requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    const animFrame = requestAnimationFrame(animate);

    // Hide on mobile
    const mediaQuery = window.matchMedia('(hover: none)');
    if (mediaQuery.matches) {
      glow.style.display = 'none';
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animFrame);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="cursor-glow"
      style={{ opacity: 1 }}
    />
  );
}
