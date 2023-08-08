import React from 'react';
import Header from '../header/header';
import SiteFooter from '../site-footer/site-footer';
import { useParams } from 'react-router-dom';
import {
  useFetchCreditsQuery,
  useFetchMovieDetailsQuery,
  useFetchMovieImagesQuery,
} from '../../services/movie-service';

function MovieRoom() {
  const { id } = useParams();
  if (typeof id === 'undefined') {
    return null;
  }
  const { data } = useFetchMovieDetailsQuery(id);
  const { castArr } = useFetchCreditsQuery(id, {
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
  window.console.log(imageArr);
  return (
    <>
      <Header />
      <section className="movie-room">
        <div className="movie-poster">
          <img
            src={`https://image.tmdb.org/t/p/original${data?.poster_path}`}
            alt="movie poster"
            className="movie-poster-img"
          />
        </div>
        <div className="movie-content">
          <div className="movie-info">
            <div className="movie-trailer">
              <video></video>
            </div>
            <div className="movie-overview">
              <ul className="genres">
                {data.genres.map((genre) => (
                  <li key={genre.id} className="genres-item">
                    {genre.name}
                  </li>
                ))}
              </ul>
              <p className="overview">{data?.overview}</p>
              <h2 className="command">Director</h2>
              <p className="command-paragraph">
                <span className="command-tex"></span>
              </p>
              <h2 className="cast-title">Cast</h2>
              <ul className="cast-block">
                {castArr?.map((actor) => (
                  <li key={actor.id} className="cast-item">
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
              {imageArr && imageArr.slice(0, 6).map((poster) => (
                <li key={poster.file_path} className="gallery-item">
                  <img src={`https://image.tmdb.org/t/p/original${poster.file_path}`} alt="poster image" className="gallery-img" />
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
