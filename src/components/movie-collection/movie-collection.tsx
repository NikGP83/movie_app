import React, { useState } from 'react';
import './movie-collection.scss';
import TrailerFeed from '../trailer-feed/trailer-feed';
import MovieCard from '../movie-card/movie-card';
import { API_ENDPOINTS } from '../../const/const';
import { useFetchMoviesQuery } from '../../services/movie-service';

function MovieCollection() {
  const [endpoint, setEndpoint] = useState<string>(
    API_ENDPOINTS.topRatedMovies,
  );
  const { data } = useFetchMoviesQuery(endpoint);
  if (typeof data === 'undefined') {
    return null;
  }
  const { results } = data;
  window.console.log(results);
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
                onClick={() => setEndpoint(API_ENDPOINTS.popularMovies)}
              >
                What&apos;s Popular
              </span>
            </button>
          </li>
        </ul>
      </div>
      <ul className="movie-collection-list" id="movies">
        {results.map((movie) => (
          <li key={movie.id} className="movie-collection-item">
            <MovieCard width="210" height="301" filmItem={movie} />
          </li>
        ))}
      </ul>
      <ul className="movie-collection-pagination-list">
        <li className="pagination-item">
          <a className="pagination-link"></a>
        </li>
        <div className="total-page-count">
          <span className="total-page-count-text">
            Total pages : {data.total_pages}
          </span>
        </div>
      </ul>
    </section>
  );
}

export default MovieCollection;
