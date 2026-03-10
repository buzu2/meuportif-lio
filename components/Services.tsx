
import React from 'react';
import { motion } from 'framer-motion';
import { Search, Globe, MousePointer2, Megaphone, Share2, Code } from 'lucide-react';

export const services = [
  {
    id: 'seo',
    icon: Search,
    title: 'SEO Estratégico',
    description: 'Otimização on-page e off-page para dominar a primeira página do Google e Google Maps.',
    extendedDescription: 'Muito além de palavras-chave, construímos autoridade técnica e semântica para que seu negócio seja a resposta número 1 do Google.',
    color: 'bg-blue-600',
    benefits: [
      'Redução do custo de aquisição (CAC)',
      'Aumento exponencial de leads orgânicos',
      'Visibilidade máxima no Google Maps local',
      'Autoridade de marca a longo prazo'
    ],
    process: [
      { title: 'Auditoria Técnica', desc: 'Análise profunda de saúde do site, velocidade e indexação.' },
      { title: 'Keyword Intelligence', desc: 'Mapeamento de intenção de busca do seu cliente ideal.' },
      { title: 'Content Clustering', desc: 'Criação de redes de conteúdo que provam sua autoridade.' },
      { title: 'Link Building', desc: 'Estratégias éticas de ganho de backlinks de alta relevância.' }
    ]
  },
  {
    id: 'marketing',
    icon: Megaphone,
    title: 'Marketing Digital',
    description: 'Estratégias completas de aquisição e retenção para aumentar seu market share.',
    extendedDescription: 'Planejamento 360º focado em crescimento escalável, integrando branding, performance e canais de aquisição.',
    color: 'bg-indigo-600',
    benefits: [
      'Visão estratégica de crescimento',
      'Posicionamento de marca premium',
      'Melhoria nas taxas de conversão (CRO)',
      'Retenção e LTV otimizados'
    ],
    process: [
      { title: 'Diagnóstico de Mercado', desc: 'Análise de concorrentes e oportunidades de nicho.' },
      { title: 'Funil de Vendas', desc: 'Desenho da jornada do usuário da descoberta à compra.' },
      { title: 'Growth Strategies', desc: 'Testes rápidos para encontrar canais de escala.' },
      { title: 'Analytics & BI', desc: 'Relatórios claros focados em métricas de negócio.' }
    ]
  },
  {
    id: 'sites',
    icon: Code,
    title: 'Criação de Sites',
    description: 'Landing Pages e E-commerces ultra velozes focados em alta conversão e UX.',
    extendedDescription: 'Desenvolvemos interfaces que não são apenas bonitas, mas máquinas de vendas otimizadas para performance máxima.',
    color: 'bg-sky-600',
    benefits: [
      'Velocidade de carregamento extrema',
      'Foco total em conversão (UX/UI)',
      'Mobile-first por natureza',
      'Código limpo e amigável ao SEO'
    ],
    process: [
      { title: 'UI/UX Design', desc: 'Prototipagem focada na experiência e persuasão.' },
      { title: 'Desenvolvimento Web', desc: 'Implementação de alta performance e segurança.' },
      { title: 'Integrações', desc: 'Conexão perfeita com CRMs, ERPs e Pixels.' },
      { title: 'QA & Otimização', desc: 'Testes rigorosos de usabilidade e velocidade.' }
    ]
  },
  {
    id: 'trafego',
    icon: MousePointer2,
    title: 'Tráfego Pago',
    description: 'Gestão profissional de Google Ads e Social Ads com foco absoluto em ROAS positivo.',
    extendedDescription: 'Gerenciamos seu orçamento como se fosse nosso, buscando o máximo retorno sobre o investimento em anúncios.',
    color: 'bg-violet-600',
    benefits: [
      'Resultados imediatos no curto prazo',
      'Segmentação ultra-específica',
      'Escalabilidade rápida de vendas',
      'Acompanhamento diário de performance'
    ],
    process: [
      { title: 'Estruturação de Conta', desc: 'Configuração técnica impecável de conversões.' },
      { title: 'Copywriting Persuasivo', desc: 'Anúncios que clicam e vendem.' },
      { title: 'Otimização Contínua', desc: 'Ajustes diários de lances e criativos.' },
      { title: 'Retargeting Inteligente', desc: 'Impactando quem já demonstrou interesse.' }
    ]
  },
  {
    id: 'global',
    icon: Globe,
    title: 'Presença Global',
    description: 'Expansão de marcas para mercados internacionais com estratégias de SEO multilingue.',
    extendedDescription: 'Levamos seu negócio para além das fronteiras com estratégias de SEO e marketing internacional adaptadas a cada cultura.',
    color: 'bg-cyan-600',
    benefits: [
      'Acesso a novos mercados globais',
      'SEO Internacional (Hreflang e CC-TLDs)',
      'Localização de conteúdo estratégica',
      'Autoridade global reconhecida'
    ],
    process: [
      { title: 'Análise de Mercado Alvo', desc: 'Estudo de demanda e cultura de busca local.' },
      { title: 'Estratégia Multilingue', desc: 'Estrutura técnica para múltiplos idiomas.' },
      { title: 'Localização vs Tradução', desc: 'Adaptação cultural da mensagem de vendas.' },
      { title: 'Presença Local', desc: 'Criação de autoridade em regiões específicas.' }
    ]
  },
  {
    id: 'social',
    icon: Share2,
    title: 'Social Content',
    description: 'Criação de autoridade através de conteúdos estratégicos que conectam e vendem.',
    extendedDescription: 'Transformamos suas redes sociais em canais de autoridade, gerando conexão real e demanda pelo seu produto ou serviço.',
    color: 'bg-blue-700',
    benefits: [
      'Autoridade percebida de mercado',
      'Engajamento real com a audiência',
      'Criação de comunidade em volta da marca',
      'Suporte orgânico para campanhas de Ads'
    ],
    process: [
      { title: 'Estratégia de Editoria', desc: 'Mapeamento de tópicos de interesse do público.' },
      { title: 'Visual Branding', desc: 'Identidade visual forte para os canais sociais.' },
      { title: 'Cronograma de Postagens', desc: 'Consistência estratégica que gera resultados.' },
      { title: 'Gestão de Comunidade', desc: 'Interação humana que converte seguidores em fãs.' }
    ]
  }
];

interface ServicesProps {
  onSelectService?: (serviceId: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const whatsappUrl = "https://wa.me/5513991472036?text=Olá Fernando! Gostaria de saber mais sobre seus serviços de marketing digital.";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="mb-20">
        <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Especializações</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Soluções para <span className="text-blue-600">acelerar seu negócio.</span></h3>
        <p className="max-w-2xl mx-auto text-slate-500 text-lg">
          Trabalhamos com o que há de mais moderno em tecnologia e estratégia para garantir que sua marca seja encontrada por quem importa.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -10 }}
            className="p-10 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all group relative overflow-hidden text-left"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 ${service.color} opacity-0 group-hover:opacity-5 -mr-16 -mt-16 rounded-full transition-opacity`} />
            
            <div className={`inline-flex items-center justify-center p-4 rounded-2xl ${service.color} text-white mb-8 shadow-lg shadow-blue-500/20`}>
              <service.icon size={28} />
            </div>
            
            <h4 className="text-2xl font-bold text-slate-900 mb-4">{service.title}</h4>
            <p className="text-slate-500 leading-relaxed mb-8">
              {service.description}
            </p>
            
            <button 
              onClick={() => onSelectService?.(service.id)}
              className="inline-flex items-center text-blue-600 font-bold hover:text-blue-800 transition-colors group/btn"
            >
              Saiba mais
              <motion.span 
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="ml-2"
              >
                →
              </motion.span>
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
