import React from 'react';

import { LinkWrapper } from '@app/ui-kit';
import { Button } from '@app/ui-kit/Button';

import s from './RingfenceProtocolSection.module.scss';

export const RingfenceProtocolSection = () => {
  return (
    <section className={s.root}>
      <div className={s.visual}>
        <div className={s.videoWrapper}>
          <video
            className={s.video}
            poster="/images/video-posters/ringfence-protocol.png"
            playsInline
            autoPlay
            muted
            loop
          >
            <source src="/videos/ringfence-protocol.mp4" type="video/mp4" />
            <source src="/videos/ringfence-protocol.webm" type="video/webm" />
          </video>
          <div className={s.leftGrad} />
          <div className={s.rightGrad} />
        </div>
      </div>
      <div className={s.info}>
        <h2 className={s.header}>Ringfence Protocol</h2>
        <p className={s.text}>
          Easily integrate our protocol with your existing tech environment to
          enhance the accuracy and reliability of your AI models.
        </p>
        <ul className={s.features}>
          <li className={s.feature}>Verification and Labeling</li>
          <li className={s.feature}>Attribution and Abstraction</li>
          <li className={s.feature}>Valuation and Weighting</li>
          <li className={s.feature}>Storage and Protection</li>
        </ul>
        <LinkWrapper href="#" isExternal>
          <Button className={s.link}>Register for Early Access</Button>
        </LinkWrapper>
      </div>
    </section>
  );
};
