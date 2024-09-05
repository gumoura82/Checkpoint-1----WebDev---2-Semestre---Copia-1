

export default function Textbox({ dados }){
    return(
        <>
        {
            dados.map((texto, index) => (
            <div className="textos" key={index}>
                <h1>{texto.titulo}</h1>
                <p>{texto.paragrafo}</p>
                <button>{texto.botao}</button>
            </div>
            ))
        }
        </>
    )
}

