'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Branding */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text mb-4">
              Eduardo Bruno
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Desenvolvedor Júnior especializado em PHP, TypeScript e JavaScript.
              Criando soluções inovadoras para o setor de Fintechs.
            </p>
          </motion.div>

          {/* Links Rápidos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:pl-8"
          >
            <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              {[
                { name: 'Sobre', href: '#about' },
                { name: 'Habilidades', href: '#skills' },
                { name: 'Projetos', href: '#projects' },
                { name: 'Contato', href: '#contact' },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-purple-400 transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Redes Sociais */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">Conecte-se</h4>
            <div className="flex gap-4">
              {[
                { icon: Github, href: 'https://github.com/eduardobrunu/', label: 'GitHub' },
                { icon: Linkedin, href: 'https://linkedin.com/in/eduardobrunocruz/', label: 'LinkedIn' },
                { icon: Instagram, href: 'https://www.instagram.com/edubrunu/', label: 'Instagram' },
                { icon: Mail, href: 'mailto:eduardobrunoeb@outlook.com', label: 'Email' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-purple-500/20 flex items-center justify-center text-gray-400 hover:text-purple-400 transition-colors border border-slate-700 hover:border-purple-500/50"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
            <p className="text-gray-400 text-sm mt-4">
              eduardobrunoeb@outlook.com
              <br />
              Presidente Prudente, SP - Brasil
            </p>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="pt-8 border-t border-slate-800 text-center"
        >
          <p className="text-gray-500 text-sm">
            © {currentYear} Eduardo Bruno. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

