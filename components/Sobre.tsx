'use client';

import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiencias = [
  {
    empresa: 'Microton',
    cargo: 'Desenvolvedor Júnior',
    periodo: 'Outubro 2024 - Atual',
    localizacao: 'Blumenau, SC',
    descricao: 'Desenvolvimento de soluções de mobilidade corporativa para força de vendas, logística e gestão em campo. Evolução de sistemas premiados (MTVendor\'s, MTWms, MTColeta, MTApontaz) com PHP e TypeScript, criando APIs, automações e integrações que impactam operações comerciais diárias.',
    tecnologias: ['PHP', 'TypeScript', 'JavaScript', 'Computação Móvel', 'APIs'],
    atual: true,
  },
  {
    empresa: 'CronosBank Fintech',
    cargo: 'Desenvolvedor Júnior',
    periodo: 'Junho 2023 - Junho 2024',
    localizacao: 'Presidente Prudente, SP',
    descricao: 'Desenvolvimento em plataforma Banking as a Service (BaaS) com subadquirência white label certificada PCI DSS. Atuação em soluções de pagamentos, conta digital, PIX, cartões pré-pagos e integrações bancárias. Experiência hands-on com segurança em ambientes financeiros críticos.',
    tecnologias: ['PHP', 'JavaScript', 'BaaS', 'PCI DSS', 'Integração Bancária', 'Fintech'],
    atual: false,
  },
  {
    empresa: 'Cabonnet',
    cargo: 'Suporte Técnico',
    periodo: '2022 - 2023',
    localizacao: 'Presidente Prudente, SP',
    descricao: 'Suporte em provedor de internet com 25 anos no mercado. Infraestrutura de fibra ótica, virtualização de servidores e gestão de incidentes. Primeira experiência profissional que construiu base sólida em troubleshooting, redes e atendimento ao cliente.',
    tecnologias: ['Fibra Ótica', 'Virtualização', 'Suporte Técnico', 'Redes'],
    atual: false,
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
            17 anos explorando tecnologia. Da curiosidade ao código que impacta milhares de usuários. Desenvolvedor focado em criar soluções de mobilidade corporativa eficientes e escaláveis.
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
              Na Microton (40+ anos no mercado), desenvolvo soluções de mobilidade corporativa que transformam operações de vendas, logística e gestão em campo. MTVendor's, MTWms, MTColeta, MTApontaz - sistemas premiados que impactam milhares de usuários.
            </p>
            <p className="text-gray-300 leading-relaxed mb-6 text-left">
              Trabalho com PHP e TypeScript criando APIs resilientes, automações inteligentes e integrações críticas que sustentam operações comerciais diárias.
            </p>
            <ul className="text-sm text-gray-300 space-y-2 text-left list-none">
              <li>• Desenvolvimento de funcionalidades para força de vendas mobile e gestão de estoque.</li>
              <li>• Integrações com sistemas legados e otimização de performance em ambientes de produção.</li>
              <li>• Manutenção evolutiva de plataformas com foco em estabilidade e escalabilidade.</li>
              <li>• Colaboração com equipe multidisciplinar para entrega contínua de valor.</li>
            </ul>
          </div>
        </motion.div>

        {/* Experiências */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Experiência Profissional</h3>
          <div className="space-y-6">
            {experiencias.map((experiencia, index) => (
              <motion.div
                key={experiencia.empresa}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-slate-700/50 backdrop-blur-sm rounded-xl p-6 border border-slate-600 hover:border-purple-500/50 transition-all"
              >
                <div className="flex flex-col items-start mb-4">
                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="text-xl font-bold text-white">{experiencia.cargo}</h4>
                    {experiencia.atual && (
                      <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full border border-green-500/30">
                        Atual
                      </span>
                    )}
                  </div>
                  <p className="text-purple-400 font-semibold flex items-center gap-2">
                    <Briefcase className="w-4 h-4" /> {experiencia.empresa}
                  </p>
                  <div className="text-gray-400 text-sm flex flex-col md:flex-row md:gap-6 mt-2">
                    <p className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> {experiencia.periodo}
                    </p>
                    <p className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> {experiencia.localizacao}
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed mb-4 text-left">{experiencia.descricao}</p>

                <div className="flex flex-wrap gap-2">
                  {experiencia.tecnologias.map((tecnologia) => (
                    <span
                      key={tecnologia}
                      className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm border border-purple-500/20"
                    >
                      {tecnologia}
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
            { valor: '450+', rotulo: 'Seguidores' },
            { valor: '434+', rotulo: 'Conexões' },
            { valor: '2+', rotulo: 'Anos de Experiência' },
            { valor: '3', rotulo: 'Empresas' },
          ].map((estatistica, index) => (
            <motion.div
              key={estatistica.rotulo}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="bg-gradient-to-br from-purple-900/30 to-violet-900/30 rounded-xl p-6 text-center border border-purple-500/20"
            >
              <p className="text-3xl font-bold text-white mb-2">{estatistica.valor}</p>
              <p className="text-gray-400">{estatistica.rotulo}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
