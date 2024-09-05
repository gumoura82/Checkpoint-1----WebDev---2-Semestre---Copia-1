export default function Contato(){
    return(
        <div>
        <div>
        <h1>Dúvidas e suporte, entre em contato:</h1>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        </div>
        <svg width="2" height="522" viewBox="0 0 2 522" fill="none" xmlns="http://www.w3.org/2000/svg">
        <line x1="1" y1="4.37114e-08" x2="0.999977" y2="522" stroke="#424141" />
        </svg>
        <div>
        <label htmlFor="nome">Nome: </label>
        <input type="text"id="nome" />
        <label htmlFor="email">Email: </label>
        <input type="email"id="email" />
        <label htmlFor="mensagem">Mensagem: </label>
        <input type="text"id="meansagem" />
    
        </div>

        </div>
    )
}