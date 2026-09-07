import { useState, useEffect, useRef } from 'react';
import { useLanguage, Language } from '../i18n/LanguageContext';

export function Nav({ onOpenService }: { onOpenService: (key: string) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const megaRef = useRef<HTMLDivElement>(null);
  const { lang, setLang, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        megaRef.current && 
        !megaRef.current.contains(e.target as Node) &&
        triggerRef.current &&
        !triggerRef.current.contains(e.target as Node)
      ) {
        setMegaOpen(false);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`} id="nav" ref={navRef}>
      <div className="container nav-inner">
        <a href="#" className="logo" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/noback.png" alt="Schedulos" style={{ height: '140px', width: 'auto', objectFit: 'contain', margin: '-45px 0' }} />
        </a>
        <div className="nav-links">
          <a href="#solutions" className="nav-link">{t('nav.solucoes')}</a>
          <button 
            className="nav-link" 
            id="servicesTrigger" 
            style={{ background: 'none', border: 0 }}
            ref={triggerRef}
            onClick={(e) => { e.stopPropagation(); setMegaOpen(!megaOpen); }}
          >
            {t('nav.servicos')}
          </button>
          <a href="#portfolio" className="nav-link">{t('nav.projetos')}</a>
          <a href="#industries" className="nav-link">{t('nav.negocios')}</a>
          <a href="#pricing" className="nav-link">{t('nav.investimento')}</a>
        </div>
        <div className="nav-actions">
          <a href="#contact" className="nav-cta">{t('nav.contactar')}</a>
          
          <div className="lang-switcher">
            <select 
              value={lang} 
              onChange={(e) => setLang(e.target.value as Language)}
              style={{
                background: 'transparent',
                color: '#111',
                border: '1px solid #ddd',
                borderRadius: '8px',
                padding: '6px 10px',
                fontSize: '12px',
                fontWeight: 600,
                cursor: 'pointer',
                outline: 'none',
                textTransform: 'uppercase',
                appearance: 'none',
                marginRight: '12px'
              }}
            >
              <option value="pt">PT</option>
              <option value="en">EN</option>
              <option value="es">ES</option>
              <option value="fr">FR</option>
            </select>
            <div style={{ position: 'absolute', right: '22px', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', fontSize: '10px' }}>
              ▼
            </div>
          </div>

          <button className="menu-button" id="mobileMenu" onClick={(e) => { e.stopPropagation(); setMegaOpen(!megaOpen); }} style={{ marginLeft: 0, padding: '0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
      <div className={`mega ${megaOpen ? 'open' : ''}`} id="megaMenu" ref={megaRef}>
        <div className="mega-grid">
          <div className="mega-main">
            <small>Schedulos Digital</small>
            <h3>{t('nav.tecnologia')}</h3>
            <p>{t('nav.escolha')}</p>
            <a href="#contact" onClick={() => setMegaOpen(false)}>{t('nav.descobrir')}</a>
          </div>
          <div className="mega-column">
            <h4>Web</h4>
            <a href="#" onClick={(e) => { e.preventDefault(); onOpenService('website'); setMegaOpen(false); }}>Websites</a>
            <a href="#" onClick={(e) => { e.preventDefault(); onOpenService('landing'); setMegaOpen(false); }}>Landing Pages</a>
            <a href="#" onClick={(e) => { e.preventDefault(); onOpenService('ecommerce'); setMegaOpen(false); }}>E-commerce</a>
            <a href="#" onClick={(e) => { e.preventDefault(); onOpenService('custom'); setMegaOpen(false); }}>Web Apps</a>
          </div>
          <div className="mega-column">
            <h4>Growth</h4>
            <a href="#" onClick={(e) => { e.preventDefault(); onOpenService('booking'); setMegaOpen(false); }}>Booking</a>
            <a href="#" onClick={(e) => { e.preventDefault(); onOpenService('ai'); setMegaOpen(false); }}>AI & Chatbots</a>
            <a href="#" onClick={(e) => { e.preventDefault(); onOpenService('automation'); setMegaOpen(false); }}>Automação</a>
            <a href="#" onClick={(e) => { e.preventDefault(); onOpenService('crm'); setMegaOpen(false); }}>CRM & Leads</a>
          </div>
          <div className="mega-column">
            <h4>Technology</h4>
            <a href="#" onClick={(e) => { e.preventDefault(); onOpenService('dashboard'); setMegaOpen(false); }}>Dashboards</a>
            <a href="#" onClick={(e) => { e.preventDefault(); onOpenService('integration'); setMegaOpen(false); }}>Integrações</a>
            <a href="#" onClick={(e) => { e.preventDefault(); onOpenService('custom'); setMegaOpen(false); }}>Software</a>
            <a href="#" onClick={(e) => { e.preventDefault(); onOpenService('custom'); setMegaOpen(false); }}>SaaS</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
