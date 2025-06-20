import React from 'react';
import './Pages.css';

const GiftCardsPage = () => {
  const giftCards = [
    { id: 1, value: '₹500', image: 'https://in.bmscdn.com/gv/gift_my_show_09272025102721_480x295.jpg', popular: false },
    { id: 2, value: '₹1000', image: 'https://in.bmscdn.com/gv/gift_my_show_09302025103016_480x295.jpg', popular: true },
    { id: 3, value: '₹1500', image: 'https://in.bmscdn.com/gv/gift_my_show_09352025103525_1280x788.jpg', popular: false },
    { id: 4, value: '₹2000', image: 'https://in.bmscdn.com/gv/gift_my_show_09322025103221_480x295.jpg', popular: false },
    { id: 5, value: 'Custom Amount', image: 'https://in.bmscdn.com/gv/gift_my_show_09332025103325_1280x788.jpg', popular: false },
  ];

  return (
    <div className="page-container giftcards-page">
      <h1>Gift Cards</h1>
      
      <div className="giftcards-intro">
        <h2>The Perfect Gift for Every Occasion</h2>
        <p>Let your loved ones choose their favorite movies, plays, concerts or events</p>
      </div>
      
      <div className="giftcards-grid">
        {giftCards.map(card => (
          <div key={card.id} className="giftcard">
            {card.popular && <div className="popular-tag">Most Popular</div>}
            <img src={card.image} alt={`Gift card ${card.value}`} />
            <h3>{card.value}</h3>
            <button className="buy-btn">Buy Now</button>
          </div>
        ))}
      </div>
      
      <div className="giftcard-info">
        <div className="info-card">
          <h3>How it Works</h3>
          <ul>
            <li>Purchase a gift card online</li>
            <li>The recipient receives the e-gift card via email</li>
            <li>They can redeem it for any event on BookMyShow</li>
            <li>No expiry date - use anytime!</li>
          </ul>
        </div>
        
        <div className="info-card">
          <h3>Why Gift Cards?</h3>
          <ul>
            <li>Instant delivery via email</li>
            <li>Flexible - choose any event</li>
            <li>Perfect for birthdays, anniversaries, and more</li>
            <li>No hidden fees or charges</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default GiftCardsPage;