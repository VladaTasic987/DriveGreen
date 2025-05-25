import arrowBack from '../Images/ArrowBack.png';
import { Link } from 'react-router-dom';
import notVision from '../Images/NotVision.png';
import googleIcon from '../Images/GoogleIcon.png'

export function Register() {



return (

<div id="register-card">

   <div className='register-header'>
        <img src={arrowBack} alt="arroe-back" />
        <Link 
        to="/"
        className='link-to-wellcome'
        >Nazad</Link>
    </div>  

    <div className='register-title'>
        <h1>Registruj se</h1>
        <h4>Kreiranje naloga</h4>
    </div>       

    <div className='name-input'>
        <label htmlFor="">
            Ime i prezime
            <br />
            <input 
            type="text"
            placeholder='Upisite Vase ime i prezime...'
            />
        </label>
    </div> 

    <div className='email-input'>
        <label htmlFor="">
            Email
            <br />
            <input 
            type="text"
            placeholder='Upisite Vas email...'
            />
        </label>
    </div>

    <div className='password-input'>
        <label htmlFor="">
            Lozinka
            <br />
            <input 
            type="password"
            placeholder='Upisite Vasu lozinku...'
            />

            
        </label>


        <img
        className='not-vision' 
        src={notVision} 
        alt="eye" />
    </div>

    <div className='agree-container'>
    <input 
            type="checkbox" 
            className='check-box'
            />
    <p className='agree-text'>Saglasan sam sa politikom i opstim uslovima poslovanja</p>
    </div>


    
        <Link 
        to="/MapStart"
        className='link-to-map'
        >Registruj se</Link>

        <h4 className='existing-user'>Postojeci korisnik? 
        <Link
        to="/Login"
        className='link-to-login'
        >Prijavi se!</Link> 
        </h4>

        <button 
        className='register-google'
        >
            <img
                src={googleIcon}
                alt="googleicon" />
                Koristi Google nalog
        </button>
        
    

</div>
    )

}