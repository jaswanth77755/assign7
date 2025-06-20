import React from 'react';
import './Pages.css';

const SportsPage = () => {
  const sportsEvents = [
    { id: 1, title: 'IPL Cricket Match', image: 'https://via.placeholder.com/300x200?text=IPL', teams: 'RCB vs MI', date: 'May 10, 2023', venue: 'Chinnaswamy Stadium' },
    { id: 2, title: 'ISL Football', image: 'https://via.placeholder.com/300x200?text=ISL', teams: 'Bengaluru FC vs Kerala', date: 'May 15, 2023', venue: 'Sree Kanteerava' },
    { id: 3, title: 'Pro Kabaddi', image: 'https://via.placeholder.com/300x200?text=Kabaddi', teams: 'Bengal Warriors vs Puneri', date: 'May 20, 2023', venue: 'Gachibowli Stadium' },
    { id: 4, title: 'Badminton Championship', image: 'https://via.placeholder.com/300x200?text=Badminton', teams: 'Singles Finals', date: 'May 25, 2023', venue: 'Indira Gandhi Arena' },
  ];

  return (
    <div className="page-container">
      <h1>Sports Events</h1>
      
      <div className="sports-banner">
        <div className="banner-content">
          <h2>Cricket World Cup 2023</h2>
          <p>Book your tickets now for the biggest cricket event!</p>
          <button className="cta-button">View Matches</button>
        </div>
      </div>
      
      <div className="grid-layout">
        {sportsEvents.map(event => (
          <div key={event.id} className="card sports-card">
            <img src={event.image} alt={event.title} />
            <div className="card-content">
              <h3>{event.title}</h3>
              <p className="teams">{event.teams}</p>
              <div className="details-row">
                <span>{event.date}</span>
                <span>{event.venue}</span>
              </div>
              <button className="book-btn">Book Tickets</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportsPage;