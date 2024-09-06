import Textbox from "../Textbox/index2"


export default function TextboxHome(){
    const MensagemHome = [
        {
            titulo: "Crie seus vídeos online",
            paragrafo: "Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade.",
            botao: "Começar agora!"
        }
    ]

    return (
        <div className="texto-2">
            <Textbox dados={MensagemHome} />
        </div>
    )
}


