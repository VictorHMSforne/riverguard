function Equipe() {
  const membros = [
    {
      nome: 'Victor',
      papel: 'Fullstack & Arquitetura',
      foto: 'equipe/victor.jpg',
      linkedin: 'https://www.linkedin.com/in/victorhmsforne/',
    },
    {
      nome: 'Thiago',
      papel: 'Backend & Estrutura de Dados',
      foto: 'equipe/thiago.jpg',
      linkedin: 'https://www.linkedin.com/in/thiago-chagas-5213b8252/',
    },
    {
      nome: 'Matheus',
      papel: 'Frontend & UX',
      foto: 'equipe/matheus.png',
      linkedin: 'https://www.linkedin.com/in/matheusrochadev/',
    },
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
              <a
                href={membro.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="membro-avatar"
                title={`Ver perfil de ${membro.nome} no LinkedIn`}
              >
                <img src={import.meta.env.BASE_URL + membro.foto} alt={membro.nome} className="membro-foto" />
              </a>
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