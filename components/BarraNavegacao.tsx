'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { Home, User, Rocket, Code, Briefcase, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';

const itensNav = [
  { nome: 'Início', href: '#', icone: Home },
  { nome: 'Sobre', href: '#about', icone: User },
  { nome: 'Jornada', href: '#journey', icone: Rocket },
  { nome: 'Skills', href: '#skills', icone: Code },
  { nome: 'Projetos', href: '#projects', icone: Briefcase },
  { nome: 'Contato', href: '#contact', icone: Mail },
];

export default function Navbar() {
  const [secaoAtiva, setSecaoAtiva] = useState('');
  const { scrollY } = useScroll();
  const corDeFundo = useTransform(
    scrollY,
    [0, 100],
    ['rgba(15, 23, 42, 0)', 'rgba(15, 23, 42, 0.95)']
  );
  const corDaBorda = useTransform(
    scrollY,
    [0, 100],
    ['rgba(139, 92, 246, 0)', 'rgba(139, 92, 246, 0.3)']
  );

  useEffect(() => {
    const handleScroll = () => {
      const secoes = itensNav.map(item => {
        const elemento = document.querySelector(item.href === '#' ? 'section' : item.href);
        if (elemento) {
          const rect = elemento.getBoundingClientRect();
          return {
            id: item.href,
            top: rect.top,
            bottom: rect.bottom,
          };
        }
        return null;
      }).filter(Boolean);

      const atual = secoes.find(secao => 
        secao && secao.top <= 100 && secao.bottom > 100
      );

      if (atual) {
        setSecaoAtiva(atual.id);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const alvo = href === '#' ? document.querySelector('section') : document.querySelector(href);
    if (alvo) {
      const offsetTop = alvo.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({
        top: href === '#' ? 0 : offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <motion.nav
      style={{ 
        backgroundColor: corDeFundo,
        borderColor: corDaBorda,
      }}
      className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md"
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => handleClick(e, '#')}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold bg-gradient-to-r from-purple-400 to-violet-400 text-transparent bg-clip-text hover:from-purple-300 hover:to-violet-300 transition-all"
          >
            EB.dev
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {itensNav.map((item, index) => {
              const Icone = item.icone;
              const estaAtivo = secaoAtiva === item.href;
              
              return (
                <motion.a
                  key={item.nome}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    estaAtivo 
                      ? 'text-purple-400' 
                      : 'text-gray-300 hover:text-purple-400'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Icone className="w-4 h-4" />
                    {item.nome}
                  </span>
                  {estaAtivo && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute inset-0 bg-purple-500/10 rounded-lg border border-purple-500/30"
                      transition={{ type: 'spring', duration: 0.6 }}
                    />
                  )}
                </motion.a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="md:hidden p-2 text-gray-300 hover:text-purple-400 transition-colors"
            onClick={() => {
              const mobileMenu = document.getElementById('mobile-menu');
              mobileMenu?.classList.toggle('hidden');
            }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <div id="mobile-menu" className="hidden md:hidden pb-4">
          <div className="flex flex-col gap-2">
            {itensNav.map((item) => {
              const Icone = item.icone;
              const estaAtivo = secaoAtiva === item.href;
              
              return (
                <a
                  key={item.nome}
                  href={item.href}
                  onClick={(e) => {
                    handleClick(e, item.href);
                    document.getElementById('mobile-menu')?.classList.add('hidden');
                  }}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all ${
                    estaAtivo 
                      ? 'bg-purple-500/10 text-purple-400 border border-purple-500/30' 
                      : 'text-gray-300 hover:bg-slate-800/50 hover:text-purple-400'
                  }`}
                >
                  <Icone className="w-4 h-4" />
                  {item.nome}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
