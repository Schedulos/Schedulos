import { useState, useEffect } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Reveal } from './Reveal';

export interface AppConfig {
  goal: string;
  industry: string;
  scale: string;
}

export function Configurator({ onConfigChange }: { onConfigChange?: (config: AppConfig) => void }) {
    const { t } = useLanguage();
  const [goal, setGoal] = useState('presença digital');
  const [industry, setIndustry] = useState('Serviços');
  const [scale, setScale] = useState('pequena');

  const getRecommendation = () => {
    let title = "Website / Landing Page";
    let text = "Uma solução de presença digital orientada para o seu objetivo.";

    if (goal === "mais leads") {
      title = "Website + Lead Generation";
      text = "Uma experiência digital construída para captar e converter oportunidades.";
    } else if (goal === "mais marcações") {
      title = "Booking + Website";
      text = "Uma experiência digital focada em transformar visitas em marcações.";
    } else if (goal === "automatizar") {
      title = "Automation";
      text = "Mapeamento de processos e criação de workflows automáticos.";
    } else if (goal === "IA") {
      title = "AI / Chatbot";
      text = "Um assistente inteligente adaptado ao processo do seu negócio.";
    } else if (goal === "software") {
      title = "Custom Software";
      text = "Uma aplicação construída especificamente para a sua operação.";
    }

    if (scale === "avançada") {
      title = "Custom Digital System";
      text = "Uma solução tecnológica desenvolvida à medida da operação.";
    }

    return { title, text };
  };

  const rec = getRecommendation();

  useEffect(() => {
    if (onConfigChange) {
      onConfigChange({ goal, industry, scale });
    }
  }, [goal, industry, scale, onConfigChange]);

  const goals = ["Presença digital", "Mais leads", "Mais marcações", "Automatizar", "Inteligência artificial", "Software"];
  const goalsMap: Record<string, string> = {
    "Presença digital": "presença digital",
    "Mais leads": "mais leads",
    "Mais marcações": "mais marcações",
    "Automatizar": "automatizar",
    "Inteligência artificial": "IA",
    "Software": "software"
  };

  const industries = ["Serviços", "Clínica", "Beauty", "Restauração", "Automotive", "Outro"];
  const scales = [
    { label: "Quero começar pequeno", value: "pequena" },
    { label: "Projeto completo", value: "média" },
    { label: "Sistema à medida", value: "avançada" }
  ];

  return (
    <section className="section configurator" id="configurator">
      <div className="container config-grid">
        <Reveal className="config-copy">
          <div className="eyebrow">{t("config.eyebrow")}</div>
          <h2>Não sabe exatamente do que precisa?</h2>
          <p>
            Responda a três perguntas e criamos uma recomendação inicial com base no principal objetivo do seu negócio.
          </p>
        </Reveal>

        <Reveal className="config-box">
          <div className="config-step">
            <div className="config-label">O que quer melhorar?</div>
            <div className="option-grid">
              {goals.map(g => (
                <button 
                  key={g} 
                  className={`option ${goal === goalsMap[g] ? 'active' : ''}`}
                  onClick={() => setGoal(goalsMap[g])}
                >
                  {g}
                </button>
              ))}
            </div>
          </div>

          <div className="config-step">
            <div className="config-label">Em que tipo de negócio?</div>
            <div className="option-grid">
              {industries.map(ind => (
                <button 
                  key={ind} 
                  className={`option ${industry === ind ? 'active' : ''}`}
                  onClick={() => setIndustry(ind)}
                >
                  {ind}
                </button>
              ))}
            </div>
          </div>

          <div className="config-step">
            <div className="config-label">Qual a dimensão da solução?</div>
            <div className="option-grid">
              {scales.map(s => (
                <button 
                  key={s.value} 
                  className={`option ${scale === s.value ? 'active' : ''}`}
                  onClick={() => setScale(s.value)}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>

          <div className="config-result">
            <div className="config-result-text">
              <small>Recomendação inicial</small>
              <strong id="recommendation">{rec.title}</strong>
              <span id="recommendationText">{rec.text}</span>
            </div>
            <a href="#contact" className="btn btn-primary">Quero isto →</a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
