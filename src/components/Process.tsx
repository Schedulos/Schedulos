import { Reveal } from './Reveal';
import { useLanguage } from '../i18n/LanguageContext';

export function Process() {
  const { t } = useLanguage();
  const steps = [
    { num: '01 / DISCOVER', title: 'Diagnóstico', desc: 'Percebemos o negócio, problema, clientes e objetivo.' },
    { num: '02 / STRATEGY', title: 'Estratégia', desc: 'Definimos a solução e aquilo que realmente precisa de ser construído.' },
    { num: '03 / DESIGN', title: 'Design', desc: 'Criamos a experiência, arquitetura e identidade digital.' },
    { num: '04 / BUILD', title: 'Desenvolvimento', desc: 'Construímos, integramos e testamos a solução.' },
    { num: '05 / EVOLVE', title: 'Evolução', desc: 'Medimos, aprendemos e identificamos novas oportunidades.' }
  ];
  return (
    <section className="section process" id="process">
      <div className="container">
        <Reveal className="section-header">
          <div>
            <div className="eyebrow">{t("process.eyebrow")}</div>
            <h2 className="section-heading">Menos complicação. Mais execução.</h2>
          </div>
          <p className="section-copy">
            Um processo curto e claro, desde o primeiro diagnóstico até à implementação e evolução da solução.
          </p>
        </Reveal>

        <Reveal className="process-grid">
          {steps.map((step, i) => (
            <div key={i} className="process-item">
              <div className="process-num">{step.num}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
