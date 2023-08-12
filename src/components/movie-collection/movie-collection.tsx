import React, { useState } from 'react';
import MovieCard from '../movie-card/movie-card';
import { API_ENDPOINTS, APP_ROUTES, framerMotionAnimateSettings } from '../../const/const';
import { useFetchMoviesQuery } from '../../services/movie-service';
import { motion } from 'framer-motion';
import './movie-collection.scss';

function MovieCollection() {
  const [endpoint, setEndpoint] = useState<string>(
    API_ENDPOINTS.topRatedMovies,
  );


  const { movieData } = useFetchMoviesQuery(endpoint, {
    selectFromResult: ({ data }) => ({
      movieData: data?.results,
    }),
  });

  if (typeof movieData === 'undefined') {
    return null;
  }
  return (
    <section className="movie-collection">
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
                onClick={() => setEndpoint(API_ENDPOINTS.popularMovies)}
              >
                What&apos;s Popular
              </span>
            </button>
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
            <MovieCard to={`${APP_ROUTES.movieRoom}/${movie.id}`} width="210" height="301" filmItem={movie} />
          </motion.li>
        ))}
      </ul>
      <ul className="movie-collection-pagination-list">
        <li className="pagination-item">
          <a className="pagination-link"></a>
        </li>
      </ul>
    </section>
  );
}

export default MovieCollection;
