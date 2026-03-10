
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Calendar, ExternalLink, PlayCircle } from 'lucide-react';
import CertificationQuiz from './CertificationQuiz';

const quizData = {
  'Google Ads Search': [
    {
      id: 1,
      text: 'Qual é a principal vantagem de usar a Estratégia de Lances Inteligentes (Smart Bidding) no Google Ads?',
      options: [
        'Aumentar o custo por clique manualmente',
        'Otimizar lances em tempo real usando aprendizado de máquina',
        'Garantir a primeira posição em todos os leilões',
        'Reduzir a qualidade dos anúncios para economizar'
      ],
      correctAnswer: 1,
      explanation: 'O Smart Bidding utiliza sinais contextuais e aprendizado de máquina para otimizar lances para conversões ou valor de conversão em cada leilão.'
    },
    {
      id: 2,
      text: 'O que o Índice de Qualidade (Quality Score) influencia diretamente?',
      options: [
        'Apenas o orçamento diário da campanha',
        'O faturamento total da empresa',
        'O Ad Rank (Classificação do Anúncio) e o CPC real',
        'A cor do botão de checkout no site'
      ],
      correctAnswer: 2,
      explanation: 'O Índice de Qualidade é uma estimativa da qualidade dos seus anúncios, palavras-chave e páginas de destino, afetando diretamente sua posição e quanto você paga por clique.'
    },
    {
      id: 3,
      text: 'Qual extensão de anúncio é ideal para mostrar o endereço físico da empresa?',
      options: [
        'Extensão de Chamada',
        'Extensão de Local',
        'Extensão de Preço',
        'Extensão de Frase de Destaque'
      ],
      correctAnswer: 1,
      explanation: 'As extensões de local ajudam as pessoas a encontrar suas lojas físicas, mostrando seu endereço, um mapa ou a distância até sua empresa.'
    }
  ],
  'Google Analytics 4': [
    {
      id: 1,
      text: 'Qual é o modelo de dados fundamental do Google Analytics 4 (GA4)?',
      options: [
        'Baseado em Sessões e Visualizações de Página',
        'Baseado em Eventos e Parâmetros',
        'Baseado em Cookies de Terceiros',
        'Baseado em Hits de Transação apenas'
      ],
      correctAnswer: 1,
      explanation: 'Diferente do Universal Analytics, o GA4 coleta e processa dados baseados em eventos, onde cada interação é tratada como um evento independente.'
    },
    {
      id: 2,
      text: 'O que é o "Engajamento" no GA4?',
      options: [
        'O número total de cliques em anúncios',
        'Sessões que duraram mais de 10 segundos, tiveram um evento de conversão ou 2+ visualizações de página',
        'Apenas quando o usuário faz uma compra',
        'O tempo que o site leva para carregar'
      ],
      correctAnswer: 1,
      explanation: 'Uma sessão engajada é aquela que atende a critérios específicos de interação, fornecendo uma métrica mais precisa que a antiga Taxa de Rejeição.'
    }
  ],
  'HubSpot SEO Master': [
    {
      id: 1,
      text: 'O que significa o termo "Topic Clusters" na metodologia da HubSpot?',
      options: [
        'Uma lista aleatória de palavras-chave',
        'Um grupo de conteúdos relacionados que giram em torno de uma página pilar (Pillar Page)',
        'Uma técnica para esconder links no rodapé',
        'O uso excessivo de tags H1'
      ],
      correctAnswer: 1,
      explanation: 'Topic Clusters ajudam a organizar a arquitetura do site, criando autoridade em torno de temas centrais através de links internos estratégicos.'
    },
    {
      id: 2,
      text: 'Qual é a importância do texto âncora (Anchor Text) para o SEO?',
      options: [
        'Não tem importância nenhuma',
        'Ajuda os motores de busca a entender o contexto da página de destino do link',
        'Serve apenas para mudar a cor do texto',
        'Deve ser sempre "clique aqui" para melhor performance'
      ],
      correctAnswer: 1,
      explanation: 'O texto âncora fornece pistas contextuais relevantes tanto para usuários quanto para robôs de busca sobre o conteúdo do link.'
    }
  ]
};

const certs = [
  {
    name: 'Google Ads Search',
    issuer: 'Google Digital Academy',
    date: '2024',
    icon: 'https://cdn.worldvectorlogo.com/logos/google-ads-2.svg'
  },
  {
    name: 'Google Analytics 4',
    issuer: 'Google Digital Academy',
    date: '2024',
    icon: 'https://cdn.worldvectorlogo.com/logos/google-analytics-4.svg'
  },
  {
    name: 'HubSpot SEO Master',
    issuer: 'HubSpot Academy',
    date: '2023',
    icon: 'https://cdn.worldvectorlogo.com/logos/hubspot.svg'
  }
];

const Certifications: React.FC = () => {
  const [activeQuiz, setActiveQuiz] = useState<string | null>(null);
  const whatsappUrl = "https://wa.me/5513991472036?text=Olá Fernando! Gostaria de agendar um diagnóstico gratuito para meu negócio.";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-4">Credibilidade</h2>
        <h3 className="text-4xl md:text-5xl font-bold text-slate-900">Certificações de <span className="text-blue-600">Elite.</span></h3>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {certs.map((cert, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm flex flex-col items-center text-center group hover:border-blue-200 hover:shadow-xl transition-all"
          >
            <div className="w-20 h-20 mb-6 flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-500">
              <img src={cert.icon} alt={cert.issuer} className="max-w-full max-h-full" />
            </div>
            
            <h4 className="text-xl font-bold text-slate-900 mb-2">{cert.name}</h4>
            <p className="text-slate-500 mb-6 font-medium">{cert.issuer}</p>
            
            <button
              onClick={() => setActiveQuiz(cert.name)}
              className="mb-8 px-5 py-2.5 bg-blue-50 text-blue-600 rounded-xl font-bold text-sm flex items-center hover:bg-blue-600 hover:text-white transition-all border border-blue-100"
            >
              <PlayCircle size={18} className="mr-2" />
              Fazer Simulado
            </button>
            
            <div className="mt-auto pt-6 border-t border-slate-100 w-full flex justify-between items-center text-xs text-slate-400 font-semibold uppercase tracking-widest">
              <span className="flex items-center">
                <Calendar size={14} className="mr-1.5" />
                {cert.date}
              </span>
              <span className="flex items-center text-blue-600 hover:underline cursor-pointer">
                Ver Certificado
                <ExternalLink size={14} className="ml-1.5" />
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {activeQuiz && (
          <CertificationQuiz 
            certName={activeQuiz}
            questions={quizData[activeQuiz as keyof typeof quizData]}
            onClose={() => setActiveQuiz(null)}
          />
        )}
      </AnimatePresence>

      <div className="mt-20 p-8 md:p-12 bg-blue-600 rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl shadow-blue-500/40">
        <div className="relative z-10 max-w-xl">
          <h4 className="text-3xl font-bold mb-4">Pronto para dominar o Google?</h4>
          <p className="text-blue-100 text-lg opacity-90">
            Minha metodologia comprovada de 20 anos está disponível para seu negócio hoje mesmo. Vamos escalar?
          </p>
        </div>
        <div className="relative z-10">
          <a 
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 bg-white text-blue-600 font-black rounded-2xl hover:bg-blue-50 transition-all shadow-xl shadow-blue-900/20 text-lg flex items-center"
          >
            Agendar Diagnóstico Grátis
            <ShieldCheck className="ml-3" size={24} />
          </a>
        </div>
        
        {/* Abstract Background Design */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/20 rounded-full -ml-16 -mb-16 blur-2xl" />
      </div>
    </div>
  );
};

export default Certifications;
