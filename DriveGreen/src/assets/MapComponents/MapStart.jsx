
import { MapFooter } from "../Layout/MapFooter"
import { MapHeader } from "../Layout/MapHeader"
import { PopUp }  from "../Layout/PopUp.jsx"
import mapBackground from "../Images/MapBackground.png"
import carLocation from "../Images/CarLocation.png"
import chargerLocation from "../Images/ChargerLocation.png"
import location from "../Images/Location.png"

export function MapStart() {

    

    return (
        <div>

        <div id="map-start-container">

            <MapHeader/>

                <img
                className="map-background"
                src={mapBackground}
                alt="background" />
                <span className={'charger-location-text'}>
                  <div className={'first'}> Robert Bosch</div>
                   <div> <img src={location} alt="location"/> 2,5 km / 5 min</div>


                </span>

                <img
                className="charger-location"
                src={chargerLocation}
                alt="charger" />

            <img
                className={'car-location'}
                src={carLocation}
                alt="car" />
            <MapFooter/>
            
        </div>
            <PopUp/>
        </div>
    )
}