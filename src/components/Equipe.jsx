function Equipe() {
  const membros = [
    { nome: 'Victor',   papel: 'Fullstack & Arquitetura',  emoji: '⚙️' },
    { nome: 'Thiago',  papel: 'Frontend & UX',             emoji: '🎨' },
    { nome: 'Matheus', papel: 'Backend & Banco de Dados',  emoji: '🗄️' },
  ];

  return (
    <section id="equipe" className="equipe">
      <div className="equipe-container">
        <div className="section-header">
          <span className="section-tag">NOSSA EQUIPE</span>
          <h2 className="section-titulo">Quem está por trás do RiverGuard</h2>
        </div>

        <div className="equipe-grid">
          {membros.map((membro, i) => (
            <div className="membro-card" key={i}>
              <div className="membro-avatar">{membro.emoji}</div>
              <h3 className="membro-nome">{membro.nome}</h3>
              <p className="membro-papel">{membro.papel}</p>
              <div className="membro-linha"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Equipe;