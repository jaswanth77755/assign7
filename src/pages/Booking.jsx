import React, { useState } from 'react';
import '../App.css';
import movie1 from '../assets/m1.jpg';
import movie2 from '../assets/m2.jpg';
import movie3 from '../assets/m3.jpg';
import movie4 from '../assets/m4.jpg';
import logo from '../assets/logo.png'

const BookMyShowClone = () => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [selectedTheater, setSelectedTheater] = useState(null);
  const [selectedShowTime, setSelectedShowTime] = useState(null);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookingStep, setBookingStep] = useState(1); // 1: movie, 2: theater, 3: seats, 4: confirmation

  // Sample data
 const movies = [
  { title: 'Thug Life', poster: movie1, rating: '8.5', likes: 11000 },
  { title: 'Bhiravam', poster: movie2, rating: '9.0', likes: 15000 },
  { title: 'Bhool Chuk Maaf', poster: movie3, rating: '8.8', likes: 18000 },
  { title: 'HouseFull5', poster: movie4, rating: '9.2', likes: 20000 },
];

  const theaters = [
    { id: 1, name: 'PVR Cinemas: Forum Mall', location: 'Koramangala', distance: '2.5 km' },
    { id: 2, name: 'INOX: Garuda Mall', location: 'Magrath Road', distance: '3.1 km' },
    { id: 3, name: 'Cinepolis: Nexus Shantiniketan', location: 'Whitefield', distance: '8.7 km' },
  ];

  const showTimes = [
    { id: 1, time: '10:00 AM', type: '2D', price: 250 },
    { id: 2, time: '01:30 PM', type: '2D', price: 300 },
    { id: 3, time: '04:45 PM', type: '3D', price: 400 },
    { id: 4, time: '08:15 PM', type: '3D', price: 450 },
    { id: 5, time: '11:30 PM', type: '2D', price: 350 },
  ];

  const seatLayout = [
    ['A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8'],
    ['B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8'],
    ['C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8'],
    ['D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8'],
    ['E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8'],
  ];

  const handleMovieSelect = (movie) => {
    setSelectedMovie(movie);
    setBookingStep(2);
  };

  const handleTheaterSelect = (theater) => {
    setSelectedTheater(theater);
    setBookingStep(3);
  };

  const handleShowTimeSelect = (showTime) => {
    setSelectedShowTime(showTime);
    setBookingStep(4);
  };

  const handleSeatSelect = (seat) => {
    if (selectedSeats.includes(seat)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const handleBookingConfirmation = () => {
    setBookingStep(5);
  };

  const calculateTotal = () => {
    return selectedSeats.length * selectedShowTime.price;
  };

  const renderMovieSelection = () => (
    <div className="step-container">
      <h2>Select a Movie</h2>
      <div className="movie-grid">
        {movies.map(movie => (
          <div 
            key={movie.id} 
            className="movie-card"
            onClick={() => handleMovieSelect(movie)}
          >
            <img src={movie.poster} alt={movie.title} />
            <h3>{movie.title}</h3>
            <div className="rating">⭐ {movie.rating}/5</div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderTheaterSelection = () => (
    <div className="step-container">
      <h2>Select a Theater</h2>
      <div className="theater-list">
        {theaters.map(theater => (
          <div 
            key={theater.id} 
            className="theater-card"
            onClick={() => handleTheaterSelect(theater)}
          >
            <h3>{theater.name}</h3>
            <p>{theater.location}</p>
            <p>{theater.distance} away</p>
          </div>
        ))}
      </div>
      <button className="back-button" onClick={() => setBookingStep(1)}>Back</button>
    </div>
  );

  const renderShowTimeSelection = () => (
    <div className="step-container">
      <h2>Select Show Time</h2>
      <div className="movie-info">
        <img src={selectedMovie.poster} alt={selectedMovie.title} />
        <div>
          <h3>{selectedMovie.title}</h3>
          <p>{selectedTheater.name}</p>
        </div>
      </div>
      <div className="showtime-grid">
        {showTimes.map(showTime => (
          <div 
            key={showTime.id} 
            className="showtime-card"
            onClick={() => handleShowTimeSelect(showTime)}
          >
            <div className="time">{showTime.time}</div>
            <div className="type">{showTime.type}</div>
            <div className="price">₹{showTime.price}</div>
          </div>
        ))}
      </div>
      <button className="back-button" onClick={() => setBookingStep(2)}>Back</button>
    </div>
  );

  const renderSeatSelection = () => (
    <div className="step-container">
      <h2>Select Seats</h2>
      <div className="movie-info">
        <img src={selectedMovie.poster} alt={selectedMovie.title} />
        <div>
          <h3>{selectedMovie.title} - {selectedShowTime.type}</h3>
          <p>{selectedTheater.name}</p>
          <p>{selectedShowTime.time}</p>
        </div>
      </div>
      
      <div className="screen">SCREEN THIS WAY</div>
      
      <div className="seat-layout">
        {seatLayout.map((row, rowIndex) => (
          <div key={rowIndex} className="seat-row">
            {row.map(seat => (
              <div 
                key={seat}
                className={`seat ${selectedSeats.includes(seat) ? 'selected' : ''}`}
                onClick={() => handleSeatSelect(seat)}
              >
                {seat}
              </div>
            ))}
          </div>
        ))}
      </div>
      
      <div className="seat-legend">
        <div><span className="seat available"></span> Available</div>
        <div><span className="seat selected"></span> Selected</div>
        <div><span className="seat occupied"></span> Occupied</div>
      </div>
      
      <div className="booking-summary">
        <h3>Booking Summary</h3>
        <p>Seats: {selectedSeats.join(', ')}</p>
        <p>Total: ₹{calculateTotal()}</p>
        <button 
          className="confirm-button"
          onClick={handleBookingConfirmation}
          disabled={selectedSeats.length === 0}
        >
          Confirm Booking
        </button>
      </div>
      
      <button className="back-button" onClick={() => setBookingStep(3)}>Back</button>
    </div>
  );

  const renderConfirmation = () => (
    <div className="step-container confirmation">
      <h2>Booking Confirmed!</h2>
      <div className="ticket">
        <div className="ticket-header">
          <h3>{selectedMovie.title}</h3>
          <p>{selectedShowTime.type} | {selectedShowTime.time}</p>
        </div>
        <div className="ticket-body">
          <div className="ticket-poster">
            <img src={selectedMovie.poster} alt={selectedMovie.title} />
          </div>
          <div className="ticket-details">
            <p><strong>Theater:</strong> {selectedTheater.name}</p>
            <p><strong>Seats:</strong> {selectedSeats.join(', ')}</p>
            <p><strong>Total:</strong> ₹{calculateTotal()}</p>
            <p className="booking-id">Booking ID: {Math.random().toString(36).substring(2, 10).toUpperCase()}</p>
          </div>
        </div>
      </div>
      <button className="home-button" onClick={() => setBookingStep(1)}>Book Another Movie</button>
    </div>
  );

  return (  
    <div className="bookmyshow-clone">
      <header>
        <img src={logo} alt="BookMyShow Clone" style={{height:"30px"}}/>
      </header>
      
      <div className="booking-progress">
        <div className={`progress-step ${bookingStep >= 1 ? 'active' : ''}`}>1. Movie</div>
        <div className={`progress-step ${bookingStep >= 2 ? 'active' : ''}`}>2. Theater</div>
        <div className={`progress-step ${bookingStep >= 3 ? 'active' : ''}`}>3. Time</div>
        <div className={`progress-step ${bookingStep >= 4 ? 'active' : ''}`}>4. Seats</div>
        <div className={`progress-step ${bookingStep >= 5 ? 'active' : ''}`}>5. Confirm</div>
      </div>
      
      <main>
        {bookingStep === 1 && renderMovieSelection()}
        {bookingStep === 2 && renderTheaterSelection()}
        {bookingStep === 3 && renderShowTimeSelection()}
        {bookingStep === 4 && renderSeatSelection()}
        {bookingStep === 5 && renderConfirmation()}
      </main>
    </div>
  );
};

export default BookMyShowClone;