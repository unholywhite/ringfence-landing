import cn from 'classnames';
import { PropsWithChildren } from 'react';

import s from './SectionTitle.module.scss';

interface SectionTitleProps extends PropsWithChildren {
  className?: string;
  headerClassName?: string;
}

export const SectionTitle = (props: SectionTitleProps) => {
  const { className, headerClassName, children } = props;

  return (
    <div className={className}>
      <div className={s.content}>
        <div className={s.left} />
        <h2 className={cn(s.header, headerClassName)}>{children}</h2>
        <div className={s.right} />
      </div>
    </div>
  );
};
