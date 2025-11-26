'use client';

import { motion } from 'framer-motion';
import { Code2, Database, Shield, Server, Wrench, Award } from 'lucide-react';

const categoriasHabilidades = [
  {
    titulo: 'Backend & APIs',
    icone: Code2,
    cor: 'from-purple-500 to-violet-600',
    habilidades: [
      { nome: 'PHP', nivel: 90, anos: '2+' },
      { nome: 'TypeScript', nivel: 85, anos: '1+' },
      { nome: 'JavaScript', nivel: 90, anos: '2+' },
    ]
  },
  {
    titulo: 'Database & Storage',
    icone: Database,
    cor: 'from-violet-500 to-indigo-600',
    habilidades: [
      { nome: 'MySQL', nivel: 85, anos: '2+' },
      { nome: 'SQL', nivel: 85, anos: '2+' },
      { nome: 'Database Design', nivel: 80, anos: '1+' },
    ]
  },
  {
    titulo: 'Frontend',
    icone: Code2,
    cor: 'from-indigo-500 to-purple-600',
    habilidades: [
      { nome: 'HTML5/CSS3', nivel: 90, anos: '2+' },
      { nome: 'Responsive Design', nivel: 85, anos: '2+' },
      { nome: 'UI/UX', nivel: 75, anos: '1+' },
    ]
  },
  {
    titulo: 'Segurança & Infraestrutura',
    icone: Shield,
    cor: 'from-purple-600 to-violet-700',
    habilidades: [
      { nome: 'Segurança da Informação', nivel: 75, anos: '1+' },
      { nome: 'Virtualização', nivel: 70, anos: '1+' },
      { nome: 'Windows Server', nivel: 75, anos: '1+' },
    ]
  }
];

const ferramentas = [
  { nome: 'Git & GitHub', categoria: 'Version Control' },
  { nome: 'VS Code', categoria: 'IDE' },
  { nome: 'Composer', categoria: 'Package Manager' },
  { nome: 'npm/yarn', categoria: 'Package Manager' },
  { nome: 'MySQL Workbench', categoria: 'Database' },
  { nome: 'Postman', categoria: 'API Testing' },
  { nome: 'Linux', categoria: 'OS' },
  { nome: 'Docker', categoria: 'DevOps' },
];

const destaques = [
  {
    icone: Award,
    titulo: 'Foco em Fintechs',
    descricao: 'Experiência em desenvolvimento de soluções financeiras seguras e escaláveis'
  },
  {
    icone: Server,
    titulo: 'Full Stack',
    descricao: 'Domínio completo do ciclo de desenvolvimento web'
  },
  {
    icone: Shield,
    titulo: 'Segurança em Primeiro Lugar',
    descricao: 'Implementação de melhores práticas de segurança em todas as aplicações'
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
          {destaques.map((destaque, index) => (
            <motion.div
              key={destaque.titulo}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-purple-900/30 to-violet-900/30 rounded-xl p-6 border border-purple-500/20 text-center"
            >
              <destaque.icone className="w-10 h-10 text-purple-400 mx-auto mb-3" />
              <h3 className="text-white font-bold text-lg mb-2">{destaque.titulo}</h3>
              <p className="text-gray-400 text-sm">{destaque.descricao}</p>
            </motion.div>
          ))}
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {categoriasHabilidades.map((categoria, indiceCategorias) => (
            <motion.div
              key={categoria.titulo}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: indiceCategorias * 0.1 }}
              className="bg-slate-700/30 backdrop-blur-sm rounded-xl p-6 border border-slate-600 hover:border-purple-500/50 transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${categoria.cor} flex items-center justify-center`}>
                  <categoria.icone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{categoria.titulo}</h3>
              </div>
              
              <div className="space-y-4">
                {categoria.habilidades.map((habilidade, indiceHabilidade) => (
                  <motion.div
                    key={habilidade.nome}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: indiceHabilidade * 0.05 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{habilidade.nome}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-purple-400 text-sm font-semibold">{habilidade.anos} anos</span>
                        <span className="text-gray-400 text-sm">{habilidade.nivel}%</span>
                      </div>
                    </div>
                    <div className="h-2 bg-slate-600/50 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${habilidade.nivel}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: indiceHabilidade * 0.1 }}
                        className={`h-full bg-gradient-to-r ${categoria.cor} rounded-full`}
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
            {ferramentas.map((ferramenta, index) => (
              <motion.div
                key={ferramenta.nome}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.03 }}
                whileHover={{ scale: 1.05, y: -3 }}
                className="bg-slate-700/50 backdrop-blur-sm rounded-lg p-4 border border-slate-600 hover:border-purple-500/50 transition-all group"
              >
                <div className="text-center">
                  <p className="text-white font-semibold mb-1 group-hover:text-purple-400 transition-colors">{ferramenta.nome}</p>
                  <p className="text-gray-400 text-xs">{ferramenta.categoria}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
