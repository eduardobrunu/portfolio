import Heroi from '@/components/Heroi';
import Sobre from '@/components/Sobre';
import Jornada from '@/components/Jornada';
import Habilidades from '@/components/Habilidades';
import Projetos from '@/components/Projetos';
import Contato from '@/components/Contato';
import Rodape from '@/components/Rodape';
import FundoParticulas from '@/components/FundoParticulas';
import BarraNavegacao from '@/components/BarraNavegacao';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 relative overflow-x-hidden">
      <BarraNavegacao />
      <FundoParticulas />
      <Heroi />
      <Sobre />
      <Jornada />
      <Habilidades />
      <Projetos />
      <Contato />
      <Rodape />
    </main>
  );
}
