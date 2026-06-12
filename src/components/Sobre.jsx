function Sobre() {
  return (
    <section id="sobre" className="sobre">
      <div className="sobre-container">
        <div className="sobre-visual">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6XAb_jyQa1r_2Z4LONVnmEsrRQ1xKuzPoTw&s"
            alt="Rio monitorado pelo RiverGuard"
            className="sobre-img"
          />
        </div>

        <div className="sobre-conteudo">
          <span className="section-tag">SOBRE O PROJETO</span>

          <h2 className="section-titulo">
            Tecnologia a serviço<br />dos nossos rios
          </h2>

          <p className="sobre-texto">
            O RiverGuard é uma aplicação web desenvolvida como projeto avaliativo 
            de Engenharia de Software na Unicesumar. Nosso objetivo é demonstrar 
            como conceitos como modelagem orientada a objetos, estruturas de dados 
            e integração IoT podem resolver problemas ambientais reais.
          </p>

          <p className="sobre-texto">
            O sistema gerencia o nível de preenchimento de ecobarreiras fluviais 
            e automatiza a priorização de limpeza, tornando a gestão ambiental 
            mais eficiente e transparente para toda a comunidade.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Sobre;