
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Instagram, Linkedin, MessageCircle, Send, CheckCircle2, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Form States
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    empresa: '',
    servico: 'SEO Estratégico',
    investimento: 'R$ 2.000 a R$ 5.000',
    mensagem: ''
  });

  const whatsappBaseUrl = "https://wa.me/5513991472036";
  const defaultWhatsappUrl = `${whatsappBaseUrl}?text=${encodeURIComponent("Olá Fernando! Vi seu portfólio e gostaria de falar sobre um projeto.")}`;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Formata a mensagem para o WhatsApp
    const message = `*Nova Solicitação de Orçamento*
------------------------------
*Nome:* ${formData.nome}
*E-mail:* ${formData.email}
*Empresa/Site:* ${formData.empresa || 'Não informado'}
*Serviço:* ${formData.servico}
*Investimento:* ${formData.investimento}
*Sobre o Projeto:* ${formData.mensagem || 'Sem descrição'}
------------------------------`;

    const fullWhatsappUrl = `${whatsappBaseUrl}?text=${encodeURIComponent(message)}`;

    // Simulação de processamento antes de abrir o WhatsApp
    setTimeout(() => {
      window.open(fullWhatsappUrl, '_blank');
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-20">
        {/* Lado Esquerdo: Info de Contato */}
        <div className="space-y-10">
          <div>
            <span className="text-blue-400 font-bold uppercase tracking-widest text-sm mb-4 block">Contato</span>
            <h2 className="text-5xl font-bold text-white mb-6 leading-tight">Vamos construir algo <span className="text-blue-400">lendário.</span></h2>
            <p className="text-slate-400 text-lg leading-relaxed max-w-md">
              Não importa o tamanho do seu projeto, o crescimento começa com uma conversa estratégica. Preencha o formulário e fale comigo agora.
            </p>
          </div>

          <div className="space-y-6">
            <a href="mailto:contato@fernandocarneiro.com.br" className="flex items-center space-x-4 group cursor-pointer">
              <div className="p-4 bg-slate-800 rounded-2xl text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">E-mail</p>
                <p className="text-white font-medium text-lg">contato@fernandocarneiro.com.br</p>
              </div>
            </a>

            <a href={defaultWhatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-4 group cursor-pointer">
              <div className="p-4 bg-slate-800 rounded-2xl text-green-400 group-hover:bg-green-600 group-hover:text-white transition-all">
                <MessageCircle size={24} />
              </div>
              <div>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">WhatsApp</p>
                <p className="text-white font-medium text-lg">+55 (13) 99147-2036</p>
              </div>
            </a>

            <div className="flex items-center space-x-4 group">
              <div className="p-4 bg-slate-800 rounded-2xl text-slate-400">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Localização</p>
                <p className="text-white font-medium text-lg">São Paulo, SP</p>
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <a href="#" className="p-4 bg-slate-800 rounded-full text-white hover:bg-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="p-4 bg-slate-800 rounded-full text-white hover:bg-pink-600 transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Lado Direito: Formulário de Orçamento */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-3xl font-bold text-slate-900 mb-2">Solicitar Orçamento</h3>
                  <p className="text-slate-500">Ao clicar em enviar, os dados serão formatados e enviados diretamente para o meu WhatsApp.</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Seu Nome</label>
                      <input 
                        required
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        type="text" 
                        placeholder="Ex: João Silva"
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-slate-900 placeholder:text-slate-300"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">E-mail Profissional</label>
                      <input 
                        required
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        type="email" 
                        placeholder="contato@empresa.com"
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-slate-900 placeholder:text-slate-300"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Site ou Nome da Empresa</label>
                    <input 
                      name="empresa"
                      value={formData.empresa}
                      onChange={handleChange}
                      type="text" 
                      placeholder="www.suaempresa.com.br"
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-slate-900 placeholder:text-slate-300"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Serviço de Interesse</label>
                      <select 
                        name="servico"
                        value={formData.servico}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-slate-900 appearance-none"
                      >
                        <option>SEO Estratégico</option>
                        <option>Tráfego Pago (Google/Meta Ads)</option>
                        <option>Criação de Site de Alta Performance</option>
                        <option>Consultoria de Marketing 360º</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Investimento Mensal</label>
                      <select 
                        name="investimento"
                        value={formData.investimento}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-slate-900 appearance-none"
                      >
                        <option>Até R$ 2.000</option>
                        <option>R$ 2.000 a R$ 5.000</option>
                        <option>R$ 5.000 a R$ 15.000</option>
                        <option>Acima de R$ 15.000</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-400 uppercase tracking-wider ml-1">Sobre o Projeto</label>
                    <textarea 
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Conte-nos brevemente seus objetivos principais..."
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all text-slate-900 placeholder:text-slate-300 resize-none"
                    ></textarea>
                  </div>

                  <button 
                    disabled={isSubmitting}
                    type="submit"
                    className="w-full py-5 bg-blue-600 text-white font-black rounded-xl hover:bg-blue-700 disabled:bg-blue-400 transition-all shadow-xl shadow-blue-500/20 text-lg flex items-center justify-center group"
                  >
                    {isSubmitting ? (
                      <Loader2 className="animate-spin mr-2" size={24} />
                    ) : (
                      <>
                        Enviar para o WhatsApp
                        <MessageCircle className="ml-3 group-hover:scale-110 transition-transform" size={20} />
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-20 text-center"
              >
                <div className="w-24 h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-8">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">Redirecionando...</h3>
                <p className="text-slate-500 text-lg max-w-xs mx-auto mb-10">
                  Seu orçamento foi formatado! Se a conversa não abriu automaticamente, clique no botão acima para concluir.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="text-blue-600 font-bold hover:underline"
                >
                  Voltar ao formulário
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Decoração sutil no fundo do card */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-50 pointer-events-none" />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
