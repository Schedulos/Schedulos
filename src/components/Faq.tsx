import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Reveal } from './Reveal';

export function Faq() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    { q: "A Schedulos é uma agência de websites?", a: "Não. Websites são apenas uma das nossas áreas. A Schedulos combina estratégia digital, design, desenvolvimento, AI, automação, booking, integrações e software à medida." },
    { q: "Trabalham apenas com clínicas?", a: "Não. Clínicas são uma vertical onde podemos desenvolver soluções especializadas, sobretudo em AI, atendimento e agendamento. Trabalhamos transversalmente com diferentes negócios." },
    { q: "Os preços são fixos?", a: "Não. Os preços apresentados são sempre valores “desde”. Servem para dar uma referência inicial. O preço final depende do scope, conteúdo, funcionalidades, integrações e complexidade." },
    { q: "Posso começar com apenas um serviço?", a: "Sim. Pode começar, por exemplo, com uma landing page e posteriormente acrescentar booking, AI, automação ou software. A infraestrutura pode evoluir com o negócio." },
    { q: "Fazem manutenção depois do projeto?", a: "Sim. Dependendo da solução, podemos assegurar manutenção, suporte, evolução e desenvolvimento contínuo." },
    { q: "E se eu não souber exatamente o que preciso?", a: "Melhor ainda. O primeiro passo pode ser precisamente perceber o problema. A Schedulos ajuda a transformar esse problema numa solução digital concreta." }
  ];

  return (
    <section className="section">
      <div className="container">
        <Reveal className="section-header">
          <div>
            <div className="eyebrow">{t("faq.eyebrow")}</div>
            <h2 className="section-heading">Perguntas frequentes.</h2>
          </div>
        </Reveal>

        <Reveal className="faq-wrap">
          {faqs.map((faq, i) => (
            <div key={i} className={`faq-item ${openIndex === i ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => toggle(i)}>
                <span>{faq.q}</span>
                <span className="faq-plus">+</span>
              </button>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
