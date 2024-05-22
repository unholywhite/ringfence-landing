import { EarlyAccess } from './components/EarlyAccess';
import { GenerativeAi } from './components/GenerativeAi';
import { RepTile } from './components/RepTile';
import s from './RingfenceEcosystemProjectsSection.module.scss';

export const RingfenceEcosystemProjectsSection = () => {
  return (
    <section className={s.root}>
      <div className={s.title}>Ringfence Ecosystem Projects</div>
      <GenerativeAi />

      <div className={s.tiles}>
        <RepTile icon="treq" title="Treq">
          Gather meaningful data and earn token rewards from everyday internet
          use with the Treq browser extension.
        </RepTile>
        <RepTile icon="playground" title="Playground">
          Collaborate with data scientists around the world in the development
          of AI models using data sourced from the Ringfence community through
          this powerful collaboration environment.
        </RepTile>
      </div>

      <EarlyAccess className={s.earlyAccess} />
    </section>
  );
};
