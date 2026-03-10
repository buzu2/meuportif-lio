
import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onNavigate?: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappUrl = "https://wa.me/5513991472036?text=Olá! Vi seu site e gostaria de falar sobre um projeto.";

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Sobre', href: '#sobre', id: 'sobre' },
    { name: 'Serviços', href: '#servicos', id: 'servicos' },
    { name: 'Casos', href: '#sucesso', id: 'sucesso' },
    { name: 'Projetos', href: '#projetos', id: 'projetos' },
    { name: 'Certificações', href: '#certificacoes', id: 'certificacoes' },
    { name: 'Contato', href: '#contato', id: 'contato' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (onNavigate) {
      e.preventDefault();
      onNavigate(id);
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-slate-200/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer" 
            onClick={() => onNavigate ? onNavigate('home') : window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <span className="text-2xl font-bold tracking-tighter text-blue-900">
              NANDO<span className="text-blue-600">SILVA</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.id)}
                className={`text-sm font-bold transition-colors duration-300 hover:text-blue-600 ${
                  activeSection === link.id ? 'text-blue-600' : 'text-slate-600'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-blue-600 text-white text-sm font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/30 group"
            >
              Consultoria Gratuita
              <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-slate-600 hover:text-blue-600 transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 p-4 space-y-2 animate-in slide-in-from-top duration-300 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.id)}
              className={`block px-4 py-3 rounded-lg text-base font-bold transition-colors ${
                activeSection === link.id ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center w-full px-4 py-3 rounded-lg bg-blue-600 text-white font-bold"
            >
              Fale Comigo
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
