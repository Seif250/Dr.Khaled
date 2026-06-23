'use client';

import GRNanoHero from '@/components/sections/GRNanoHero';
import AboutGRNano from '@/components/sections/AboutGRNano';
import ScienceBehindGRNano from '@/components/sections/ScienceBehindGRNano';
import HomeTechnologies from '@/components/sections/HomeTechnologies';
import ScientificLeadershipBrief from '@/components/sections/ScientificLeadershipBrief';
import FounderStatement from '@/components/sections/FounderStatement';

export default function HomePage() {
  return (
    <main>
      <GRNanoHero />
      <AboutGRNano />
      <ScienceBehindGRNano />
      <HomeTechnologies />
      <ScientificLeadershipBrief />
      <FounderStatement />
    </main>
  );
}
