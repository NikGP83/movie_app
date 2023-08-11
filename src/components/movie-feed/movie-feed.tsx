import React, { useState } from 'react';
import MovieCard from '../movie-card/movie-card';
import { useFetchMoviesQuery } from '../../services/movie-service';
import { Swiper, SwiperSlide } from 'swiper/react';
import { A11y, Navigation } from 'swiper/modules';
import YouTube from 'react-youtube';
import { useFetchVideoByIdQuery } from '../../services/movie-service';
import { MovieData } from '../../types/types';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/a11y';
import './movie-feed.scss';

function MovieFeed() {
  const [selectedMovie, setSelectedMovie] = useState<MovieData>();
  const [selectedId, setSelectedId] = useState('');
  const [isActiveTrailer, setIsActiveTrailer] = useState(false);
  const { trendingMovie } = useFetchMoviesQuery(
    '/trending/movie/day?language=en-US',
    {
      selectFromResult: ({ data: movieData }) => ({
        trendingMovie: movieData?.results,
      }),
    },
  );

  const { moviesVideo } = useFetchVideoByIdQuery(selectedId, {
    selectFromResult: ({ data }) => ({
      moviesVideo: data?.results,
    }),
  });

  const selectMovieHandler = (filmItem: MovieData) => {
    setSelectedMovie(filmItem);
    setSelectedId(filmItem.id.toString());
    setIsActiveTrailer(false);
  };

  if (typeof trendingMovie === 'undefined') {
    return null;
  }

  const renderTrailer = () => {
    const trailer = typeof moviesVideo !== 'undefined' ? moviesVideo[0] : null;
    return (
      <YouTube
        videoId={trailer?.key}
        opts={{
          width: '100%',
          height: '100%',
          playerVars: {
            autoplay: 1,
          },
        }}
        className="movie-feed-player"
      />
    );
  };

  return (
    <section className="movie-feed-section">
      <div className="movie-feed-promo">
        {isActiveTrailer ? renderTrailer() : null}
        {!selectedMovie && <div className="empty-movie-block"><img height={742} src={`https://image.tmdb.org/t/p/original${trendingMovie[1].backdrop_path}`}></img>Hello</div>}
        {selectedMovie && (
          <>
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
              <div className="play-btn-block">
                <button
                  className="play-btn"
                  onClick={() => setIsActiveTrailer(true)}
                >
                </button>
              </div>
            </div>
          </>
        )}
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
                onClick={() => selectMovieHandler(filmItem)}
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
