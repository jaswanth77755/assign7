import React from 'react';
import { useNavigate } from 'react-router-dom';
import movie1 from '../assets/m1.jpg';
import movie2 from '../assets/m2.jpg';
import movie3 from '../assets/m3.jpg';
import movie4 from '../assets/m4.jpg';


  const movies = [
    { title: 'Thug Life', image: movie1 , rating: '8.5', likes: 11000 },
    { title: 'Bhiravam', image: movie2 , rating: '9.0', likes: 15000},
    { title: 'Bhool Chuk Maaf', image: movie3, rating: '8.8', likes: 18000 },
    { title: 'HouseFull5', image: movie4 , rating: '9.2', likes: 20000},
  ];

  

function MoviesList() {
  const navigate = useNavigate();
  return (
    <div style={{ padding: '30px 100px' }}>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {movies.map((movie, index) => (
          <div key={index} style={{
            width: '200px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            overflow: 'hidden',
            backgroundColor: '#fff'
          }}>
            <img src={movie.image} alt={movie.title} onClick={() => navigate('/booking')} style={{
              width: '100%',
              height: '300px',
              objectFit: 'contain',
              backgroundColor: '#000'
            }} />
            <div style={{ padding: '10px' }}>
              <h4 style={{ margin: '0 0 5px 0' }}>{movie.title}</h4>
              <p style={{ margin: '0', fontSize: '14px' }}>⭐ {movie.rating} | ❤️ {movie.likes}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviesList;
