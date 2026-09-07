import { Reveal } from './Reveal';
import { useLanguage } from '../i18n/LanguageContext';

export function WhatWeDo() {
  const { t } = useLanguage();
  const capabilities = [
    { num: "01", title: "Presença digital", desc: "Criamos websites e landing pages que comunicam autoridade, posicionamento e transformam visitas em oportunidades." },
    { num: "02", title: "Aquisição & conversão", desc: "Estruturamos experiências para captar, qualificar e converter potenciais clientes." },
    { num: "03", title: "Inteligência artificial", desc: "Criamos AI assistants e chatbots capazes de responder, qualificar, encaminhar e automatizar interações." },
    { num: "04", title: "Operações & automação", desc: "Ligamos sistemas e processos para eliminar trabalho repetitivo e tornar a operação mais eficiente." },
    { num: "05", title: "Software personalizado", desc: "Desenvolvemos ferramentas próprias quando uma solução standard já não chega." }
  ];

  return (
    <section className="section" id="solutions">
      <div className="container what-grid">
        <Reveal className="what-statement">
          <div className="eyebrow">{t("whatwedo.eyebrow")}</div>
          <h2>{t("whatwedo.title1")} <span>{t("whatwedo.title2")}</span></h2>
          <p>
            Não acreditamos que todas as empresas precisem da mesma tecnologia.
            Primeiro percebemos o problema. Depois desenhamos a solução.
          </p>
        </Reveal>
        
        <Reveal className="capability-list">
          {capabilities.map((cap, i) => (
            <div key={i} className="capability">
              <div className="capability-num">{cap.num}</div>
              <div>
                <h3>{cap.title}</h3>
                <p>{cap.desc}</p>
              </div>
              <div className="capability-arrow">↗</div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
