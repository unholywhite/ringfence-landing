import cn from 'classnames';
import React, { LegacyRef } from 'react';

import s from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'transparent';
  size?: 'large' | 'medium' | 'small';
  disabled?: boolean | undefined;
}

export const Button = React.forwardRef(
  (
    {
      children,
      variant = 'primary',
      size = 'small',
      disabled = false,
      className: classNameProp,
      ...props
    }: ButtonProps,
    ref
  ) => {
    const variants = {
      primary: s.primary,
      secondary: s.secondary,
      transparent: s.transparent
    };

    const sizes = {
      large: s.large,
      medium: s.medium,
      small: s.small
    };

    const className = cn(s.btn, variants[variant], sizes[size], classNameProp);

    return (
      <button
        type="button"
        disabled={disabled}
        className={className}
        ref={ref as LegacyRef<HTMLButtonElement>}
        {...props}
      >
        {children}
      </button>
    );
  }
);
