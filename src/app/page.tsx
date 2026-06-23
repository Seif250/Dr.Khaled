'use client';

import RGNanoHero from '@/components/sections/RGNanoHero';
import AboutRGNano from '@/components/sections/AboutRGNano';
import ScientificLeadershipBrief from '@/components/sections/ScientificLeadershipBrief';

export default function HomePage() {
  return (
    <main>
      <RGNanoHero />
      <AboutRGNano />
      <ScientificLeadershipBrief />
    </main>
  );
}
