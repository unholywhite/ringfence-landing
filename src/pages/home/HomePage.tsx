import { NextPage } from 'next';
import React from 'react';

import icons from 'public/icons';

import Diagram from '@app/assets/images/diagram.svg';
import Logo from '@app/assets/images/logo/logo.svg';
import MainLayout from '@app/components/MainLayout';
import { PartnersSection } from '@app/sreens/home/PartnersSection';
import { Icon, IconName } from '@app/ui-kit';

import s from './HomePage.module.scss';

const HomePage: NextPage = () => {
  return (
    <MainLayout className={s.root}>
      <Logo className={s.logo} />
      <h1 className={s.title}>Where Blockchain Meets AI</h1>
      <p className={s.text}>
        Ringfence Protocol is the data monetization layer for artificial
        intelligence.
      </p>
      <PartnersSection />
      <Diagram className={s.diagram} />
      <div className={s.icons}>
        {Object.keys(icons).map(icon => (
          <div key={icon} className={s.iconWrapper}>
            <p>{icon}</p>
            <Icon name={icon as IconName} title={icon} />
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default HomePage;
