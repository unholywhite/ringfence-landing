import React from 'react';
import { useMedia } from 'react-use';

import Arweave from '@app/assets/images/partners/arweave.svg';
import LayerZero from '@app/assets/images/partners/layer-zero.svg';
import LeonardoAi from '@app/assets/images/partners/leonardo-ai.svg';
import Tada from '@app/assets/images/partners/tada.svg';
import { SectionTitle } from '@app/components/SectionTitle/SectionTitle';
import { Icon, LinkWrapper } from '@app/ui-kit';

import s from './PartnersSection.module.scss';

export const PartnersSection = () => {
  const isMobile = useMedia('(max-width: 639px)', false);

  return (
    <section className={s.root}>
      {isMobile ? (
        <h2 className={s.header}>Partners</h2>
      ) : (
        <SectionTitle className={s.header}>Partners</SectionTitle>
      )}
      <div className={s.partners}>
        <LinkWrapper
          href="https://leonardo.ai/"
          isExternal
          className={s.partner}
        >
          <Icon name="externalLink" className={s.icon} />
          <div className={s.logo}>
            <LeonardoAi className={s.svgLogo} />
          </div>
          <p className={s.text}>
            Leonardo AI is a leading generative AI platform used by over 4
            million creators. Leonardo sports a comprehensive suite of creator
            tooling enabling users to create production-quality visual assets
            through upscaling, motion generation, and lots more.
          </p>
        </LinkWrapper>
        <LinkWrapper href="https://ta-da.io/" isExternal className={s.partner}>
          <Icon name="externalLink" className={s.icon} />
          <div className={s.logo}>
            <Tada className={s.svgLogo} />
          </div>
          <p className={s.text}>
            Ta-da is the foremost app used for fair and decentralized data
            collection & data labeling. Ta-da enables cost-effective,
            high-quality and diversified data collection through enabling users
            to provide data with precise requirements and quality criteria.
          </p>
        </LinkWrapper>
        <LinkWrapper
          href="https://www.arweave.org/"
          isExternal
          className={s.partner}
        >
          <Icon name="externalLink" className={s.icon} />
          <div className={s.logo}>
            <Arweave className={s.svgLogo} />
          </div>
          <p className={s.text}>
            Arweave is a permanent and decentralized information storage network
            forming a community-driven ecosystem. Arweave offers permanent and
            immutable data storage to make information permanence more
            sustainable, offering a censorship-resistant alternative to
            traditional web hosting and more.
          </p>
        </LinkWrapper>
        <LinkWrapper
          href="https://layerzero.network/"
          isExternal
          className={s.partner}
        >
          <Icon name="externalLink" className={s.icon} />
          <div className={s.logo}>
            <LayerZero className={s.svgLogo} />
          </div>
          <p className={s.text}>
            LayerZero is an interoperability protocol connecting over 50
            EVM-compatible blockchains, enabling builders to create seamless
            omnichain dApps, tokens and more. LayerZero&rsquo;s interoperability
            protocol has helped to transfer over $50B with 124.6M messages sent
            across 50+ supported blockchains.
          </p>
        </LinkWrapper>
      </div>
    </section>
  );
};
