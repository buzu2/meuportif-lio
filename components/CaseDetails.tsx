
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, TrendingUp, Zap, Target, BarChart3, MessageCircle } from 'lucide-react';

interface CaseDetailProps {
  caseData: any;
  onBack: () => void;
}

const CaseDetails: React.FC<CaseDetailProps> = ({ caseData, onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const whatsappUrl = `https://wa.me/5513991472036?text=Olá Fernando! Vi o caso de sucesso da ${caseData.client} e gostaria de algo similar para minha empresa.`;

  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="min-h-screen bg-white pb-20"
    >
      {/* Hero Section */}
      <div className={`relative pt-32 pb-20 bg-gradient-to-br ${caseData.color} text-white overflow-hidden`}>
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M0 100 C 20 0 50 0 100 100 Z" fill="currentColor" />
          </svg>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <button 
            onClick={onBack}
            className="flex items-center text-white/80 hover:text-white mb-12 transition-colors font-bold group"
          >
            <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
            Voltar para o Portfólio
          </button>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-widest mb-6">
                Case Study: {caseData.client}
              </span>
              <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
                {caseData.title}
              </h1>
              <p className="text-xl text-white/90 leading-relaxed mb-10">
                {caseData.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl border border-white/20">
                  <p className="text-sm font-bold uppercase tracking-wider text-white/70 mb-1">Métrica Principal</p>
                  <p className="text-4xl font-black">{caseData.metric}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-6 rounded-3xl border border-white/20">
                  <p className="text-sm font-bold uppercase tracking-wider text-white/70 mb-1">Impacto Final</p>
                  <p className="text-4xl font-black">{caseData.impact.split(' ')[0]}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Narrative Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="space-y-20">
          {/* Challenge */}
          <section>
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 bg-red-100 rounded-2xl text-red-600">
                <Target size={28} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">O Desafio</h2>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              O cliente enfrentava um cenário de estagnação. Apesar de ter um bom produto, o custo de aquisição de clientes (CAC) estava corroendo as margens, e a dependência excessiva de anúncios pagos tornava o negócio vulnerável.
            </p>
            <ul className="grid md:grid-cols-2 gap-4">
              {['Baixa visibilidade orgânica', 'CAC acima do LTV', 'Site com baixa conversão', 'Concorrência agressiva'].map((item, i) => (
                <li key={i} className="flex items-center space-x-3 text-slate-700 font-medium p-4 bg-slate-50 rounded-2xl">
                  <CheckCircle2 size={18} className="text-red-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Solution */}
          <section>
            <div className="flex items-center space-x-4 mb-8">
              <div className="p-3 bg-blue-100 rounded-2xl text-blue-600">
                <Zap size={28} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">Nossa Estratégia</h2>
            </div>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Implementamos uma metodologia de 3 pilares: Otimização Técnica, Marketing de Conteúdo de Fundo de Funil e Inteligência em Performance.
            </p>
            <div className="space-y-6">
              <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                <h4 className="text-xl font-bold text-slate-900 mb-2">1. SEO de Autoridade</h4>
                <p className="text-slate-600">Reestruturação da arquitetura do site e criação de clusters de conteúdo que respondem às dores reais do público-alvo.</p>
              </div>
              <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                <h4 className="text-xl font-bold text-slate-900 mb-2">2. CRO & UX</h4>
                <p className="text-slate-600">Otimização da jornada do usuário para reduzir a taxa de rejeição e maximizar o agendamento/venda direta.</p>
              </div>
              <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100">
                <h4 className="text-xl font-bold text-slate-900 mb-2">3. Performance Escalável</h4>
                <p className="text-slate-600">Campanhas de Google Ads integradas ao funil orgânico, focando em palavras-chave transacionais de alta intenção.</p>
              </div>
            </div>
          </section>

          {/* Results Summary */}
          <section className="bg-slate-900 rounded-[3rem] p-12 text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full blur-[120px] opacity-20" />
            
            <div className="relative z-10 text-center mb-12">
              <div className="inline-flex p-4 bg-blue-600 rounded-3xl mb-6">
                <BarChart3 size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-4">Resultados Consolidados</h2>
              <p className="text-slate-400">Dados reais após 6 meses de implementação.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 relative z-10">
              <div className="text-center">
                <p className="text-5xl font-black text-blue-400 mb-2">{caseData.metric}</p>
                <p className="text-sm font-bold uppercase tracking-widest text-slate-500">ROI Direto</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-black text-blue-400 mb-2">{caseData.impact.split(' ')[0]}</p>
                <p className="text-sm font-bold uppercase tracking-widest text-slate-500">Crescimento</p>
              </div>
              <div className="text-center">
                <p className="text-5xl font-black text-blue-400 mb-2">Zero</p>
                <p className="text-sm font-bold uppercase tracking-widest text-slate-500">Perda de Leads</p>
              </div>
            </div>
          </section>

          {/* CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Gostaria de resultados assim no seu negócio?</h3>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-10 py-5 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 text-lg group"
            >
              <MessageCircle className="mr-3 group-hover:rotate-12 transition-transform" size={24} />
              Quero um Diagnóstico para minha Empresa
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CaseDetails;
