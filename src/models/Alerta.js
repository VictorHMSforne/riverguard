class Alerta {
  constructor(tipo, mensagem, ecobarreira) {
    this.id = Date.now() + Math.random(); // ID único
    this.tipo = tipo;         // 'info' | 'alerta' | 'critico'
    this.mensagem = mensagem; // texto descritivo
    this.ecobarreira = ecobarreira; // referência ao objeto Ecobarreira
    this.data = new Date();   // timestamp
    this.lida = false;        // começa como não lida
  }

  marcarComoLida() {
    this.lida = true;
  }

  getTempoDecorrido() {
    const agora = new Date();
    const diffMs = agora - this.data;
    const diffMin = Math.floor(diffMs / 60000);
    
    if (diffMin < 60) return `${diffMin} min atrás`;
    const diffHoras = Math.floor(diffMin / 60);
    return `${diffHoras}h atrás`;
  }
}

export default Alerta;