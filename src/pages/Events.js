import React from 'react';
import './Pages.css';
import event1 from '../assets/e1.avif';
import event2 from '../assets/e2.avif';
import event3 from '../assets/e3.avif';
import event4 from '../assets/e4.avif';

const EventsPage = () => {
  const events = [
    { id: 1, title: 'Sunburn Festival', image: event1, date: 'Dec 28-30, 2023', location: 'Guntur', category: 'Music' },
    { id: 2, title: 'Comedy Night', image: event2, date: 'Nov 15, 2023', location: 'Mumbai', category: 'Comedy' },
    { id: 3, title: 'Food Festival', image: event3, date: 'Dec 5-7, 2023', location: 'Hyderabad', category: 'Food' },
    { id: 4, title: 'Tech Conference', image: event4, date: 'Jan 10-12, 2024', location: 'Hyderabad', category: 'Tech' },
  ];

  const categories = ['All', 'Music', 'Comedy', 'Food', 'Tech', 'Art', 'Business'];

  return (
    <div className="page-container">
      <h1>Events Near You</h1>
      
      <div className="category-filter">
        {categories.map(category => (
          <button key={category} className="category-btn">
            {category}
          </button>
        ))}
      </div>
      
      <div className="grid-layout">
        {events.map(event => (
          <div key={event.id} className="card">
            <img src={event.image} alt={event.title} />
            <div className="card-content">
              <h3>{event.title}</h3>
              <p>{event.date}</p>
              <p>{event.location}</p>
              <span className="category-tag">{event.category}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsPage;