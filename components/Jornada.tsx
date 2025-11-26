'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, Rocket, Target, TrendingUp, Heart, Code2, ChevronDown, ChevronUp, Zap, Briefcase, Users } from 'lucide-react';
import { useState } from 'react';

const etapasJornada = [
  {
    icone: Lightbulb,
    titulo: 'O Início',
    periodo: '2008',
    descricao: 'Tudo começou com um computador e muita curiosidade. Explorar cada pixel, cada programa, cada possibilidade. Games online me ensinaram trabalho em equipe. A internet me mostrou que não existem limites.',
    cor: 'from-yellow-400 to-orange-400',
    emoji: '💡',
    imagem: '🎮',
  },
  {
    icone: Rocket,
    titulo: 'Criando & Aprendendo',
    periodo: '2008-2017',
    descricao: 'Rádio online, web design, cada projeto era uma aventura. Mesmo quando a conexão era desafio, a vontade de criar era maior. Aprendi que obstáculos não param quem realmente quer.',
    cor: 'from-blue-400 to-cyan-400',
    emoji: '🚀',
    imagem: '🎨',
  },
  {
    icone: Code2,
    titulo: 'Formação',
    periodo: '2017-2020',
    descricao: 'Mudei para Presidente Prudente-SP e iniciei a faculdade. Sistemas de Informação, depois ADS. Aprendi a pensar como desenvolvedor, entender algoritmos, arquitetar soluções. A base que me transformaria em profissional.',
    cor: 'from-green-400 to-emerald-400',
    emoji: '📚',
    imagem: '🎓',
  },
  {
    icone: Target,
    titulo: 'Primeiros Passos Profissionais',
    periodo: '2020-2023',
    descricao: 'Cabonnet: 25 anos levando tecnologia ao interior. Aprendi que infraestrutura de fibra ótica sustenta sonhos. All Bytes: protegendo empresas contra ataques cibernéticos, recuperando desastres, gerenciando infraestrutura crítica. CronosBank: transformando empresas em fintechs. Banking as a Service, subadquirência white label, PCI DSS. Cada empresa me ensinou uma lição diferente sobre impacto tecnológico.',
    cor: 'from-purple-400 to-violet-400',
    emoji: '🎯',
    imagem: '⚡',
  },
  {
    icone: TrendingUp,
    titulo: 'Desenvolvedor Júnior',
    periodo: '2024-Atual',
    descricao: 'Na Microton (40+ anos no mercado), desenvolvo soluções de mobilidade corporativa que otimizam operações em campo. MTVendor\'s, MTWms, MTColeta, MTApontaz - sistemas premiados que transformam vendas, logística e gestão. PHP e TypeScript para criar APIs resilientes, automações inteligentes e integrações críticas. Código que impacta milhares de usuários diariamente.',
    cor: 'from-pink-400 to-rose-400',
    emoji: '📈',
    imagem: '💻',
  },
  {
    icone: Heart,
    titulo: 'O Que Vem Por Aí',
    periodo: 'Futuro',
    descricao: 'Continuar crescendo, compartilhar conhecimento, inspirar outros. Provar que dedicação supera qualquer obstáculo. Que a jornada de dev não tem um caminho único, mas sempre vale a pena.',
    cor: 'from-red-400 to-pink-400',
    emoji: '❤️',
    imagem: '🌟',
  },
];

const percepcoes = [
  {
    titulo: 'Comece de onde você está',
    texto: 'Não precisa ter todas as respostas antes de começar. O importante é dar o primeiro passo e aprender no caminho. Cada pequeno progresso conta.',
    icone: Rocket,
    cor: 'from-purple-400 to-violet-400',
  },
  {
    titulo: 'Progresso > Perfeição',
    texto: 'Meus primeiros códigos eram longe do ideal. Cada erro foi uma oportunidade de aprendizado. Melhor começar imperfeito do que não começar.',
    icone: Zap,
    cor: 'from-blue-400 to-cyan-400',
  },
  {
    titulo: 'Habilidades transferíveis importam',
    texto: 'Experiências anteriores são diferenciais. Comunicação, gestão de tempo, resolução de problemas - soft skills são tão valiosas quanto hard skills.',
    icone: Briefcase,
    cor: 'from-pink-400 to-rose-400',
  },
  {
    titulo: 'Comunidade acelera crescimento',
    texto: 'Construir relacionamentos com outros desenvolvedores faz diferença. Compartilhe conhecimento, peça ajuda, colabore. Ninguém cresce sozinho.',
    icone: Users,
    cor: 'from-green-400 to-emerald-400',
  },
];

export default function Journey() {
  const [estaAberto, setEstaAberto] = useState(false);

  return (
    <section id="journey" className="py-12 md:py-20 bg-slate-900 relative overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900/10 to-slate-900 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-3 md:mb-4">
            Minha <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 text-transparent bg-clip-text">Jornada</span>
          </h2>
          <p className="text-sm md:text-lg text-gray-400 max-w-2xl mx-auto mb-6 md:mb-8 px-2">
            17 anos explorando tecnologia. Da tela do primeiro computador aos sistemas que movem Fintechs. 
            Uma jornada de paixão, persistência e transformação.
          </p>

          {/* Toggle Button */}
          <motion.button
            onClick={() => setEstaAberto(!estaAberto)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full text-white text-sm md:text-base font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all active:shadow-xl"
          >
            {estaAberto ? (
              <>
                Ocultar Minha História
                <ChevronUp className="w-5 h-5" />
              </>
            ) : (
              <>
                Conhecer Minha História
                <ChevronDown className="w-5 h-5" />
              </>
            )}
          </motion.button>
        </motion.div>

        {/* Collapsible Content */}
        <AnimatePresence>
          {estaAberto && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden"
            >
              {/* Timeline */}
              <div className="max-w-5xl mx-auto mb-12 md:mb-20 mt-8 md:mt-12">
          <div className="space-y-6 md:space-y-8">
            {etapasJornada.map((etapa, index) => {
              const Icone = etapa.icone;
              const ehPar = index % 2 === 0;
              
              return (
                <motion.div
                  key={etapa.titulo}
                  initial={{ opacity: 0, x: ehPar ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className={`flex flex-col md:flex-row gap-6 items-center ${ehPar ? '' : 'md:flex-row-reverse'}`}>
                    {/* Content Card */}
                    <div className="w-full flex-1 bg-slate-800/50 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-slate-700 hover:border-purple-500/50 transition-all group active:border-purple-500/70">
                      <div className="flex items-start gap-3 md:gap-4 mb-3">
                        {/* Visual Emoji */}
                        <motion.div 
                          className="text-3xl md:text-5xl flex-shrink-0"
                          whileTap={{ scale: 1.1 }}
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          {etapa.emoji}
                        </motion.div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base md:text-xl font-bold text-white mb-1">{etapa.titulo}</h3>
                          <p className="text-xs md:text-sm text-purple-400">{etapa.periodo}</p>
                        </div>
                      </div>
                      <p className="text-sm md:text-base text-gray-300 leading-relaxed">{etapa.descricao}</p>
                    </div>

                    {/* Timeline Dot with Image - Desktop Only */}
                    <div className="hidden md:block relative flex-shrink-0">
                      <motion.div 
                        className={`w-16 h-16 rounded-full bg-gradient-to-br ${etapa.cor} shadow-lg flex items-center justify-center text-2xl`}
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        {etapa.imagem}
                      </motion.div>
                      <motion.div
                        className={`absolute inset-0 rounded-full bg-gradient-to-br ${etapa.cor} opacity-30 blur-xl`}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.3, 0.5, 0.3],
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                    </div>

                    {/* Spacer - Desktop Only */}
                    <div className="hidden md:block flex-1" />
                  </div>

                  {/* Connecting Line */}
                  {index < etapasJornada.length - 1 && (
                    <div className="hidden md:block absolute left-1/2 top-full w-0.5 h-8 bg-gradient-to-b from-purple-500/50 to-transparent transform -translate-x-1/2" />
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Insights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <h3 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-3 text-center">
            Lições <span className="bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text">Aprendidas</span>
          </h3>
          <p className="text-sm md:text-base text-gray-400 text-center mb-8 md:mb-12 max-w-2xl mx-auto px-2">
            Insights que fizeram diferença na minha trajetória como desenvolvedor
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {percepcoes.map((percepcao, index) => (
              <motion.div
                key={percepcao.titulo}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-purple-500/20 hover:border-purple-500/50 active:border-purple-500/60 transition-all group relative overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${percepcao.cor} opacity-0 group-hover:opacity-5 transition-opacity`} />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-3">
                    {/* Icon with gradient background */}
                    <div className="relative flex-shrink-0">
                      <div className={`p-2.5 md:p-3 rounded-lg md:rounded-xl bg-gradient-to-br ${percepcao.cor} shadow-lg`}>
                        <percepcao.icone className="w-5 h-5 md:w-6 md:h-6 text-white" strokeWidth={2.5} />
                      </div>
                      {/* Glow effect */}
                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${percepcao.cor} opacity-40 blur-lg`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className={`text-base md:text-lg font-bold bg-gradient-to-r ${percepcao.cor} text-transparent bg-clip-text mb-1.5 md:mb-2`}>
                        {percepcao.titulo}
                      </h4>
                      <p className="text-xs md:text-base text-gray-300 leading-relaxed">{percepcao.texto}</p>
                    </div>
                  </div>
                </div>

                {/* Decorative corner */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${percepcao.cor} opacity-10 blur-2xl rounded-full`} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto mt-12 md:mt-16 text-center bg-gradient-to-r from-purple-900/30 to-violet-900/30 rounded-xl md:rounded-2xl p-6 md:p-8 border border-purple-500/30"
        >
          <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
            Sua jornada começa agora
          </h3>
          <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6 leading-relaxed">
            Minha jornada começou com curiosidade e um computador. Não foi linear, não foi fácil, mas foi real. 
            <strong className="text-purple-400"> Cada desafio superado me tornou mais forte</strong>. 
            Se você está começando, saiba: o caminho é único para cada um, mas a dedicação é universal. 
            Começe. Erre. Aprenda. Repita. <strong className="text-purple-400">Consistência vence tudo</strong>.
          </p>
          <p className="text-xs md:text-sm text-gray-400 italic">
            &ldquo;Não é sobre o ponto de partida. É sobre a direção que você escolhe seguir.&rdquo;
          </p>
        </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
      </div>
    </section>
  );
}
