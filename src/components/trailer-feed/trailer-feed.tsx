import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/a11y';
import YouTube, { YouTubePlayer } from 'react-youtube';
import { useFetchVideoByIdQuery } from '../../services/movie-service';
import './trailer-feed.scss';

// const arr = [1, 2, 3, 4, 5, 6];

function TrailerFeed() {
  const { data } = useFetchVideoByIdQuery('278');
  return (
    <div className="trailer-wrapper" id="trailers">
      <Swiper
        speed={1000}
        navigation
        spaceBetween={5}
        modules={[A11y, Navigation]}
      >
        {data?.results.map((trailerArr) => (
          <SwiperSlide key={trailerArr.name}>
            <YouTube
              id={trailerArr.key}

            />
            {/* <YouTubePlayer videoId={trailerArr.key} /> */}
            {/* <div className="trailer-block">
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
            </div> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TrailerFeed;
