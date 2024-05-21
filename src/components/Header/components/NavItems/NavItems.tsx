import React from 'react';

import LinkWrapper from '@app/ui-kit/LinkWrapper/LinkWrapper';

interface NavItemsProps {
  className?: string;
}

export const NavItems = (props: NavItemsProps) => {
  const { className } = props;

  return (
    <div className={className}>
      <LinkWrapper href={'#'}>Nodes</LinkWrapper>
      <LinkWrapper href={'#'}>Escher</LinkWrapper>
      <LinkWrapper href={'#'}>Foundation</LinkWrapper>
      <LinkWrapper href={'#'}>About</LinkWrapper>
    </div>
  );
};
