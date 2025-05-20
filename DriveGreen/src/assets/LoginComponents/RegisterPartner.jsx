import arrowBack from "../Images/ArrowBack.png";
import googleIcon from "../Images/GoogleIcon.png";

import {Link} from "react-router-dom";

export function RegisterPartner() {

    return (

        <div id="register-partner-card">

            <div className='register-header'>
                <img src={arrowBack} alt="arroe-back" />
                <Link
                    to="/"
                    className='link-to-wellcome'
                >Nazad</Link>
            </div>

            <div className='register-title'>
                <h1>Registruj se</h1>
            </div>

            <div className='name-input'>
                <label htmlFor="">
                    Vaše ime / ime Kompanije
                    <br />
                    <input
                        type="text"
                        placeholder='Upišite Vaše ime ili ime Kompanije...'
                    />
                </label>
            </div>

            <div className='email-input'>
                <label htmlFor="">
                    Email
                    <br />
                    <input
                        type="text"
                        placeholder='Upišite Vaš email...'
                    />
                </label>
            </div>

            <div className='password-input'>
                <label htmlFor="">
                    Lozinka
                    <br />
                    <input
                        type="password"
                        placeholder='••••••••••'

                        />

                </label>
            </div>
            <div className='location-input'>
                <label htmlFor="">
                    Geolokacija
                    <br />
                    <input
                        type="text"
                        placeholder='Upišite Vašu tačnu geolokaciju'
                    />
                </label>
            </div>

            <div className='dropdown-list'>

                <label htmlFor="">
                    Količina punjača 
                    <br />
                    <select name="Punjači" id="Punjači">
                        <option value="1 punjač">1 punjač</option>
                        <option value="2 punjač">2 punjač</option>
                        <option value="3 punjač">3 punjač</option>
                    </select>
                </label>


                <label htmlFor="">
                    KW
                    <br />
                    <select name="Kw" id="Kw">
                        <option value="11">11</option>
                        <option value="22">22</option>
                        <option value="150">150</option>
                        <option value="250">250</option>
                    </select>
                </label>

                <label htmlFor="">
                    Način naplate
                    <br />
                    <select name="Naplata" id="Naplata">
                        <option value="0">Besplatno</option>
                        <option value="100">100 rsd/min</option>
                        <option value="120">120 rsd/min</option>
                        <option value="130">130 rsd/min</option>
                    </select>
                </label>

            </div>

            <div className={'checkbox-input'}>
                <input type="checkbox" id="" />
                <span className={'checkbox-span'}>  &nbsp;Saglasan sam sa kupovinom i opštim uslovima poslovanja</span>
            </div>

                <button className={'login-button'}>Registruj se</button>
                    <h4>Postojeći korisnik? &nbsp;
                        <Link
                            to="/login" className='link-to-login'
                        >Prijavi se!</Link>
                    </h4>

            <button className={'login-google'}>
                <img src={googleIcon} alt="googleIcon" />
                Koristi Google nalog
            </button>



        </div>
    )

}