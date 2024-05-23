import cn from 'classnames';
import { InputHTMLAttributes } from 'react';

import s from './Input.module.scss';

interface InputProps {
  label: string;
  name: string;
  error?: string;
  type?: InputHTMLAttributes<any>['type'];
  className?: string;
}

export const Input = (props: InputProps) => {
  const { type = 'text', name, label, error, className } = props;

  return (
    <div
      className={cn(s.root, className, {
        [s.hasError]: !!error
      })}
    >
      <label htmlFor={name}>{label}</label>
      <input id={name} name={name} type={type} className={s.input} />
      {error && <div className={s.error}>{error}</div>}
    </div>
  );
};
