import Diagram from '@app/assets/images/diagram.svg';
import SchemeWide from '@app/assets/images/scheme-wide.svg';
import Scheme from '@app/assets/images/scheme.svg';

import s from './DiagramSection.module.scss';

export const DiagramSection = () => {
  return (
    <section className={s.root}>
      <div className={s.diagram}>
        <Diagram />
      </div>
      <Scheme className={s.scheme} />
      <SchemeWide className={s.schemeWide} />
    </section>
  );
};
