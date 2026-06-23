'use client';

import HeroSection from '@/components/sections/HeroSection';
import JourneySection from '@/components/sections/JourneySection';
import ResearchAreas from '@/components/sections/ResearchAreas';
import GlobalRecognition from '@/components/sections/GlobalRecognition';
import Publications from '@/components/sections/Publications';

export default function AboutDrKhaled() {
  return (
    <main>
      <HeroSection />
      <JourneySection />
      <ResearchAreas />
      <Publications />
      <GlobalRecognition />
    </main>
  );
}
