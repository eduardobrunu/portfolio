'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, ArrowUp, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 border-t border-purple-500/20">
      {/* Botão de voltar ao topo */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-violet-600 flex items-center justify-center text-white shadow-lg shadow-purple-500/50 hover:shadow-purple-500/80 transition-all"
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>

      <div className="container mx-auto px-6 py-10 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-3 tracking-tight text-white">
              <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 text-transparent bg-clip-text">Eduardo Bruno</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4 max-w-md">
              Desenvolvedor Júnior focado em plataforma logística e financeira (WMS, estoques, pedidos, inventário) com PHP, TypeScript e automações resilientes.
            </p>
            
            {/* Contact Info Compact */}
            <div className="space-y-2 text-sm">
              <a href="mailto:eduardobrunoeb@outlook.com" className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors group">
                <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" />
                eduardobrunoeb@outlook.com
              </a>
              <a href="https://wa.me/5518997917566" className="flex items-center gap-2 text-gray-400 hover:text-purple-400 transition-colors group">
                <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" />
                +55 (18) 99791-7566
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                Presidente Prudente, SP - Brasil
              </div>
            </div>
          </motion.div>

          {/* Links Rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold text-xs mb-3 uppercase tracking-wider">Navegação</h4>
            <ul className="space-y-1.5 text-sm">
              {[
                { name: 'Sobre', href: '#about' },
                { name: 'Habilidades', href: '#skills' },
                { name: 'Projetos', href: '#projects' },
                { name: 'Contato', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-purple-400 group-hover:w-4 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Bloco redes sociais removido conforme solicitação */}
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800/70 my-6"></div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <p className="text-gray-500 text-[11px] mb-1">Desenvolvido por Eduardo Bruno</p>
          <p className="text-gray-600 text-[10px]">© {currentYear} Eduardo Bruno. Todos os direitos reservados.</p>
        </motion.div>
      </div>
    </footer>
  );
}

