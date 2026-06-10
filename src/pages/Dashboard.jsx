import { Link } from 'react-router-dom';
import '../App.css';

function Dashboard() {
  return (
    <div className="dashboard-page">
      <div className="dashboard-header">
        <h1>🌊 RiverGuard</h1>
        <p>Dashboard de Monitoramento</p>
        <Link to="/" className="btn-voltar">← Voltar ao início</Link>
      </div>

      <div className="dashboard-placeholder">
        <div className="placeholder-card">
          <span className="placeholder-icone">🗺️</span>
          <h2>Mapa hidrográfico</h2>
          <p>Em breve: visualização interativa das ecobarreiras</p>
        </div>

        <div className="placeholder-card">
          <span className="placeholder-icone">📊</span>
          <h2>Dados das barreiras</h2>
          <p>Em breve: % de lixo, equipe, relatórios</p>
        </div>

        <div className="placeholder-card">
          <span className="placeholder-icone">⚡</span>
          <h2>Fila de prioridade</h2>
          <p>Em breve: logística inteligente de limpeza</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;