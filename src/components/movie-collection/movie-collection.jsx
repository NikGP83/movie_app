import React from 'react';
import './movie-collection.scss';
import TrailerFeed from '../trailer-feed/trailer-feed';
import MovieCard from '../movie-card/movie-card';

function MovieCollection() {
  return (
    <section className="movie-collection">
      <TrailerFeed />
      <div className="genres-list-wrapper">
        <div className="genres-title">Genres</div>
        <ul className="genres-list">
          <li className="genres-list-item">
            <button className="genres-list-button">
              <span className="genres-list-text">Action</span>
            </button>
          </li>
          <li className="genres-list-item">
            <button className="genres-list-button">
              <span className="genres-list-text">Action</span>
            </button>
          </li>
          <li className="genres-list-item">
            <button className="genres-list-button">
              <span className="genres-list-text">Action</span>
            </button>
          </li>
          <li className="genres-list-item">
            <button className="genres-list-button">
              <span className="genres-list-text">Action</span>
            </button>
          </li>
          <li className="genres-list-item">
            <button className="genres-list-button">
              <span className="genres-list-text">Action</span>
            </button>
          </li>
        </ul>
      </div>
      <ul className="movie-collection-list">
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
