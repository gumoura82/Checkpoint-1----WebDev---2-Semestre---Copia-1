export default function Contato() {
    return (
        <>
            <div className="contact-geral">
                <div className="text-contact">
                    <h1>Dúvidas e suporte, entre em contato:</h1>
                    <div className="imgs-contact">
                        <img src="./Group 1000001749.png" alt="img-tt" />
                        <img src="./Group 1000001750.png" alt="img-insta" />
                        <img src="./Group 1000001751.png" alt="img-dc" />
                    </div>
                </div>
                <div className="svg-linha">
                    <svg width="2" height="5v22" viewBox="0 0 2 522" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <line x1="1" y1="4.37114e-08" x2="0.999977" y2="522" stroke="#CFCDCD" stroke-width="2" />
                    </svg>
                </div>
                <div className="inputs-contacts">
                    <div className="input-contacts-labels/inputs">
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" id="nome" />
                    </div>
                    <div className="input-contacts-labels/inputs">
                        <label htmlFor="mail">E-mail:</label>
                        <input type="mail" id="mail" />
                    </div>
                    <div className="input-contacts-labels-inputs-msg">
                        <label htmlFor="msg">Mensagem:</label>
                        <input type="text" id="msg" className="input-self"/>
                    </div>
                    <a href="#" className="button_contact">Enviar</a>
                </div>
            </div>
        </>
    )
}