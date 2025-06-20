import React from 'react';
import './Pages.css';

const StreamingPage = () => {
  const streamingContent = [
    { id: 1, title: 'The Last Show', image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00391394-fqfjpgdkej-portrait.jpg', type: 'Movie', genre: 'Drama', price: '₹199' },
    { id: 2, title: 'Standup Special', image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00448325-ravdgbkxpk-portrait.jpg', type: 'Comedy', genre: 'Standup', price: '₹149' },
    { id: 3, title: 'Music Concert', image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00383474-hncvhntsuw-portrait.jpg', type: 'Music', genre: 'Rock', price: '₹249' },
    { id: 4, title: 'Theatre Play', image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:l-image,i-discovery-catalog@@icons@@bms_premiere_v1.png,t-false,lfo-bottom_left,l-end/et00432143-dzngqafjzz-portrait.jpg', type: 'Play', genre: 'Classic', price: '₹179' },
  ];

  return (
    <div className="page-container">
      <h1>Streaming Now</h1>
      
      <div className="banner">
        <h2>Watch from the comfort of your home</h2>
        <p>Live and recorded events available for streaming</p>
      </div>
      
      <div className="grid-layout">
        {streamingContent.map(item => (
          <div key={item.id} className="card streaming-card">
            <img src={item.image} alt={item.title} />
            <div className="card-content">
              <h3>{item.title}</h3>
              <div className="details-row">
                <span>{item.type}</span>
                <span>{item.genre}</span>
              </div>
              <div className="price">{item.price}</div>
              <button className="stream-btn">Watch Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StreamingPage;