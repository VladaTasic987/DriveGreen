export function ForgotCodePassword() {
    return (
        <div id="otp-container">
            <div className="four-digit-container">
                <h1>Unesite četvorocifreni kod</h1>
                <p>Četvorocifreni kod koji ste primili na<br /> prethodno navedenu email adresu.</p>
                <div className="inputs">
                    <input type="text" maxLength="1" className="otp-input" />
                    <input type="text" maxLength="1" className="otp-input" />
                    <input type="text" maxLength="1" className="otp-input" />
                    <input type="text" maxLength="1" className="otp-input" />
                </div>

                <div className="otp-buttons">
                    <button className="confirm">Potvrdi</button>
                    <button className="cancel">Otkaži</button>
                </div>
            </div>
        </div>
    )
}