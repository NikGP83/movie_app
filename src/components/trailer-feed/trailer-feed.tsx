import React from 'react';
import './trailer-feed.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/a11y';
import { A11y, Navigation, Scrollbar, Autoplay } from 'swiper/modules';

const arr = [1, 2, 3, 4, 5, 6];

function TrailerFeed() {
  return (
    <div className="trailer-wrapper">
      <Swiper
        autoplay={{delay: 3000}}
        speed={1000}
        navigation
        scrollbar={{ draggable: true }}
        spaceBetween={5}
        slidesPerView={3}
        modules={[A11y, Navigation, Scrollbar, Autoplay]}
      >
        {arr.map((el) => (
          <SwiperSlide key={el}>
            <div className="trailer-block">
              <video poster="./img/la-la-land.jpg" height="375" />
              <div className="play-btn-block">
                <button className="play-btn" />
                <span className="play-btn-text">Watch trailer</span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TrailerFeed;
