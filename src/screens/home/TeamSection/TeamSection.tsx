import React from 'react';

import { SectionTitle } from '@app/components/SectionTitle/SectionTitle';
import { teamData } from '@app/data/team';

import { MemberCard } from './components/MemberCard';
import s from './TeamSection.module.scss';

export const TeamSection = () => {
  return (
    <section className={s.root}>
      <SectionTitle className={s.header}>Team</SectionTitle>
      <div className={s.team}>
        {teamData.map(teamMember => (
          <MemberCard teamMember={teamMember} key={teamMember.id} />
        ))}
      </div>
    </section>
  );
};
