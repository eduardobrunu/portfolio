import Hero from '@/components/Hero';
import About from '@/components/About';
import Journey from '@/components/Journey';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import ParticlesBackground from '@/components/ParticlesBackground';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 relative">
      <Navbar />
      <ParticlesBackground />
      <Hero />
      <About />
      <Journey />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
