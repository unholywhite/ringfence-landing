import { useEffect } from 'react';

export function usePreventBodyScroll(prevent: boolean) {
  useEffect(() => {
    if (prevent) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [prevent]);
}
