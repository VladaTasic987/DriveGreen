import { MapHeader } from "../Layout/MapHeader"
import { MapFooter } from "../Layout/MapFooter"
import congradulationBackground from "../Images/CongratulationBackground.png"
import dottedLine from "../Images/DottedLine.png"
import chargerInCar from "../Images/ChargerInCar.png"
import { Link } from "react-router-dom"



export function CongradulationsCharging() {


    return (

        
        <div id="congrads-container">
            <MapHeader/>

            <div className="middle-content">
                
                <img 
                className="background-image"
                src={congradulationBackground} alt="background" />

                <div className="text-container">
                <h2 className="sucess-text">Cestitamo</h2>
                </div>

                <p className="ready-text">Punjenje je uspesno zavrseno</p>

                <img 
                className="dotted-line"
                src={dottedLine} 
                alt="line" />

                <h3 className="station-text">Stanica</h3>

                <h1 className="robert-bosch">Robert Bosch Charging</h1>

                <img 
                className="charger-img"
                src={chargerInCar} 
                alt="charger" />

                <Link
                 className="first-button">OCENI STANICU</Link>
                <Link 
                
                className="second-button">IZADJI</Link>

            </div>

            <MapFooter/>
        </div>
    )

}