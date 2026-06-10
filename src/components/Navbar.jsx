import { useState, useEffect } from 'react';

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

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <span className="navbar-logo">
        River<span className="navbar-logo-destaque">Guard</span>
      </span>

      <div className="navbar-links">
        <a href="#sobre">Sobre</a>
        <a href="#funcionalidades">Funcionalidades</a>
        <a href="#equipe">Equipe</a>
        <a href="#contato">Contato</a>
        <a href="#login" className="navbar-cta">Acessar sistema</a>
      </div>
    </nav>
  );
}

export default Navbar;