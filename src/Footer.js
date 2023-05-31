import footer_logo from './footer_logo.png';
import './Footer.css';

function Footer() {
    return(
        <footer className='Footer'>
            <img className='Footer-Logo' src={footer_logo} alt='Little Lemon footer logo'
            />
            <div className='Footer-Nav'>
                <h3>Doormat Namvigation</h3>
                <ul>
                    <li><a href="#Home">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#Menu">Menu</a></li>
                    <li><a href="#Reservation">Reservation</a></li>
                    <li><a href="#Order">Order Online</a></li>
                    <li><a href="#Login">Login</a></li>
                </ul>
            </div>
            <div className='Footer-Nav'>
                <h3>Contact</h3>
                <ul>
                    <li><a href="#Address">Address</a></li>
                    <li><a href="#Phone">Phone number</a></li>
                    <li><a href="#Email">Email</a></li>
                </ul>
            </div>
            <div className='Footer-Nav'>
                <h3>Social Medial links</h3>
                <ul>
                    <li><a href="#Address">Address</a></li>
                    <li><a href="#Phone">Phone number</a></li>
                    <li><a href="#Email">Email</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;