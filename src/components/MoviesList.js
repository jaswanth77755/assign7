import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaStar, FaHeart, FaRegHeart, FaSpinner } from 'react-icons/fa';
// import './MoviesList.css'; // Create this CSS file for styling
import movie1 from '../assets/m1.jpg';
import movie2 from '../assets/m2.jpg';
import movie3 from '../assets/m3.jpg';
import movie4 from '../assets/m4.jpg';
function MoviesList() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [favorites, setFavorites] = useState([]);

  // Fetch movies from Django backend
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/movies/');
        setMovies(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
        // Fallback to local data if API fails
        setMovies([
          { 
            id: 1,
            title: 'Thug Life', 
            poster_url: movie1, 
            rating: 8.5, 
            likes: 11000,
            duration: '2h 35m',
            genres: 'Action, Crime'
          },
          { 
            id: 2,
            title: 'Bhiravam', 
            poster_url: movie2, 
            rating: 9.0, 
            likes: 15000,
            duration: '2h 15m',
            genres: 'Action, Thriller'
          },
          { 
            id: 3,
            title: 'Bhool Chuk Maaf', 
            poster_url: movie3, 
            rating: 8.8, 
            likes: 18000,
            duration: '2h 25m',
            genres: 'Horror, Thriller'
          },
          { 
            id: 4,
            title: 'HouseFull5', 
            poster_url: movie4, 
            rating: 9.2, 
            likes: 20000,
            duration: '2h 10m',
            genres: 'Comedy'
          },
        ]);
      }
    };

    fetchMovies();
  }, []);

  const toggleFavorite = (movieId) => {
    if (favorites.includes(movieId)) {
      setFavorites(favorites.filter(id => id !== movieId));
    } else {
      setFavorites([...favorites, movieId]);
    }
    // Here you would typically make an API call to update favorites on the backend
  };

  const handleMovieClick = (movieId) => {
    navigate(`/booking/${movieId}`);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <FaSpinner className="spinner" />
        <p>Loading movies...</p>
      </div>
    );
  }

  if (error) {
    return <div className="error-container">Error: {error}</div>;
  }

  return (
    <div className="movies-container">
      <h1 className="movies-title">Now Showing</h1>
      
      <div className="movies-grid">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <div className="movie-poster-container">
              <img 
                src={movie.poster_url} 
                alt={movie.title} 
                className="movie-poster"
                onClick={() => handleMovieClick(movie.id)}
              />
              <button 
                className="favorite-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  toggleFavorite(movie.id);
                }}
              >
                {favorites.includes(movie.id) ? (
                  <FaHeart className="favorite-icon" />
                ) : (
                  <FaRegHeart className="favorite-icon" />
                )}
              </button>
              <div className="movie-rating">
                <FaStar className="star-icon" />
                <span>{movie.rating}</span>
              </div>
            </div>
            
            <div className="movie-info">
              <h3 className="movie-title">{movie.title}</h3>
              <div className="movie-meta">
                <span className="movie-duration">{movie.duration}</span>
                <span className="movie-genres">{movie.genres}</span>
              </div>
              <div className="movie-likes">
                <FaHeart className="likes-icon" />
                <span>{movie.likes.toLocaleString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviesList;