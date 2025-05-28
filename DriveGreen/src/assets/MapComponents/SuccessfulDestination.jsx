import { MapHeader } from "../Layout/MapHeader"
import { MapFooter } from "../Layout/MapFooter"
import congradulationBackground from "../Images/CongratulationBackground.png"
import dottedLine from "../Images/DottedLine.png"
import chargerLarge from "../Images/ChargerLarge.png"
import { Link } from "react-router-dom"



export function SuccessfulDestination() {


    return (

        
        <div id="success-container">
            <MapHeader/>

            <div className="middle-content">
                
                <img 
                className="background-image"
                src={congradulationBackground} alt="background" />

                <div className="text-container">
                <h2 className="sucess-text">Uspesno ste stigli na destinaciju</h2>
                </div>

                <p className="ready-text">Vas punjac je spreman</p>

                <img 
                className="dotted-line"
                src={dottedLine} 
                alt="line" />

                <h3 className="station-text">Stanica</h3>

                <h1 className="robert-bosch">Robert Bosch Charging</h1>

                <img 
                className="charger-img"
                src={chargerLarge} 
                alt="charger" />

                <Link className="first-button">ZAPOCNI PUNJENJE</Link>
                <Link 
                to="/mapStart"
                className="second-button">OTKAZI REZERVACIJU</Link>

            </div>

            <MapFooter/>
        </div>
    )

}