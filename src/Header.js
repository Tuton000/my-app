import logo from './Logo.svg';
import './Header.css';

function Header() {
    return(
        <header className='Header'>
            <img className='Header-Logo' src={logo} alt='Little Lemon website logo.'/>
        </header>
    );
}

export default Header;