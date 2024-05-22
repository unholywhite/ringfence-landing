import Image from 'next/image';

import { MemberSocials, TeamMember } from '@app/types';
import { LinkWrapper } from '@app/ui-kit';
import { Button } from '@app/ui-kit/Button';

import s from './MemberCard.module.scss';

interface MemberCardProps {
  teamMember: TeamMember;
}

export const MemberCard = (props: MemberCardProps) => {
  const { name, position, text, imageUrl, socials } = props.teamMember;

  const socialLinks: {
    key: keyof MemberSocials;
    socialName: string;
  }[] = [
    { key: 'twitter', socialName: 'X/Twitter' },
    { key: 'linkedin', socialName: 'LinkedIn' }
  ];

  return (
    <article className={s.root}>
      <div className={s.top}>
        <div className={s.imageWrapper}>
          <Image src={imageUrl} alt={name} fill className={s.image} />
        </div>
        <div className={s.info}>
          <div>
            <p className={s.name}>{name}</p>
            <p className={s.position}>{position}</p>
          </div>
          <div className={s.socials}>
            {socials &&
              socialLinks.map(
                ({ socialName, key }) =>
                  socials[key] && (
                    <LinkWrapper key={key} href={socials[key]} isExternal>
                      <Button variant="secondary" className={s.social}>
                        {socialName}
                      </Button>
                    </LinkWrapper>
                  )
              )}
          </div>
        </div>
      </div>
      <p className={s.text}>{text}</p>
    </article>
  );
};
