import Pricing from "../asset/img/pricing.png";
import Peta from "../asset/img/peta.png";
import Satwa from "../asset/img/satwa.png";
import Card from "./card.js";

function Section() {
    return(
        <div className="container-section">
            <div className="menu-wrap">
                <div className="menu satu">
                    <img src={Pricing}></img>
                    <p>Pricing</p>
                </div>
                <div className="menu dua">
                    <img src={Peta}></img>
                    <p>Peta</p>
                </div>
                <div className="menu tiga">
                    <img src={Satwa}></img>
                    <p>Satwa</p>
                </div>
            </div>
            <div className="menu-contain">
                    <Card/>
            </div>
        </div>
    )
}
export default Section;