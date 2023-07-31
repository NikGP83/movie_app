import React from 'react';
import './movie-card.scss';

interface MovieCardProps {
  width: string;
  height: string;
}

function MovieCard({ height, width }: MovieCardProps) {
  return (
    <div className="movie-feed-card">
      <div className="movie-feed-poster">
        <img
          src="./img/avengers.jpg"
          alt="movie-poster"
          className="movie-poster-img"
          width={width}
          height={height}
        />
      </div>
      <div className="movie-feed-title">
        <span className="movie-feed-text">Avengers</span>
      </div>
    </div>
  );
}

export default MovieCard;
