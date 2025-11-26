'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [posicaoMouse, setPosicaoMouse] = useState({ x: 0, y: 0 });
  const [ehPonteiro, setEhPonteiro] = useState(false);

  useEffect(() => {
    const atualizarPosicaoMouse = (e: MouseEvent) => {
      setPosicaoMouse({ x: e.clientX, y: e.clientY });
      
      const alvo = e.target as HTMLElement;
      setEhPonteiro(
        window.getComputedStyle(alvo).cursor === 'pointer' ||
        alvo.tagName === 'A' ||
        alvo.tagName === 'BUTTON'
      );
    };

    window.addEventListener('mousemove', atualizarPosicaoMouse);
    return () => window.removeEventListener('mousemove', atualizarPosicaoMouse);
  }, []);

  return (
    <>
      {/* Cursor principal */}
      <motion.div
        className="fixed w-4 h-4 rounded-full bg-purple-500 pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: posicaoMouse.x - 8,
          y: posicaoMouse.y - 8,
          scale: ehPonteiro ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />
      
      {/* Cursor de rastro */}
      <motion.div
        className="fixed w-8 h-8 rounded-full border-2 border-purple-500 pointer-events-none z-[9998] mix-blend-difference"
        animate={{
          x: posicaoMouse.x - 16,
          y: posicaoMouse.y - 16,
          scale: ehPonteiro ? 1.8 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
        }}
      />
    </>
  );
}
