import PricingImg from "../asset/img/pricing.png"
import Peta from "../asset/img/peta.png";
import Satwa from "../asset/img/satwa.png";
import Pricing from "./card-component/card-section/pricing.js";
import CardPeta from "./card-component/card-section/peta.js"

function Section() {
    return(
        <div className="body-section">
            <div className="container-section">
                <div className="menu-wrap">
                    <div className="menu satu">
                        <img src={PricingImg}></img>
                        <a href="">Pricing</a>
                    </div>
                    <div className="menu dua">
                        <img src={Peta}></img>
                        <a href="">Peta</a>
                    </div>
                    <div className="menu tiga">
                        <img src={Satwa}></img>
                        <a href="">Satwa</a>
                    </div>
                </div>
                <div className="menu-contain">
                        {/* <Pricing/> */}
                        <CardPeta/>
                </div>
            </div>
        </div>
    )
}
export default Section;