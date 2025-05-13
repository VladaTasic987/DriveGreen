import { Link } from 'react-router-dom';
import arrowBack from '../Images/ArrowBack.png';
import googleIcon from '../Images/GoogleIcon.png';

export function Login() {

    return (
        <div id='login-card'>

            <div className='login-header'>

                <img src={arrowBack} alt="arrow-back" />

                <Link
                    to="/"
                    className='link-to-wellcome'
                >Nazad</Link>
            </div>


            <div className='login-title'>
                <h1>Prijavi se</h1>
                <p>Ulogujte se na Vaš nalog</p>
            </div>

            <div className='separator'></div>

            <div className='login-inputs-email'>
                <label htmlFor="">
                    Email
                    <br />
                    <input
                        type="text"
                        placeholder='Vaša email adresa'
                    />
                </label>
            </div>

            <div className='login-inputs-password'>
                <label htmlFor="">
                    Lozinka
                    <br />
                    <input
                        type="password"
                        placeholder='Vaša lozinka'
                    />
                </label>
            </div>

            <Link
                to="/forgot">
                <h4>Zaboravljena lozinka</h4>
            </Link>


            <button className='login-button'>Prijavi se</button>

            <button className='login-google'>
                <img
                    src={googleIcon}
                    alt="googleicon" />
                Koristi Google nalog</button>

        </div>
    )

}
