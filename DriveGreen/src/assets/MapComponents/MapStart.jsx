
import { MapFooter } from "../Layout/MapFooter"
import { MapHeader } from "../Layout/MapHeader"
import { PopUp }  from "../Layout/PopUp.jsx"
import mapBackground from "../Images/MapBackground.png"
import carLocation from "../Images/CarLocation.png"
import blackThunder from "../Images/BlackThunder.png"
import locationSmall from "../Images/LocationSmall.png"
import {useState} from "react";

export function MapStart() {

    const [showPopup, setShowPopup] = useState(false);

    function OnShowPopUp(e){
        e.preventDefault();
        setShowPopup(true);
    }
    function onClosePopUp(){
        setShowPopup(false);
    }
    return (
        <div id="map-start-container">

            <MapHeader/>

                <img
                className="map-background"
                src={mapBackground}
                alt="background"
                onClick={onClosePopUp}/>
            <button className={'popup-button'} onClick={OnShowPopUp}>
                <span className={'charger-location-text'}>

                  <div className={'first'}> Robert Bosch</div>
                   <div> <img src={locationSmall} alt="location"/> 2,5 km / 5 min</div>


                </span>
            </button>
                <img
                className="charger-location"
                src={blackThunder}
                alt="charger" />

            <img
                className={'car-location'}
                src={carLocation}
                alt="car" />
            <MapFooter/>
            {showPopup ? <PopUp showPopup={showPopup}/> : null}
            
        </div>

    )
}