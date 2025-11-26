'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, XCircle, Sparkles } from 'lucide-react';
import SocialLinks from './SocialLinks';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [isHovering, setIsHovering] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Configure no EmailJS: https://www.emailjs.com/
      // 1. Crie uma conta gratuita
      // 2. Adicione um serviço de email (Gmail, Outlook, etc)
      // 3. Crie um template de email
      // 4. Substitua os valores abaixo com suas chaves
      
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',      // Substitua com seu Service ID
        'YOUR_TEMPLATE_ID',     // Substitua com seu Template ID
        formRef.current!,
        'YOUR_PUBLIC_KEY'       // Substitua com sua Public Key
      );

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    } catch (error) {
      console.error('Erro ao enviar email:', error);
      setStatus('error');
      
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Entre em <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 text-transparent bg-clip-text">Contato</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tem algum projeto em mente? Vamos conversar!
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Informações de Contato</h3>
              <p className="text-gray-400 mb-8">
                Estou sempre aberto a discutir novos projetos, ideias criativas ou oportunidades para fazer parte da sua visão.
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Mail, label: 'Email', value: 'eduardobrunoeb@outlook.com' },
                { icon: Phone, label: 'Telefone', value: '+55 (18) 99791-7566' },
                { icon: MapPin, label: 'Localização', value: 'Presidente Prudente, SP - Brasil' },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 bg-slate-800/50 backdrop-blur-sm p-4 rounded-lg border border-slate-700"
                >
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Media (Reutilizável) */}
            <div>
              <h4 className="text-white font-bold mb-4">Redes Sociais</h4>
              <SocialLinks variant="circle" />
            </div>
          </motion.div>

          {/* Formulário */}
          <motion.form
            ref={formRef}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-4 bg-green-500/10 border border-green-500/50 rounded-lg text-green-400"
              >
                <CheckCircle className="w-5 h-5" />
                <span>Mensagem enviada com sucesso! Responderei em breve.</span>
              </motion.div>
            )}

            {status === 'error' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 p-4 bg-red-500/10 border border-red-500/50 rounded-lg text-red-400"
              >
                <XCircle className="w-5 h-5" />
                <span>Erro ao enviar mensagem. Tente novamente ou entre em contato pelo WhatsApp.</span>
              </motion.div>
            )}

            <div>
              <label htmlFor="name" className="block text-white font-medium mb-2">Nome</label>
              <input
                type="text"
                id="name"
                name="user_name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors"
                placeholder="Seu nome"
                required
                disabled={status === 'sending'}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-white font-medium mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="user_email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors"
                placeholder="seu@email.com"
                required
                disabled={status === 'sending'}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-white font-medium mb-2">Mensagem</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={6}
                className="w-full px-4 py-3 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none transition-colors resize-none"
                placeholder="Sua mensagem..."
                required
                disabled={status === 'sending'}
              />
            </div>

            {/* Botão de Envio */}
            <motion.div
              className="relative group"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <motion.div
                className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600 rounded-lg blur-lg opacity-0 group-hover:opacity-75 transition-opacity duration-500"
                animate={{ scale: isHovering ? [1, 1.05, 1] : 1 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                className="relative w-full overflow-hidden bg-slate-900 rounded-lg border border-purple-500/20 group-hover:border-purple-500/50 transition-all duration-300"
                whileHover={{ scale: status === 'sending' ? 1 : 1.01 }}
                whileTap={{ scale: status === 'sending' ? 1 : 0.99 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 via-violet-600 to-indigo-600"
                  animate={{ backgroundPosition: isHovering ? ['0% 50%', '100% 50%', '0% 50%'] : '0% 50%' }}
                  transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                  style={{ backgroundSize: '200% 200%' }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: isHovering ? ['-100%', '200%'] : '-100%' }}
                  transition={{ duration: 1.5, repeat: isHovering ? Infinity : 0, ease: 'easeInOut', repeatDelay: 0.5 }}
                />
                {isHovering && (
                  <>
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        initial={{ x: '50%', y: '50%', opacity: 1 }}
                        animate={{
                          x: `${50 + (Math.cos((i * 60) * Math.PI / 180) * 100)}%`,
                          y: `${50 + (Math.sin((i * 60) * Math.PI / 180) * 100)}%`,
                          opacity: 0,
                          scale: [1, 2, 0]
                        }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'easeOut', delay: i * 0.1 }}
                      />
                    ))}
                  </>
                )}
                <div className="relative px-8 py-4 flex items-center justify-center gap-3">
                  {status === 'sending' ? (
                    <>
                      <div className="relative w-6 h-6">
                        <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: 'linear' }} className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full" />
                        <motion.div animate={{ rotate: -360, scale: [1, 1.2, 1] }} transition={{ duration: 2, repeat: Infinity, ease: 'linear' }} className="absolute inset-0 w-2 h-2 bg-white rounded-full m-auto" />
                      </div>
                      <span className="text-white font-bold text-lg tracking-wide">Enviando</span>
                      <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="text-white font-bold text-lg">...</motion.span>
                    </>
                  ) : (
                    <>
                      <motion.div
                        animate={{ y: isHovering ? [0, -4, 0] : 0, rotate: isHovering ? [0, 5, -5, 0] : 0 }}
                        transition={{ duration: 0.6, repeat: isHovering ? Infinity : 0, ease: 'easeInOut' }}
                      >
                        <Send className="w-5 h-5 text-white" />
                      </motion.div>
                      <motion.span className="text-white font-bold text-lg tracking-wide flex">
                        {'Enviar Mensagem'.split('').map((letter, i) => (
                          <motion.span
                            key={i}
                            animate={{ y: isHovering ? [0, -2, 0] : 0 }}
                            transition={{ duration: 0.5, repeat: isHovering ? Infinity : 0, delay: i * 0.03, ease: 'easeInOut' }}
                          >
                            {letter === ' ' ? '\u00A0' : letter}
                          </motion.span>
                        ))}
                      </motion.span>
                      <motion.div
                        animate={{ rotate: isHovering ? 360 : 0, scale: isHovering ? [1, 1.2, 1] : 1 }}
                        transition={{ rotate: { duration: 2, repeat: isHovering ? Infinity : 0, ease: 'linear' }, scale: { duration: 1, repeat: isHovering ? Infinity : 0, ease: 'easeInOut' } }}
                      >
                        <Sparkles className="w-5 h-5 text-white" />
                      </motion.div>
                    </>
                  )}
                </div>
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent"
                  animate={{ opacity: isHovering ? [0.5, 1, 0.5] : 0 }}
                  transition={{ duration: 1.5, repeat: isHovering ? Infinity : 0, ease: 'easeInOut' }}
                />
              </motion.button>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
