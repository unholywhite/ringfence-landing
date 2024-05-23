import { PropsWithChildren, ReactNode } from 'react';

import { Icon, IconName } from '@app/ui-kit';

import s from './RepTile.module.scss';

interface RepTileProps extends PropsWithChildren {
  icon: IconName;
  title: ReactNode;
}

export const RepTile = (props: RepTileProps) => {
  const { icon, title, children } = props;

  return (
    <div className={s.root}>
      <Icon name={icon} className={s.icon} />
      <div className={s.title}>{title}</div>
      <div className={s.description}>{children}</div>
    </div>
  );
};
