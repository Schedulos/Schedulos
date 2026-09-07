import { Reveal } from './Reveal';
import { useLanguage } from '../i18n/LanguageContext';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export function Services({ onOpenService }: { onOpenService: (key: string) => void }) {
    const { t } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  const servicesList = [
    { key: 'website', num: '01 / WEB', icon: '↗', title: 'Websites', desc: 'Websites institucionais, comerciais, corporativos e experiências digitais desenvolvidas à medida da marca.', tags: ['Corporate', 'Business', 'Portfolio', 'Responsive'] },
    { key: 'landing', num: '02 / CONVERSION', icon: '◎', title: 'Landing Pages', desc: 'Páginas orientadas para uma ação: vender, captar, reservar ou validar uma oferta.', tags: ['Lead Gen', 'Funnels', 'Campaigns'] },
    { key: 'ecommerce', num: '03 / COMMERCE', icon: '◇', title: 'E-commerce', desc: 'Lojas online com experiência de compra, catálogo, checkout e estrutura preparada para crescimento.', tags: ['Store', 'Checkout', 'Payments'] },
    { key: 'ai', num: '04 / INTELLIGENCE', icon: 'AI', title: 'AI & Chatbots', desc: 'Atendimento inteligente para websites, WhatsApp e outros canais.', tags: ['AI', 'WhatsApp', 'Agents', '24/7'] },
    { key: 'booking', num: '05 / BOOKING', icon: '◷', title: 'Booking', desc: 'Sistemas de marcação adaptados ao negócio, desde profissionais independentes a equipas.', tags: ['Calendar', 'Booking', 'Clients'] },
    { key: 'automation', num: '06 / AUTOMATION', icon: '⚡', title: 'Automação', desc: 'Workflows, notificações, CRM e integrações para reduzir tarefas multi-tarefas.', tags: ['Workflows', 'CRM', 'APIs'] },
    { key: 'dashboard', num: '07 / DATA', icon: '◌', title: 'Dashboards', desc: 'Interfaces para acompanhar operações, indicadores, equipas e clientes.', tags: ['Analytics', 'KPI', 'Data'] },
    { key: 'custom', num: '08 / SOFTWARE', icon: '+', title: 'Software à medida', desc: 'Plataformas e ferramentas internas construídas especificamente para o processo da empresa.', tags: ['Web Apps', 'SaaS', 'Systems'] },
    { key: 'integration', num: '09 / CONNECT', icon: '⛓', title: 'Integrações', desc: 'Fazemos diferentes ferramentas comunicarem entre si para criar uma operação conectada.', tags: ['API', 'CRM', 'Payments'] }
  ];

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const cardWidth = current.firstElementChild?.clientWidth || 300;
      const scrollAmount = cardWidth + 1;
      current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="section services-section" id="services">
      <div className="container">
        <Reveal className="section-header" style={{ position: 'relative' }}>
          <div>
            <div className="eyebrow">{t("services.eyebrow")}</div>
            <h2 className="section-heading">Tudo o que o seu negócio precisa para evoluir digitalmente.</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
            <p className="section-copy" style={{ margin: 0 }}>
              Podemos entrar num projeto pela porta da frente — um website, uma landing page ou um chatbot — e construir progressivamente uma infraestrutura digital completa.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              <button onClick={() => scroll('left')} style={{ width: '48px', height: '48px', padding: 0, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #444', backgroundColor: 'transparent', color: '#fff', cursor: 'pointer', transition: 'border-color 0.3s' }} onMouseOver={e => e.currentTarget.style.borderColor = '#888'} onMouseOut={e => e.currentTarget.style.borderColor = '#444'}>
                <ChevronLeft size={20} />
              </button>
              <button onClick={() => scroll('right')} style={{ width: '48px', height: '48px', padding: 0, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid #444', backgroundColor: 'transparent', color: '#fff', cursor: 'pointer', transition: 'border-color 0.3s' }} onMouseOver={e => e.currentTarget.style.borderColor = '#888'} onMouseOut={e => e.currentTarget.style.borderColor = '#444'}>
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </Reveal>
        
        <Reveal>
          <div className="service-matrix" ref={scrollRef}>
            {servicesList.map(srv => (
              <div key={srv.key} className="service-card" onClick={() => onOpenService(srv.key)}>
                <div className="service-card-number">{srv.num}</div>
                <div className="service-card-icon">{srv.icon}</div>
                <h3>{srv.title}</h3>
                <p>{srv.desc}</p>
                <div className="service-tags">
                  {srv.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
