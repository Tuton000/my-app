import logo from './logo.png';

function Header() {
    return(
        <header>
            <img src={logo} alt='Little Lemon website logo.'
            width={380} height={80}/>
        </header>
    );
}

export default Header;