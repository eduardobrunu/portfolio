'use client';

import { motion } from 'framer-motion';

const skills = [
  { name: 'PHP', level: 90 },
  { name: 'TypeScript', level: 85 },
  { name: 'JavaScript', level: 90 },
  { name: 'Node.js', level: 80 },
  { name: 'MySQL', level: 85 },
  { name: 'HTML/CSS', level: 90 },
  { name: 'Segurança da Informação', level: 75 },
  { name: 'Virtualização', level: 70 },
];

const tools = [
  'Git & GitHub', 'VS Code', 'Composer', 'npm/yarn',
  'MySQL Workbench', 'Postman', 'Linux', 'Windows Server'
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Minhas <span className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text">Habilidades</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tecnologias e ferramentas que domino
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Habilidades Técnicas</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-purple-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-purple-500 to-pink-600 rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Ferramentas & Plataformas</h3>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-slate-700/50 backdrop-blur-sm rounded-lg p-4 text-center border border-slate-600 hover:border-purple-500/50 transition-all cursor-pointer"
                >
                  <span className="text-white font-medium">{tool}</span>
                </motion.div>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold text-white mb-4">Áreas de Conhecimento</h3>
              <div className="space-y-3">
                {[
                  'Desenvolvimento Web',
                  'Segurança da Informação',
                  'Gestão de Infraestrutura TI',
                ].map((cert, index) => (
                  <motion.div
                    key={cert}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center gap-3 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg p-3 border border-purple-500/20"
                  >
                    <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    <span className="text-white">{cert}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
