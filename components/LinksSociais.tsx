"use client";

import { motion } from 'framer-motion';
import { getSocials } from './dadosSociais';

interface LinksSociaisProps {
  keys?: string[]; // filtrar subset
  variant?: 'circle' | 'pill' | 'grid';
  showLabels?: boolean; // mostrar texto do label
  animate?: boolean; // animações extras (ex: rotação no hover)
  className?: string;
  itemClassName?: string; // classes adicionais para cada item
}

export default function LinksSociais({
  keys,
  variant = 'circle',
  showLabels = false,
  animate = false,
  className = '',
  itemClassName = '',
}: LinksSociaisProps) {
  const itens = getSocials(keys);

  const itemBase = 'group flex items-center justify-center border border-slate-700 bg-slate-800/50 backdrop-blur-sm transition-all duration-300 hover:bg-slate-800/70 hover:shadow-md hover:shadow-black/20 hover:ring-2';

  const variantes: Record<string, string> = {
    circle: 'flex gap-4 flex-wrap',
    pill: 'grid grid-cols-2 sm:grid-cols-4 gap-3',
    grid: 'grid grid-cols-2 md:grid-cols-4 gap-3',
  };

  const tamanhoPorVariante: Record<string, string> = {
    circle: 'w-12 h-12 rounded-full',
    pill: 'rounded-md px-4 py-2 h-11',
    grid: 'rounded-lg px-3 py-2 h-12',
  };

  return (
    <div className={`${variantes[variant]} ${className}`.trim()}>
      {itens.map((s) => {
        const Icone = s.icon;
        return (
          <motion.a
            key={s.key}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={animate ? { scale: 1.1, rotate: 5 } : { scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${itemBase} ${tamanhoPorVariante[variant]} ${s.ringClass} ${itemClassName}`.trim()}
          >
            <Icone className={`w-5 h-5 ${s.brandClass}`} />
            {showLabels && (
              <span className={`ml-2 text-sm font-medium ${variant === 'circle' ? 'hidden' : 'inline'} text-gray-300`}>{s.label}</span>
            )}
          </motion.a>
        );
      })}
    </div>
  );
}