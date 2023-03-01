import Bg1 from "../asset/img/bg-1.png"
import Icon from "../asset/img/icon.png"
import Animals1 from "../asset/img/animals1.png"
import Animals2 from "../asset/img/animals2.png"
function Navigation(){
    return(
        <div className="header">
            <img src={Bg1} className="bg-satu"></img>
                <nav>
                    <ul className="nav-left">
                        <li>Home</li>
                        <li>Profile</li>
                        <li>Berita</li>
                    </ul>
                    <button type="sumbit">Login</button>
                </nav>
            <img src={Icon} className="icon"></img>
            <div className="ticketing">
                <div className="side-left">
                    <di className="side">
                        <img src={Animals1}></img>
                        <div>
                            <p className="bold">248+</p>
                            <p className="semi-bold">Animals</p>
                        </div>
                    </di>
                    <di className="side">
                        <img src={Animals2}></img>
                        <div>
                            <p className="bold">128+</p>
                            <p className="semi-bold">Mamalia</p>
                        </div>
                    </di>
                </div>
                <button>Buy Ticket</button>
            </div>
        </div>
    )
}
export default Navigation;