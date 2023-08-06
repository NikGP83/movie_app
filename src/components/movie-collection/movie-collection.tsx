import React, { useState } from 'react';
import './movie-collection.scss';
import TrailerFeed from '../trailer-feed/trailer-feed';
import MovieCard from '../movie-card/movie-card';
import { API_ENDPOINTS, framerMotionAnimateSettings } from '../../const/const';
import { useFetchMoviesQuery } from '../../services/movie-service';
import { motion } from 'framer-motion';

function MovieCollection() {
  const [endpoint, setEndpoint] = useState<string>(
    API_ENDPOINTS.topRatedMovies,
  );
  const [page, setPage] = useState('1');
  // const createQuery = () => {
  //   setPage((prev) => (+prev + 1).toString());
  //   setEndpoint(endpoint + page);
  // };

  const createQuery = () => {
    setPage((prev) => prev + 1);
    const url = new URL(endpoint);
    url.searchParams.set('?language=en-US&page=', (page + 1).toString());
    setEndpoint(url.toString());
  };

  const { movieData, totalPages } = useFetchMoviesQuery(endpoint, {
    selectFromResult: ({ data }) => ({
      movieData: data?.results,
      totalPages: data?.total_pages,
    }),
  });

  if (typeof movieData === 'undefined') {
    return null;
  }
  window.console.log(endpoint, page);
  return (
    <section className="movie-collection">
      <TrailerFeed />
      <div className="film-categories-wrapper">
        <ul className="film-categories-list">
          <li className="film-categories-list-item">
            <button
              className="film-categories-list-button"
              data-id="Top rating"
            >
              <span
                className="film-categories-list-text"
                onClick={() => setEndpoint(API_ENDPOINTS.topRatedMovies)}
              >
                Top rating
              </span>
            </button>
          </li>
          <li className="film-categories-list-item">
            <button className="film-categories-list-button">
              <span
                className="film-categories-list-text"
                onClick={() => setEndpoint(API_ENDPOINTS.upcomingMovies)}
              >
                Upcoming
              </span>
            </button>
          </li>
          <li className="film-categories-list-item">
            <button className="film-categories-list-button">
              <span
                className="film-categories-list-text"
                onClick={() => setEndpoint(API_ENDPOINTS.popularMovies + page)}
              >
                What&apos;s Popular
              </span>
            </button>
            <button onClick={createQuery}>Сменить Барбя!</button>
          </li>
        </ul>
      </div>
      <ul className="movie-collection-list" id="movies">
        {movieData.map((movie, i) => (
          <motion.li
            key={movie.id}
            className="movie-collection-item"
            variants={framerMotionAnimateSettings}
            initial="hidden"
            animate="visible"
            custom={i}
            transition={{ duration: 0.5 }}
          >
            <MovieCard width="210" height="301" filmItem={movie} />
          </motion.li>
        ))}
      </ul>
      <ul className="movie-collection-pagination-list">
        <li className="pagination-item">
          <a className="pagination-link"></a>
        </li>
        <div className="total-page-count">
          <span className="total-page-count-text">
            Total pages : {totalPages}
          </span>
        </div>
      </ul>
    </section>
  );
}

export default MovieCollection;
