import React, { useState } from 'react';
import { useLanguage } from '../i18n/LanguageContext';
import { Reveal } from './Reveal';
import type { AppConfig } from '../components/Configurator';
import { db } from '../firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

enum OperationType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
  LIST = 'list',
  GET = 'get',
  WRITE = 'write',
}

interface FirestoreErrorInfo {
  error: string;
  operationType: OperationType;
  path: string | null;
  authInfo: {
    userId?: string | null;
    email?: string | null;
  };
}

function handleFirestoreError(error: unknown, operationType: OperationType, path: string | null) {
  const errInfo: FirestoreErrorInfo = {
    error: error instanceof Error ? error.message : String(error),
    authInfo: {},
    operationType,
    path
  };
  console.error('Firestore Error: ', JSON.stringify(errInfo));
  throw new Error(JSON.stringify(errInfo));
}

export function Contact({ config }: ContactProps) {
    const { t } = useLanguage();
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectType, setProjectType] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    let recommendationTitle = "Website / Landing Page";
    if (config.goal === "mais leads") recommendationTitle = "Website + Lead Generation";
    else if (config.goal === "mais marcações") recommendationTitle = "Booking + Website";
    else if (config.goal === "automatizar") recommendationTitle = "Automation";
    else if (config.goal === "IA") recommendationTitle = "AI / Chatbot";
    else if (config.goal === "software") recommendationTitle = "Custom Software";
    
    if (config.scale === "avançada") recommendationTitle = "Custom Digital System";

    const briefingData = {
      name,
      company: company || 'N/A',
      email,
      phone: phone || 'N/A',
      projectType: projectType || 'N/A',
      message: message || 'N/A',
      recommendationTitle,
      createdAt: serverTimestamp()
    };

    try {
      await addDoc(collection(db, 'briefings'), briefingData);
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, 'briefings');
    }

    const briefingText = `Olá! Gostaria de falar com a Schedulos.\n\n━━ BRIEFING ━━\nNome: ${name}\nEmpresa: ${company}\nEmail: ${email}\nTelefone: ${phone}\nProjeto: ${projectType}\nMensagem: ${message}\n\n━━ RECOMENDAÇÃO ━━\nObjetivo: ${config.goal}\nNegócio: ${config.industry}\nDimensão: ${config.scale}\nRecomendação inicial: ${recommendationTitle}`;
    
    const whatsappNumber = "351938317522";
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(briefingText)}`, "_blank");
    
    setIsSubmitting(false);
  };

  return (
    <section className="section contact" id="contact">
      <div className="container contact-grid">
        <Reveal className="contact-copy">
          <div className="eyebrow">{t("contact.eyebrow")}</div>
          <h2>Vamos construir alguma coisa melhor.</h2>
          <p>Não precisa de ter o projeto definido. Explique-nos o que pretende melhorar e partimos daí.</p>
        </Reveal>
        <Reveal>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input type="text" placeholder="Nome" required value={name} onChange={e => setName(e.target.value)} />
              <input type="text" placeholder="Empresa" required value={company} onChange={e => setCompany(e.target.value)} />
            </div>
            <div className="form-row">
              <input type="email" placeholder="Email" required value={email} onChange={e => setEmail(e.target.value)} />
              <input type="tel" placeholder="Telefone" value={phone} onChange={e => setPhone(e.target.value)} />
            </div>
            <select required value={projectType} onChange={e => setProjectType(e.target.value)}>
              <option value="">O que pretende desenvolver?</option>
              <option>Landing Page</option>
              <option>Website</option>
              <option>E-commerce</option>
              <option>AI / Chatbot</option>
              <option>Booking / Agendamento</option>
              <option>Automação</option>
              <option>Dashboard</option>
              <option>Software à medida</option>
              <option>Ainda não sei</option>
            </select>
            <textarea placeholder="Fale-nos brevemente do seu negócio e do que pretende melhorar..." value={message} onChange={e => setMessage(e.target.value)}></textarea>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'A enviar...' : 'Criar briefing no WhatsApp →'}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
