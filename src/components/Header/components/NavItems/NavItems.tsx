import React from 'react';

import {
  ESHER_LINK,
  NODES_LINK,
  FOUNDATION_LINK
} from '@app/constants/navigation';
import LinkWrapper from '@app/ui-kit/LinkWrapper/LinkWrapper';

import s from './NavItems.module.scss';

interface NavItemsProps {
  className?: string;
}

export const NavItems = (props: NavItemsProps) => {
  const { className } = props;

  return (
    <div className={className}>
      <LinkWrapper href={NODES_LINK} className={s.nav} isExternal>
        Nodes
      </LinkWrapper>
      <LinkWrapper href={ESHER_LINK} className={s.nav} isExternal>
        Escher
      </LinkWrapper>
      <LinkWrapper href={FOUNDATION_LINK} className={s.nav} isExternal>
        Foundation
      </LinkWrapper>
      <LinkWrapper href={'#'} className={s.nav}>
        About
      </LinkWrapper>
    </div>
  );
};
