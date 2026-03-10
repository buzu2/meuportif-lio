
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, MessageCircle, BarChart, Rocket, Globe, MousePointer2, Megaphone, Search, Code, Share2 } from 'lucide-react';

interface ServiceDetailProps {
  service: any;
  onBack: () => void;
}

const ServiceDetails: React.FC<ServiceDetailProps> = ({ service, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whatsappUrl = `https://wa.me/5513991472036?text=Olá Fernando! Gostaria de saber mais detalhes sobre o serviço de ${service.title}.`;

  const Icon = service.icon;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="min-h-screen bg-white pb-20"
    >
      {/* Hero Section */}
      <div className={`relative pt-32 pb-24 ${service.color} text-white overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent opacity-30" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button 
            onClick={onBack}
            className="flex items-center text-white/80 hover:text-white mb-12 transition-colors font-bold group"
          >
            <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
            Voltar para Serviços
          </button>
          
          <div className="max-w-3xl">
            <div className="inline-flex p-4 bg-white/20 backdrop-blur-md rounded-3xl mb-8">
              <Icon size={48} strokeWidth={1.5} />
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight">
              {service.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light">
              {service.extendedDescription}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-3 gap-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-16">
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Por que investir nesta solução?</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {service.benefits.map((benefit: string, i: number) => (
                  <div key={i} className="flex items-start space-x-4 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <div className="mt-1 p-1 bg-blue-100 rounded-full text-blue-600">
                      <CheckCircle2 size={18} />
                    </div>
                    <p className="text-slate-700 font-medium leading-tight">{benefit}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Nossa Metodologia</h2>
              <div className="space-y-4">
                {service.process.map((step: any, i: number) => (
                  <div key={i} className="flex items-center p-8 bg-white border border-slate-100 rounded-[2rem] shadow-sm hover:shadow-md transition-shadow">
                    <span className="text-5xl font-black text-slate-100 mr-8">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h4>
                      <p className="text-slate-500">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar CTA */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 p-10 bg-slate-900 rounded-[3rem] text-white overflow-hidden relative">
              <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600 rounded-full blur-[80px] opacity-30" />
              
              <div className="relative z-10 text-center">
                <div className="inline-flex p-4 bg-blue-600 rounded-2xl mb-6">
                  <Rocket size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Pronto para acelerar?</h3>
                <p className="text-slate-400 mb-8 text-sm">
                  Agende uma consultoria estratégica gratuita de 15 minutos para diagnosticarmos seu cenário atual.
                </p>
                <a 
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-4 bg-white text-slate-900 font-black rounded-xl hover:bg-blue-50 transition-all text-center group"
                >
                  Falar no WhatsApp
                  <MessageCircle className="inline-block ml-2 group-hover:scale-110 transition-transform" size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceDetails;
