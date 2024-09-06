export default function Cards_Planos({ info }) {
    // Verifica se 'info' é um array válido antes de tentar usar map
    if (!info || info.length === 0) {
      return <p>Nenhuma informação disponível.</p>;
    }
  
    return (
      <>
        {info.map((informacao, index) => (
          <div
            className="card-planos"
            key={index}
            style={{ backgroundColor: informacao.color }}
          >
            <p>{informacao.plano}</p>
            <p>{informacao.usuario}</p>
            <p>{informacao.video}</p>
            <p>{informacao.usuario2}</p>
            <p>{informacao.video2}</p>
            <img src={informacao.img} alt="" />
            <p>{informacao.opcao}</p>
          </div>
        ))}
      </>
    );
  }
  