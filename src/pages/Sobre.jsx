import TextboxSobre from "../components/Sobre_Textbox";

export default function Sobre() {
    return (
        <div className="Sobre">
            <div className="parte1sobre"> 
                <div className="SobreTxt">
                    <TextboxSobre />
                </div>
                <div className="SobreImg">
                    <img src="public\Viseo Merge screen 1.png" className="img-1" alt="" />
                    <img src="public\Saved 1.png" className="img-2" alt="" />
                </div>
            </div>
        </div>
    )
}