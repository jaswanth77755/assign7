import React from 'react';
import BannerCarousel from '../components/BannerCarousel';
import MoviesList from '../components/MoviesList';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <BannerCarousel />
      <div>
      <h2 style={{ color: 'black' ,lineHeight: '1.17', marginLeft: '100px' ,marginBottom: '0px', paddingBottom: '0px'}}>Recommended Movies</h2>
      </div>
      <MoviesList />
      <Footer />
    </div>
  );
}

export default Home;
