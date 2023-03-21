import Checklist from "../checklist.png";

function Pricing() {
    return(
        <div className="container-card">
            <div className="wraper-card">
             <h2>Pricing</h2>
             <div className="card-price-contain">
                <div className="card-price-parent">
                    <div className="card-price">
                        <h3>Senin - Jumat</h3>
                        <div className="price-list-contain">
                        <h2><span>Rp</span><span>50</span><span>ribu</span></h2>
                            <div className="pricelist-parent">
                                <div className="price-list">
                                    <img src={Checklist}></img>
                                    <p>Voucher Makan</p>
                                </div>
                                <div className="price-list">
                                    <img src={Checklist}></img>
                                    <p>2 Token Wahana</p>
                                </div>
                                <div className="price-list">
                                    <img src={Checklist}></img>
                                    <p>3 Dorprice</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card-price">
                        <h3>Sabtu - minggu</h3>
                        <div className="price-list-contain">
                            <h2><span>Rp</span><span>80</span><span>ribu</span></h2>
                            <div className="pricelist-parent">
                                <div className="price-list">
                                    <img src={Checklist}></img>
                                    <p>Voucher Makan</p>
                                </div>
                                <div className="price-list">
                                    <img src={Checklist}></img>
                                    <p>3 Token Wahana</p>
                                </div>
                                <div className="price-list">
                                    <img src={Checklist}></img>
                                    <p>4 Token Game</p>
                                </div>
                                <div className="price-list">
                                    <img src={Checklist}></img>
                                    <p>Scooter 3 jam</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
            </div>
        </div>
    )
}
export default Pricing;