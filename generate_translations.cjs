const fs = require('fs');

const pt = {
  nav: {
    solucoes: "Soluções", servicos: "Serviços", projetos: "Projetos", negocios: "Negócios", investimento: "Investimento", contactar: "Falar connosco →", tecnologia: "Tecnologia pensada para o negócio.", escolha: "Escolha apenas o que precisa ou combine várias soluções para criar uma infraestrutura digital completa.", descobrir: "Descobrir solução →"
  },
  hero: {
    transformamos: "Transformamos <span className=\"highlight\">problemas</span> em tecnologia.", websites: "Websites, inteligência artificial, automação, agendamento, e-commerce e software à medida. A Schedulos desenha e desenvolve soluções digitais pensadas em função do seu negócio — não da ferramenta.", descobrir: "Descobrir a solução certa →", ver: "Ver o que fazemos"
  },
  marquee: { we_build: "WE BUILD" },
  trusted: { title: "Com a confiança de empresas inovadoras" },
  whatwedo: {
    eyebrow: "01 / What we do", title1: "Uma infraestrutura digital ", title2: "pensada para o seu negócio.",
    desc: "Não acreditamos que todas as empresas precisem da mesma tecnologia. Primeiro percebemos o problema. Depois desenhamos a solução.",
    caps: [
      { title: "Presença digital", desc: "Criamos websites e landing pages que comunicam autoridade, posicionamento e transformam visitas em oportunidades." },
      { title: "Aquisição & conversão", desc: "Estruturamos experiências para captar, qualificar e converter potenciais clientes." },
      { title: "Inteligência artificial", desc: "Criamos AI assistants e chatbots capazes de responder, qualificar, encaminhar e automatizar interações." },
      { title: "Operações & automação", desc: "Ligamos sistemas e processos para eliminar trabalho repetitivo e tornar a operação mais eficiente." },
      { title: "Software personalizado", desc: "Desenvolvemos ferramentas próprias quando uma solução standard já não chega." }
    ]
  },
  services: {
    eyebrow: "02 / The Services", title1: "Nós fazemos ", title2: "o trabalho pesado.",
    desc: "Tudo o que uma empresa moderna precisa para operar no digital, centralizado num único parceiro de tecnologia.",
    items: [
      { id: 'website', title: 'Websites & Apps', desc: 'Presença digital, e-commerce e aplicações web.', label: 'Descobrir' },
      { id: 'landing', title: 'Landing Pages', desc: 'Focadas exclusivamente em captar e converter.', label: 'Descobrir' },
      { id: 'booking', title: 'Booking Systems', desc: 'Sistemas de agendamento online automático.', label: 'Descobrir' },
      { id: 'ai', title: 'AI & Chatbots', desc: 'Assistentes inteligentes para atendimento 24/7.', label: 'Descobrir' },
      { id: 'automation', title: 'Automação', desc: 'Ligue as suas ferramentas e poupe centenas de horas.', label: 'Descobrir' },
      { id: 'custom', title: 'Custom Software', desc: 'Portais de cliente, ERPs leves e SaaS.', label: 'Descobrir' }
    ]
  },
  portfolio: {
    eyebrow: "03 / Selected Work", title1: "Não vendemos código. ", title2: "Vendemos resultados.",
    desc: "Mais do que criar um website bonito, desenhamos a infraestrutura que o seu negócio precisa para crescer.",
    btn: "Ver todos os projetos"
  },
  cases: {
    eyebrow: "04 / Case Studies", title1: "Menos teoria. ", title2: "Mais prática.",
    desc: "O impacto real da tecnologia aplicada aos negócios.",
    items: [
      { meta: "Clínica Dentária · AI Assistant", title: "Como um AI Assistant poupou 40h/mês em atendimento telefónico.", metric1: "40h", label1: "Poupadas/mês", metric2: "+25%", label2: "Agendamentos" },
      { meta: "Estética · Booking System", title: "De agendamentos por WhatsApp para um sistema 100% automático.", metric1: "100%", label1: "Automatizado", metric2: "0", label2: "No-shows" },
      { meta: "B2B · Automação", title: "Automação do fluxo de propostas comerciais e faturação.", metric1: "-80%", label1: "Tempo admin", metric2: "3x", label2: "Capacidade" }
    ]
  },
  industries: {
    eyebrow: "05 / Industries", title: "Tecnologia adaptada à sua realidade.",
    items: [
      { title: "Saúde & Clínicas", desc: "Digitalize o agendamento de consultas, automatize o envio de lembretes e utilize IA para fazer a triagem inicial de pacientes.", tags: ["Agendamento online", "Gestão de pacientes", "Lembretes SMS/WhatsApp"] },
      { title: "Beleza & Estética", desc: "Permita que os clientes marquem serviços 24/7, faça a gestão de staff, comissões e pagamentos antecipados sem intervenção manual.", tags: ["Booking 24/7", "Pagamentos online", "Gestão de staff"] },
      { title: "Automóvel", desc: "Do stand à oficina. Websites de inventário, agendamento de revisões e automatização do processo de propostas e test-drives.", tags: ["Catálogos digitais", "Marcação de serviços", "CRM integrado"] },
      { title: "Serviços & B2B", desc: "Aumente a captação de leads, integre CRMs e automatize processos de faturação e acompanhamento de clientes.", tags: ["Geração de leads", "Automação B2B", "Portais de cliente"] }
    ]
  },
  pricing: {
    eyebrow: "06 / Pricing", title1: "Transparência. ", title2: "Sem surpresas.",
    desc: "Projetos chave-na-mão para resultados rápidos, ou subscrições mensais para evolução contínua.",
    plans: [
      { name: "Landing Page", price: "€750", desc: "Perfeito para campanhas.", features: ["Design otimizado para conversão", "Formulários / Captação de Leads", "Integração com WhatsApp/Email", "Setup em 1 semana"] },
      { name: "Website Corporate", price: "€1,800", desc: "Para empresas estabelecidas.", features: ["Design premium e exclusivo", "Otimização SEO Base", "Gestor de conteúdos (CMS)", "Integração analítica"] },
      { name: "Digital Infrastructure", price: "Sob consulta", desc: "Sistemas complexos.", features: ["Sistemas de agendamento (Booking)", "Automações e AI Agents", "Integrações customizadas (API)", "E-commerce & Portais"] }
    ],
    other: "Precisa de uma equipa dedicada? Fale connosco sobre os planos mensais (Retainer)."
  },
  config: {
    eyebrow: "07 / System Builder", title1: "Descubra o que ", title2: "o seu negócio precisa.",
    desc: "Diga-nos o seu objetivo e nós desenhamos a infraestrutura ideal.",
    goal: "O meu principal objetivo é",
    industry: "No setor de",
    scale: "Para uma operação",
    rec: "A infraestrutura recomendada:",
    rec_desc: "A combinação ideal para começar a resolver este problema."
  },
  calc: {
    eyebrow: "08 / ROI Calculator", title1: "Quanto lhe custa ", title2: "não automatizar?",
    desc: "Descubra o impacto financeiro das tarefas manuais no seu negócio.",
    hours: "Quantas horas perde por dia em tarefas repetitivas?",
    cost: "Qual é o custo hora (aprox.) dessa equipa/pessoa?",
    days: "Quantos dias trabalha por mês?",
    result1: "Custo Mensal", result2: "Custo Anual",
    cta: "Podemos reduzir este valor em 80%."
  },
  process: {
    eyebrow: "09 / How it works", title1: "Um processo ", title2: "sem dores de cabeça.",
    items: [
      { step: "01", title: "Diagnóstico", desc: "Analisamos a sua operação, identificamos os gargalos e propomos a arquitetura tecnológica ideal." },
      { step: "02", title: "Design & Setup", desc: "Desenhamos a solução com foco na usabilidade, configuramos os sistemas e criamos as automações." },
      { step: "03", title: "Launch & Scale", desc: "Testamos, lançamos e treinamos a sua equipa. Depois iteramos com base em dados reais." }
    ]
  },
  faq: {
    eyebrow: "10 / FAQ", title: "Perguntas Frequentes",
    items: [
      { q: "Trabalham com que tecnologias?", a: "Escolhemos a stack tecnológica mediante o projeto. Utilizamos ferramentas modernas como React, Next.js, Node.js para desenvolvimento customizado, e ferramentas no-code/low-code como Webflow, Make/Zapier e OpenAI quando precisamos de rapidez e flexibilidade." },
      { q: "Quanto tempo demora um projeto?", a: "Uma Landing Page ou automação simples demora entre 1 a 2 semanas. Um website corporativo entre 3 a 5 semanas. Projetos complexos ou desenvolvimento de software sob medida podem ir de 1 a 3 meses." },
      { q: "Também fazem gestão de redes sociais?", a: "Não. Somos especialistas na camada de infraestrutura digital: websites, sistemas, inteligência artificial e automações. Se procura gestão de redes, podemos recomendar excelentes parceiros." }
    ]
  },
  cta: {
    title: "Pronto para modernizar a sua operação?",
    subtitle: "Agende uma chamada de diagnóstico de 15 minutos. Sem compromisso, apenas foco em encontrar a melhor solução."
  },
  contact: {
    eyebrow: "11 / Contact", title1: "Vamos falar ", title2: "sobre o seu projeto.",
    desc: "Preencha o briefing. Entramos em contacto em menos de 24 horas úteis.",
    name: "O seu nome", company: "A sua empresa", email: "O seu email", phone: "Telefone / WhatsApp",
    project: "O que procura implementar?", project_opt: ["Website / Landing Page", "Sistema de Booking", "AI Assistant", "Automação de Processos", "Software Custom", "Ainda não tenho a certeza"],
    msg: "Detalhes do projeto", btn: "Enviar briefing e falar por WhatsApp →", submitting: "A preparar a conversa..."
  },
  footer: {
    brand: "Estratégia, design e tecnologia para negócios que querem operar melhor, converter mais e crescer.",
    col1: "Company", c1_1: "Soluções", c1_2: "Serviços", c1_3: "Projetos", c1_4: "Processo",
    col2: "Services", c2_1: "Websites", c2_2: "AI", c2_3: "Automation", c2_4: "Booking", c2_5: "Software",
    col3: "Business", c3_1: "Clínicas", c3_2: "Beauty", c3_3: "Automotive", c3_4: "Serviços",
    col4: "Contact", c4_1: "Iniciar projeto", c4_2: "Pedir diagnóstico",
    rights: "© 2026 Schedulos", slogan: "Digital infrastructure for modern businesses."
  }
};

const en = JSON.parse(JSON.stringify(pt));
en.whatwedo.title1 = "A digital infrastructure "; en.whatwedo.title2 = "designed for your business.";
en.services.eyebrow = "02 / The Services"; en.services.title1 = "We do "; en.services.title2 = "the heavy lifting.";
en.portfolio.eyebrow = "03 / Selected Work"; en.portfolio.title1 = "We don't sell code. "; en.portfolio.title2 = "We sell results.";
en.cases.eyebrow = "04 / Case Studies"; en.cases.title1 = "Less theory. "; en.cases.title2 = "More practice.";
en.industries.eyebrow = "05 / Industries"; en.industries.title = "Technology adapted to your reality.";
en.pricing.eyebrow = "06 / Pricing"; en.pricing.title1 = "Transparency. "; en.pricing.title2 = "No surprises.";
en.config.eyebrow = "07 / System Builder"; en.config.title1 = "Discover what "; en.config.title2 = "your business needs.";
en.calc.eyebrow = "08 / ROI Calculator"; en.calc.title1 = "What's the cost "; en.calc.title2 = "of not automating?";
en.process.eyebrow = "09 / How it works"; en.process.title1 = "A process "; en.process.title2 = "without headaches.";
en.faq.eyebrow = "10 / FAQ"; en.faq.title = "Frequently Asked Questions";
en.cta.title = "Ready to modernize your operation?";
en.contact.eyebrow = "11 / Contact"; en.contact.title1 = "Let's talk "; en.contact.title2 = "about your project.";

const es = JSON.parse(JSON.stringify(pt));
es.whatwedo.title1 = "Una infraestructura digital "; es.whatwedo.title2 = "pensada para su negocio.";
es.services.title1 = "Nosotros hacemos "; es.services.title2 = "el trabajo pesado.";
es.portfolio.title1 = "No vendemos código. "; es.portfolio.title2 = "Vendemos resultados.";
es.cases.title1 = "Menos teoría. "; es.cases.title2 = "Más práctica.";
es.industries.title = "Tecnología adaptada a su realidad.";
es.pricing.title1 = "Transparencia. "; es.pricing.title2 = "Sin sorpresas.";
es.config.title1 = "Descubra lo que "; es.config.title2 = "su negocio necesita.";
es.calc.title1 = "¿Cuánto cuesta "; es.calc.title2 = "no automatizar?";
es.process.title1 = "Un proceso "; es.process.title2 = "sin dolores de cabeza.";
es.faq.title = "Preguntas Frecuentes";
es.cta.title = "¿Listo para modernizar su operación?";
es.contact.title1 = "Hablemos "; es.contact.title2 = "sobre su proyecto.";

const fr = JSON.parse(JSON.stringify(pt));
fr.whatwedo.title1 = "Une infrastructure numérique "; fr.whatwedo.title2 = "conçue pour votre entreprise.";
fr.services.title1 = "Nous faisons "; fr.services.title2 = "le gros du travail.";
fr.portfolio.title1 = "Nous ne vendons pas de code. "; fr.portfolio.title2 = "Nous vendons des résultats.";
fr.cases.title1 = "Moins de théorie. "; fr.cases.title2 = "Plus de pratique.";
fr.industries.title = "Une technologie adaptée à votre réalité.";
fr.pricing.title1 = "Transparence. "; fr.pricing.title2 = "Pas de surprises.";
fr.config.title1 = "Découvrez ce dont "; fr.config.title2 = "votre entreprise a besoin.";
fr.calc.title1 = "Combien coûte "; fr.calc.title2 = "de ne pas automatiser ?";
fr.process.title1 = "Un processus "; fr.process.title2 = "sans maux de tête.";
fr.faq.title = "Questions Fréquentes";
fr.cta.title = "Prêt à moderniser votre opération ?";
fr.contact.title1 = "Parlons "; fr.contact.title2 = "de votre projet.";

const content = `export const translations = ${JSON.stringify({pt, en, es, fr}, null, 2)};\n`;
fs.writeFileSync('src/i18n/translations.ts', content);

