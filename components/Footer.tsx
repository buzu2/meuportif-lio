
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold tracking-tighter text-white">
              NANDO<span className="text-blue-500">SILVA</span>
            </span>
          </div>

          <div className="text-slate-500 text-sm font-medium">
            © {currentYear} NANDO SILVA. Todos os direitos reservados.
          </div>

          <div className="flex space-x-6 text-slate-400 text-sm font-semibold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
            <a href="#" className="hover:text-white transition-colors">Termos</a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-800/50 text-center">
          <p className="text-slate-600 text-[10px] font-bold uppercase tracking-[0.2em]">
            Estrategista Digital & Expert em SEO de Alta Performance
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
