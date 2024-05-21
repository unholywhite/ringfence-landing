import { motion } from 'framer-motion';
import React, { useRef, ReactNode } from 'react';

import { useMeasure } from '@app/hooks/useMeasure';
import { DEFAULT_VARIANT } from '@app/ui-kit/AnimateHeight/config';

interface Props {
  isVisible: boolean;
  ease?: string;
  duration?: number;
  className?: string;
  variants?: {
    open: Record<string, string | number>;
    collapsed: Record<string, string | number>;
  };
  children:
    | ReactNode
    | ((ref: React.MutableRefObject<HTMLDivElement | null>) => ReactNode);
}

export const AnimateHeight = (props: Props) => {
  const {
    duration = 0.3,
    ease = 'easeOut',
    variants = DEFAULT_VARIANT,
    isVisible,
    children,
    ...other
  } = props;

  const ref = useRef(null);
  const bounds = useMeasure(ref);

  return (
    <motion.div
      style={{ overflow: 'hidden' }}
      initial={isVisible ? 'open' : 'collapsed'}
      animate={isVisible ? 'open' : 'collapsed'}
      inherit={false}
      variants={variants}
      transition={{
        ease,
        duration:
          typeof duration === 'number'
            ? duration
            : getAutoHeightDuration(bounds.height) / 1000
      }}
      {...other}
    >
      {typeof children === 'function' ? (
        children(ref)
      ) : (
        <div ref={ref}>{children}</div>
      )}
    </motion.div>
  );
};

/**
 * Get the duration of the animation depending upon
 * the height provided.
 * @param {number} height of container
 */

function getAutoHeightDuration(height: number) {
  if (!height) return 0;

  const constant = height / 36;

  return Math.round((4 + 15 * constant ** 0.25 + constant / 5) * 10);
}

AnimateHeight.defaultProps = {
  ease: 'easeOut',
  variants: {
    open: {
      opacity: 1,
      height: 'auto'
    },
    collapsed: { opacity: 0, height: 0 }
  }
};
