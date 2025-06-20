import React from 'react';
import './Pages.css';

const ListYourShowsPage = () => {
  return (
    <div className="page-container list-show-container">
      <h1>List Your Show</h1>
      
      <div className="content-section">
        <div className="info-section">
          <h2>Got a show, event, activity or a great experience?</h2>
          <p>Partner with us & list it on BookMyShow</p>
          
          <div className="benefits">
            <h3>Why list with us?</h3>
            <ul>
              <li>India's largest entertainment platform</li>
              <li>Access to millions of customers</li>
              <li>End-to-end ticketing solutions</li>
              <li>Marketing and promotional support</li>
              <li>Real-time reporting and analytics</li>
            </ul>
          </div>
        </div>
        
        <div className="form-section">
          <form>
            <h3>Get Started</h3>
            
            <div className="form-group">
              <label>Name</label>
              <input type="text" placeholder="Your name" />
            </div>
            
            <div className="form-group">
              <label>Email</label>
              <input type="email" placeholder="Your email" />
            </div>
            
            <div className="form-group">
              <label>Phone</label>
              <input type="tel" placeholder="Your phone number" />
            </div>
            
            <div className="form-group">
              <label>Event Type</label>
              <select>
                <option>Select event type</option>
                <option>Movie</option>
                <option>Play/Theatre</option>
                <option>Concert</option>
                <option>Sports</option>
                <option>Workshop</option>
                <option>Other</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>Tell us about your event</label>
              <textarea placeholder="Describe your event"></textarea>
            </div>
            
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ListYourShowsPage;