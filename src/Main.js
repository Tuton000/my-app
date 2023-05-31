import './Main.css';
import restaurentfood from './restauranfood.jpg';

function Main() {
    return(
        <main className='Main'>
            <section className='Hero'>
                <div className='Segment Title' ><h1>Little Lemon</h1></div>
                <div className='Segment Subtitle'><h3>Chicago</h3> </div>
                <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups. Publishing industries for previewing layouts and visual mockups.</p>
                <button>Reserve a Table</button>
                {/* <img src={restaurentfood}/> */}
            </section>
            <section className='Highlights'>

            </section>
            <section className='Testimonials'>

            </section>
            <section className='About'>

            </section>
        </main>
    );
}

export default Main;