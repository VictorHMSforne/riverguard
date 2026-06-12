import { Map, Activity, Zap, HeartHandshake, Cpu, FileText } from 'lucide-react';

function Funcionalidades() {
  const cards = [
    {
      Icone: Map,
      titulo: 'Mapa hidrográfico interativo',
      desc: 'Visualize ecobarreiras em rios do Paraná com pins interativos. Clique para ver dados de ocupação, equipe e histórico de coleta.',
    },
    {
      Icone: Activity,
      titulo: 'Monitoramento em tempo real',
      desc: 'Acompanhe o nível de lixo armazenado em cada barreira, quantas pessoas estão trabalhando e o status atual da operação.',
    },
    {
      Icone: Zap,
      titulo: 'Fila de prioridade inteligente',
      desc: 'Algoritmo de fila de prioridades determina quais barreiras precisam de atenção imediata, otimizando a logística de limpeza.',
    },
    {
      Icone: HeartHandshake,
      titulo: 'Padrinhos e comunidade',
      desc: 'Investidores e apoiadores podem acompanhar o impacto direto de sua contribuição em cada ecobarreira apadrinhada.',
    },
    {
      Icone: Cpu,
      titulo: 'Integração IoT',
      desc: 'Sensores conectados enviam dados automaticamente para a plataforma, eliminando registros manuais e erros humanos.',
    },
    {
      Icone: FileText,
      titulo: 'Relatórios detalhados',
      desc: 'Lixo coletado por dia, semana e mês. Dados históricos para análise de eficiência e prestação de contas pública.',
    },
  ];

  return (
    <section id="funcionalidades" className="funcionalidades">
      <div className="funcionalidades-container">
        <div className="section-header">
          <span className="section-tag">FUNCIONALIDADES</span>
          <h2 className="section-titulo">O que o RiverGuard oferece</h2>
        </div>

        <div className="funcionalidades-grid">
          {cards.map((card, i) => (
            <div className="func-card" key={i}>
              <div className="func-card-icone">
                <card.Icone size={32} strokeWidth={1.5} />
              </div>
              <h3 className="func-card-titulo">{card.titulo}</h3>
              <p className="func-card-desc">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Funcionalidades;