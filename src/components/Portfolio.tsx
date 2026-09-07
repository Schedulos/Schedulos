import { Reveal } from './Reveal';
import { useLanguage } from '../i18n/LanguageContext';

export function Portfolio() {
  const { t } = useLanguage();
  return (
    <section className="section portfolio" id="portfolio">
      <div className="container">
        <Reveal className="section-header">
          <div>
            <div className="eyebrow">{t("portfolio.eyebrow")}</div>
            <h2 className="section-heading">O que podemos construir.</h2>
          </div>
          <p className="section-copy">
            Uma seleção de conceitos e soluções que representam o tipo de experiência digital que a Schedulos pode desenvolver.
          </p>
        </Reveal>

        <Reveal className="portfolio-grid">
          {/* PROJECT 1 */}
          <div className="project project-img-card">
            <div className="project-img-wrap">
              <img src="/clinic-assistant.png" alt="Clinic Assistant AI" />
            </div>
            <div className="project-text-area">
              <div className="project-info">
                <small>AI / Healthcare</small>
                <h3>Clinic Assistant</h3>
              </div>
              <div className="project-link">↗</div>
            </div>
          </div>

          {/* PROJECT 2 */}
          <div className="project project-img-card">
            <div className="project-img-wrap">
              <img src="/beauty-booking.png" alt="Beauty Booking" />
            </div>
            <div className="project-text-area">
              <div className="project-info">
                <small>Booking / Beauty</small>
                <h3>Beauty Booking</h3>
              </div>
              <div className="project-link">↗</div>
            </div>
          </div>

          {/* PROJECT 3 */}
          <div className="project">
            <div className="project-visual">
              <div className="project-ui" style={{ background: '#dce7ff', color: '#111' }}>
                <div className="ui-top" style={{ borderColor: '#bbc8e5', color: '#555' }}>
                  <span>DIGITAL COMMERCE</span>
                  <span>STORE</span>
                </div>
                <div className="ui-main-title">Premium<br/>e-commerce.</div>
                <div style={{ marginTop: '30px', display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '8px' }}>
                  <div style={{ height: '70px', background: 'white', borderRadius: '8px' }}></div>
                  <div style={{ height: '70px', background: 'white', borderRadius: '8px' }}></div>
                </div>
              </div>
            </div>
            <div className="project-overlay">
              <div className="project-info">
                <small>E-commerce</small>
                <h3>Digital Store</h3>
              </div>
              <div className="project-link">↗</div>
            </div>
          </div>

          {/* PROJECT 4 */}
          <div className="project">
            <div className="project-visual">
              <div className="project-ui">
                <div className="ui-top">
                  <span>BUSINESS INTELLIGENCE</span>
                  <span>DATA</span>
                </div>
                <div className="ui-main-title">Business<br/>Dashboard.</div>
                <div style={{ marginTop: '30px', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '7px' }}>
                  <div style={{ padding: '12px', background: '#1b1b1b', borderRadius: '8px', fontSize: '8px', color: '#777' }}>
                    REVENUE<br/>
                    <strong style={{ color: 'white', fontSize: '16px' }}>€42K</strong>
                  </div>
                  <div style={{ padding: '12px', background: '#1b1b1b', borderRadius: '8px', fontSize: '8px', color: '#777' }}>
                    LEADS<br/>
                    <strong style={{ color: '#b9f34b', fontSize: '16px' }}>284</strong>
                  </div>
                  <div style={{ padding: '12px', background: '#1b1b1b', borderRadius: '8px', fontSize: '8px', color: '#777' }}>
                    GROWTH<br/>
                    <strong style={{ color: '#b9f34b', fontSize: '16px' }}>+31%</strong>
                  </div>
                </div>
              </div>
            </div>
            <div className="project-overlay">
              <div className="project-info">
                <small>Dashboards / Data</small>
                <h3>Business Intelligence</h3>
              </div>
              <div className="project-link">↗</div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
