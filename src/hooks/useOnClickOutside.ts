import React from 'react';

type AnyEvent = MouseEvent | TouchEvent;

export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  refs: React.RefObject<T>[],
  handler: (event: AnyEvent, isClickOutside: boolean) => void,
  allowModalNavigation?: boolean
): void {
  React.useEffect(() => {
    const listener = (event: AnyEvent) => {
      for (let i = 0; i < refs.length; i += 1) {
        const el = refs[i]?.current;

        // Do nothing if clicking ref's element or descendent elements
        if (!el || el.contains(event.target as Node)) {
          return;
        }
      }

      if (
        allowModalNavigation &&
        (event.target as HTMLElement)?.closest('.ReactModalPortal')
      ) {
        return;
      }

      handler(event, true);
    };

    document.addEventListener(`mousedown`, listener);
    document.addEventListener(`touchstart`, listener);

    return () => {
      document.removeEventListener(`mousedown`, listener);
      document.removeEventListener(`touchstart`, listener);
    };
  }, [refs, handler, allowModalNavigation]);
}
