import Planos from "../components/PLanos";
import TextboxSobre from "../components/Sobre_Textbox";

export default function Sobre() {
    return (
        <div className="Sobre">
            <div className="parte1sobre"> 
                <div className="SobreTxt">
                    <TextboxSobre />
                </div>
                <div className="SobreImg">
                    <img src="./Viseo Merge screen 1.png" className="img-1" alt="Image 1" />
                    <img src="./Saved 1.png" className="img-2" alt="Image 2" />
                </div>
            </div>
            <div className="Planos">
            <h1 className="TITULOPLANOS">Planos</h1>
                <Planos />
            </div>
        </div>  
    )
}