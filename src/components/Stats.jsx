function Stats() {
  const itens = [
    { valor: '100%',  label: 'Rastreamento de capacidade por barreira' },
    { valor: 'IoT',   label: 'Sensores integrados em tempo real' },
    { valor: 'Fila',  label: 'Prioridade inteligente de limpeza' },
    { valor: 'ODS 6', label: 'Alinhado aos objetivos da ONU' },
  ];

  return (
    <section className="stats">
      {itens.map((item, i) => (
        <div className="stats-item" key={i}>
          <div className="stats-valor">{item.valor}</div>
          <div className="stats-label">{item.label}</div>
        </div>
      ))}
    </section>
  );
}

export default Stats;