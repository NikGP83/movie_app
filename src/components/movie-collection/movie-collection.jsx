import React from 'react';
import './movie-collection.scss';
import TrailerFeed from '../trailer-feed/trailer-feed';

function MovieCollection() {
  return (
    <section className="movie-collection">
      <TrailerFeed />
      <div className="genres-list-wrapper">
        <ul className="genres-list">
          <li className="genres-list-item">
            <span className="genres-list-text">Action</span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default MovieCollection;
