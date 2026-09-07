export interface ServiceItem {
  title: string;
  description: string;
}

export interface ServiceData {
  title: string;
  description: string;
  items: ServiceItem[];
}

export const servicesData: Record<string, ServiceData> = {
  website: {
    title: "Websites",
    description: "Criamos websites que funcionam como uma verdadeira infraestrutura comercial para a empresa — e não apenas como um cartão de visita digital.",
    items: [
      { title: "Corporate websites", description: "Estrutura institucional e empresarial." },
      { title: "Business websites", description: "Websites orientados para aquisição." },
      { title: "Premium websites", description: "Experiências digitais mais personalizadas." },
      { title: "Web applications", description: "Interfaces e plataformas web." }
    ]
  },
  landing: {
    title: "Landing Pages",
    description: "Landing pages focadas numa única ação: captar, vender, reservar ou validar uma oferta.",
    items: [
      { title: "Lead generation", description: "Páginas focadas na captação." },
      { title: "Campaign pages", description: "Landing pages para campanhas." },
      { title: "Product pages", description: "Apresentação de produtos ou serviços." },
      { title: "Conversion", description: "Estrutura orientada para ação." }
    ]
  },
  ecommerce: {
    title: "E-commerce",
    description: "Criamos lojas online com uma experiência de compra simples, rápida e preparada para crescer.",
    items: [
      { title: "Online store", description: "Catálogo e experiência de compra." },
      { title: "Checkout", description: "Fluxo de compra otimizado." },
      { title: "Payments", description: "Integração de pagamentos." },
      { title: "Commerce automation", description: "Processos comerciais automatizados." }
    ]
  },
  ai: {
    title: "AI & Chatbots",
    description: "Assistentes digitais capazes de responder, qualificar, encaminhar e automatizar parte da comunicação com clientes.",
    items: [
      { title: "Website AI", description: "Assistente integrado no website." },
      { title: "WhatsApp AI", description: "Atendimento através de WhatsApp." },
      { title: "Lead qualification", description: "Identificação de potenciais clientes." },
      { title: "AI agents", description: "Agentes especializados em processos." }
    ]
  },
  booking: {
    title: "Booking & Agendamento",
    description: "Sistemas de agendamento desenhados em função dos serviços, colaboradores e regras específicas do negócio.",
    items: [
      { title: "Online booking", description: "Clientes marcam diretamente." },
      { title: "Calendar", description: "Gestão de disponibilidade." },
      { title: "Client management", description: "Organização de clientes." },
      { title: "Notifications", description: "Automação de comunicação." }
    ]
  },
  automation: {
    title: "Automação",
    description: "Ligamos ferramentas e processos para reduzir trabalho manual e criar operações mais eficientes.",
    items: [
      { title: "Workflows", description: "Processos automáticos." },
      { title: "CRM automation", description: "Automação comercial." },
      { title: "Notifications", description: "Comunicação automática." },
      { title: "Integrations", description: "Ferramentas a comunicar entre si." }
    ]
  },
  dashboard: {
    title: "Dashboards",
    description: "Transformamos dados dispersos em interfaces simples para acompanhar aquilo que realmente importa.",
    items: [
      { title: "KPI dashboards", description: "Indicadores essenciais." },
      { title: "Business intelligence", description: "Visão operacional." },
      { title: "Team dashboards", description: "Performance e produtividade." },
      { title: "Custom analytics", description: "Métricas específicas." }
    ]
  },
  custom: {
    title: "Software à medida",
    description: "Quando as ferramentas existentes não resolvem o problema, desenvolvemos uma solução própria.",
    items: [
      { title: "Internal systems", description: "Ferramentas para equipas." },
      { title: "Web apps", description: "Aplicações web." },
      { title: "SaaS", description: "Produtos digitais escaláveis." },
      { title: "Custom platforms", description: "Plataformas completas." }
    ]
  },
  integration: {
    title: "Integrações",
    description: "Criamos ligações entre sistemas para que informação e processos possam circular automaticamente.",
    items: [
      { title: "APIs", description: "Ligação entre sistemas." },
      { title: "CRM", description: "Sincronização de clientes." },
      { title: "Payments", description: "Integração de pagamentos." },
      { title: "Business tools", description: "Conectamos ferramentas existentes." }
    ]
  },
  crm: {
    title: "CRM & Leads",
    description: "Estruturamos a gestão de potenciais clientes para que nenhuma oportunidade fique esquecida.",
    items: [
      { title: "Lead capture", description: "Captação de contactos." },
      { title: "Pipeline", description: "Gestão de oportunidades." },
      { title: "Follow-up", description: "Automação comercial." },
      { title: "Analytics", description: "Medição de performance." }
    ]
  }
};
