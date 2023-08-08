import React from 'react';
import './movie-feed.scss';
import MovieCard from '../movie-card/movie-card';
import { useFetchMoviesQuery } from '../../services/movie-service';

function MovieFeed() {
  const { data } = useFetchMoviesQuery('/trending/movie/day?language=en-US');
  if (typeof data === 'undefined') {
    return null;
  }
  const { results } = data;

  return (
    <section className="movie-feed-section">
      <div className="movie-feed-promo">
        <div className="promo-poster-block">
          <img
            src="./img/sjblackwidow.jpg"
            alt="trailer"
            width="1449"
            height="736"
          />
        </div>
        <div className="movie-info-block">
          <div className="movie-description">
            <h2 className="description-title">Black widow</h2>
            <ul className="description-genres-block">
              <li className="description-genres-item">
                <span className="description-genres-text">Sci-fi</span>
              </li>
            </ul>
            <p className="description-text">
              Natasha Romanoff, aka Black Widow, confronts the darker parts of
              her ledger when a dangerous conspiracy with ties to her past
              arises. Pursued by a force that will stop at nothing to bring her
              down, Natasha must deal with her history as a spy, and the broken
              relationships left in her wake long before she became an Avenger.
            </p>
          </div>
        </div>
      </div>
      <div className="movie-feed-list-wrapper">
        <h3 className="movie-feed-list-title">Trending</h3>
        <ul className="movie-feed-list">
          {results.map((filmItem) => (
            <li key={filmItem.id} className="movie-feed-item">
              <MovieCard
                width="150"
                height="225"
                filmItem={filmItem}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default MovieFeed;
