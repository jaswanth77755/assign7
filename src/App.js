import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.css'; // Import your main CSS file
import './pages/Pages.css'
import Home from './pages/Home';
import Header from './components/Header';
import Login from './pages/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import MoviesList from './components/MoviesList';
import Movies from './pages/Movies';
import Booking from './pages/Booking';
import Events from './pages/Events';
import Plays from './pages/Plays';
import Streaming from './pages/Streaming';
import Sports from './pages/Sports'; 
import Activities from './pages/Activities';
import Listyour from './pages/Listyour';
import Footer from './components/Footer'; 
import Corporate from './pages/Corporate';
import Offers from './pages/Offers';
import Giftcards from './pages/Giftcards';
// Home component

// Main App component with routes
function App() {
  return (
   <Router>
      <Header />  {/* Always at top */}
      <div style={{ marginTop: '10px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add other routes here */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/movieslist" element={<MoviesList />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/events" element={<Events />} />
          <Route path="/plays" element={<Plays />} />
          <Route path="/stream" element={<Streaming />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/listyourshow" element={<Listyour />} />
          <Route path="/corporate" element={<Corporate />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/giftcards" element={<Giftcards />} />
            {/* Add more routes as needed */}
          <Route path="/footer" element={<Footer />} />
            {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
} 

export default App;
