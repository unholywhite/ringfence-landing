import { useState, useEffect, Ref, useCallback, MutableRefObject } from 'react';
import ResizeObserver from 'resize-observer-polyfill';

export function useMeasure(ref: Ref<HTMLDivElement>): {
  height: number;
  width: number;
} {
  const [element, attachRef] = useCallbackRef();
  const [bounds, setBounds] = useState({ width: 0, height: 0 });

  useEffect(() => {
    // @ts-ignore
    function onResize([entry]) {
      setBounds({
        height: entry.contentRect.height as number,
        width: entry.contentRect.width as number
      });
    }

    // @ts-ignore
    const observer = new ResizeObserver(onResize);

    // @ts-ignore
    if (element && element.current) {
      // @ts-ignore
      observer.observe(element.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [element]);

  useEffect(() => {
    if (attachRef) {
      // @ts-ignore
      attachRef(ref);
    }
  }, [attachRef, ref]);

  return bounds;
}

export function useCallbackRef() {
  const [ref, setRef] = useState<MutableRefObject<HTMLDivElement> | null>(null);
  const fn = useCallback((node: MutableRefObject<HTMLDivElement>) => {
    setRef(node);
  }, []);

  return [ref, fn];
}
