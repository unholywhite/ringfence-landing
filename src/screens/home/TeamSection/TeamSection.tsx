import React from 'react';

import { teamData } from '@app/data/team';

import { MemberCard } from './components/MemberCard';
import s from './TeamSection.module.scss';

export const TeamSection = () => {
  return (
    <section className={s.root}>
      <h2 className={s.header}>Team</h2>
      <div className={s.team}>
        {teamData.map(teamMember => (
          <MemberCard teamMember={teamMember} key={teamMember.id} />
        ))}
      </div>
    </section>
  );
};
