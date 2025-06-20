import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import movie1 from '../assets/m1.jpg';
import movie2 from '../assets/m2.jpg';
import movie3 from '../assets/m3.jpg';
import movie4 from '../assets/m4.jpg';
import './Pages.css';

const MoviesList = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('nowShowing');
  const [selectedLanguage, setSelectedLanguage] = useState('all');
  const [selectedGenre, setSelectedGenre] = useState('all');

  const movies = {
    nowShowing: [
      { 
        id: 1,
        title: 'Thug Life', 
        image: movie1, 
        rating: 8.5, 
        likes: 11000,
        languages: ['Hindi', 'English'],
        genre: ['Action', 'Crime'],
        duration: '2h 35m',
        certificate: 'UA'
      },
      { 
        id: 2,
        title: 'Bhiravam', 
        image: movie2, 
        rating: 9.0, 
        likes: 15000,
        languages: ['Hindi'],
        genre: ['Action', 'Thriller'],
        duration: '2h 15m',
        certificate: 'A'
      },
      { 
        id: 3,
        title: 'Bhool Chuk Maaf', 
        image: movie3, 
        rating: 8.8, 
        likes: 18000,
        languages: ['Hindi', 'Tamil'],
        genre: ['Horror', 'Thriller'],
        duration: '2h 25m',
        certificate: 'UA'
      },
      { 
        id: 4,
        title: 'HouseFull5', 
        image: movie4, 
        rating: 9.2, 
        likes: 20000,
        languages: ['Hindi', 'English', 'Telugu'],
        genre: ['Comedy'],
        duration: '2h 10m',
        certificate: 'U'
      },
    ],
    comingSoon: [
      {
        id: 5,
        title: 'The Legend Returns',
        image: movie1, // Replace with actual coming soon image
        releaseDate: 'Dec 15, 2023',
        languages: ['Hindi', 'English'],
        genre: ['Action', 'Adventure'],
        duration: '2h 40m',
        certificate: 'UA'
      },
      {
        id: 6,
        title: 'Mystery Island',
        image: movie2, // Replace with actual coming soon image
        releaseDate: 'Jan 5, 2024',
        languages: ['Hindi'],
        genre: ['Mystery', 'Thriller'],
        duration: '2h 15m',
        certificate: 'UA'
      }
    ]
  };

  const languages = ['All', 'Hindi', 'English', 'Tamil', 'Telugu'];
  const genres = ['All', 'Action', 'Comedy', 'Thriller', 'Horror', 'Crime', 'Adventure', 'Mystery'];

  const filterMovies = () => {
    let filtered = movies[activeFilter];
    
    if (selectedLanguage !== 'all') {
      filtered = filtered.filter(movie => movie.languages.includes(selectedLanguage));
    }
    
    if (selectedGenre !== 'all') {
      filtered = filtered.filter(movie => movie.genre.includes(selectedGenre));
    }
    
    return filtered;
  };

  const filteredMovies = filterMovies();

  return (
    <div className="movies-list-container">
      {/* Hero Banner */}
      <div className="hero-banner">
        <div className="hero-content">
          <h1>Book Movie Tickets Online</h1>
          <p>Watch the latest blockbusters in theaters near you</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container">
        {/* Movie Filters */}
        <section className="filter-section">
          <div className="filter-tabs">
            <button
              className={`filter-tab ${activeFilter === 'nowShowing' ? 'active' : ''}`}
              onClick={() => setActiveFilter('nowShowing')}
            >
              Now Showing
            </button>
            <button
              className={`filter-tab ${activeFilter === 'comingSoon' ? 'active' : ''}`}
              onClick={() => setActiveFilter('comingSoon')}
            >
              Coming Soon
            </button>
          </div>

          <div className="filter-options">
            <div className="filter-group">
              <label>Language:</label>
              <select 
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
              >
                {languages.map(lang => (
                  <option key={lang} value={lang === 'All' ? 'all' : lang}>
                    {lang}
                  </option>
                ))}
              </select>
            </div>

            <div className="filter-group">
              <label>Genre:</label>
              <select
                value={selectedGenre}
                onChange={(e) => setSelectedGenre(e.target.value)}
              >
                {genres.map(genre => (
                  <option key={genre} value={genre === 'All' ? 'all' : genre}>
                    {genre}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </section>

        {/* Movies Grid */}
        <section className="movies-grid-section">
          <h2>{activeFilter === 'nowShowing' ? 'Now Showing' : 'Coming Soon'}</h2>
          <div className="movies-grid">
            {filteredMovies.length > 0 ? (
              filteredMovies.map(movie => (
                <div key={movie.id} className="movie-card" onClick={() => navigate('/booking')}>
                  <div className="movie-poster">
                    <img src={movie.image} alt={movie.title} />
                    {activeFilter === 'nowShowing' && (
                      <div className="rating-badge">
                        {movie.rating.toFixed(1)}
                      </div>
                    )}
                  </div>
                  <div className="movie-details">
                    <h3>{movie.title}</h3>
                    <div className="movie-meta">
                      <span>{movie.certificate}</span>
                      <span>{movie.duration}</span>
                      {activeFilter === 'nowShowing' && <span>❤️ {movie.likes}</span>}
                    </div>
                    <div className="language-tags">
                      {movie.languages.slice(0, 2).map(lang => (
                        <span key={lang} className="language-tag">{lang}</span>
                      ))}
                      {movie.languages.length > 2 && (
                        <span className="language-tag">+{movie.languages.length - 2}</span>
                      )}
                    </div>
                    <div className="genre-tags">
                      {movie.genre.slice(0, 2).map(g => (
                        <span key={g} className="genre-tag">{g}</span>
                      ))}
                    </div>
                    {activeFilter === 'nowShowing' ? (
                      <button className="book-btn">Book Tickets</button>
                    ) : (
                      <button className="notify-btn">Notify Me</button>
                    )}
                  </div>
                </div>
              ))
            ) : (
              <div className="no-results">
                <p>No movies found matching your filters.</p>
                <button 
                  className="clear-filters-btn"
                  onClick={() => {
                    setSelectedLanguage('all');
                    setSelectedGenre('all');
                  }}
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MoviesList;