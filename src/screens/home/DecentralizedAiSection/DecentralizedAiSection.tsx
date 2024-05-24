import React from 'react';

import DecentralizedAi from '@app/assets/images/decentralized-ai.svg';
import { NODES_LINK } from '@app/constants/navigation';
import { LinkWrapper } from '@app/ui-kit';
import { Button } from '@app/ui-kit/Button';

import s from './DecentralizedAiSection.module.scss';

export const DecentralizedAiSection = () => {
  return (
    <section className={s.root}>
      <div className={s.visual}>
        <div className={s.videoWrapper}>
          <video
            className={s.video}
            poster="/images/video-posters/decentralized-ai.png"
            playsInline
            autoPlay
            muted
            loop
          >
            <source src="/videos/decentralized-ai.mp4" type="video/mp4" />
            <source src="/videos/decentralized-ai.webm" type="video/webm" />
          </video>
          <div className={s.leftGrad} />
          <div className={s.rightGrad} />
        </div>
        <div className={s.diagram}>
          <DecentralizedAi className={s.diagramSvg} />
        </div>
      </div>
      <div className={s.info}>
        <h2 className={s.header}>Do Meaningful Work</h2>
        <p className={s.subHeader}>Support Decentralized AI</p>
        <p className={s.text}>
          Ringfence Nodes set the foundation for a Decentralized AI ecosystem,
          allowing anyone to run a decentralized validator node and participate
          in the upside of AI.
        </p>
        <LinkWrapper href={NODES_LINK} isExternal>
          <Button className={s.link}>Register for Node Sale</Button>
        </LinkWrapper>
      </div>
    </section>
  );
};
