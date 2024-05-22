import { Button } from '@app/ui-kit/Button';

import s from './GenerativeAi.module.scss';

export const GenerativeAi = () => {
  return (
    <div className={s.root}>
      <img src="/images/home/generative-ai.png" className={s.img} />

      <div className={s.overlay}>
        <div className={s.content}>
          <div className={s.title}>Escher</div>
          <div className={s.description}>
            Use our powerful partnership with Leonardo AI to create and monetize
            your AI-generated masterpieces.
          </div>
          <Button className={s.btn}>Go To Escher</Button>
        </div>
      </div>
    </div>
  );
};
