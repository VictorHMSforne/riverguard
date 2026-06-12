// src/components/MenuLateral.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MenuLateral() {
  const [aberto, setAberto] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = (rota) => {
    setAberto(false); // fecha o menu

    if (rota === '/logout') {
      navigate('/'); // Volta para a Landing (página principal)
    } else {
      // Para as outras opções, você pode criar páginas depois
      alert(`📍 Navegando para: ${rota}`);
      // navigate(rota); // descomente quando criar as páginas
    }
  };

  return (
    <>
      {/* Ícone hamburguer (canto superior esquerdo) */}
      <button
        className="menu-hamburguer"
        onClick={() => setAberto(!aberto)}
        title="Menu"
      >
        {aberto ? '✕' : '☰'}
      </button>

      {/* Drawer esquerdo */}
      <div className={`menu-drawer ${aberto ? 'aberto' : ''}`}>
        {/* Logo + Nome */}
        <div className="menu-logo">
          <span className="menu-logo-emoji">🌊</span>
          <span className="menu-logo-nome">RiverGuard</span>
        </div>

        <div className="menu-divisor" />

        {/* Itens do menu */}
        <nav className="menu-nav">
          <button
            className="menu-item"
            onClick={() => handleNavigate('/cadastrar')}
          >
            📋 Cadastrar Barreiras
          </button>
          <button
            className="menu-item"
            onClick={() => handleNavigate('/apadrinhar')}
          >
            🌱 Apadrinhar Barreira
          </button>
        </nav>

        <div className="menu-divisor" />

        {/* Sair no final */}
        <button
          className="menu-item menu-sair"
          onClick={() => handleNavigate('/logout')}
        >
          🚪 Sair
        </button>
      </div>

      {/* Overlay para fechar ao clicar fora */}
      {aberto && (
        <div className="menu-overlay" onClick={() => setAberto(false)} />
      )}
    </>
  );
}

export default MenuLateral;