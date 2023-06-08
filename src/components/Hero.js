import { Link } from 'react-router-dom';

import './Hero.css';
import restaurantFoodImage from '../assets/restaurant-food.jpg';

const Hero = () => {
    return (
        <section className='hero'>
            <div className='container grid'>
                <div className='hero-information'>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>
                        We are  a family owned Maditernnanean restaurant,
                        focused on traditional recipes served with morden twist.
                    </p>
                    <Link className="button-primary" to="/bookings">
                        Reserve a table
                    </Link>
                </div>
                <img
                    className="hero-image"
                    src={restaurantFoodImage}
                    alt="Restaurant food"
                />
            </div>
        </section>
    );
}

export default Hero;
