import React from 'react';

import { roadmapData } from '@app/data/roadmap';
import { Icon, LinkWrapper } from '@app/ui-kit';

import s from './RoadmapSection.module.scss';

export const RoadmapSection = () => {
  return (
    <section className={s.root}>
      <h2 className={s.header}>2024 Roadmap</h2>
      <div className={s.scrollContainer}>
        <div className={s.scrollWrapper}>
          <div className={s.roadmap}>
            {roadmapData.map(({ quarter, milestones }) => (
              <article className={s.quarter} key={quarter}>
                <p className={s.quarterName}>{quarter}</p>
                <ul className={s.milestones}>
                  {milestones.map(({ title, link }) => (
                    <li key={title}>
                      {link ? (
                        <LinkWrapper href={link} isExternal className={s.link}>
                          {title}
                          <Icon name="externalLink" className={s.icon} />
                        </LinkWrapper>
                      ) : (
                        title
                      )}
                    </li>
                  ))}
                </ul>
                <span className={s.filler} />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
