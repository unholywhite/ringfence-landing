import cn from 'classnames';

import { Button } from '@app/ui-kit/Button';

import s from './EarlyAccess.module.scss';

interface EarlyAccessProps {
  className?: string;
}

export const EarlyAccess = (props: EarlyAccessProps) => {
  const { className } = props;

  return (
    <div className={cn(s.root, className)}>
      <div>For Early Access</div>
      <Button className={s.btn} variant="secondary">
        Register Now
      </Button>
    </div>
  );
};
