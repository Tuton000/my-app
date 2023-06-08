import {Route, Routes} from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';

import Home from './pages/Home';
import Bookings from './pages/Bookings';
import ConfirmedBooking from './pages/ConfirmedBooking';

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/bookings' element={<Bookings />}/>
          <Route path='/booking-confirmation'
          element={<ConfirmedBooking />}/>
        </Routes>
      </Main>
      <Footer />
    </>
  );
}

export default App;
