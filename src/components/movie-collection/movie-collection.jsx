import React from 'react';
import './movie-collection.scss';
import TrailerFeed from '../trailer-feed/trailer-feed';
import MovieCard from '../movie-card/movie-card';

function MovieCollection() {
  return (
    <section className="movie-collection">
      <TrailerFeed />
      <div className="film-categories-wrapper">
        <ul className="film-categories-list">
          <li className="film-categories-list-item">
            <button className="film-categories-list-button">
              <span className="film-categories-list-text">Top rating</span>
            </button>
          </li>
          <li className="film-categories-list-item">
            <button className="film-categories-list-button">
              <span className="film-categories-list-text">Upcoming</span>
            </button>
          </li>
          <li className="film-categories-list-item">
            <button className="film-categories-list-button">
              <span className="film-categories-list-text">What&apos;s Popular</span>
            </button>
          </li>
        </ul>
      </div>
      <ul className="movie-collection-list" id="movies">
        <li className="movie-collection-item">
          <MovieCard width="210" height="301" />
        </li>
        <li className="movie-collection-item">
          <MovieCard width="210" height="301" />
        </li>
        <li className="movie-collection-item">
          <MovieCard width="210" height="301" />
        </li>
      </ul>
    </section>
  );
}

export default MovieCollection;
