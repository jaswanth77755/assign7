import React from 'react';
import './Pages.css';

const CorporateEnquiriesPage = () => {
  const services = [
    { id: 1, title: 'Bulk Bookings', icon: '🎟️', description: 'Special rates for corporate bookings and employee engagement programs' },
    { id: 2, title: 'Event Sponsorship', icon: '📢', description: 'Sponsorship opportunities for your brand at major events' },
    { id: 3, title: 'Venue Partnerships', icon: '🏟️', description: 'List your venue and partner with us for events' },
    { id: 4, title: 'Custom Solutions', icon: '🛠️', description: 'Tailored ticketing solutions for your corporate needs' },
  ];

  return (
    <div className="page-container corporate-page">
      <h1>Corporate Enquiries</h1>
      
      <div className="intro-section">
        <h2>Partner with BookMyShow for your corporate needs</h2>
        <p>We offer customized solutions for businesses looking to engage with entertainment and events</p>
      </div>
      
      <div className="services-grid">
        {services.map(service => (
          <div key={service.id} className="service-card">
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
      
      <div className="contact-section">
        <h2>Get in Touch</h2>
        
        <div className="contact-methods">
          <div className="contact-method">
            <h3>Email Us</h3>
            <p>corporate@bookmyshow.com</p>
          </div>
          
          <div className="contact-method">
            <h3>Call Us</h3>
            <p>+91 1234567890</p>
            <p>Mon-Fri, 10AM-6PM</p>
          </div>
          
          <div className="contact-method">
            <h3>Office Address</h3>
            <p>BookMyShow Corporate Office</p>
            <p>123 Business District, Mumbai</p>
            <p>Maharashtra, India - 400001</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorporateEnquiriesPage;