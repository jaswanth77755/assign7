import React from 'react';
import './Pages.css';

const PlaysPage = () => {
  const plays = [
    { id: 1, title: 'The Merchant of Venice', image: 'https://via.placeholder.com/300x200?text=Merchant', language: 'English', duration: '2h 30m', rating: '4.7' },
    { id: 2, title: 'Tughlaq', image: 'https://via.placeholder.com/300x200?text=Tughlaq', language: 'Hindi', duration: '2h', rating: '4.5' },
    { id: 3, title: 'Hayavadana', image: 'https://via.placeholder.com/300x200?text=Hayavadana', language: 'Kannada', duration: '1h 45m', rating: '4.8' },
    { id: 4, title: 'Evam Indrajit', image: 'https://via.placeholder.com/300x200?text=Evam', language: 'Bengali', duration: '2h 15m', rating: '4.6' },
  ];

  return (
    <div className="page-container">
      <h1>Plays & Theatre</h1>
      
      <div className="filter-section">
        <select className="filter-dropdown">
          <option>All Languages</option>
          <option>English</option>
          <option>Hindi</option>
          <option>Regional</option>
        </select>
        
        <select className="filter-dropdown">
          <option>All Dates</option>
          <option>This Weekend</option>
          <option>Next Week</option>
          <option>This Month</option>
        </select>
      </div>
      
      <div className="grid-layout">
        {plays.map(play => (
          <div key={play.id} className="card">
            <img src={play.image} alt={play.title} />
            <div className="card-content">
              <h3>{play.title}</h3>
              <div className="details-row">
                <span>{play.language}</span>
                <span>{play.duration}</span>
              </div>
              <div className="rating">⭐ {play.rating}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlaysPage;