import "./Nav.css";

function Nav() {
    return(
        <nav className="Nav">
            <ul>
                <li><a href="#Home">Home</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#Menu">Menu</a></li>
                <li><a href="#Reservation">Reservation</a></li>
                <li><a href="#Order">Order Online</a></li>
                <li><a href="#Login">Login</a></li>
            </ul>
        </nav>
    );
}

export default Nav;