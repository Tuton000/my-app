import footer_logo from './footer_logo.png';

function Footer() {
    return(
        <footer>
            <img src={footer_logo} alt='Little Lemon footer logo'
            width={70} height={140}/>
            <h3>Doormat Namvigation</h3>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Menu</a></li>
                <li><a href="#">Reservation</a></li>
                <li><a href="#">Order Online</a></li>
                <li><a href="#">Login</a></li>
            </ul>
            <h3>Contact</h3>
            <ul>
                <li><a href="#">Address</a></li>
                <li><a href="#">Phone number</a></li>
                <li><a href="#">Email</a></li>
            </ul>
            <h3>Social Medial links</h3>
            <ul>
                <li><a href="#">Address</a></li>
                <li><a href="#">Phone number</a></li>
                <li><a href="#">Email</a></li>
            </ul>
        </footer>
    );
}

export default Footer;