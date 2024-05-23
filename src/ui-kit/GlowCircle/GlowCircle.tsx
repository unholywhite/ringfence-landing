import cn from 'classnames';

import s from './GlowCircle.module.scss';

interface GlowCircleProps {
  classes?: {
    root?: string;
    glow?: string;
  };
}

export const GlowCircle = (props: GlowCircleProps) => {
  const { classes } = props;

  return (
    <div className={cn(s.root, classes?.root)}>
      <div className={cn(s.glow, classes?.glow)} />
    </div>
  );
};
