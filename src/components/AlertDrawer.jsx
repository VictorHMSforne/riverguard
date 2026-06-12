// src/components/AlertDrawer.jsx
import { useState } from 'react';
import Alerta from '../models/Alerta';
import { ecobarreiras, filaAlertas } from '../data/ecobarreirasData';

function AlertDrawer() {
  const [aberto, setAberto] = useState(false);
  const [alertas, setAlertas] = useState([]);

  // Gera um alerta aleatório e enfileira
  const gerarAlerta = () => {
    const aleatorio = ecobarreiras[Math.floor(Math.random() * ecobarreiras.length)];
    const alerta = new Alerta(
      aleatorio.status,
      `⚠️ ${aleatorio.nome}: ${aleatorio.lixo}% - ${aleatorio.status}`,
      aleatorio
    );
    filaAlertas.enfileirar(alerta);
    setAlertas([...filaAlertas.todosAlertas]); // atualiza estado
  };

  // Remove o primeiro alerta da fila
  const resolverPrimeiro = () => {
    filaAlertas.desenfileirar();
    setAlertas([...filaAlertas.todosAlertas]);
  };

  // Limpa toda a fila
  const limparFila = () => {
    filaAlertas.limpar();
    setAlertas([]);
  };

  // Conta quantos alertas não lidos (todos são não lidos por simplicidade)
  const naoLidos = alertas.length;

  return (
    <>
      {/* ── ÍCONE DO SINO (sempre visível) ── */}
      <button
        className="sino-btn"
        onClick={() => setAberto(!aberto)}
        title="Notificações"
      >
        🔔
        {naoLidos > 0 && <span className="sino-badge">{naoLidos}</span>}
      </button>

      {/* ── MENU LATERAL (drawer) ── */}
      <div className={`alert-drawer ${aberto ? 'aberto' : ''}`}>
        {/* Cabeçalho do drawer */}
        <div className="drawer-header">
          <h3>📋 Notificações</h3>
          <button className="drawer-close" onClick={() => setAberto(false)}>✕</button>
        </div>

        {/* Botões de ação */}
        <div className="drawer-acoes">
          <button onClick={gerarAlerta} className="btn-gerar">➕ Gerar Alerta</button>
          <button onClick={resolverPrimeiro} className="btn-resolver" disabled={alertas.length === 0}>
            ✅ Resolver Primeiro
          </button>
          <button onClick={limparFila} className="btn-limpar" disabled={alertas.length === 0}>
            🗑️ Limpar Tudo
          </button>
        </div>

        {/* Lista de alertas */}
        <div className="drawer-lista">
          {alertas.length === 0 ? (
            <p className="drawer-vazio">Nenhum alerta pendente 🎉</p>
          ) : (
            alertas.map((alerta, index) => (
              <div
                key={alerta.id}
                className={`drawer-item alerta-${alerta.tipo}`}
                style={{
                  borderLeft: `4px solid ${
                    alerta.tipo === 'crítico' ? '#e63946' :
                    alerta.tipo === 'alerta' ? '#f4a261' : '#2a9d8f'
                  }`
                }}
              >
                <span className="drawer-item-num">#{index + 1}</span>
                <span className="drawer-item-msg">{alerta.mensagem}</span>
                <span className="drawer-item-time">{alerta.getTempoDecorrido()}</span>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Overlay (fundo escuro) quando o drawer está aberto */}
      {aberto && <div className="drawer-overlay" onClick={() => setAberto(false)} />}
    </>
  );
}

export default AlertDrawer;