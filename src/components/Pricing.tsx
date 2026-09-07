import { Reveal } from './Reveal';
import { useLanguage } from '../i18n/LanguageContext';

export function Pricing() {
  const { t } = useLanguage();
  return (
    <section className="section pricing" id="pricing">
      <div className="container">
        <Reveal className="section-header">
          <div>
            <div className="eyebrow">{t("pricing.eyebrow")}</div>
            <h2 className="section-heading">Começar simples. Evoluir quando fizer sentido.</h2>
          </div>
          <p className="section-copy">
            Todos os valores apresentados são preços <strong style={{ color: 'white' }}>desde</strong>.
            O valor final depende da dimensão, conteúdo, integrações e complexidade do projeto.
          </p>
        </Reveal>

        <Reveal className="pricing-grid">
          {/* LAUNCH */}
          <div className="price-card">
            <div className="price-eyebrow">Web / Starter</div>
            <h3>Launch</h3>
            <p>Uma presença digital profissional para começar a comunicar e captar oportunidades.</p>
            <div className="price-value">Desde 249€</div>
            <div className="price-divider"></div>
            <ul className="price-list">
              <li>Landing page</li>
              <li>Design personalizado</li>
              <li>Responsive</li>
              <li>Formulário / WhatsApp</li>
              <li>Publicação</li>
            </ul>
            <a href="#contact" className="btn btn-light">Começar →</a>
          </div>

          {/* BUSINESS */}
          <div className="price-card featured">
            <div className="price-badge">MAIS PROCURADO</div>
            <div className="price-eyebrow">Web / Business</div>
            <h3>Business</h3>
            <p>Website completo para empresas que querem uma presença digital sólida.</p>
            <div className="price-value">Desde 549€</div>
            <div className="price-divider"></div>
            <ul className="price-list">
              <li>Website multipágina</li>
              <li>Design personalizado</li>
              <li>Estrutura comercial</li>
              <li>SEO técnico base</li>
              <li>Analytics</li>
              <li>Integrações essenciais</li>
            </ul>
            <a href="#contact" className="btn btn-light">Pedir proposta →</a>
          </div>

          {/* GROWTH */}
          <div className="price-card">
            <div className="price-eyebrow">Web / Growth</div>
            <h3>Growth</h3>
            <p>Uma experiência digital mais avançada, pensada para aquisição e conversão.</p>
            <div className="price-value">Desde 949€</div>
            <div className="price-divider"></div>
            <ul className="price-list">
              <li>Website avançado</li>
              <li>Landing / conversion sections</li>
              <li>Booking ou leads</li>
              <li>Automação</li>
              <li>Analytics</li>
              <li>Integrações</li>
            </ul>
            <a href="#contact" className="btn btn-light">Explorar Growth →</a>
          </div>

          {/* CUSTOM */}
          <div className="price-card">
            <div className="price-eyebrow">Technology</div>
            <h3>Custom</h3>
            <p>Sistemas, software, AI e automações desenvolvidos para processos específicos.</p>
            <div className="price-value">Desde 1.490€</div>
            <div className="price-divider"></div>
            <ul className="price-list">
              <li>Web applications</li>
              <li>AI</li>
              <li>Dashboards</li>
              <li>APIs</li>
              <li>Sistemas internos</li>
              <li>SaaS</li>
            </ul>
            <a href="#contact" className="btn btn-light">Falar sobre projeto →</a>
          </div>
        </Reveal>

        <Reveal className="other-pricing">
          <div className="other-price">
            <small>Booking</small>
            <h4>Agendamento</h4>
            <strong>Desde 790€</strong>
            <p>Dependendo do número de serviços, colaboradores e regras.</p>
          </div>
          <div className="other-price">
            <small>Intelligence</small>
            <h4>AI / Chatbot</h4>
            <strong>Desde 690€</strong>
            <p>Website, WhatsApp e integrações podem alterar o scope.</p>
          </div>
          <div className="other-price">
            <small>Commerce</small>
            <h4>E-commerce</h4>
            <strong>Desde 1.490€</strong>
            <p>Catálogo, checkout e funcionalidades dependem do projeto.</p>
          </div>
          <div className="other-price">
            <small>Automation</small>
            <h4>Automação</h4>
            <strong>Desde 490€</strong>
            <p>O investimento depende do número de processos e integrações.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
