import { Reveal } from './Reveal';
import { useLanguage } from '../i18n/LanguageContext';

export function Cta() {
  const { t } = useLanguage();
  return (
    <section className="cta">
      <div className="container reveal visible">
        <div className="eyebrow" style={{ justifyContent: 'center' }}>Let's build</div>
        <h2>Não precisa de saber <span>qual é a tecnologia.</span><br/>Só precisa de saber o problema.</h2>
        <p>
          Conte-nos o que está a tentar melhorar, automatizar ou construir. Nós ajudamos a encontrar a solução.
        </p>
        <a href="#contact" className="btn btn-light">Falar com a Schedulos →</a>
      </div>
    </section>
  );
}
