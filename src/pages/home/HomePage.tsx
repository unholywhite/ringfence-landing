import { NextPage } from 'next';
import React from 'react';

import MainLayout from '@app/components/MainLayout';
import { AngelsSection } from '@app/screens/home/AngelsSection';
import { DecentralizedAiSection } from '@app/screens/home/DecentralizedAiSection';
import { DevelopersSection } from '@app/screens/home/DevelopersSection';
import { DiagramSection } from '@app/screens/home/DiagramSection';
import { GreetingSection } from '@app/screens/home/GreetingSection';
import { PartnersSection } from '@app/screens/home/PartnersSection';
import { RingfenceEcosystemProjectsSection } from '@app/screens/home/RingfenceEcosystemProjectsSection';
import { RingfenceProtocolSection } from '@app/screens/home/RingfenceProtocolSection';
import { RoadmapSection } from '@app/screens/home/RoadmapSection';
import { TeamSection } from '@app/screens/home/TeamSection';
import { VentureBackersSection } from '@app/screens/home/VentureBackersSection';

const HomePage: NextPage = () => {
  return (
    <MainLayout>
      <GreetingSection />
      <VentureBackersSection />
      <AngelsSection />
      <DiagramSection />
      <RingfenceProtocolSection />
      <DevelopersSection />
      <PartnersSection />
      <RingfenceEcosystemProjectsSection />
      <DecentralizedAiSection />
      <RoadmapSection />
      <TeamSection />
    </MainLayout>
  );
};

export default HomePage;
