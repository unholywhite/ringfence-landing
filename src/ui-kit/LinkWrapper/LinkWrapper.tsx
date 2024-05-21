import cn from 'classnames';
import Link from 'next/link';
import React from 'react';

import s from './LinkWrapper.module.scss';

interface LinkWrapperProps {
  href?: string;
  isExternal?: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const LinkWrapper: React.FC<LinkWrapperProps> = ({
  href,
  isExternal = false,
  children,
  className,
  onClick,
  ...rest
}) => {
  const rootClassName = cn(s.root, className);

  if (isExternal && href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className={rootClassName}
        onClick={onClick}
        {...rest}
      >
        {children}
      </a>
    );
  }

  if (!isExternal && href) {
    return (
      <Link href={href} className={rootClassName} onClick={onClick} {...rest}>
        {children}
      </Link>
    );
  }

  return <div className={rootClassName}>{children}</div>;
};

export default LinkWrapper;
