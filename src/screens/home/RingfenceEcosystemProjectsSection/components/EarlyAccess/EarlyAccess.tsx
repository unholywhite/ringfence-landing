import cn from 'classnames';
import { useToggle } from 'react-use';

import { Button } from '@app/ui-kit/Button';

import { RegistrationModal } from './components/RegistrationModal';
import s from './EarlyAccess.module.scss';

interface EarlyAccessProps {
  className?: string;
}

export const EarlyAccess = (props: EarlyAccessProps) => {
  const { className } = props;

  const [open, toggleOpen] = useToggle(false);

  return (
    <>
      <div className={cn(s.root, className)}>
        <div>For Early Access</div>
        <Button className={s.btn} variant="secondary" onClick={toggleOpen}>
          Register Now
        </Button>
      </div>
      <RegistrationModal open={open} toggleOpen={toggleOpen} />
    </>
  );
};
