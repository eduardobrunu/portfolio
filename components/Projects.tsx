'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Github, Star } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'Empório Modelo',
    description: 'Site institucional completo para e-commerce de produtos gourmet com carrinho flutuante, integração WhatsApp, galeria de produtos e Google Maps. Design elegante e responsivo.',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=800&h=600&fit=crop',
    tags: ['HTML', 'CSS', 'JavaScript', 'WhatsApp API', 'Google Maps'],
    github: 'https://github.com/eduardobrunu/emporiomodelo',
    demo: 'https://eduardobrunu.github.io/emporiomodelo/',
    featured: true,
    inProgress: true,
  },
  {
    title: 'SmartPay - Sistema de Pagamentos',
    description: 'Plataforma completa de processamento de pagamentos para Fintechs com validação em tempo real, gestão de fraudes, dashboard analítico e integração multi-gateway. Desenvolvido com foco em segurança e performance.',
    image: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=800&h=600&fit=crop',
    tags: ['PHP', 'MySQL', 'TypeScript', 'REST API', 'JWT', 'Segurança'],
    github: 'https://github.com/eduardobrunu/smartpay',
    demo: null,
    featured: true,
    inProgress: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meus <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">Projetos</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Confira alguns dos projetos que desenvolvi com paixão e dedicação
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-purple-500/50 transition-all h-full flex flex-col">
                {/* Project Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    {project.featured && (
                      <span className="px-3 py-1 bg-purple-500/90 backdrop-blur-sm text-white rounded-full text-xs font-semibold flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        Destaque
                      </span>
                    )}
                    {project.inProgress && (
                      <span className="px-3 py-1 bg-green-500/90 backdrop-blur-sm text-white rounded-full text-xs font-semibold">
                        Em Desenvolvimento
                      </span>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm border border-purple-500/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-700 hover:bg-slate-600 rounded-lg text-white transition-colors font-medium"
                    >
                      <Github className="w-4 h-4" />
                      Código
                    </motion.a>
                    {project.demo && (
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 rounded-lg text-white transition-all font-medium shadow-lg shadow-purple-500/25"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

