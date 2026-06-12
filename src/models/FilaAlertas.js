class FilaAlertas {
  constructor() {
    this._itens = []; 
  }

  // FIFO: entra no final
  enfileirar(alerta) {
    this._itens.push(alerta);
  }

  // FIFO: sai do início
  desenfileirar() {
    return this._itens.shift();
  }

  // Ver o primeiro sem remover
  primeiro() {
    return this._itens[0];
  }

  // Quantidade de alertas
  get tamanho() {
    return this._itens.length;
  }

  // Retorna cópia da lista
  get todosAlertas() {
    return [...this._itens];
  }

  // Limpar todos
  limpar() {
    this._itens = [];
  }
}

export default FilaAlertas;