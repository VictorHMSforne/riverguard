import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Sobre from '../components/Sobre';
import Funcionalidades from '../components/Funcionalidades';
import Equipe from '../components/Equipe';
import Footer from '../components/Footer';

function Landing() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <Sobre />
      <Funcionalidades />
      <Equipe />
      <Footer />
    </div>
  );
}

export default Landing;