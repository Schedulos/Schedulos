export function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <a href="#" className="logo" style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
              <img src="/noback.png" alt="Schedulos" style={{ height: '90px', width: 'auto', objectFit: 'contain', margin: '-25px 0', filter: 'brightness(0) invert(1)' }} />
            </a>
            <p>
              Estratégia, design e tecnologia para negócios que querem operar melhor,
              converter mais e crescer.
            </p>
          </div>
          <div className="footer-columns">
            <div className="footer-col">
              <small>Company</small>
              <a href="#solutions">Soluções</a>
              <a href="#services">Serviços</a>
              <a href="#portfolio">Projetos</a>
              <a href="#process">Processo</a>
            </div>
            <div className="footer-col">
              <small>Services</small>
              <a href="#services">Websites</a>
              <a href="#services">AI</a>
              <a href="#services">Automation</a>
              <a href="#services">Booking</a>
              <a href="#services">Software</a>
            </div>
            <div className="footer-col">
              <small>Business</small>
              <a href="#industries">Clínicas</a>
              <a href="#industries">Beauty</a>
              <a href="#industries">Automotive</a>
              <a href="#industries">Serviços</a>
            </div>
            <div className="footer-col">
              <small>Contact</small>
              <a href="#contact">Iniciar projeto</a>
              <a href="#contact">Pedir diagnóstico</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Schedulos</span>
          <span>Digital infrastructure for modern businesses.</span>
        </div>
      </div>
    </footer>
  );
}
