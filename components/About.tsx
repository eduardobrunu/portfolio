'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    company: 'Microton',
    role: 'Desenvolvedor Júnior',
    period: 'Outubro 2024 - Atual',
    location: 'Presidente Prudente, SP',
    description: 'Desenvolvimento e evolução do WMS da Microton com foco em Fintechs e operações logísticas: estoque, pedidos, inventário e pallets. Entregas com PHP, MySQL, TypeScript e JavaScript para garantir escalabilidade e segurança.',
    technologies: ['PHP', 'MySQL', 'TypeScript', 'JavaScript', 'Node.js', 'WMS'],
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
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Sobre <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 text-transparent bg-clip-text">Mim</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Trajetória focada em transformar desafios regulatórios e operacionais das Fintechs em produtos digitais confiáveis e escaláveis.
          </p>
        </motion.div>

        {/* Perfil */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-8 border border-slate-600">
            <h3 className="text-2xl font-bold text-white mb-4 text-center">Desenvolvedor Júnior</h3>
            <p className="text-gray-300 leading-relaxed mb-4 text-left">
              Na Microton, traduzo requisitos da cadeia logística e financeira em APIs, rotinas de inventário e dashboards que suportam controle de estoque, pedidos e produtos com precisão operacional.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6 text-left">
              Planejo entregas com PHP, MySQL e TypeScript, implementando automações que aumentam a resiliência do WMS e diminuem o tempo de resposta das solicitações em produção.
            </p>
            <ul className="text-sm text-gray-300 space-y-2 text-left list-none">
              <li>• Integrações bancárias e logísticas com foco em segurança e auditoria.</li>
              <li>• Testes automatizados, deploys contínuos e monitoramento proativo em ambientes críticos.</li>
              <li>• Conexão entre suporte técnico, produto e engenharia para resolver incidentes sem interrupção.</li>
              <li>• Mentoria e documentação para manutenção evolutiva das plataformas.</li>
            </ul>
          </div>
        </motion.div>

        {/* Experiências */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Experiência Profissional</h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600 hover:border-purple-500/50 transition-all"
              >
                <div className="flex flex-col items-start mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-xl font-bold text-white">{exp.role}</h4>
                    {exp.current && (
                      <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
                        Atual
                      </span>
                    )}
                  </div>
                  <p className="text-purple-400 font-semibold flex items-center gap-2">
                    <Briefcase className="w-4 h-4" /> {exp.company}
                  </p>
                  <div className="text-gray-400 text-sm flex flex-col md:flex-row md:gap-6 mt-2">
                    <p className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> {exp.period}
                    </p>
                    <p className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> {exp.location}
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-4 text-left">{exp.description}</p>

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
          viewport={{ once: false, amount: 0.3 }}
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
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-gradient-to-br from-purple-900/30 to-violet-900/30 rounded-xl p-6 text-center border border-purple-500/20"
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
