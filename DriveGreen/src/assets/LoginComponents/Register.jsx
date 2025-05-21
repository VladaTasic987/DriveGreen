import arrowBack from '../Images/ArrowBack.png';
import { Link } from 'react-router-dom';

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
            type="text"
            placeholder='Upisite Vasu lozinku...'
            />
        </label>
    </div>

    <button className='register-btn'>
        <Link 
        to="/MapStart"
        className='link-to-map'
        >Registruj se</Link>
        
    </button>

</div>
    )

}