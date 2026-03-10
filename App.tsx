
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services, { services } from './components/Services';
import SuccessStories, { cases } from './components/SuccessStories';
import CaseDetails from './components/CaseDetails';
import ServiceDetails from './components/ServiceDetails';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MotionWrapper from './components/MotionWrapper';
import WhatsAppButton from './components/WhatsAppButton';
import { AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCaseId, setSelectedCaseId] = useState<string | null>(null);
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (selectedCaseId || selectedServiceId) return;

      const sections = ['home', 'sobre', 'servicos', 'sucesso', 'projetos', 'certificacoes', 'contato'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectedCaseId, selectedServiceId]);

  const handleNavigate = (id: string) => {
    setSelectedCaseId(null);
    setSelectedServiceId(null);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 10);
  };

  const selectedCaseData = selectedCaseId ? cases.find(c => c.id === selectedCaseId) : null;
  const selectedServiceData = selectedServiceId ? services.find(s => s.id === selectedServiceId) : null;

  return (
    <div className="relative overflow-x-hidden antialiased text-slate-900 bg-slate-50">
      <Navbar activeSection={activeSection} onNavigate={handleNavigate} />
      
      <AnimatePresence mode="wait">
        {selectedCaseId && selectedCaseData ? (
          <CaseDetails 
            key="case-details"
            caseData={selectedCaseData} 
            onBack={() => setSelectedCaseId(null)} 
          />
        ) : selectedServiceId && selectedServiceData ? (
          <ServiceDetails 
            key="service-details"
            service={selectedServiceData} 
            onBack={() => setSelectedServiceId(null)} 
          />
        ) : (
          <div key="main-content">
            <main>
              <section id="home" className="scroll-mt-24">
                <Hero />
              </section>
              
              <section id="sobre" className="py-16 md:py-24 bg-white scroll-mt-24">
                <MotionWrapper>
                  <About />
                </MotionWrapper>
              </section>
              
              <section id="servicos" className="py-16 md:py-24 bg-slate-50 scroll-mt-24">
                <MotionWrapper>
                  <Services onSelectService={(id) => {
                    setSelectedServiceId(id);
                    window.scrollTo(0, 0);
                  }} />
                </MotionWrapper>
              </section>

              <section id="sucesso" className="py-16 md:py-24 bg-white scroll-mt-24">
                <MotionWrapper>
                  <SuccessStories onSelectCase={(id) => {
                    setSelectedCaseId(id);
                    window.scrollTo(0, 0);
                  }} />
                </MotionWrapper>
              </section>
              
              <section id="projetos" className="py-16 md:py-24 bg-slate-50 scroll-mt-24">
                <MotionWrapper>
                  <Projects />
                </MotionWrapper>
              </section>
              
              <section id="certificacoes" className="py-16 md:py-24 bg-white scroll-mt-24">
                <MotionWrapper>
                  <Certifications />
                </MotionWrapper>
              </section>
              
              <section id="contato" className="py-16 md:py-24 bg-slate-900 text-white scroll-mt-24">
                <MotionWrapper>
                  <Contact />
                </MotionWrapper>
              </section>
            </main>
            <Footer />
          </div>
        )}
      </AnimatePresence>
      <WhatsAppButton />
    </div>
  );
};

export default App;
