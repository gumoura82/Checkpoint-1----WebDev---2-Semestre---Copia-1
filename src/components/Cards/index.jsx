export default function Cards({props}){
    return(
        <>
        {
            props.map((dados, index) => (
                <div className="card-social" key={index} style={{backgroundColor: dados.color}}>
                    <div className="num-img">
                        <div>
                        <img src={dados.img} alt="img" />
                        </div>
                        <h3>{dados.num}</h3>
                    </div>
                    <h5>{dados.titulo}</h5>
                    <p>{dados.descricao}</p>
                </div>
            ))
        }
        </>
    )
}