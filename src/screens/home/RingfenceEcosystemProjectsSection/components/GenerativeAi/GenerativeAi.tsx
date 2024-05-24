import { ESHER_LINK } from '@app/constants/navigation';
import { LinkWrapper } from '@app/ui-kit';
import { Button } from '@app/ui-kit/Button';

import s from './GenerativeAi.module.scss';

export const GenerativeAi = () => {
  return (
    <div className={s.root}>
      <div className={s.imgContainer}>
        <img src="/images/home/generative-ai.png" className={s.img} />
      </div>

      <div className={s.overlay}>
        <div className={s.content}>
          <div className={s.title}>Escher</div>
          <div className={s.description}>
            Use our powerful partnership with Leonardo AI to create and monetize
            your AI-generated masterpieces.
          </div>
          <LinkWrapper href={ESHER_LINK} isExternal>
            <Button className={s.btn}>Go To Escher</Button>
          </LinkWrapper>
        </div>
      </div>
    </div>
  );
};
