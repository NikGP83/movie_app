import React from 'react';
import './movie-card.scss';
import { MovieData } from '../../types/types';
import { Link } from 'react-router-dom';

interface MovieCardProps {
  width: string;
  height: string;
  filmItem: MovieData;
  to?: string;
}

function MovieCard({ height, width, filmItem, to }: MovieCardProps) {
  if (typeof filmItem === 'undefined') {
    return null;
  }
  const { title, poster_path: postePath } = filmItem;
  return (
    <div className="movie-feed-card">
      <div className="movie-feed-poster">
        {to ? (
          <Link to={to}>
            <img
              src={`https://image.tmdb.org/t/p/original${postePath}`}
              alt="movie-poster"
              className="movie-poster-img"
              width={width}
              height={height}
            />
          </Link>
        ) : (
          <img
            src={`https://image.tmdb.org/t/p/original${postePath}`}
            alt="movie-poster"
            className="movie-poster-img"
            width={width}
            height={height}
          />
        )}
      </div>
      <div className="movie-feed-title">
        <span className="movie-feed-text">{title}</span>
      </div>
    </div>
  );
}

export default MovieCard;
