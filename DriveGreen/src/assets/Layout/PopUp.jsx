import chargerSmall from "../Images/ChargerSmall.png"
import { Link } from "react-router-dom"

export function PopUp() {

    return <div id="PopUp">
        <img className={'charger-img'} src={chargerSmall} alt="" />
        <div className="popUp-content">
            <h2 className="popUp-title">Robert Bosch Charging</h2>
            <p className="popUp-address">Omladinskih brigada 90E,<br />Beograd 11070</p>
            <div className="popUp-info">

                <span className="distance">2.5 Km</span>
                <div className="stars">★ ★ ★ ★ ☆</div>
            </div>
            <div className="popUp-bottom">
                <div className="power">
                    <span className="wifi-icon">📶</span>
                    <span>150 KW</span>
                </div>
                <button className="popUp-btn">
                    <Link
                        to="/viewMore"
                    >
                        Prikaži više
                    </Link>
                </button>
            </div>
        </div>
    </div>

}