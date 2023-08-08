import React from 'react';
import './trailer-feed.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/a11y';
import { A11y, Navigation, Autoplay } from 'swiper/modules';

const arr = [1, 2, 3, 4, 5, 6];

function TrailerFeed() {
  return (
    <div className="trailer-wrapper" id="trailers">
      <Swiper
        autoplay={{ delay: 3000 }}
        speed={1000}
        navigation
        spaceBetween={5}
        slidesPerView={3.5}
        modules={[A11y, Navigation, Autoplay]}
        breakpoints={{
          300: {
            slidesPerView: 1,
          },
          900: {
            slidesPerView: 1.5,
          },
          1000: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 2.5,
          },
          1500: {
            slidesPerView: 3,
          },
          1700: {
            slidesPerView: 3.5,
          },
        }}
      >
        {arr.map((el) => (
          <SwiperSlide key={el}>
            <div className="trailer-block">
              <img
                src="./img/la-la-land.jpg"
                height="375"
                className="trailer-poster"
              />
              <div className="play-btn-block">
                <button className="play-btn">
                  <span className="play-btn-text">Watch trailer</span>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TrailerFeed;
