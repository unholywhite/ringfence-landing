import React from 'react';

import LinkWrapper from '@app/ui-kit/LinkWrapper/LinkWrapper';

import s from './NavItems.module.scss';

interface NavItemsProps {
  className?: string;
}

export const NavItems = (props: NavItemsProps) => {
  const { className } = props;

  return (
    <div className={className}>
      <LinkWrapper href={'#'} className={s.nav}>
        Nodes
      </LinkWrapper>
      <LinkWrapper href={'#'} className={s.nav}>
        Escher
      </LinkWrapper>
      <LinkWrapper href={'#'} className={s.nav}>
        Foundation
      </LinkWrapper>
      <LinkWrapper href={'#'} className={s.nav}>
        About
      </LinkWrapper>
    </div>
  );
};
