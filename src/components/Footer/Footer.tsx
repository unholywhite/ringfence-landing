import cn from 'classnames';
import React, { FC } from 'react';

import {
  DISCORD_LINK,
  PARTNERS_LINK,
  TERMS_LINK,
  X_LINK
} from '@app/constants/navigation';
import { Icon, LinkWrapper } from '@app/ui-kit';

import s from './Footer.module.scss';

interface FooterProps {
  className?: string;
}

const Footer: FC<FooterProps> = ({ className }) => {
  return (
    <div className={cn(s.root, className)}>
      <div className={s.content}>
        <div className={s.nav}>
          <LinkWrapper href={PARTNERS_LINK} isExternal className={s.navItem}>
            Partners
          </LinkWrapper>
          <LinkWrapper href={TERMS_LINK} className={s.navItem}>
            Terms
          </LinkWrapper>
          <LinkWrapper
            href={DISCORD_LINK}
            isExternal
            className={cn(s.social, s.navItem)}
          >
            <Icon name="socialDiscord" />
          </LinkWrapper>
          <LinkWrapper
            href={X_LINK}
            isExternal
            className={cn(s.social, s.navItem)}
          >
            <Icon name="socialX" />
          </LinkWrapper>
        </div>
        <p className={s.copy}>
          Copyright &copy; 2024 Ringfence, All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
