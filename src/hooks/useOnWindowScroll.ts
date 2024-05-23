import { useEffect } from 'react';

interface Input {
  initCall?: boolean;
  callback: () => void;
}

export function useOnWindowScroll(input: Input) {
  const { initCall = true, callback } = input;

  useEffect(() => {
    if (initCall) {
      callback();
    }

    window.addEventListener('scroll', callback);

    return () => window.removeEventListener('scroll', callback);
  }, [callback]);
}
