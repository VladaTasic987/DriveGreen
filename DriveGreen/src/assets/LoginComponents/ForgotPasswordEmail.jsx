import arrowBack from '../Images/ArrowBack.png';
import { Link } from 'react-router-dom';

export function ForgotPasswordEmail() {
    return (
        <div id="forgot-password-container">

            <div className="forgot-password-header">
                <img src={arrowBack} alt='arrow-back' />
                <Link
                    to="/"
                    className='link-to-welcome'
                >
                    Nazad
                </Link>
            </div>

            <div className="forgot-title">
                <h1>Zaboravljena lozinka?</h1>
                <p>Unesite Vaš email radi verifikovanja, a mi ćemo Vam poslati verifikacioni kod</p>
            </div>

            <div className="forgot-input-email">
                <label>
                    Email
                    <br />
                    <input
                        type="text"
                        placeholder='Upišite Vaš email...'
                    />
                </label>
            </div>

            <button className="send-code">Pošalji kod</button>
        </div>
    )
}