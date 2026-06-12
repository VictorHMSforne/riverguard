import { useState } from 'react';
import { LayoutDashboard, Users, Clock, TrendingUp } from 'lucide-react';
import Mapa from '../components/Mapa';
import AlertDrawer from '../components/AlertDrawer';
import { ecobarreiras } from '../data/ecobarreirasData';
import MenuLateral from '../components/MenuLateral';
import '../App.css';

function Dashboard() {
  const [filtro, setFiltro] = useState('todas');

  const filtrar = () => {
    if (filtro === 'crítico') return ecobarreiras.filter(e => e.status === 'crítico');
    if (filtro === 'alerta') return ecobarreiras.filter(e => e.status === 'alerta');
    if (filtro === 'normal') return ecobarreiras.filter(e => e.status === 'normal');
    return ecobarreiras;
  };

  const lista = filtrar();
  const media = (ecobarreiras.reduce((s, e) => s + e.lixo, 0) / ecobarreiras.length).toFixed(0);
  const criticas = ecobarreiras.filter(e => e.status === 'crítico').length;

  return (
    
    <div className="dashboard">
      <MenuLateral />
      {/* ── TOPO ── */}
      <div className="dash-topo">
        <h2 className="dash-titulo">
          <LayoutDashboard size={24} strokeWidth={1.5} />
          Monitoramento de Ecobarreiras
        </h2>
        <div className="dash-filtros">
          {['todas', 'crítico', 'alerta', 'normal'].map(tipo => (
            <button
              key={tipo}
              className={`dash-btn ${filtro === tipo ? 'ativo' : ''}`}
              onClick={() => setFiltro(tipo)}
            >
              {tipo.charAt(0).toUpperCase() + tipo.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* ── RESUMO ── */}
      <div className="dash-resumo">
        <div className="resumo-card">
          <span className="resumo-num">{ecobarreiras.length}</span>
          <span className="resumo-label">Ecobarreiras</span>
        </div>
        <div className="resumo-card">
          <span className="resumo-num">{media}%</span>
          <span className="resumo-label">Média de lixo</span>
        </div>
        <div className="resumo-card">
          <span className="resumo-num">{criticas}</span>
          <span className="resumo-label">Críticas</span>
        </div>
      </div>

      {/* ── MAPA ── */}
      <div className="dash-mapa">
        <Mapa filtro={filtro} />
      </div>

      {/* ── CARDS ── */}
      <div className="dash-grid">
        {lista.map(eco => (
          <div className={`eco-card eco-${eco.status}`} key={eco.id}>
            <div className="eco-header">
              <h3 className="eco-nome">{eco.nome}</h3>
              <span className="eco-local">{eco.local}</span>
            </div>

            <div className="eco-bar-container">
              <div className="eco-bar" style={{ width: `${eco.lixo}%` }} />
            </div>
            <span className="eco-porcentagem">{eco.lixo}% de lixo</span>

            <div className="eco-footer">
              <span className="eco-equipe"><Users size={14} strokeWidth={1.5} /> {eco.equipe.nome}</span>
              <span className="eco-update"><Clock size={14} strokeWidth={1.5} /> {eco.getUpdateFormatado()}</span>
            </div>

            {eco.historicoLixo.length > 0 && (
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '10px', fontSize: '0.8em', color: '#888' }}>
                <TrendingUp size={14} strokeWidth={1.5} /> Média histórica: {eco.getMediaHistorico().toFixed(1)}%
              </div>
            )}
          </div>
        ))}
      </div>

      {lista.length === 0 && (
        <p className="dash-vazio">Nenhuma ecobarreira encontrada com esse filtro.</p>
      )}

      {/* ── SINO DE NOTIFICAÇÕES (sempre visível) ── */}
      <AlertDrawer />
    </div>
  );
}

export default Dashboard;
