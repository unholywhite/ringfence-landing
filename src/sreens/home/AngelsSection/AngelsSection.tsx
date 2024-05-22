import React, { Fragment } from 'react';
import Marquee from 'react-fast-marquee';

import { angels } from '@app/data/angels';
import { LinkWrapper } from '@app/ui-kit';

import s from './AngelsSection.module.scss';

export const AngelsSection = () => {
  const angelsLength = angels.length;
  const halfSize = Math.ceil(angelsLength / 2);

  const angelsToMap = [];

  for (let i = 0; i < angelsLength; i += halfSize) {
    angelsToMap.push(angels.slice(i, i + halfSize));
  }

  return (
    <section className={s.root}>
      <div className={s.angels}>
        {angelsToMap.map((chunk, index) => (
          <Fragment key={index}>
            <Marquee
              pauseOnHover
              direction={index % 2 === 0 ? 'right' : 'left'}
            >
              {chunk.map(({ id, name, imageUrl, twitterUrl }) => (
                <LinkWrapper
                  key={id}
                  href={twitterUrl}
                  isExternal
                  className={s.angel}
                >
                  <img src={imageUrl} alt={name} className={s.image} />
                  <span className={s.name}>{name}</span>
                </LinkWrapper>
              ))}
            </Marquee>
            {index === 0 && <h2 className={s.header}>Angels</h2>}
          </Fragment>
        ))}
      </div>
    </section>
  );
};
