import PropTypes from 'prop-types';

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

// Validação das props com PropTypes
Textbox.propTypes = {
    dados: PropTypes.arrayOf(
        PropTypes.shape({
            titulo: PropTypes.string.isRequired,
            paragrafo: PropTypes.string.isRequired,
            botao: PropTypes.string.isRequired,
        })
    ).isRequired,
};