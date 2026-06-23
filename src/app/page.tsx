'use client';

import { LanguageProvider } from '@/context/LanguageContext';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import MissionSection from '@/components/sections/MissionSection';
import WhyNanomedicine from '@/components/sections/WhyNanomedicine';
import JourneySection from '@/components/sections/JourneySection';
import ScientificImpact from '@/components/sections/ScientificImpact';
import ResearchAreas from '@/components/sections/ResearchAreas';
import GlobalRecognition from '@/components/sections/GlobalRecognition';
import Publications from '@/components/sections/Publications';
import InnovationPatents from '@/components/sections/InnovationPatents';
import PersonalVision from '@/components/sections/PersonalVision';
import Collaborations from '@/components/sections/Collaborations';
import MediaTalks from '@/components/sections/MediaTalks';

export default function Home() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <HeroSection />
        <MissionSection />
        <WhyNanomedicine />
        <JourneySection />
        <ScientificImpact />
        <ResearchAreas />
        <GlobalRecognition />
        <Publications />
        <InnovationPatents />
        <PersonalVision />
        <Collaborations />
        <MediaTalks />
      </main>
      <Footer />
    </LanguageProvider>
  );
}
