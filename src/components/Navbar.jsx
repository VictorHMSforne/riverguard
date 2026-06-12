import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Rolagem suave até a seção (evita conflito com o HashRouter)
  const irParaSecao = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <span className="navbar-logo">
        River<span className="navbar-logo-destaque">Guard</span>
      </span>

      <div className="navbar-links">
        <a href="#sobre" onClick={(e) => irParaSecao(e, 'sobre')}>Sobre</a>
        <a href="#funcionalidades" onClick={(e) => irParaSecao(e, 'funcionalidades')}>Funcionalidades</a>
        <a href="#equipe" onClick={(e) => irParaSecao(e, 'equipe')}>Equipe</a>
        <a href="#contato" onClick={(e) => irParaSecao(e, 'contato')}>Contato</a>
        <Link to="/login" className="navbar-cta">Acessar sistema</Link>
      </div>
    </nav>
  );
}

export default Navbar;