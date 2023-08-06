import React from 'react';
import Header from '../header/header';
import SiteFooter from '../site-footer/site-footer';

function MovieRoom() {
  return (
    <>
      <Header />
      <section className="movie-room">
        <div className="movie-poster">
          <img src="/#" alt="" className="movie-poster-img" />
        </div>
        <div className="movie-content">
          <div className="movie-info">
            <div className="movie-trailer">
              <video></video>
            </div>
            <div className="movie-overview">
              <p className="overview"></p>
              <p className="command-paragraph">
                <h2 className="command">Director</h2>
                <span className="command-tex"></span>
              </p>
              <p className="cast-block">
                <span className="cast-text"></span>
              </p>
            </div>
          </div>
        </div>
        <div className="gallery">
          <div className="gallery-card">
            <img src="#" alt="" className="gallery-img" />
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}

export default MovieRoom;
