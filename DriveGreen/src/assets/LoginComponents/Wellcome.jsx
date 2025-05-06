import { Link } from 'react-router-dom';
import logo from '../Images/Logo.png'

export function Wellcome() {

    return (
        <div id='wellcome-card'>
            <img src={logo} alt="logo" />

            <p>Postojeci korisnik / novi korisnik</p>

            <button>
                <Link 
                to="/login" className='link-to-login'>
                Prijavi se</Link>
            </button>

            <h4>Novi korisnik? &nbsp; 
                <Link 
                to="/register" className='link-to-register'
                >Kreiraj svoj nalog!</Link>
            </h4>

        </div>
    )

}