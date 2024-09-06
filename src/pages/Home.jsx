import TextboxHome from "../components/Home_Boxtext";
import SocialMedia from "../components/SocialMedia";

export default function Home() {
    return (
        <>
        <div className="Menu">
            <div className="TxtImg">
            <TextboxHome />
            <img src="public/Hero image.png" alt="Hero Image" />
            </div>
            <div className="SocialMidia">
            <SocialMedia />
            </div>
                
        </div>
        </>
    )
}