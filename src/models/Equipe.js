class Equipe {
  constructor(id, nome, cor) {
    this.id = id;
    this.nome = nome;   // 'Alpha', 'Beta', 'Gamma'
    this.cor = cor;     // '#e63946', '#2a9d8f', etc.
    this.membros = [];  // lista de membros (strings)
  }

  adicionarMembro(nome) {
    this.membros.push(nome);
  }

  getQuantidadeMembros() {
    return this.membros.length;
  }
}

export default Equipe;