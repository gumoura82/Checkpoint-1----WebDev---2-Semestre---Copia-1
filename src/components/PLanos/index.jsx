import Cards_Planos from "../Cards_Planos"

export default function Planos(){
    const DadosPlanos = [
        {
           plano:"Individual",
           usuario: "1 Usuario",
           video:"10 Videos R$15",
           opcao: "Cadastrar"
        },
        {
            plano:"Profissional - Times",
           usuario: "1 - 10 Usuarios",
           video:"Videos Ilimitados R$40",
           usuario2: "+10 Usuarios",
           video2:"Videos Ilimitados R$20",
           opcao: "Cadastrar"

        },
        {
            plano:"Corporativo",
            img: "/undraw_Mobile_feed_re_72ta 1.png",
            opcao: "Entre Em Contato"
        }
    ]

    return (
        <div className="PlanosTxt">
            <Cards_Planos info={DadosPlanos} />
        </div>
    )
}