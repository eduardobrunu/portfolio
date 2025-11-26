'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Lightbulb, Rocket, Target, TrendingUp, Heart, Code2, ChevronDown, ChevronUp, Clock, Zap, Briefcase, Users } from 'lucide-react';
import { useState } from 'react';

const journeySteps = [
  {
    icon: Lightbulb,
    title: 'O Despertar',
    period: 'Antes de 2022',
    description: 'Trabalhando em outras áreas, percebi que minha paixão estava em resolver problemas com tecnologia. A curiosidade por entender como as coisas funcionam "por trás dos panos" me levou a dar o primeiro passo.',
    color: 'from-yellow-400 to-orange-400',
    emoji: '💡',
    image: '🌅',
  },
  {
    icon: Rocket,
    title: 'A Decisão',
    period: '2022',
    description: 'Tomei a decisão mais importante: recomeçar. Não importava a idade, experiência anterior ou opinião alheia. Comecei do zero, estudando lógica de programação e me dedicando a aprender HTML, CSS e JavaScript.',
    color: 'from-blue-400 to-cyan-400',
    emoji: '🚀',
    image: '⚡',
  },
  {
    icon: Code2,
    title: 'Primeiros Passos',
    period: '2022-2023',
    description: 'Entrei como Suporte Técnico na Cabonnet, onde aprendi virtualização e gestão de projetos. Foi meu pé na porta da TI. Cada ticket resolvido era uma oportunidade de aprender algo novo.',
    color: 'from-green-400 to-emerald-400',
    emoji: '👣',
    image: '🎯',
  },
  {
    icon: Target,
    title: 'A Virada',
    period: '2023-2024',
    description: 'Consegui minha primeira vaga como Desenvolvedor Júnior na Cronos! Trabalhando com PHP, HTML/CSS e JavaScript, finalmente estava fazendo o que amo. A síndrome do impostor bateu forte, mas persistência venceu.',
    color: 'from-purple-400 to-violet-400',
    emoji: '🎉',
    image: '🏆',
  },
  {
    icon: TrendingUp,
    title: 'Crescimento',
    period: '2024-Atual',
    description: 'Na Microton, trabalho com tecnologias que impactam operações reais de Fintechs e logística. PHP, MySQL, TypeScript, Node.js - cada linha de código tem propósito. Aprendi que programar não é só escrever código, é resolver problemas.',
    color: 'from-pink-400 to-rose-400',
    emoji: '📈',
    image: '💻',
  },
  {
    icon: Heart,
    title: 'A Missão',
    period: 'Futuro',
    description: 'Meu objetivo é provar que nunca é tarde para recomeçar. Se você está pensando em migrar para programação, saiba: o mercado precisa de pessoas dedicadas, não de gênios. Disciplina > Talento.',
    color: 'from-red-400 to-pink-400',
    emoji: '❤️',
    image: '🌟',
  },
];

const insights = [
  {
    title: 'Idade não define capacidade',
    text: 'Iniciei minha transição de carreira em um momento onde muitos já estavam consolidados. A diferença real está no seu nível de dedicação e consistência.',
    icon: Clock,
    color: 'from-purple-400 to-violet-400',
  },
  {
    title: 'Progresso > Perfeição',
    text: 'Meus primeiros códigos eram longe do ideal. Cada erro foi uma oportunidade de aprendizado. Melhor começar imperfeito do que não começar.',
    icon: Zap,
    color: 'from-blue-400 to-cyan-400',
  },
  {
    title: 'Transferência de habilidades',
    text: 'Experiências anteriores são diferenciais. Comunicação, gestão de tempo, resolução de conflitos - soft skills são tão valiosas quanto hard skills.',
    icon: Briefcase,
    color: 'from-pink-400 to-rose-400',
  },
  {
    title: 'Network é investimento',
    text: 'Construir relacionamentos com outros desenvolvedores acelera o crescimento. Compartilhe conhecimento, peça ajuda, colabore. Ninguém cresce sozinho.',
    icon: Users,
    color: 'from-green-400 to-emerald-400',
  },
];

export default function Journey() {
  const [isOpen, setIsOpen] = useState(false);

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
            De uma área completamente diferente para desenvolvedor júnior. 
            Uma história de recomeço, persistência e paixão por tecnologia.
          </p>

          {/* Toggle Button */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-purple-500 to-violet-600 rounded-full text-white text-sm md:text-base font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all active:shadow-xl"
          >
            {isOpen ? (
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
          {isOpen && (
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
            {journeySteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className={`flex flex-col md:flex-row gap-6 items-center ${isEven ? '' : 'md:flex-row-reverse'}`}>
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
                          {step.emoji}
                        </motion.div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base md:text-xl font-bold text-white mb-1">{step.title}</h3>
                          <p className="text-xs md:text-sm text-purple-400">{step.period}</p>
                        </div>
                      </div>
                      <p className="text-sm md:text-base text-gray-300 leading-relaxed">{step.description}</p>
                    </div>

                    {/* Timeline Dot with Image - Desktop Only */}
                    <div className="hidden md:block relative flex-shrink-0">
                      <motion.div 
                        className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} shadow-lg flex items-center justify-center text-2xl`}
                        whileHover={{ scale: 1.2 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        {step.image}
                      </motion.div>
                      <motion.div
                        className={`absolute inset-0 rounded-full bg-gradient-to-br ${step.color} opacity-30 blur-xl`}
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
                  {index < journeySteps.length - 1 && (
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
            {insights.map((insight, index) => (
              <motion.div
                key={insight.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                whileTap={{ scale: 0.98 }}
                className="bg-gradient-to-br from-slate-800/80 to-slate-700/80 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-purple-500/20 hover:border-purple-500/50 active:border-purple-500/60 transition-all group relative overflow-hidden"
              >
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${insight.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                
                <div className="relative z-10">
                  <div className="flex items-start gap-4 mb-3">
                    {/* Icon with gradient background */}
                    <div className="relative flex-shrink-0">
                      <div className={`p-2.5 md:p-3 rounded-lg md:rounded-xl bg-gradient-to-br ${insight.color} shadow-lg`}>
                        <insight.icon className="w-5 h-5 md:w-6 md:h-6 text-white" strokeWidth={2.5} />
                      </div>
                      {/* Glow effect */}
                      <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${insight.color} opacity-40 blur-lg`} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className={`text-base md:text-lg font-bold bg-gradient-to-r ${insight.color} text-transparent bg-clip-text mb-1.5 md:mb-2`}>
                        {insight.title}
                      </h4>
                      <p className="text-xs md:text-base text-gray-300 leading-relaxed">{insight.text}</p>
                    </div>
                  </div>
                </div>

                {/* Decorative corner */}
                <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${insight.color} opacity-10 blur-2xl rounded-full`} />
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
            Você também está em transição?
          </h3>
          <p className="text-sm md:text-base text-gray-300 mb-4 md:mb-6 leading-relaxed">
            Se minha história te inspirou, quero te dizer: <strong className="text-purple-400">você consegue</strong>. 
            Não importa sua idade, formação ou experiência anterior. O que importa é dar o primeiro passo, 
            manter a disciplina e nunca parar de evoluir. A jornada é desafiadora, mas cada linha de código 
            te aproxima do seu objetivo. Lembre-se: grandes conquistas começam com pequenas ações consistentes.
          </p>
          <p className="text-xs md:text-sm text-gray-400 italic">
            &ldquo;O melhor momento para começar foi ontem. O segundo melhor momento é agora.&rdquo;
          </p>
        </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
      </div>
    </section>
  );
}
