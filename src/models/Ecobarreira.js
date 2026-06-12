class Ecobarreira {
  constructor(id, nome, local, lixo, equipe, status = 'normal') {
    this.id = id;
    this.nome = nome;
    this.local = local;       // nome do rio
    this.lixo = lixo;         // porcentagem de lixo (0-100)
    this.equipe = equipe;     // objeto Equipe
    this.status = status;     // 'normal' | 'alerta' | 'crítico'
    this.update = new Date(); // data da última atualização
    this.historicoLixo = [];  // LISTA para armazenar histórico
  }

  // Método: atualiza o nível de lixo
  atualizarLixo(novoLixo) {
    // Guarda o valor anterior no histórico
    this.historicoLixo.push({
      valor: this.lixo,
      data: this.update
    });

    // Atualiza para o novo valor
    this.lixo = novoLixo;
    this.update = new Date();
    this.atualizarStatus();
  }

  // Método: define o status baseado na porcentagem
  atualizarStatus() {
    if (this.lixo >= 70) {
      this.status = 'crítico';
    } else if (this.lixo >= 40) {
      this.status = 'alerta';
    } else {
      this.status = 'normal';
    }
  }

  // Método: calcula a média do histórico
  getMediaHistorico() {
    if (this.historicoLixo.length === 0) return 0;
    const soma = this.historicoLixo.reduce((acc, item) => acc + item.valor, 0);
    return soma / this.historicoLixo.length;
  }

  // Método: formata a data de update
  getUpdateFormatado() {
    const dia = String(this.update.getDate()).padStart(2, '0');
    const mes = String(this.update.getMonth() + 1).padStart(2, '0');
    const hora = String(this.update.getHours()).padStart(2, '0');
    const min = String(this.update.getMinutes()).padStart(2, '0');
    return `${dia}/${mes} ${hora}:${min}`;
  }
}

export default Ecobarreira;