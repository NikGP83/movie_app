import React from 'react';
import './movie-card.scss';
import { MovieData } from '../../types/types';

interface MovieCardProps {
  width: string;
  height: string;
  filmItem: MovieData;
}

function MovieCard({ height, width, filmItem }: MovieCardProps) {
  if(typeof filmItem === 'undefined') {
    return null;
  }
  const {title, poster_path: postePath} = filmItem;
  return (
    <div className="movie-feed-card">
      <div className="movie-feed-poster">
        <img
          src={`https://image.tmdb.org/t/p/original${postePath}`}
          alt="movie-poster"
          className="movie-poster-img"
          width={width}
          height={height}
        />
      </div>
      <div className="movie-feed-title">
        <span className="movie-feed-text">{title}</span>
      </div>
    </div>
  );
}

export default MovieCard;
