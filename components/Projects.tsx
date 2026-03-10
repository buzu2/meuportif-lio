
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, MessageCircle } from 'lucide-react';

const projects = [
  {
    id: 26,
    title: 'Felipe Lopes Advocacia',
    category: 'Jurídico',
    image: 'https://lh3.googleusercontent.com/d/14yYwrbGx0MAnGy3Xy0P467-DfoQ9XPFo',
    description: 'Plataforma digital para advocacia especializada, com foco em autoridade jurídica e captação estratégica de leads.',
    url: 'https://felipelopesadvocacia.com.br/'
  },
  {
    id: 25,
    title: 'Flamboyant Consultoria',
    category: 'Institucional',
    image: 'https://lh3.googleusercontent.com/d/1nNzh9ZwaEXDJGMsEgRS9Z1320TGKMjq6',
    description: 'Portal institucional para consultoria estratégica, focado em autoridade de marca e geração de leads qualificados.',
    url: 'https://flamboyantconsultoria.com.br/'
  },
  {
    id: 24,
    title: 'Facilitador Car',
    category: 'Automotivo',
    image: 'https://lh3.googleusercontent.com/d/1rLWCyfCGDzZR8z5F77IGOwFcw_PKBZYe',
    description: 'Solução digital para intermediação e facilitação de compra e venda de veículos em Portugal, com foco em conversão e UX.',
    url: 'https://facilitadorcar.pt/'
  },
  {
    id: 23,
    title: 'Vale Conecta',
    category: 'Institucional',
    image: 'https://lh3.googleusercontent.com/d/1CLi3FbkmKjjPk3k4SjSaQWcbLyoBibh9',
    description: 'Plataforma de conexão e networking regional, otimizada para visibilidade e engajamento no Vale do Paraíba.',
    url: 'https://valeconecta.com.br/'
  },
  {
    id: 1,
    title: 'ContabilVision',
    category: 'Contabilidade',
    image: 'https://i.postimg.cc/VLGtB57Y/contabil.png',
    description: 'Portal de contabilidade focado em autoridade e captação orgânica de leads B2B.',
    url: 'https://contabilvision.com.br/'
  },
  {
    id: 2,
    title: 'MyBNB Flats',
    category: 'Real Estate',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800',
    description: 'Plataforma de reservas diretas para flats e imóveis de temporada com SEO local.',
    url: 'https://www.mybnb.imb.br/'
  },
  {
    id: 3,
    title: 'Câncer de Pele Brasília',
    category: 'Saúde',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800',
    description: 'Site institucional especializado em dermatologia oncológica de alta conversão.',
    url: 'https://cancerdepelebrasilia.com/'
  },
  {
    id: 4,
    title: 'Verum Tecnologia',
    category: 'Tecnologia',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800',
    description: 'Interface tecnológica robusta para soluções em engenharia e indústria.',
    url: 'https://verum.tec.br/'
  },
  {
    id: 5,
    title: 'Connecto Arquitetura',
    category: 'Arquitetura',
    image: 'https://i.postimg.cc/P5yRMWgn/conecto.png',
    description: 'Portfólio interativo para escritório de arquitetura focado em estética minimalista.',
    url: 'https://connectoarquitetura.com.br/'
  },
  {
    id: 6,
    title: 'Alquimia Diária',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800',
    description: 'Loja virtual de cosméticos naturais com foco em performance e checkout otimizado.',
    url: 'https://alquimia-diaria.vercel.app/'
  },
  {
    id: 7,
    title: 'Missão Inclusiva',
    category: 'Social',
    image: 'https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&q=80&w=800',
    description: 'Portal de impacto social focado em acessibilidade e comunicação inclusiva.',
    url: 'https://amissaoinclusiva.com.br/'
  },
  {
    id: 8,
    title: 'Isa Arteira',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&q=80&w=800',
    description: 'Marketplace de artesanato personalizado com estratégia de tráfego de nicho.',
    url: 'https://isaarteira.com.br/'
  },
  {
    id: 9,
    title: 'Evidence (Nando Silva)',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    description: 'Landing page estratégica para venda de consultorias de marketing digital.',
    url: 'https://www.nandosilvapro.site/evidence/'
  },
  {
    id: 10,
    title: 'Forjados Brasil',
    category: 'Industrial',
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800',
    description: 'Site industrial focado em catálogos técnicos e captação de grandes orçamentos.',
    url: 'https://forjadosbrasil.com.br/'
  },
  {
    id: 11,
    title: 'Casa Dolores',
    category: 'E-commerce',
    image: 'https://i.postimg.cc/Qt4YrjXy/casas.png',
    description: 'E-commerce de decoração com jornada de compra focada em dispositivos móveis.',
    url: 'https://casadolores.com.br/'
  },
  {
    id: 12,
    title: 'Evidence Marketing',
    category: 'Marketing',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800',
    description: 'Presença institucional da agência with foco in prova social and cases.',
    url: 'https://evidencemarketing.com.br/'
  },
  {
    id: 13,
    title: 'Barra Square Joias',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800',
    description: 'Loja virtual de luxo com integração de catálogo em tempo real e SEO de produto.',
    url: 'https://www.barrasquarejoias.com.br/'
  },
  {
    id: 14,
    title: 'Cadian Solution',
    category: 'Tecnologia',
    image: 'https://images.unsplash.com/photo-1586772002130-b0f3daa6288b?auto=format&fit=crop&q=80&w=800',
    description: 'Otimização de SEO técnico para software de modelagem em engenharia.',
    url: 'https://www.cadian.com.br/'
  },
  {
    id: 15,
    title: 'Giovani Dobri',
    category: 'Institucional',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=800',
    description: 'Personal branding para consultor, focado em autoridade e presença executiva.',
    url: 'https://giovanidobri.com.br/'
  },
  {
    id: 16,
    title: 'Monix Eco',
    category: 'Sustentabilidade',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800',
    description: 'Portal de soluções ecológicas com foco em conscientização e conversão.',
    url: 'https://monixeco.com.br/'
  },
  {
    id: 17,
    title: 'Curso NR10 Superseg',
    category: 'Educação',
    image: 'https://i.postimg.cc/LXt4y028/curso-nr.png',
    description: 'Página de vendas de alta conversão para certificações de segurança do trabalho.',
    url: 'https://superseg.greennsales.com.br/curso-nr10'
  },
  {
    id: 18,
    title: 'Literunico',
    category: 'E-commerce',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=800',
    description: 'Plataforma literária integrada with e-commerce for niche of reading.',
    url: 'https://literunico.com.br/'
  },
  {
    id: 19,
    title: 'Estância Árvore da Vida',
    category: 'Eventos',
    image: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&q=80&w=800',
    description: 'Site institucional para eventos em meio à natureza with tour virtual.',
    url: 'https://estanciaarvoredavida.com.br/'
  },
  {
    id: 20,
    title: 'Clínica Tripoli',
    category: 'Saúde',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
    description: 'Campanha de lançamento e agendamento digital para clínica odontológica.',
    url: 'https://inauguracao.clinicastripoli.com.br/'
  },
  {
    id: 21,
    title: 'Dra. Amanda Droguetti',
    category: 'Saúde',
    image: 'https://i.postimg.cc/CKFVhLg5/amanda.png',
    description: 'Consultório médico digital focado em autoridade e conveniência do paciente.',
    url: 'https://draamandadroguetti.com.br/'
  },
  {
    id: 22,
    title: '76 Garage',
    category: 'Automotivo',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&q=80&w=800',
    description: 'Portal para garagem de carros premium em Portugal com foco em vendas.',
    url: 'https://76garage.pt/'
  }
];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('Todos');
  const categories = ['Todos', 'Saúde', 'E-commerce', 'Tecnologia', 'Marketing', 'Arquitetura', 'Institucional'];

  const filteredProjects = filter === 'Todos' 
    ? projects 
    : projects.filter(p => p.category === filter || (filter === 'Institucional' && ['Social', 'Industrial', 'Institucional', 'Eventos', 'Automotivo', 'Contabilidade', 'Real Estate', 'Educação', 'Sustentabilidade'].includes(p.category)));

  const whatsappUrl = "https://wa.me/5513991472036?text=Olá Fernando! Gostaria de falar sobre um projeto similar aos do seu portfólio.";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-xl">
          <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Portfólio</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Impacto visual, <span className="text-blue-600">resultados reais.</span></h3>
          <p className="text-slate-500 text-lg">
            Uma seleção de {projects.length} projetos onde estratégia e design se uniram para transformar o faturamento dos clientes.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                filter === cat 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div 
        layout
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
              className="group bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 flex flex-col h-full hover:shadow-2xl transition-all duration-500"
            >
              <div className="relative overflow-hidden aspect-[16/10]">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="p-4 bg-white rounded-full text-slate-900 shadow-xl hover:scale-110 transition-transform"
                  >
                    <ExternalLink size={24} />
                  </a>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full text-[10px] font-black text-slate-900 shadow-sm uppercase tracking-wider">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <h4 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h4>
                <p className="text-slate-500 leading-relaxed line-clamp-2 mb-6 text-sm">
                  {project.description}
                </p>
                <div className="mt-auto flex items-center justify-between">
                   <a 
                    href={project.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-800 transition-colors group/link"
                  >
                    Visitar Website
                    <ExternalLink size={14} className="ml-2 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="mt-16 text-center">
        <a 
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-10 py-5 bg-blue-600 text-white font-black rounded-2xl hover:bg-blue-700 transition-all shadow-xl shadow-blue-500/20 text-lg group"
        >
          <MessageCircle className="mr-3 group-hover:rotate-12 transition-transform" size={24} />
          Solicitar Projeto Similar
        </a>
      </div>
    </div>
  );
};

export default Projects;
