import React from 'react';
import './Pages.css';

const OffersPage = () => {
  const offers = [
    { id: 1, title: 'Weekend Special', code: 'WEEKEND20', discount: '20% off', valid: 'Valid till 31 Dec 2023', terms: 'On all movie tickets booked on weekends' },
    { id: 2, title: 'First Time User', code: 'WELCOME50', discount: '₹50 off', valid: 'Valid till 30 Nov 2023', terms: 'For new users on first booking' },
    { id: 3, title: 'Credit Card Offer', code: 'CC200', discount: '₹200 off', valid: 'Valid till 15 Dec 2023', terms: 'On transactions above ₹1000 using HDFC cards' },
    { id: 4, title: 'Group Discount', code: 'GROUP10', discount: '10% off', valid: 'Valid till 31 Jan 2024', terms: 'On bookings of 5 or more tickets' },
  ];

  return (
    <div className="page-container offers-page">
      <h1>Offers & Discounts</h1>
      
      <div className="offers-banner">
        <h2>Save on your next booking!</h2>
        <p>Apply these promo codes at checkout</p>
      </div>
      
      <div className="offers-grid">
        {offers.map(offer => (
          <div key={offer.id} className="offer-card">
            <div className="offer-badge">{offer.discount}</div>
            <div className="offer-content">
              <h3>{offer.title}</h3>
              <div className="offer-code">
                <span>Code: </span>
                <strong>{offer.code}</strong>
              </div>
              <div className="offer-validity">{offer.valid}</div>
              <div className="offer-terms">{offer.terms}</div>
              <button className="copy-btn">Copy Code</button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="how-to-use">
        <h2>How to use these offers?</h2>
        <ol>
          <li>Select your movie/event and proceed to checkout</li>
          <li>Enter the promo code in the designated field</li>
          <li>The discount will be applied to your total amount</li>
          <li>Complete your payment and enjoy your event!</li>
        </ol>
      </div>
    </div>
  );
};

export default OffersPage;