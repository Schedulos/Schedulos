/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef, useState } from 'react';

export default function App() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const heroRef = useRef<HTMLElement | null>(null);
  const barRef = useRef<HTMLDivElement | null>(null);
  const revealRef = useRef<HTMLParagraphElement | null>(null);
  const stepsRef = useRef<HTMLDivElement | null>(null);
  const txRef = useRef<HTMLDivElement | null>(null);
  const chatRef = useRef<HTMLDivElement | null>(null);
  const stRef = useRef<HTMLElement | null>(null);

  const [activeTab, setActiveTab] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    area: 'Ecossistema Completo (Atendimento, Vendas & Automação)',
    desafio: '',
  });

  const contrastSlides = [
    {
      category: 'Automação',
      num: '01',
      before: 'Gestão manual e reativa.',
      after: 'Automação de ponta a ponta.',
      tag: 'Fluxos contínuos e sem erros',
    },
    {
      category: 'Centralização',
      num: '02',
      before: 'Dados dispersos e ferramentas isoladas.',
      after: 'Ecossistema unificado em tempo real.',
      tag: 'Uma única fonte de verdade',
    },
    {
      category: 'Estandardização',
      num: '03',
      before: 'Gargalos e dependência de pessoas.',
      after: 'Processos estandardizados e escaláveis.',
      tag: 'Operação consistente e replicável',
    },
    {
      category: 'Previsibilidade',
      num: '04',
      before: 'Operação cega e sem controlo.',
      after: 'Previsibilidade e KPIs em tempo real.',
      tag: 'Decisões orientadas a dados',
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % contrastSlides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + contrastSlides.length) % contrastSlides.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false);
      }
    };
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 800);
  };

  // Initialize interactive features
  useEffect(() => {
    const RM = window.matchMedia('(prefers-reduced-motion:reduce)').matches;

    // 1. Scroll progress bar & Reveal on scroll
    const bar = barRef.current;
    const p = revealRef.current;
    const steps = stepsRef.current;

    let ws: NodeListOf<HTMLSpanElement> | null = null;
    if (p) {
      const text = p.textContent || '';
      p.innerHTML = text
        .split(' ')
        .map((w) => `<span class="w">${w}</span>`)
        .join(' ');
      ws = p.querySelectorAll('.w');
    }

    const onScroll = () => {
      const hDoc = document.documentElement;
      const scrollY = window.scrollY;
      const innerHeight = window.innerHeight;

      // bar progress
      if (bar) {
        const total = hDoc.scrollHeight - innerHeight;
        bar.style.width = total > 0 ? `${(scrollY / total) * 100}%` : '0%';
      }

      // word reveal
      if (p && ws) {
        const r = p.getBoundingClientRect();
        const pr = Math.min(1, Math.max(0, (innerHeight * 0.85 - r.top) / (innerHeight * 0.6)));
        const n = Math.round(pr * ws.length);
        for (let i = 0; i < ws.length; i++) {
          ws[i].classList.toggle('on', i < n);
        }
      }

      // steps progress
      if (steps) {
        const s = steps.getBoundingClientRect();
        const stepProgress = Math.min(1, Math.max(0, (innerHeight * 0.8 - s.top) / (innerHeight * 0.5)));
        steps.style.setProperty('--p', stepProgress.toString());
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();

    // 2. Animated counters
    const counterElements = document.querySelectorAll<HTMLElement>('[data-n]');
    counterElements.forEach((el) => {
      const targetVal = +(el.dataset.n || '0');
      if (RM) {
        el.textContent = targetVal.toString();
        return;
      }
      let startTime: number | null = null;
      function animateCount(timestamp: number) {
        if (!startTime) startTime = timestamp;
        const k = Math.min(1, (timestamp - startTime) / 1400);
        const currentVal = Math.round(targetVal * (1 - Math.pow(1 - k, 3)));
        el.textContent = currentVal.toString();
        if (k < 1) {
          requestAnimationFrame(animateCount);
        }
      }
      requestAnimationFrame(animateCount);
    });

    // 3. Comparison table intersection observer
    const tx = txRef.current;
    if (tx) {
      const rows = tx.querySelectorAll('.tr');
      if (RM || !('IntersectionObserver' in window)) {
        rows.forEach((r) => r.classList.add('on'));
      } else {
        const observer = new IntersectionObserver(
          (entries, obs) => {
            if (entries[0].isIntersecting) {
              rows.forEach((r, idx) => {
                setTimeout(() => {
                  r.classList.add('on');
                }, idx * 450);
              });
              obs.disconnect();
            }
          },
          { threshold: 0.3 }
        );
        observer.observe(tx);
      }
    }

    // 4. Chat conversation demo
    const chat = chatRef.current;
    const st = stRef.current;
    let chatTimeout: any = null;
    let chatRunning = false;

    const scriptMessages = [
      ['c', 'Boa tarde! Queria marcar uma limpeza dentária.'],
      ['a', 'Olá! Com todo o gosto. Tenho quinta às 10h30 ou sexta às 15h00. Qual prefere?'],
      ['c', 'Sexta às 15h, por favor.'],
      ['a', 'Marcado ✓ Sexta, 15h00. Envio um lembrete na véspera.'],
    ];

    function appendMessage(sender: string, text: string) {
      if (!chat) return;
      const d = document.createElement('div');
      d.className = 'm ' + sender;
      d.textContent = text;
      chat.appendChild(d);
      while (chat.children.length > 6) {
        if (chat.firstChild) chat.removeChild(chat.firstChild);
      }
    }

    function runChatStep(index: number) {
      if (!chat) return;
      if (index >= scriptMessages.length) {
        chatTimeout = setTimeout(() => {
          if (!chat) return;
          chat.innerHTML = '';
          if (st) st.textContent = 'a aguardar';
          runChatStep(0);
        }, 4200);
        return;
      }
      const item = scriptMessages[index];
      if (item[0] === 'a') {
        const ty = document.createElement('div');
        ty.className = 'typ';
        ty.innerHTML = '<i></i><i></i><i></i>';
        chat.appendChild(ty);
        chatTimeout = setTimeout(() => {
          ty.remove();
          appendMessage('a', item[1]);
          if (index === 3 && st) st.textContent = 'marcação criada';
          runChatStep(index + 1);
        }, 1300);
      } else {
        chatTimeout = setTimeout(() => {
          appendMessage('c', item[1]);
          runChatStep(index + 1);
        }, 1300);
      }
    }

    if (chat) {
      const chatObserver = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting && !chatRunning) {
            chatRunning = true;
            runChatStep(0);
          }
        },
        { threshold: 0.2 }
      );
      chatObserver.observe(chat);
    }

    // 5. 3D Orb canvas particle sphere
    const cv = canvasRef.current;
    let animFrameId: number;

    if (cv) {
      const cx = cv.getContext('2d');
      if (cx) {
        let W = 0;
        let H = 0;
        const D = Math.min(window.devicePixelRatio || 1, 2);

        const resizeCanvas = () => {
          const r = cv.getBoundingClientRect();
          W = r.width;
          H = r.height;
          cv.width = W * D;
          cv.height = H * D;
          cx.setTransform(D, 0, 0, D, 0, 0);
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const N = 320;
        const P: [number, number, number][] = [];
        for (let i = 0; i < N; i++) {
          const y = 1 - (2 * (i + 0.5)) / N;
          const r = Math.sqrt(1 - y * y);
          const t = Math.PI * (1 + Math.sqrt(5)) * i;
          P.push([Math.cos(t) * r, y, Math.sin(t) * r]);
        }

        let ax = 0;
        let ay = 0;
        let txVal = 0;
        let tyVal = 0;

        const onPointerMove = (e: PointerEvent) => {
          const r = cv.getBoundingClientRect();
          txVal = (e.clientY - r.top) / r.height - 0.5;
          tyVal = (e.clientX - r.left) / r.width - 0.5;
        };

        const heroEl = heroRef.current;
        if (heroEl) {
          heroEl.addEventListener('pointermove', onPointerMove as EventListener);
        }

        const draw = (t: number) => {
          cx.clearRect(0, 0, W, H);
          ax += (txVal * 0.9 - ax) * 0.05;
          ay += (tyVal * 0.9 - ay) * 0.05;
          const rot = t * 0.00028 + ay * 2.2;
          const s = Math.min(W, H) * 0.3;
          const co = Math.cos(rot);
          const si = Math.sin(rot);
          const ca = Math.cos(ax);
          const sa = Math.sin(ax);

          const g = cx.createRadialGradient(W / 2, H / 2, 0, W / 2, H / 2, s * 1.5);
          g.addColorStop(0, 'rgba(255,110,20,.28)');
          g.addColorStop(0.5, 'rgba(255,90,20,.07)');
          g.addColorStop(1, 'rgba(0,0,0,0)');
          cx.fillStyle = g;
          cx.fillRect(0, 0, W, H);

          const q: [number, number, number][] = [];
          for (let j = 0; j < N; j++) {
            const pCoord = P[j];
            const x = pCoord[0] * co + pCoord[2] * si;
            let z = -pCoord[0] * si + pCoord[2] * co;
            const yy = pCoord[1] * ca - z * sa;
            z = pCoord[1] * sa + z * ca;
            const sc = s * (1 + z * 0.22);
            q.push([W / 2 + x * sc, H / 2 + yy * sc, z]);
          }

          cx.lineWidth = 0.6;
          const L = s * 0.3;
          for (let j = 0; j < N; j++) {
            for (let k = j + 1; k < N; k++) {
              const dx = q[j][0] - q[k][0];
              const dy = q[j][1] - q[k][1];
              const d = dx * dx + dy * dy;
              if (d < L * L) {
                const a = (1 - Math.sqrt(d) / L) * 0.35 * ((q[j][2] + q[k][2] + 2) / 4);
                cx.strokeStyle = `rgba(255,140,40,${a})`;
                cx.beginPath();
                cx.moveTo(q[j][0], q[j][1]);
                cx.lineTo(q[k][0], q[k][1]);
                cx.stroke();
              }
            }
          }

          for (let j = 0; j < N; j++) {
            const z2 = (q[j][2] + 1) / 2;
            cx.fillStyle = `rgba(255,${(150 + z2 * 80) | 0},90,${0.2 + 0.8 * z2})`;
            cx.beginPath();
            cx.arc(q[j][0], q[j][1], 0.8 + z2 * 1.8, 0, 6.283);
            cx.fill();
          }

          cx.strokeStyle = 'rgba(255,138,31,.35)';
          cx.lineWidth = 1;
          cx.beginPath();
          cx.ellipse(W / 2, H / 2, s * 1.5, s * 0.42, -0.35 + ay * 0.4, 0, 6.283);
          cx.stroke();

          if (!RM) {
            animFrameId = requestAnimationFrame(draw);
          }
        };

        animFrameId = requestAnimationFrame(draw);

        return () => {
          window.removeEventListener('scroll', onScroll);
          window.removeEventListener('resize', onScroll);
          window.removeEventListener('resize', resizeCanvas);
          if (heroEl) heroEl.removeEventListener('pointermove', onPointerMove as EventListener);
          if (chatTimeout) clearTimeout(chatTimeout);
          if (animFrameId) cancelAnimationFrame(animFrameId);
        };
      }
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (chatTimeout) clearTimeout(chatTimeout);
    };
  }, []);

  return (
    <>
      <div id="bar" ref={barRef}></div>

      <nav>
        <div className="in">
          <a className="logo" href="#top">
            schedulos<i>.</i>
          </a>
          <div className="links">
            <a href="#pilares">Pilares</a>
            <a href="#valor">Impacto</a>
            <a href="#metodo">Método</a>
            <a href="#faq">FAQ</a>
          </div>
          <button className="btn" onClick={() => setIsModalOpen(true)}>
            Falar connosco
          </button>
        </div>
      </nav>

      <header className="hero wrap" id="top" ref={heroRef}>
        <h1>
          <span className="a">Engenharia de processos.</span>
          <span className="b">Sistemas que vendem e operam por si</span>
        </h1>
        <div className="orbwrap" aria-hidden="true">
          <canvas id="orb" ref={canvasRef}></canvas>
        </div>
        <p className="hero-copy">
          Desenhamos o ecossistema digital que atende, vende e agenda por si, de forma contínua e mensurável.
        </p>
        <div className="tags">
          <span>Ecossistema</span>
          <span>Automação</span>
          <span>Agentes de IA</span>
          <span>Bookings</span>
          <span>Websites</span>
          <span>Sales</span>
          <div className="cta-row">
            <a className="btn" href="#agente">
              Ver em ação
            </a>
            <button className="btn ghost" onClick={() => setIsModalOpen(true)}>
              Pedir diagnóstico
            </button>
          </div>
        </div>
        <div className="stats">
          <div className="stat">
            <i className="live"></i>
            <b>
              <span data-n="24">24</span>/7
            </b>
            <small>
              <strong>Atendimento contínuo</strong>Sempre ligado
            </small>
          </div>
          <div className="stat">
            <i className="meter">
              <u></u>
            </i>
            <b>
              &lt;<span data-n="10">10</span>s
            </b>
            <small>
              <strong>Tempo de resposta</strong>Do pedido à resposta
            </small>
          </div>
          <div className="stat">
            <i className="inf"></i>
            <b>∞</b>
            <small>
              <strong>Conversas em simultâneo</strong>Sem fila de espera
            </small>
          </div>
        </div>
      </header>

      <section className="state wrap">
        <p id="reveal" ref={revealRef}>
          Conectamos tecnologia, estratégia e vendas num ecossistema orientado a resultados.
        </p>
      </section>

      <section className="sec wrap" id="pilares">
        <h2>
          Grow. Serve. Run.<br />
          <span>Três pilares de resultado.</span>
        </h2>
        <div className="tabs" role="tablist">
          <button
            className="tab"
            role="tab"
            aria-selected={activeTab === 0}
            onClick={() => setActiveTab(0)}
          >
            <b>01</b>Grow
          </button>
          <button
            className="tab"
            role="tab"
            aria-selected={activeTab === 1}
            onClick={() => setActiveTab(1)}
          >
            <b>02</b>Serve
          </button>
          <button
            className="tab"
            role="tab"
            aria-selected={activeTab === 2}
            onClick={() => setActiveTab(2)}
          >
            <b>03</b>Run
          </button>
        </div>

        <div className={`pan ${activeTab === 0 ? 'on' : ''}`}>
          <div>
            <h3>Criar condições para crescer.</h3>
            <p>Uma presença digital mais forte, melhores oportunidades e uma estrutura preparada para transformar interesse em negócio.</p>
          </div>
          <ul>
            <li>Pontos de contacto claros e coerentes com a marca</li>
            <li>Pedidos de informação respondidos e registados de imediato</li>
            <li>Oportunidades acompanhadas até à decisão</li>
            <li>Uma estrutura pronta para absorver mais procura</li>
          </ul>
        </div>

        <div className={`pan ${activeTab === 1 ? 'on' : ''}`}>
          <div>
            <h3>Elevar a experiência do cliente.</h3>
            <p>Uma relação com o cliente mais fluida, consistente e disponível ao longo de toda a experiência com a empresa.</p>
          </div>
          <ul>
            <li>Respostas rápidas e consistentes, a qualquer hora</li>
            <li>Marcações e confirmações sem trocas desnecessárias</li>
            <li>Acompanhamento antes e depois do serviço</li>
            <li>Passagem a uma pessoa quando o caso o exige</li>
          </ul>
        </div>

        <div className={`pan ${activeTab === 2 ? 'on' : ''}`}>
          <div>
            <h3>Fazer o negócio funcionar melhor.</h3>
            <p>Operações mais organizadas, processos conectados e informação que ajuda a tomar melhores decisões.</p>
          </div>
          <ul>
            <li>Processos ligados, sem tarefas duplicadas</li>
            <li>Informação organizada num só lugar</li>
            <li>Menos dependência de pessoas específicas</li>
            <li>Indicadores claros sobre a operação</li>
          </ul>
        </div>
      </section>

      <section className="sec wrap" id="valor">
        <h2>
          Do caos operacional<br />
          <span>à escala contínua.</span>
        </h2>

        <div className="contrast-carousel">
          <div className="carousel-tabs" role="tablist">
            {contrastSlides.map((slide, idx) => (
              <button
                key={slide.num}
                className={`carousel-tab-btn ${activeSlide === idx ? 'active' : ''}`}
                onClick={() => setActiveSlide(idx)}
                role="tab"
                aria-selected={activeSlide === idx}
              >
                <b>{slide.num}</b> {slide.category}
              </button>
            ))}
          </div>

          <div
            className="carousel-card"
            onTouchStart={(e) => {
              touchStartX.current = e.targetTouches[0].clientX;
            }}
            onTouchMove={(e) => {
              touchEndX.current = e.targetTouches[0].clientX;
            }}
            onTouchEnd={() => {
              if (touchStartX.current - touchEndX.current > 40) nextSlide();
              if (touchStartX.current - touchEndX.current < -40) prevSlide();
            }}
          >
            <div className="carousel-side before">
              <span className="carousel-side-badge">Antes</span>
              <p className="carousel-side-text">
                {contrastSlides[activeSlide].before}
              </p>
            </div>

            <div className="carousel-connector" aria-hidden="true">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>

            <div className="carousel-side after">
              <span className="carousel-side-badge highlight">Com a Schedulos</span>
              <p className="carousel-side-text highlight">
                {contrastSlides[activeSlide].after}
              </p>
            </div>
          </div>

          <div className="carousel-footer">
            <div className="carousel-counter">
              {contrastSlides[activeSlide].num} <i>/ 04</i>
            </div>

            <div className="carousel-dots">
              {contrastSlides.map((_, idx) => (
                <button
                  key={idx}
                  className={`carousel-dot ${activeSlide === idx ? 'active' : ''}`}
                  onClick={() => setActiveSlide(idx)}
                  aria-label={`Ir para ${contrastSlides[idx].category}`}
                />
              ))}
            </div>

            <div className="carousel-nav-btns">
              <button
                className="carousel-arrow-btn"
                onClick={prevSlide}
                aria-label="Slide anterior"
              >
                ←
              </button>
              <button
                className="carousel-arrow-btn"
                onClick={nextSlide}
                aria-label="Próximo slide"
              >
                →
              </button>
            </div>
          </div>
        </div>

        <p className="txn">Impacto direto na capacidade produtiva, tempo de resposta e margem do negócio.</p>
      </section>

      <section className="marquee-ticker" aria-label="Destaques">
        <div className="marquee-track">
          {[
            { prefix: 'Decisões com', highlight: 'dados' },
            { prefix: 'Menos', highlight: 'fricção' },
            { prefix: 'Mais', highlight: 'tempo' },
            { prefix: 'Mais', highlight: 'capacidade' },
            { prefix: 'Decisões com', highlight: 'dados' },
            { prefix: 'Menos', highlight: 'fricção' },
            { prefix: 'Mais', highlight: 'tempo' },
            { prefix: 'Mais', highlight: 'capacidade' },
          ].map((item, idx) => (
            <React.Fragment key={`t1-${idx}`}>
              <span className="ticker-item">
                {item.prefix} <b>{item.highlight}</b>
              </span>
              <span className="ticker-diamond" aria-hidden="true"></span>
            </React.Fragment>
          ))}
        </div>
        <div className="marquee-track" aria-hidden="true">
          {[
            { prefix: 'Decisões com', highlight: 'dados' },
            { prefix: 'Menos', highlight: 'fricção' },
            { prefix: 'Mais', highlight: 'tempo' },
            { prefix: 'Mais', highlight: 'capacidade' },
            { prefix: 'Decisões com', highlight: 'dados' },
            { prefix: 'Menos', highlight: 'fricção' },
            { prefix: 'Mais', highlight: 'tempo' },
            { prefix: 'Mais', highlight: 'capacidade' },
          ].map((item, idx) => (
            <React.Fragment key={`t2-${idx}`}>
              <span className="ticker-item">
                {item.prefix} <b>{item.highlight}</b>
              </span>
              <span className="ticker-diamond" aria-hidden="true"></span>
            </React.Fragment>
          ))}
        </div>
      </section>

      <section className="feat" id="agente">
        <div>
          <h2>
            IA × Pessoas:<br />
            <span>uma equipa, mais força.</span>
          </h2>
          <p className="lead">
            A carga operacional sai da equipa sem perder o toque humano: o agente assume o primeiro contacto e a agenda, e escala apenas o que exige decisão.
          </p>
          <ul className="caps">
            <li>
              <b>Compreende</b>
              <span>Interpreta pedidos em linguagem natural, como um cliente real escreve.</span>
            </li>
            <li>
              <b>Decide</b>
              <span>Consulta a agenda e propõe horários disponíveis.</span>
            </li>
            <li>
              <b>Executa</b>
              <span>Confirma a marcação e regista tudo automaticamente.</span>
            </li>
            <li>
              <b>Escala</b>
              <span>Encaminha para uma pessoa quando é mesmo necessário.</span>
            </li>
          </ul>
          <button className="btn" onClick={() => setIsModalOpen(true)}>
            Pedir demonstração
          </button>
        </div>
        <div className="phone" aria-label="Exemplo de conversa com o agente">
          <div className="ph-h">
            <div className="dot"></div>
            <div>
              Agente Schedulos<small>online</small>
            </div>
          </div>
          <div id="chat" aria-live="off" ref={chatRef}></div>
          <div className="ph-f">
            <span>Agenda sincronizada</span>
            <em id="st" ref={stRef}>
              a aguardar
            </em>
          </div>
        </div>
      </section>

      <section className="sec wrap" id="metodo">
        <h2>
          Do diagnóstico<br />
          <span>à evolução contínua.</span>
        </h2>
        <div className="steps" id="steps" ref={stepsRef}>
          <div className="step">
            <b>01</b>
            <h3>Diagnóstico</h3>
            <p>Analisamos o percurso do cliente e quantificamos onde há perda de tempo, de receita e de oportunidades.</p>
          </div>
          <div className="step">
            <b>02</b>
            <h3>Desenho</h3>
            <p>Arquitetamos o ecossistema: agentes, fluxos, dados e experiência, alinhados com os objetivos do negócio.</p>
          </div>
          <div className="step">
            <b>03</b>
            <h3>Integração</h3>
            <p>Implementamos, ligamos às suas ferramentas e validamos com cenários reais antes de ir ao ar.</p>
          </div>
          <div className="step">
            <b>04</b>
            <h3>Evolução</h3>
            <p>Medimos, otimizamos e escalamos, com indicadores claros do impacto gerado.</p>
          </div>
        </div>
      </section>

      <section className="sec wrap" id="faq">
        <h2>
          Perguntas<br />
          <span>frequentes.</span>
        </h2>
        <div className="faq">
          <details>
            <summary>Quanto tempo demora a implementação?</summary>
            <p>
              Depende da complexidade e das ferramentas que já usa. Depois do diagnóstico, apresentamos um calendário claro, e o agente é testado com cenários reais antes de começar a atender clientes.
            </p>
          </details>
          <details>
            <summary>Qual a diferença para um chatbot tradicional?</summary>
            <p>
              Um chatbot comum segue menus rígidos. O nosso agente compreende linguagem natural, consulta a sua agenda e os seus dados, e executa ações, dentro de um sistema desenhado para os seus objetivos.
            </p>
          </details>
          <details>
            <summary>Em que canais funciona?</summary>
            <p>Neste momento focamo-nos no WhatsApp Business, o canal onde os clientes portugueses já comunicam com as empresas.</p>
          </details>
          <details>
            <summary>Preciso de conhecimentos técnicos?</summary>
            <p>Não. Tratamos da configuração, da integração e da manutenção. Você acompanha os resultados e diz-nos o que ajustar.</p>
          </details>
          <details>
            <summary>O agente substitui a minha equipa?</summary>
            <p>Não. Assume o trabalho repetitivo e encaminha para uma pessoa sempre que o pedido exige atenção humana.</p>
          </details>
          <details>
            <summary>Como são tratados os dados dos clientes?</summary>
            <p>
              Utilizamos infraestrutura profissional e só recolhemos a informação necessária para o serviço. Falamos consigo sobre o enquadramento RGPD durante o diagnóstico.
            </p>
          </details>
        </div>
      </section>

      <section className="cta" id="contacto">
        <h2>
          Vamos mapear o potencial<br />
          <span>do seu negócio?</span>
        </h2>
        <div className="row">
          <button className="btn" onClick={() => setIsModalOpen(true)}>
            Marcar diagnóstico inicial
          </button>
          <a className="btn ghost" href="#pilares">
            Conhecer os pilares
          </a>
        </div>
      </section>

      <footer>
        <span>schedulos. © 2026</span>
        <span>Smart Business Ecosystem</span>
      </footer>

      {isModalOpen && (
        <div
          className="modal-overlay"
          onClick={(e) => {
            if (e.target === e.currentTarget) setIsModalOpen(false);
          }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <div className="modal-card">
            <button
              className="modal-close"
              onClick={() => setIsModalOpen(false)}
              aria-label="Fechar"
            >
              &times;
            </button>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit}>
                <h3 className="modal-title" id="modal-title">
                  Agende o seu Diagnóstico Digital
                </h3>
                <p className="modal-subtitle">
                  Mapeamos o fluxo de atendimento, vendas e processos da sua empresa para desenhar um ecossistema à medida.
                </p>

                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label" htmlFor="m-nome">
                      Nome Completo<em>*</em>
                    </label>
                    <input
                      id="m-nome"
                      type="text"
                      required
                      className="form-input"
                      placeholder="ex.: Diogo Ferreira"
                      value={formData.nome}
                      onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="m-email">
                      Email Corporativo<em>*</em>
                    </label>
                    <input
                      id="m-email"
                      type="email"
                      required
                      className="form-input"
                      placeholder="diogo@empresa.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label" htmlFor="m-tel">
                      Telefone / WhatsApp<em>*</em>
                    </label>
                    <input
                      id="m-tel"
                      type="tel"
                      required
                      className="form-input"
                      placeholder="+351 912 345 678"
                      value={formData.telefone}
                      onChange={(e) => setFormData({ ...formData, telefone: e.target.value })}
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="m-empresa">
                      Empresa ou Website
                    </label>
                    <input
                      id="m-empresa"
                      type="text"
                      className="form-input"
                      placeholder="empresa.pt"
                      value={formData.empresa}
                      onChange={(e) => setFormData({ ...formData, empresa: e.target.value })}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="m-area">
                    Área de Foco Principal<em>*</em>
                  </label>
                  <select
                    id="m-area"
                    className="form-select"
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  >
                    <option value="Ecossistema Completo (Atendimento, Vendas & Automação)">
                      Ecossistema Completo (Atendimento, Vendas & Automação)
                    </option>
                    <option value="Automação de Atendimento & Agentes de IA (WhatsApp 24/7)">
                      Automação de Atendimento & Agentes de IA (WhatsApp 24/7)
                    </option>
                    <option value="Gestão e Otimização de Marcações / Calendário">
                      Gestão e Otimização de Marcações / Calendário
                    </option>
                    <option value="Pipeline de Vendas & CRM Integrado">
                      Pipeline de Vendas & CRM Integrado
                    </option>
                    <option value="Desenvolvimento de Plataforma / Web à Medida">
                      Desenvolvimento de Plataforma / Web à Medida
                    </option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="m-desafio">
                    Descreva o principal desafio da sua operação
                  </label>
                  <textarea
                    id="m-desafio"
                    rows={3}
                    className="form-textarea"
                    placeholder="Descreva em poucas palavras o gargalo atual da empresa..."
                    value={formData.desafio}
                    onChange={(e) => setFormData({ ...formData, desafio: e.target.value })}
                  ></textarea>
                  <div className="form-hint">
                    Para contextualizar a reunião:
                    <ul>
                      <li>Que tarefas manuais ou repetitivas sobrecarregam a sua equipa?</li>
                      <li>Onde identifica maior perda de leads ou morosidade no agendamento?</li>
                    </ul>
                  </div>
                </div>

                <button
                  type="submit"
                  className="form-btn-submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'A preparar diagnóstico...' : 'Solicitar Diagnóstico Estratégico'}
                </button>

                <p className="form-guarantee">
                  Sessão sem compromisso. Entramos em contacto no prazo máximo de 24 horas úteis.
                </p>
              </form>
            ) : (
              <div className="modal-success">
                <div className="modal-success-icon">✓</div>
                <h3 className="modal-title">Diagnóstico Solicitado</h3>
                <p className="modal-subtitle" style={{ marginBottom: '24px' }}>
                  Obrigado, <strong style={{ color: '#fff' }}>{formData.nome || 'Parceiro'}</strong>. Já estamos a analisar o perfil do seu negócio e entraremos em contacto brevemente.
                </p>
                <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <a
                    className="btn"
                    href={`https://wa.me/351938317522?text=${encodeURIComponent(
                      `Olá! Acabei de solicitar o diagnóstico para ${formData.empresa || formData.nome}. Gostaria de falar convosco.`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Falar de imediato por WhatsApp
                  </a>
                  <button
                    className="btn ghost"
                    onClick={() => {
                      setIsSubmitted(false);
                      setIsModalOpen(false);
                      setFormData({
                        nome: '',
                        email: '',
                        telefone: '',
                        empresa: '',
                        area: 'Ecossistema Completo (Atendimento, Vendas & Automação)',
                        desafio: '',
                      });
                    }}
                  >
                    Concluir
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
