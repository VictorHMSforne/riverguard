import { useState } from 'react';
import { LayoutDashboard, BellPlus, CheckCircle2, Inbox, Users, Clock, TrendingUp } from 'lucide-react';
import Mapa from '../components/Mapa';
import { ecobarreiras, filaAlertas } from '../data/ecobarreirasData';
import Alerta from '../models/Alerta';
import '../App.css';

function Dashboard() {
  const [filtro, setFiltro] = useState('todas');
  const [alertas, setAlertas] = useState([]);

  // Função para gerar alerta aleatório (demonstração)
  const gerarAlerta = () => {
    const ecoAleatorio = ecobarreiras[Math.floor(Math.random() * ecobarreiras.length)];
    const alerta = new Alerta(
      ecoAleatorio.status,
      `${ecoAleatorio.nome}: ${ecoAleatorio.lixo}% de lixo - ${ecoAleatorio.status}`,
      ecoAleatorio
    );
    filaAlertas.enfileirar(alerta);
    setAlertas([...filaAlertas.todosAlertas]);
  };

  // Função para remover o primeiro alerta da fila
  const removerPrimeiroAlerta = () => {
    filaAlertas.desenfileirar();
    setAlertas([...filaAlertas.todosAlertas]);
  };

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

      {/* ── BOTÕES DE DEMONSTRAÇÃO ── */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <button onClick={gerarAlerta} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', background: '#2a9d8f', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
          <BellPlus size={18} strokeWidth={1.5} /> Gerar Alerta (Fila)
        </button>
        <button onClick={removerPrimeiroAlerta} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 20px', background: '#e63946', color: 'white', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
          <CheckCircle2 size={18} strokeWidth={1.5} /> Resolver Primeiro Alerta
        </button>
      </div>

      {/* ── FILA DE ALERTAS ── */}
      {alertas.length > 0 && (
        <div style={{ background: '#2a2a3e', padding: '15px', borderRadius: '12px', marginBottom: '20px' }}>
          <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#f4a261', margin: '0 0 10px 0' }}>
            <Inbox size={20} strokeWidth={1.5} /> Fila de Alertas ({alertas.length})
          </h3>
          {alertas.map((alerta, index) => (
            <div key={alerta.id} style={{
              padding: '8px 12px',
              margin: '5px 0',
              borderRadius: '8px',
              background: index === 0 ? '#3a3a5e' : '#2a2a3e',
              borderLeft: `4px solid ${alerta.tipo === 'crítico' ? '#e63946' : alerta.tipo === 'alerta' ? '#f4a261' : '#2a9d8f'}`
            }}>
              <span style={{ color: '#ccc' }}>#{index + 1}</span>
              {' '}
              <span style={{ color: '#fff' }}>{alerta.mensagem}</span>
              {' '}
              <span style={{ color: '#888', fontSize: '0.8em' }}>{alerta.getTempoDecorrido()}</span>
            </div>
          ))}
        </div>
      )}

      {/* ── MAPA ── */}
      <div className="dash-mapa">
        <Mapa />
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

            {/* Histórico (aparece se hover) */}
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
    </div>
  );
}

export default Dashboard;