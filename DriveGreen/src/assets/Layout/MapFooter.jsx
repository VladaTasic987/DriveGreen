import blackThunder from "../Images/BlackThunder.png"
import arrowRight from "../Images/ArrowRight.png"

export function MapFooter() {

    const footerElements = {
        pinText: "Legenda pinova",
        conditionText: "Uslovi Poslovanja",
        clickForMore: "Klikni za vise",
        thunderIcon: blackThunder,
        arrowRight: arrowRight,
        clickRight: "Klikni za vise",
        clickLeft: "Klikni za vise",
    }


    return (
        <div id="map-footer">
            
            <div className="footer-left">
                <img 
                className="thunder-img"
                src={footerElements.thunderIcon} 
                alt="thunder" />

                <div className="pin-legend">
                    <p className="pin-paragraph">{footerElements.pinText}</p>
                    <div className="footer-text">
                        <h4 className="click-more">{footerElements.clickForMore}</h4>
                        <img 
                        className="arrow-img"
                        src={footerElements.arrowRight} 
                        alt="arrow-right" />
                    </div>
                </div>
            </div>

            <div className="footer-right">
                <h4 className="condition-text">{footerElements.conditionText}</h4>
                <div className="right-content">
                    <p className="paragraph-left">{footerElements.clickLeft}</p>
                    <img 
                    className="arrow-img"
                    src={footerElements.arrowRight} 
                    alt="arrow-img" />
                </div>
            </div>

        </div>
    )

}