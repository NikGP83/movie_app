import React, { useState, useEffect } from 'react';
import MovieCard from '../movie-card/movie-card';
import { useFetchMoviesQuery } from '../../services/movie-service';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation } from 'swiper/modules';
// import YouTube from 'react-youtube';
// import { useFetchVideoByIdQuery } from '../../services/movie-service';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/a11y';
import './movie-feed.scss';
import { MovieData } from '../../types/types';

function MovieFeed() {
  const [selectedMovie, setSelectedMovie] = useState<MovieData>();
  const { trendingMovie } = useFetchMoviesQuery(
    '/trending/movie/day?language=en-US',
    {
      selectFromResult: ({ data: movieData }) => ({
        trendingMovie: movieData?.results,
      }),
    },
  );
  window.console.log(trendingMovie);
  useEffect(() => {
    if (typeof trendingMovie !== 'undefined') {
      setSelectedMovie(trendingMovie[0]);
    }
  }, []);
  // const {data} = useFetchVideoByIdQuery('');
  if (typeof trendingMovie === 'undefined') {
    return null;
  }

  return (
    <section className="movie-feed-section">
      <div className="movie-feed-promo">
        <div className="promo-poster-block">
          <img
            src={`https://image.tmdb.org/t/p/original${selectedMovie?.backdrop_path}`}
            alt="trailer"
            height="736"
          />
        </div>
        <div className="movie-info-block">
          <div className="movie-description">
            <h2 className="description-title">{selectedMovie?.title}</h2>
            <p className="description-text">{selectedMovie?.overview}</p>
          </div>
        </div>
      </div>
      <div className="movie-feed-list-wrapper">
        <h3 className="movie-feed-list-title">Trending Now</h3>
        <Swiper
          speed={1000}
          navigation
          slidesPerView={'auto'}
          spaceBetween={5}
          modules={[A11y, Navigation]}
          className="movie-feed-list"
        >
          {trendingMovie.map((filmItem) => (
            <SwiperSlide key={filmItem.id}>
              <li
                className="movie-feed-item"
                onClick={() => setSelectedMovie(filmItem)}
              >
                <MovieCard width="150" height="225" filmItem={filmItem} />
              </li>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default MovieFeed;
