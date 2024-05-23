import { NextPage } from 'next';
import React from 'react';

import MainLayout from '@app/components/MainLayout';
import { AngelsSection } from '@app/screens/home/AngelsSection';
import { DiagramSection } from '@app/screens/home/DiagramSection';
import { PartnersSection } from '@app/screens/home/PartnersSection';
import { RingfenceEcosystemProjectsSection } from '@app/screens/home/RingfenceEcosystemProjectsSection';
import { RoadmapSection } from '@app/screens/home/RoadmapSection';
import { TeamSection } from '@app/screens/home/TeamSection';
import { VentureBackersSection } from '@app/screens/home/VentureBackersSection';

const HomePage: NextPage = () => {
  return (
    <MainLayout>
      <VentureBackersSection />
      <AngelsSection />
      <DiagramSection />
      <PartnersSection />
      <RingfenceEcosystemProjectsSection />
      <RoadmapSection />
      <TeamSection />
    </MainLayout>
  );
};

export default HomePage;
