import { Reveal } from './Reveal';
import { useLanguage } from '../i18n/LanguageContext';

export function Industries() {
  const { t } = useLanguage();
  const industries = [
    { num: '01', icon: '◉', title: 'Clínicas', desc: 'AI, atendimento, leads e agendamento.' },
    { num: '02', icon: '✦', title: 'Beauty', desc: 'Websites, booking e automação.' },
    { num: '03', icon: '◇', title: 'Restauração', desc: 'Reservas, presença digital e contacto.' },
    { num: '04', icon: '◇', title: 'Automotive', desc: 'Leads, pedidos de orçamento e CRM.' },
    { num: '05', icon: '+', title: 'Serviços', desc: 'Websites, leads, CRM e automação.' }
  ];
  return (
    <section className="section industries" id="industries">
      <div className="container">
        <Reveal className="section-header">
          <div>
            <div className="eyebrow">{t("industries.eyebrow")}</div>
            <h2 className="section-heading">Uma tecnologia. Diferentes negócios.</h2>
          </div>
          <p className="section-copy">
            Temos especializações onde certos problemas se repetem, mas a tecnologia Schedulos pode ser aplicada a praticamente qualquer operação.
          </p>
        </Reveal>
        <Reveal className="industry-grid">
          {industries.map((ind, i) => (
            <div key={i} className="industry">
              <div className="industry-num">{ind.num}</div>
              <div className="industry-icon">{ind.icon}</div>
              <h3>{ind.title}</h3>
              <p>{ind.desc}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
