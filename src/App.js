import {Route, Routes} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

import Home from './pages/Home';
import Bookings from './pages/Bookings';
import ConfirmedBooking from './pages/ConfirmedBooking';

import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/reservations' element={<Bookings />}/>
          <Route path='/reservation-confirmation'
          element={<ConfirmedBooking />}/>
        </Routes>
      </Main>
      <Footer />
    </>
  );
}

export default App;
