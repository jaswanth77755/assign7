import React from 'react';
import Slider from 'react-slick';
import banner1 from '../assets/ad1.avif';
import banner2 from '../assets/ad2.avif';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const banners = [banner1, banner2];

function BannerCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    centerMode: true,
    centerPadding: '100px',  // controls how much of left/right image shows
    autoplay: true,
    autoplaySpeed: 2000,
    
  };

  return (
    <div style={{ outline: 'none' , marginTop:'0px',paddingTop:'0px'}}>
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index} style={{ padding: '0 10px' }}>
            <img
              src={banner}
              alt={`banner-${index}`}
              className="banner"
              style={{
                width: '99%',
                height: '270px',
                objectFit: 'cover',
                borderRadius: '12px',
                backgroundColor: 'black',
               
              }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

    

export default BannerCarousel;
