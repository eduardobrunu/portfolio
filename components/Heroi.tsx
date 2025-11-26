'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Instagram } from 'lucide-react'; // mantido para possíveis usos futuros
import LinksSociais from './LinksSociais';
import Typewriter from 'typewriter-effect';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-0">
      {/* Animated Background with enhanced gradients */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <motion.div
          className="absolute inset-0"
          animate={{
            background: [
              'radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.4) 0%, transparent 50%)',
              'radial-gradient(circle at 80% 80%, rgba(236, 72, 153, 0.4) 0%, transparent 50%)',
              'radial-gradient(circle at 50% 20%, rgba(168, 85, 247, 0.4) 0%, transparent 50%)',
              'radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.4) 0%, transparent 50%)',
            ],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        {/* Glow effects */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center">
          {/* Animated Avatar */}
          <motion.div
            initial={{ scale: 0, rotate: -180, opacity: 0 }}
            animate={{ scale: 1, rotate: 0, opacity: 1 }}
            transition={{ 
              type: 'spring', 
              duration: 1.5,
              bounce: 0.5
            }}
            whileHover={{ 
              scale: 1.1,
              rotate: 5,
              transition: { duration: 0.3 }
            }}
            className="mb-8 cursor-pointer"
          >
            <div className="relative">
              <motion.div
                className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-violet-500 blur-xl opacity-75"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <div className="relative w-32 h-32 rounded-full bg-gradient-to-r from-purple-400 to-violet-500 p-1">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img src="/DU.jpg" alt="Eduardo Bruno" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Name with Typing Animation */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-6xl md:text-8xl font-black mb-6 tracking-tight"
          >
            <motion.span
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, type: 'spring' }}
              className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 text-transparent bg-clip-text"
            >
              Eduardo{' '}
            </motion.span>
            <motion.span 
              className="bg-gradient-to-r from-indigo-400 via-purple-400 to-violet-500 text-transparent bg-clip-text"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, type: 'spring' }}
            >
              Bruno
            </motion.span>
          </motion.h1>

          {/* Subtitle with Typewriter Effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl font-semibold text-violet-300 mb-8 min-h-[3rem]"
          >
            <Typewriter
              options={{
                strings: [
                  'Desenvolvedor Júnior',
                  'Especialista em PHP',
                  'TypeScript Developer',
                  'Node.js Engineer',
                  'Fintech Developer'
                ],
                autoStart: true,
                loop: true,
                delay: 80,
                deleteSpeed: 50,
              }}
            />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-gray-300 max-w-2xl mb-12 text-lg md:text-xl leading-relaxed font-medium"
          >
            Desenvolvedor apaixonado por criar soluções tecnológicas inovadoras para o setor de Fintechs.
            Especializado em PHP, MySQL, TypeScript e JavaScript, com foco em segurança e eficiência.
          </motion.p>

          {/* Social Links (Reutilizável) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mb-12"
          >
            <LinksSociais variant="circle" animate />
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 30px rgba(139, 92, 246, 0.6)',
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all text-center relative overflow-hidden group"
            >
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-violet-600 to-purple-500"
                initial={{ x: '100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Ver Projetos</span>
            </motion.a>
            <motion.a
              href="https://wa.me/5518997917566?text=Olá%20Eduardo!%20Vi%20seu%20portfólio%20e%20gostaria%20de%20conversar%20sobre%20uma%20oportunidade."
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ 
                scale: 1.05,
                boxShadow: '0 0 30px rgba(139, 92, 246, 0.4)',
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-purple-400 rounded-full text-purple-300 font-semibold hover:bg-purple-400/10 transition-all text-center relative overflow-hidden group"
            >
              <motion.span
                className="absolute inset-0 bg-purple-400/20"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10">Entre em Contato</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
