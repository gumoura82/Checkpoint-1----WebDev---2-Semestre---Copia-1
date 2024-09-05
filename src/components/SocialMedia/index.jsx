import Cards from "../Cards";

export default function SocialMedia(){
    const dadossocial = [
        {
            num:'01',
            titulo:'Youtube',
            descricao:'aaAaaaaaaaaa',
            color:'red'
        },
        {
            num:'02',
            titulo:'Instragram',
            descricao:'Bbbbbbbbbbbbbb',
            color:'pink'
        }
    ]
    
    return (
        <Cards props={dadossocial}/>
    )
}