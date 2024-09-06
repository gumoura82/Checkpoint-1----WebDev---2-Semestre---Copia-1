import TextboxHome from "../components/Home_Boxtext";
import SocialMedia from "../components/SocialMedia";

export default function Home() {
    return (
        <>
        <div className="menu">
            <div className="TxtImg">
                <TextboxHome />
                <div className="img-textimg">
                <img src="/Hero image.png" alt="Hero Image" />
                </div>
            </div>
            <div className="SocialMidia">
                <SocialMedia />
            </div>
        </div>
        </>
    )
}