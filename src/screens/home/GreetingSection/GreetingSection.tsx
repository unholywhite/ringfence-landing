import cn from 'classnames';

import Ellipses from '@app/assets/images/elipses.svg';
import { GlowCircle } from '@app/ui-kit/GlowCircle/GlowCircle';

import s from './GreetingSection.module.scss';

export const GreetingSection = () => {
  return (
    <section className={s.root}>
      <div className={s.container}>
        <GlowCircle classes={{ root: cn(s.glow, s.left) }} />
        <GlowCircle classes={{ root: cn(s.glow, s.bottom) }} />

        <Ellipses className={s.circles} />

        <div className={s.content}>
          <div>Your Data Has Value.</div>
          <div className={s.ringfenceIt}>Ringfence It.</div>
          <div className={s.description}>
            Ringfence Protocol is the data monetization layer for artificial
            intelligence.
          </div>
        </div>
      </div>
      <GlowCircle classes={{ root: cn(s.glow, s.top) }} />
    </section>
  );
};
