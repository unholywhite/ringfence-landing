import React from 'react';

import Basement from '@app/assets/images/investors/basement.svg';
import Curiosity from '@app/assets/images/investors/curiosity.svg';
import Marshland from '@app/assets/images/investors/marshland.svg';
import MorningStar from '@app/assets/images/investors/morningstar.svg';
import Nabais from '@app/assets/images/investors/nabais.svg';
import NoirVentures from '@app/assets/images/investors/noir-ventures.svg';
import NxGen from '@app/assets/images/investors/nxgen.svg';
import Optimista from '@app/assets/images/investors/optimista.svg';
import RareStone from '@app/assets/images/investors/rarestone.svg';
import Spark from '@app/assets/images/investors/spark.svg';
import { SectionTitle } from '@app/components/SectionTitle/SectionTitle';
import { LinkWrapper } from '@app/ui-kit';

import s from './VentureBackersSection.module.scss';

export const VentureBackersSection = () => {
  return (
    <section className={s.root}>
      <SectionTitle className={s.header}>Venture Backers</SectionTitle>
      <div className={s.backers}>
        <LinkWrapper
          href="https://morningstar.ventures/"
          isExternal
          className={s.backer}
        >
          <MorningStar className={s.logo} />
        </LinkWrapper>
        <LinkWrapper
          href="https://www.rarestone.ventures/"
          isExternal
          className={s.backer}
        >
          <RareStone className={s.logo} />
        </LinkWrapper>
        <LinkWrapper
          href="https://www.marshlandcapital.com/"
          isExternal
          className={s.backer}
        >
          <Marshland className={s.logo} />
        </LinkWrapper>
        <LinkWrapper
          href="https://www.sparkdigitalcapital.com/"
          isExternal
          className={s.backer}
        >
          <Spark className={s.logo} />
        </LinkWrapper>
        <LinkWrapper
          href="https://www.curiositycapital.io/"
          isExternal
          className={s.backer}
        >
          <Curiosity className={s.logo} />
        </LinkWrapper>
        <LinkWrapper
          href="https://www.nxgen.xyz/"
          isExternal
          className={s.backer}
        >
          <NxGen className={s.logo} />
        </LinkWrapper>
        <LinkWrapper
          href="https://www.noir.io/"
          isExternal
          className={s.backer}
        >
          <NoirVentures className={s.logo} />
        </LinkWrapper>
        <LinkWrapper
          href="https://www.optimista.capital/"
          isExternal
          className={s.backer}
        >
          <Optimista className={s.logo} />
        </LinkWrapper>
        <LinkWrapper
          href="https://www.basementdao.com/"
          isExternal
          className={s.backer}
        >
          <Basement className={s.logo} />
        </LinkWrapper>
        <LinkWrapper
          href="https://nabais.capital/"
          isExternal
          className={s.backer}
        >
          <Nabais className={s.logo} />
        </LinkWrapper>
      </div>
    </section>
  );
};
