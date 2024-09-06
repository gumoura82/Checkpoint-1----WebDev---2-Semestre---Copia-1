import Textbox from "../Textbox/index2"


export default function TextboxSobre(){
    const MensagemSobre = [
        {
            titulo: "Bem-vindo à revolução dos vídeos!",
            paragrafo: "Somos uma startup com o objetivo de facilitar a produção de conteúdo em larga escala com qualidade profissional, capaz de atingir uma audiência de milhões de seguidores.",
            botao: "Baixe o app"
        }
    ]

    return (
        <div className="texto-1">
            <Textbox dados={MensagemSobre} />
        </div>
    )
}