import React from 'react';
import { useMedia } from 'react-use';

import MagicPowered from '@app/assets/images/developers/magic-powered.svg';
import Nethermind from '@app/assets/images/developers/nethermind.svg';
import { SectionTitle } from '@app/components/SectionTitle/SectionTitle';

import s from './DevelopersSection.module.scss';

export const DevelopersSection = () => {
  const isMobile = useMedia('(max-width: 959px)', false);

  return (
    <section className={s.root}>
      <SectionTitle className={s.header}>
        <span>Developers Building</span> <span>with Ringfence</span>
      </SectionTitle>
      <div className={s.developers}>
        <div className={s.arrow}>&lt;</div>
        <Nethermind className={s.developer} />
        <div className={s.mid}>{isMobile ? '</>' : '/'}</div>
        <MagicPowered className={s.developer} />
        <div className={s.arrow}>&gt;</div>
      </div>
    </section>
  );
};
