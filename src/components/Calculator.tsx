import { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Reveal } from './Reveal';

export function Calculator() {
  const { t } = useLanguage();
  const [tasks, setTasks] = useState(20);
  const [minutes, setMinutes] = useState(10);
  const [days, setDays] = useState(22);

  const hours = Math.round((tasks * minutes * days) / 60);

  return (
    <section className="section calculator">
      <div className="container calc-grid">
        <Reveal className="calc-copy">
          <div className="eyebrow">{t("calc.eyebrow")}</div>
          <h2>Quanto vale o seu tempo?</h2>
          <p>
            Muitas vezes, a oportunidade não está em trabalhar mais. Está em deixar de fazer
            manualmente aquilo que uma máquina consegue fazer por si.
          </p>
          <p style={{ marginTop: '18px', fontSize: '10px', color: '#999' }}>
            Simulação indicativa — não representa uma previsão de resultados.
          </p>
        </Reveal>

        <Reveal className="calc-box">
          <div className="range-row">
            <div className="range-head">
              <span>Tarefas manuais / dia</span>
              <strong>{tasks}</strong>
            </div>
            <input 
              type="range" 
              min="5" max="100" 
              value={tasks} 
              onChange={(e) => setTasks(Number(e.target.value))} 
            />
          </div>

          <div className="range-row">
            <div className="range-head">
              <span>Minutos por tarefa</span>
              <strong>{minutes}</strong>
            </div>
            <input 
              type="range" 
              min="2" max="60" 
              value={minutes} 
              onChange={(e) => setMinutes(Number(e.target.value))} 
            />
          </div>

          <div className="range-row">
            <div className="range-head">
              <span>Dias de trabalho / mês</span>
              <strong>{days}</strong>
            </div>
            <input 
              type="range" 
              min="10" max="31" 
              value={days} 
              onChange={(e) => setDays(Number(e.target.value))} 
            />
          </div>

          <div className="calc-results">
            <div className="calc-result">
              <small>Horas / mês</small>
              <strong>{hours}h</strong>
            </div>
            <div className="calc-result dark-result">
              <small>Tempo potencialmente libertado</small>
              <strong>{hours} horas</strong>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
