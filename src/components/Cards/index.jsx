export default function Cards({props}){
    return(
        <>
        {
            props.map((dados, index) => (
                <div className="card-social" key={index} style={{backgroundColor: dados.color}}>
                    <img src={dados.img} alt="img" />
                    <h3>{dados.num}</h3>
                    <h5>{dados.titulo}</h5>
                    <p>{dados.descricao}</p>
                </div>
            ))
        }
        </>
    )
}