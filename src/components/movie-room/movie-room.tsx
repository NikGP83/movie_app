import React from 'react';
import Header from '../header/header';
import SiteFooter from '../site-footer/site-footer';
import { useParams } from 'react-router-dom';
import {
  useFetchCreditsQuery,
  useFetchMovieDetailsQuery,
  useFetchMovieImagesQuery,
} from '../../services/movie-service';
import './movie-room.scss';

function MovieRoom() {
  const { id } = useParams();
  if (typeof id === 'undefined') {
    return null;
  }
  const { data } = useFetchMovieDetailsQuery(id);
  const { castArr, crewArr } = useFetchCreditsQuery(id, {
    selectFromResult: ({ data: creditsData }) => ({
      castArr: creditsData?.cast,
      crewArr: creditsData?.crew,
    }),
  });
  const { imageArr } = useFetchMovieImagesQuery(id, {
    selectFromResult: ({ data: imageData }) => ({
      imageArr: imageData?.posters,
    }),
  });

  if (typeof data === 'undefined') {
    return null;
  }

  const movieCreatorName = crewArr?.find(
    (crew) => crew.known_for_department === 'Directing',
  );

  window.console.log(castArr);
  return (
    <>
      <Header />
      <section className="movie-room">
        <div className="movie-room-wrapper">
          <div className="movie-room-poster">
            <img
              src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
              alt="movie poster"
              className="movie-room-poster-img"
              height="735"
            />
          </div>
          <div className="movie-content">
            <div className="movie-title-wrapper">
              <h2 className="movie-title">{data.title}</h2>
              <ul className="genres-list">
                {data.genres.map((genre) => (
                  <li key={genre.id} className="genres-item">
                    <span className="genre-item-text">{genre.name}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="movie-overview">
              <h2 className="movie-overview-title">Overview</h2>
              <p className="overview">{data?.overview}</p>
            </div>
            <div className="movie-cast-block">
              <div className="creator-block">
                <h2 className="creator-title">Director:</h2>
                <span className="creator-text">{movieCreatorName?.name}</span>
              </div>
              <h2 className="cast-title">Cast</h2>
              <ul className="cast-list">
                {castArr?.map((actor) => (
                  <li key={actor.id} className="cast-list-item">
                    <span className="cast-text">{actor.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="gallery">
          <div className="gallery-card">
            <ul className="gallery-list">
              {imageArr &&
                imageArr.slice(0, 6).map((poster) => (
                  <li key={poster.file_path} className="gallery-item">
                    <img
                      src={`https://image.tmdb.org/t/p/original${poster.file_path}`}
                      alt="poster image"
                      className="gallery-img"
                    />
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

export default MovieRoom;
