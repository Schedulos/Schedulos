import { Reveal } from './Reveal';
import { useLanguage } from '../i18n/LanguageContext';

export function Hero() {
  const { t } = useLanguage();
  return (
    <header className="hero">
      <div className="container hero-grid">
        <Reveal>
          <div className="hero-kicker">
            <i></i> Digital infrastructure for modern businesses
          </div>
          <h1 dangerouslySetInnerHTML={{ __html: t('hero.transformamos') }} />
          <p className="hero-description">
            {t('hero.websites')}
          </p>
          <div className="hero-actions">
            <a href="#configurator" className="btn btn-primary">{t('hero.descobrir')}</a>
            <a href="#portfolio" className="btn btn-outline">{t('hero.ver')}</a>
          </div>
          <div className="hero-note">
            <span>Estratégia</span>
            <span>Design</span>
            <span>Development</span>
            <span>AI</span>
          </div>
        </Reveal>
        <Reveal className="system">
          <div className="system-grid"></div>
          <div className="system-line line1"></div>
          <div className="system-line line2"></div>
          <div className="system-line line3"></div>
          <div className="system-line line4"></div>
          <div className="system-core">SCHEDULOS</div>
          
          <div className="system-node node1">
            <small>Web</small>
            <strong>Digital presence</strong>
            <p>Websites e experiências digitais.</p>
            <div className="node-status">ACTIVE</div>
          </div>
          
          <div className="system-node node2">
            <small>AI</small>
            <strong>Intelligent layer</strong>
            <p>Assistentes e automação.</p>
            <div className="node-status">ACTIVE</div>
          </div>
          
          <div className="system-node node3">
            <small>Growth</small>
            <strong>Conversion</strong>
            <p>Leads, booking e CRM.</p>
            <div className="node-status">ACTIVE</div>
          </div>
          
          <div className="system-node node4">
            <small>Technology</small>
            <strong>Custom systems</strong>
            <p>Software e integrações.</p>
            <div className="node-status">ACTIVE</div>
          </div>
        </Reveal>
      </div>
    </header>
  );
}
