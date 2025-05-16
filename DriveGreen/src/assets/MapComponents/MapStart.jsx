
import { MapFooter } from "../Layout/MapFooter"
import { MapHeader } from "../Layout/MapHeader"
import mapBackground from "../Images/MapBackground.png"

export function MapStart() {

    

    return (

        <div id="map-start-container">

            <MapHeader/>
                <img 
                className="map-background"
                src={mapBackground} 
                alt="background" />
            <MapFooter/>
            
        </div>

    )
}