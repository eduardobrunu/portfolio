'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(120, 40, 200, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 50%, rgba(120, 40, 200, 0.3) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(120, 40, 200, 0.3) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Animated Avatar */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', duration: 1 }}
            className="mb-8"
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-r from-purple-400 to-pink-600 p-1">
              <div className="w-full h-full rounded-full overflow-hidden">
                <img src="/DU.jpg" alt="Eduardo Bruno" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>

          {/* Name with Typing Animation */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-4"
          >
            Eduardo <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">Bruno</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-300 mb-8"
          >
            Desenvolvedor Júnior | PHP | TypeScript | Node.js
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-gray-400 max-w-2xl mb-12 text-lg"
          >
            Desenvolvedor apaixonado por criar soluções tecnológicas inovadoras para o setor de Fintechs.
            Especializado em PHP, MySQL, TypeScript e JavaScript, com foco em segurança e eficiência.
          </motion.p>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 mb-12"
          >
            {[
              { icon: Github, href: 'https://github.com/eduardobruno', label: 'GitHub' },
              { icon: Linkedin, href: 'https://linkedin.com/in/eduardobruno', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:eduardobrunoeb@outlook.com', label: 'Email' },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-purple-500/20 transition-colors"
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all text-center"
            >
              Ver Projetos
            </motion.a>
            <motion.a
              href="https://wa.me/5518997917566?text=Olá%20Eduardo!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-purple-400 rounded-full text-purple-400 font-semibold hover:bg-purple-400/10 transition-all text-center"
            >
              Entre em Contato
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
