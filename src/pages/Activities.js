import React from 'react';
import './Pages.css';

const ActivitiesPage = () => {
  const activities = [
    { id: 1, title: 'Pottery Workshop', image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAyMCBKdW4gb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-text,ie-UFJPTU9URUQ%3D,co-FFFFFF,bg-DC354B,ff-Roboto,fs-24,lx-N12,ly-12,lfo-top_right,pa-12_14_12_14,r-6,l-end/et00402180-gsxkvpsrgs-portrait.jpg', price: '₹999', rating: '4.8' },
    { id: 2, title: 'Wine Tasting', image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-RnJpLCAyMCBKdW4gb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end:l-text,ie-UFJPTU9URUQ%3D,co-FFFFFF,bg-DC354B,ff-Roboto,fs-24,lx-N12,ly-12,lfo-top_right,pa-12_14_12_14,r-6,l-end/et00433648-tqtqqhgycj-portrait.jpg', price: '₹1499', rating: '4.6' },
    { id: 3, title: 'City Walking Tour', image: 'https://assets-in.bmscdn.com/nmcms/events/banner/desktop/media-desktop-wonderla-amusement-park-hyderabad-0-2025-6-10-t-10-20-26.jpg', type: 'Tour', price: '₹499', rating: '4.9' },
    { id: 4, title: 'Cooking Class', image: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:l-text,ie-VGh1LCAxOSBKdW4gb253YXJkcw%3D%3D,fs-29,co-FFFFFF,ly-612,lx-24,pa-8_0_0_0,l-end/et00433872-skkybsqqjl-portrait.jpg', type: 'Class', price: '₹1299', rating: '4.7' },
  ];

  return (
    <div className="page-container">
      <h1>Activities & Experiences</h1>
      
      <div className="category-tabs">
        <button className="tab active">All Activities</button>
        <button className="tab">Workshops</button>
        <button className="tab">Tours</button>
        <button className="tab">Classes</button>
        <button className="tab">Experiences</button>
      </div>
      
      <div className="grid-layout">
        {activities.map(activity => (
          <div key={activity.id} className="card activity-card">
            <img src={activity.image} alt={activity.title} />
            <div className="card-content">
              <h3>{activity.title}</h3>
              <div className="details-row">
                <span>{activity.type}</span>
                <span>⭐ {activity.rating}</span>
              </div>
              <div className="price-row">
                <span className="price">{activity.price}</span>
                <button className="book-btn">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivitiesPage;