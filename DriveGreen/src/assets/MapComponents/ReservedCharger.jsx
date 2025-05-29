import { MapHeader } from "../Layout/MapHeader";
import { MapFooter } from "../Layout/MapFooter";
import CoungratulationBackground from "../Images/CongratulationBackground.png"
import ReservedIcon from "../Images/ReservedIcon.png"
import DottedLine from "../Images/DottedLine.png"
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import MapBackground from "../Layout/MapBackground";



export function ReservedCharger() {
    const [visible, setVisible] = useState(true);



    const mapRef = useRef();

    function handleDrawRoute() {
        if (mapRef.current) {
            mapRef.current.drawRandomRoute();
        } else {
            console.warn("MapBackground nije učitan ili mapRef nije postavljen.");
        }
        setVisible(newVisible => !newVisible)
    };

    return (
        <div id="reserved-container">
            <MapHeader />

            <div style={{ display: visible ? 'block' : 'none' }}>
                <img src={ReservedIcon} alt="icon reserved" className="icon" />
                <img src={CoungratulationBackground} alt="background image" className="background" />
                <div className="top-div">
                    <h1>Čestitamo!</h1>
                    <p>Vaš punjač je rezervisan!</p>
                </div>

                <img src={DottedLine} alt="dotted line" className="dotted-line" />

                <div className="middle-div">
                    <div className="middle-first">
                        <h1>Stanica</h1>
                        <p>Robert Bosch Charging</p>
                    </div>

                    <div className="middle-second">
                        <h1>Dolazak</h1>
                        <p>31. Maj, 2025, 09:45 am</p>
                    </div>

                    <div className="middle-third">
                        <h1>Trajanje</h1>
                        <p>1hr 30min</p>
                    </div>

                    <div className="middle-fourth">
                        <h1>Ukupno</h1>
                        <p>Besplatno</p>
                    </div>
                </div>

                <div className="buttons-div">
                    <button
                        onClick={handleDrawRoute}
                        className="button-one"
                    >prikaži rutu</button>

                    <Link
                        className="button-two"
                        to="/viewMore"
                    >otkaži rezervaciju</Link>

                </div>
            </div>
            <MapBackground ref={mapRef} style={{ display: visible ? 'none' : 'block' }} />
            <MapFooter />
        </div>
    )
}