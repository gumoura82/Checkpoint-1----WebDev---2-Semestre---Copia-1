export default function Cards_Planos({ info }) {
    // Verifica se 'info' é um array válido antes de tentar usar map
    if (!info || info.length === 0) {
      return <p>Nenhuma informação disponível.</p>;
    }
  
    return (
      <>
        {info.map((informacao, index) => (
          <div className="card-planos" key={index}>
            <div className="Plano_do_plano"  style={{ backgroundColor: informacao.color }}>
              <p className="tituloplano">{informacao.plano}</p>
            </div>
            <div className="input-grupo">
              <div className="input-sobre-plano-1">
                <div>
                <p style={{color: informacao.usernum}}>{informacao.usuario}</p>
                </div>
                <p className="input-sobre-plano-promp">{informacao.video}</p>
              </div>
              <div className="input-sobre-plano-2">
                <div>
                <p style={{color: informacao.usernum}}>{informacao.usuario2}</p>
                </div>
              <p className="input-sobre-plano-promp">{informacao.video2}</p>
            </div>
            </div>
            <img src={informacao.img} alt="" />
            <div className="button-sobre-planos">
             <button className="button-sobre-planos-cadastro" style={{backgroundColor: informacao.colorbutton, color: informacao.colorletter}}>{informacao.opcao}</button>
            </div>
          </div>
        ))}
      </>
    );
  }
  