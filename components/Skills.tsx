'use client';

import { motion } from 'framer-motion';
import { Code2, Database, Shield, Server, Wrench, Award } from 'lucide-react';

const skillCategories = [
  {
    title: 'Backend & APIs',
    icon: Code2,
    color: 'from-purple-500 to-violet-600',
    skills: [
      { name: 'PHP', level: 90, years: '2+' },
      { name: 'Node.js', level: 80, years: '1+' },
      { name: 'TypeScript', level: 85, years: '1+' },
      { name: 'JavaScript', level: 90, years: '2+' },
    ]
  },
  {
    title: 'Database & Storage',
    icon: Database,
    color: 'from-violet-500 to-indigo-600',
    skills: [
      { name: 'MySQL', level: 85, years: '2+' },
      { name: 'SQL', level: 85, years: '2+' },
      { name: 'Database Design', level: 80, years: '1+' },
    ]
  },
  {
    title: 'Frontend',
    icon: Code2,
    color: 'from-indigo-500 to-purple-600',
    skills: [
      { name: 'HTML5/CSS3', level: 90, years: '2+' },
      { name: 'Responsive Design', level: 85, years: '2+' },
      { name: 'UI/UX', level: 75, years: '1+' },
    ]
  },
  {
    title: 'Segurança & Infraestrutura',
    icon: Shield,
    color: 'from-purple-600 to-violet-700',
    skills: [
      { name: 'Segurança da Informação', level: 75, years: '1+' },
      { name: 'Virtualização', level: 70, years: '1+' },
      { name: 'Windows Server', level: 75, years: '1+' },
    ]
  }
];

const tools = [
  { name: 'Git & GitHub', category: 'Version Control' },
  { name: 'VS Code', category: 'IDE' },
  { name: 'Composer', category: 'Package Manager' },
  { name: 'npm/yarn', category: 'Package Manager' },
  { name: 'MySQL Workbench', category: 'Database' },
  { name: 'Postman', category: 'API Testing' },
  { name: 'Linux', category: 'OS' },
  { name: 'Docker', category: 'DevOps' },
];

const highlights = [
  {
    icon: Award,
    title: 'Foco em Fintechs',
    description: 'Experiência em desenvolvimento de soluções financeiras seguras e escaláveis'
  },
  {
    icon: Server,
    title: 'Full Stack',
    description: 'Domínio completo do ciclo de desenvolvimento web'
  },
  {
    icon: Shield,
    title: 'Segurança em Primeiro Lugar',
    description: 'Implementação de melhores práticas de segurança em todas as aplicações'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-slate-800">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stack <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 text-transparent bg-clip-text">Tecnológico</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Especializado em desenvolvimento para Fintechs com foco em performance e segurança
          </p>
        </motion.div>

        {/* Highlights */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {highlights.map((highlight, index) => (
            <motion.div
              key={highlight.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-purple-900/30 to-violet-900/30 rounded-xl p-6 border border-purple-500/20 text-center"
            >
              <highlight.icon className="w-10 h-10 text-purple-400 mx-auto mb-3" />
              <h3 className="text-white font-bold text-lg mb-2">{highlight.title}</h3>
              <p className="text-gray-400 text-sm">{highlight.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="bg-slate-700/30 backdrop-blur-sm rounded-xl p-6 border border-slate-600 hover:border-purple-500/50 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-purple-400 text-sm font-semibold">{skill.years} anos</span>
                        <span className="text-gray-400 text-sm">{skill.level}%</span>
                      </div>
                    </div>
                    <div className="h-2 bg-slate-600/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center flex items-center justify-center gap-2">
            <Wrench className="w-7 h-7 text-purple-400" />
            Ferramentas & Plataformas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                whileHover={{ scale: 1.05, y: -3 }}
                className="bg-slate-700/50 backdrop-blur-sm rounded-lg p-4 border border-slate-600 hover:border-purple-500/50 transition-all group"
              >
                <div className="text-center">
                  <p className="text-white font-semibold mb-1 group-hover:text-purple-400 transition-colors">{tool.name}</p>
                  <p className="text-gray-400 text-xs">{tool.category}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
