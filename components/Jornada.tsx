'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { 
  Rocket, 
  Code2, 
  ChevronDown, 
  Zap, 
  Briefcase, 
  Users,
  GraduationCap,
  Gamepad2,
  Palette,
  Server,
  Sparkles
} from 'lucide-react';
import { useState } from 'react';

const etapasJornada = [
  {
    icone: Gamepad2,
    titulo: 'O Início',
    periodo: '2008',
    descricao: 'Tudo começou com um computador e muita curiosidade. Explorar cada pixel, cada programa, cada possibilidade. Games online me ensinaram trabalho em equipe. A internet me mostrou que não existem limites.',
    cor: 'from-amber-500 to-orange-500',
    borderCor: 'border-amber-500/30',
  },
  {
    icone: Palette,
    titulo: 'Criando & Aprendendo',
    periodo: '2008-2017',
    descricao: 'Rádio online, web design, cada projeto era uma aventura. Mesmo quando a conexão era desafio, a vontade de criar era maior. Aprendi que obstáculos não param quem realmente quer.',
    cor: 'from-blue-500 to-cyan-500',
    borderCor: 'border-blue-500/30',
  },
  {
    icone: GraduationCap,
    titulo: 'Formação Acadêmica',
    periodo: '2017-2020',
    descricao: 'Mudei para Presidente Prudente-SP e iniciei a faculdade. Sistemas de Informação, depois ADS. Aprendi a pensar como desenvolvedor, entender algoritmos, arquitetar soluções. A base que me transformaria em profissional.',
    cor: 'from-emerald-500 to-green-500',
    borderCor: 'border-emerald-500/30',
  },
  {
    icone: Server,
    titulo: 'Experiência Profissional',
    periodo: '2020-2023',
    descricao: 'Cabonnet: 25 anos levando tecnologia ao interior. All Bytes: protegendo empresas contra ataques cibernéticos, gerenciando infraestrutura crítica. CronosBank: transformando empresas em fintechs com Banking as a Service e PCI DSS.',
    cor: 'from-purple-500 to-violet-500',
    borderCor: 'border-purple-500/30',
  },
  {
    icone: Code2,
    titulo: 'Desenvolvedor Júnior',
    periodo: '2024-Atual',
    descricao: 'Na Microton (40+ anos no mercado), desenvolvo soluções de mobilidade corporativa. MTVendor\'s, MTWms, MTColeta, MTApontaz - sistemas premiados que transformam vendas, logística e gestão. Código que impacta milhares de usuários.',
    cor: 'from-pink-500 to-rose-500',
    borderCor: 'border-pink-500/30',
  },
  {
    icone: Sparkles,
    titulo: 'O Que Vem Por Aí',
    periodo: 'Futuro',
    descricao: 'Continuar crescendo, compartilhar conhecimento, inspirar outros. Provar que dedicação supera qualquer obstáculo. Que a jornada de dev não tem um caminho único, mas sempre vale a pena.',
    cor: 'from-indigo-500 to-purple-500',
    borderCor: 'border-indigo-500/30',
  },
];

const percepcoes = [
  {
    titulo: 'Comece de onde você está',
    texto: 'Não precisa ter todas as respostas antes de começar. O importante é dar o primeiro passo.',
    icone: Rocket,
    cor: 'from-purple-400 to-violet-400',
  },
  {
    titulo: 'Progresso > Perfeição',
    texto: 'Cada erro foi uma oportunidade de aprendizado. Melhor começar imperfeito do que não começar.',
    icone: Zap,
    cor: 'from-blue-400 to-cyan-400',
  },
  {
    titulo: 'Soft Skills importam',
    texto: 'Comunicação, gestão de tempo, resolução de problemas - são tão valiosas quanto hard skills.',
    icone: Briefcase,
    cor: 'from-pink-400 to-rose-400',
  },
  {
    titulo: 'Comunidade acelera',
    texto: 'Construir relacionamentos com outros desenvolvedores faz diferença. Ninguém cresce sozinho.',
    icone: Users,
    cor: 'from-emerald-400 to-green-400',
  },
];

export default function Journey() {
  const [estaAberto, setEstaAberto] = useState(false);

  return (
    <section id="journey" className="py-16 md:py-24 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/5 to-slate-900 pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-64 md:w-96 h-64 md:h-96 bg-purple-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 md:w-96 h-64 md:h-96 bg-violet-500/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10 md:mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Minha <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 text-transparent bg-clip-text">Jornada</span>
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            17 anos explorando tecnologia. Da curiosidade inicial aos sistemas que impactam milhares de usuários.
          </p>

          {/* Toggle Button - More Professional */}
          <motion.button
            onClick={() => setEstaAberto(!estaAberto)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-8 py-4 bg-slate-800/80 backdrop-blur-sm border border-purple-500/30 rounded-xl text-white font-medium hover:border-purple-500/60 hover:bg-slate-800 transition-all group"
          >
            <span className={`w-2 h-2 rounded-full ${estaAberto ? 'bg-purple-400' : 'bg-gray-500'} transition-colors`} />
            {estaAberto ? 'Ocultar Timeline' : 'Explorar Timeline'}
            <motion.div
              animate={{ rotate: estaAberto ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="w-5 h-5 text-purple-400" />
            </motion.div>
          </motion.button>
        </motion.div>

        {/* Collapsible Content */}
        <AnimatePresence>
          {estaAberto && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              {/* Timeline */}
              <div className="max-w-4xl mx-auto mb-12 md:mb-20 mt-8 md:mt-12 overflow-hidden">
                <div className="relative">
                  {/* Vertical Line - Desktop */}
                  <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/30 via-purple-500/20 to-transparent -translate-x-1/2" />
                  
                  <div className="space-y-6 md:space-y-0">
                    {etapasJornada.map((etapa, index) => {
                      const Icone = etapa.icone;
                      const ehPar = index % 2 === 0;
                      
                      return (
                        <motion.div
                          key={etapa.titulo}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: false, amount: 0.3 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="relative mb-6 md:mb-8 last:mb-0"
                        >
                          {/* Desktop Layout */}
                          <div className={`hidden md:flex items-center gap-8 ${ehPar ? 'flex-row' : 'flex-row-reverse'}`}>
                            {/* Content Card */}
                            <div className={`flex-1 ${ehPar ? 'text-right' : 'text-left'}`}>
                              <motion.div 
                                className={`inline-block p-6 rounded-2xl bg-slate-800/60 backdrop-blur-sm border ${etapa.borderCor} hover:border-opacity-60 transition-all max-w-lg`}
                                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                              >
                                <div className={`flex items-center gap-3 mb-3 ${ehPar ? 'justify-end' : 'justify-start'}`}>
                                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">{etapa.periodo}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white mb-2">{etapa.titulo}</h3>
                                <p className="text-gray-400 text-sm leading-relaxed">{etapa.descricao}</p>
                              </motion.div>
                            </div>
                            
                            {/* Center Icon */}
                            <div className="relative z-10 flex-shrink-0">
                              <motion.div 
                                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${etapa.cor} shadow-lg flex items-center justify-center`}
                                whileHover={{ scale: 1.1, rotate: 5 }}
                                transition={{ type: 'spring', stiffness: 300 }}
                              >
                                <Icone className="w-6 h-6 text-white" strokeWidth={2} />
                              </motion.div>
                              {/* Glow */}
                              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${etapa.cor} opacity-30 blur-xl -z-10`} />
                            </div>
                            
                            {/* Spacer */}
                            <div className="flex-1" />
                          </div>

                          {/* Mobile Layout */}
                          <div className="md:hidden">
                            <motion.div 
                              className={`p-5 rounded-xl bg-slate-800/60 backdrop-blur-sm border ${etapa.borderCor}`}
                              whileHover={{ y: -2 }}
                            >
                              <div className="flex items-start gap-4">
                                {/* Icon */}
                                <div className={`flex-shrink-0 w-12 h-12 rounded-lg bg-gradient-to-br ${etapa.cor} flex items-center justify-center shadow-lg`}>
                                  <Icone className="w-5 h-5 text-white" strokeWidth={2} />
                                </div>
                                
                                {/* Content */}
                                <div className="flex-1 min-w-0">
                                  <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">{etapa.periodo}</span>
                                  <h3 className="text-lg font-bold text-white mt-1 mb-2">{etapa.titulo}</h3>
                                  <p className="text-gray-400 text-sm leading-relaxed">{etapa.descricao}</p>
                                </div>
                              </div>
                            </motion.div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Insights Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
              >
                <div className="text-center mb-10">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Lições <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">Aprendidas</span>
                  </h3>
                  <p className="text-gray-400">Insights da minha trajetória como desenvolvedor</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {percepcoes.map((percepcao, index) => {
                    const IconePercepcao = percepcao.icone;
                    return (
                      <motion.div
                        key={percepcao.titulo}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        whileHover={{ y: -3 }}
                        className="p-5 rounded-xl bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/30 transition-all group"
                      >
                        <div className="flex items-start gap-4">
                          <div className={`flex-shrink-0 p-2.5 rounded-lg bg-gradient-to-br ${percepcao.cor} shadow-lg`}>
                            <IconePercepcao className="w-5 h-5 text-white" strokeWidth={2} />
                          </div>
                          <div>
                            <h4 className="font-semibold text-white mb-1">{percepcao.titulo}</h4>
                            <p className="text-sm text-gray-400 leading-relaxed">{percepcao.texto}</p>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="max-w-2xl mx-auto mt-16 text-center"
              >
                <div className="p-8 rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-800/40 backdrop-blur-sm border border-purple-500/20">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                    Sua jornada começa agora
                  </h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">
                    Não foi linear, não foi fácil, mas foi real. Cada desafio superado me tornou mais forte. 
                    <span className="text-purple-400 font-medium"> Consistência vence tudo.</span>
                  </p>
                  <p className="text-sm text-gray-500 italic">
                    "Não é sobre o ponto de partida. É sobre a direção que você escolhe seguir."
                  </p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
