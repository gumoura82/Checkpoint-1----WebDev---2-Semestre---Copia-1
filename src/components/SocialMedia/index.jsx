import Cards from "../Cards";

export default function SocialMedia(){
    const dadossocial = [
        {
            num:'01',
            titulo:'Youtube',
            descricao:'Produza conteúdo cativante e conquiste seu público com vídeos de alta qualidade no maior palco digital do mundo.',
            color:'#F1C2B0',
            img: '/Ellipse 27.png'

        },
        {
            num:'02',
            titulo:'Instragram',
            descricao:'Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok.',
            color:'#F9EB98',
            img: '/Ellipse 26.png'

        },
        {
            num:'03',
            titulo:'Facebook',
            descricao:'Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook.',
            color:'#C0D9DD',
            img: '/Ellipse 26 (1).png'
        },
        {
            num:'04',
            titulo:'Instagram',
            descricao:'Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels.',
            color:'#6975E8',
            img: '/Ellipse 27 (1).png'
        }
    ]
    
    return (
        <Cards props={dadossocial}/>
    )
}