import { Reveal } from './Reveal';
import { useLanguage } from '../i18n/LanguageContext';

export function CaseStudies() {
  const { t } = useLanguage();
  const cases = [
    { num: '01', type: 'Clinic / AI', title: '“Recebemos demasiadas perguntas repetitivas.”', desc: 'AI assistant para responder perguntas frequentes, qualificar contactos e encaminhar pedidos.', result: '24/7', resultLabel: 'disponibilidade' },
    { num: '02', type: 'Beauty / Booking', title: '“Perdemos marcações porque não respondemos a tempo.”', desc: 'Website + booking + automação para transformar visitas em marcações sem intervenção constante.', result: '24/7', resultLabel: 'booking' },
    { num: '03', type: 'Services / Automation', title: '“A equipa perde horas em tarefas manuais.”', desc: 'Mapeamento de processos e criação de workflows automáticos entre as ferramentas existentes.', result: '↓', resultLabel: 'trabalho manual' },
    { num: '04', type: 'Business / Software', title: '“Nenhuma ferramenta faz exatamente aquilo que precisamos.”', desc: 'Desenvolvimento de uma aplicação própria adaptada ao processo específico da empresa.', result: '100%', resultLabel: 'personalizado' }
  ];

  return (
    <section className="section cases">
      <div className="container">
        <Reveal className="section-header">
          <div>
            <div className="eyebrow">{t("cases.eyebrow")}</div>
            <h2 className="section-heading">Problemas reais. Soluções digitais.</h2>
          </div>
          <p className="section-copy">
            Em vez de vender funcionalidades isoladas, pensamos em problemas concretos que podemos resolver através de tecnologia.
          </p>
        </Reveal>
        <Reveal className="case-list">
          {cases.map((c, i) => (
            <div key={i} className="case">
              <div className="case-number">{c.num}</div>
              <div>
                <div className="case-type">{c.type}</div>
                <h3>{c.title}</h3>
              </div>
              <div className="case-description">{c.desc}</div>
              <div className="case-result">
                <strong>{c.result}</strong>
                <span>{c.resultLabel}</span>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
