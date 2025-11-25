'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    company: 'Microton',
    role: 'Desenvolvedor Júnior',
    period: 'Outubro 2024 - Atual',
    location: 'Presidente Prudente, SP',
    description: 'Desenvolvimento de soluções tecnológicas para o setor de Fintechs utilizando PHP, MySQL, TypeScript e JavaScript. Criação de soluções robustas e inovadoras que atendem às necessidades do mercado financeiro.',
    technologies: ['PHP', 'MySQL', 'TypeScript', 'JavaScript', 'Node.js'],
    current: true,
  },
  {
    company: 'Cronos Soluções para Fintechs',
    role: 'Desenvolvedor Júnior',
    period: 'Junho 2023 - Junho 2024',
    location: 'Presidente Prudente, SP',
    description: 'Desenvolvimento com PHP, HTML/CSS e JavaScript. Aprimoramento de conhecimentos em segurança da informação e gestão de infraestrutura de TI, proporcionando soluções eficientes e seguras para o ambiente financeiro.',
    technologies: ['PHP', 'HTML/CSS', 'JavaScript', 'Segurança da Informação', 'Infraestrutura TI'],
    current: false,
  },
  {
    company: 'Cabonnet',
    role: 'Suporte Técnico',
    period: '2022 - 2023',
    location: 'Presidente Prudente, SP',
    description: 'Desenvolvimento de competências em virtualização e gestão de projetos de software. Experiência que permitiu construir uma base sólida para o crescimento na área de tecnologia.',
    technologies: ['Virtualização', 'Gestão de Projetos', 'Suporte Técnico'],
    current: false,
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sobre <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">Mim</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Conheça minha trajetória e experiências profissionais
          </p>
        </motion.div>

        {/* Perfil */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-8 border border-slate-600">
            <h3 className="text-2xl font-bold text-white mb-4">Desenvolvedor Júnior</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Sou um <span className="text-purple-400 font-semibold">Desenvolvedor Júnior</span> com experiência no desenvolvimento de soluções tecnológicas, 
              com foco especial no setor de <span className="text-purple-400 font-semibold">Fintechs</span>.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              Atualmente trabalho na <span className="text-purple-400 font-semibold">Microton</span>, onde utilizo minhas habilidades em 
              PHP, MySQL, TypeScript e JavaScript para criar soluções robustas e inovadoras que atendem às necessidades do mercado financeiro.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Minha jornada na tecnologia me permitiu desenvolver uma visão completa do ciclo de desenvolvimento, desde o suporte técnico 
              até a criação de aplicações complexas, sempre com foco em <span className="text-purple-400 font-semibold">segurança</span>, 
              <span className="text-purple-400 font-semibold"> eficiência</span> e <span className="text-purple-400 font-semibold">inovação</span>.
            </p>
          </div>
        </motion.div>

        {/* Experiências */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">Experiência Profissional</h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600 hover:border-purple-500/50 transition-all"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1 flex items-center gap-2">
                      {exp.role}
                      {exp.current && (
                        <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
                          Atual
                        </span>
                      )}
                    </h4>
                    <p className="text-purple-400 font-semibold flex items-center gap-2">
                      <Briefcase className="w-4 h-4" />
                      {exp.company}
                    </p>
                  </div>
                  <div className="text-gray-400 text-sm mt-2 md:mt-0 md:text-right">
                    <p className="flex items-center gap-2 md:justify-end">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </p>
                    <p className="flex items-center gap-2 md:justify-end mt-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 mb-4">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm border border-purple-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Estatísticas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-16"
        >
          {[
            { value: '450+', label: 'Seguidores' },
            { value: '434+', label: 'Conexões' },
            { value: '2+', label: 'Anos de Experiência' },
            { value: '3', label: 'Empresas' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-xl p-6 text-center border border-purple-500/20"
            >
              <p className="text-3xl font-bold text-white mb-2">{stat.value}</p>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
