import cn from 'classnames';
import React, { useCallback, useRef, useState } from 'react';
import { useToggle } from 'react-use';

import Logo from '@app/assets/images/logo/logo.svg';
import { NavItems } from '@app/components/Header/components/NavItems';
import { useOnClickOutside } from '@app/hooks/useOnClickOutside';
import { useOnWindowScroll } from '@app/hooks/useOnWindowScroll';
import { Icon } from '@app/ui-kit';
import { AnimateHeight } from '@app/ui-kit/AnimateHeight';

import s from './Header.module.scss';

interface HeaderProps {
  className?: string;
}

const Header: React.FC<HeaderProps> = ({ className }) => {
  const rootRef = useRef<HTMLDivElement>(null);

  const [open, toggleOpen] = useToggle(false);
  const [pinned, setPinned] = useState(false);

  const onScroll = useCallback(() => {
    setPinned(window.scrollY !== 0);
  }, []);

  useOnWindowScroll({ callback: onScroll });

  const closePopup = useCallback(() => toggleOpen(false), []);

  useOnClickOutside([rootRef], closePopup);

  return (
    <div
      className={cn(s.root, className, {
        [s.open]: open,
        [s.pinned]: pinned
      })}
      ref={rootRef}
    >
      <div className={s.content}>
        <Logo />
        <div className={s.burgerContainer} onClick={toggleOpen}>
          <Icon name={open ? 'closeMenu' : 'burger'} className={s.burger} />
        </div>

        <NavItems className={s.desktopNav} />
      </div>

      <div className={s.dropdown} onClick={toggleOpen}>
        <AnimateHeight isVisible={open}>
          <NavItems className={s.mobileNav} />
        </AnimateHeight>
      </div>
    </div>
  );
};

export default Header;
