import { useState, useEffect } from 'react';
import { LanguageProvider } from './i18n/LanguageContext';
import { db } from './firebase';
import { doc, getDocFromServer } from 'firebase/firestore';
import { CursorGlow } from './components/CursorGlow';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { TrustedBy } from './components/TrustedBy';
import { WhatWeDo } from './components/WhatWeDo';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { CaseStudies } from './components/CaseStudies';
import { Industries } from './components/Industries';
import { Pricing } from './components/Pricing';
import { Configurator, AppConfig } from './components/Configurator';
import { Calculator } from './components/Calculator';
import { Process } from './components/Process';
import { Faq } from './components/Faq';
import { Cta } from './components/Cta';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ServiceModal } from './components/ServiceModal';

export default function App() {
  const [activeService, setActiveService] = useState<string | null>(null);
  const [config, setConfig] = useState<AppConfig>({ goal: 'presença digital', industry: 'Serviços', scale: 'pequena' });

  useEffect(() => {
    async function testConnection() {
      try {
        await getDocFromServer(doc(db, 'test', 'connection'));
      } catch (error) {
        if(error instanceof Error && error.message.includes('the client is offline')) {
          console.error("Please check your Firebase configuration.");
        }
      }
    }
    testConnection();
  }, []);

  return (
    <LanguageProvider>
      <div className="noise"></div>
      <CursorGlow />
      
      <Nav onOpenService={setActiveService} />
      <Hero />
      <Marquee />
      <TrustedBy />
      <WhatWeDo />
      <Services onOpenService={setActiveService} />
      <Portfolio />
      <CaseStudies />
      <Industries />
      <Pricing />
      <Configurator onConfigChange={setConfig} />
      <Calculator />
      <Process />
      <Faq />
      <Cta />
      <Contact config={config} />
      <Footer />
      
      <ServiceModal serviceKey={activeService} onClose={() => setActiveService(null)} />
    </LanguageProvider>
  );
}
