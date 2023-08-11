import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.scss';
import { APP_ROUTES } from '../../const/const';

function Header() {
  const { pathname } = useLocation();
  return (
    <header className="header">
      <nav className="header-nav">
        <div className="container">
          <ul className="header-list">
            {pathname === '/' ? (
              <li className="header-item">
                <a href="#movies" className="header-link">
                  <span className="header-text">Movies</span>
                </a>
              </li>
            ) : (
              <li className="header-item">
                <Link to="/">
                  <a href="#movies" className="header-link">
                    <span className="header-text">Home</span>
                  </a>
                </Link>
              </li>
            )}
            {pathname === '/' ? (
              <li className="header-item">
                <Link to={APP_ROUTES.actorsList} className="header-link">
                  <span className="header-text">Actors</span>
                </Link>
              </li>
            ) : (
              <li className="header-item">
                <span className="header-text">Actors</span>
              </li>
            )}
            {pathname !== '/' ? (
              <li className="header-item logo-item">
                <Link to="/" className="header-link logo-link">
                  <div className="header-logo">
                    <img
                      src="./img/site-logo.png"
                      alt="site logo"
                      width="58"
                      height="53"
                    />
                  </div>
                </Link>
              </li>
            ) : (
              <li className="header-item logo-item">
                <Link to="/" className="header-link logo-link">
                  <div className="header-logo">
                    <img
                      src="./img/site-logo.png"
                      alt="site logo"
                      width="58"
                      height="53"
                    />
                  </div>
                </Link>
              </li>
            )}
            {pathname === '/' && (
              <li className="header-item">
                <a href="#trailers" className="header-link">
                  <span className="header-text">Trailers</span>
                </a>
              </li>
            )}
          </ul>
        </div>
        <div className="search-block">
          <input type="text" id="search" className="search-field" />
          <label htmlFor="search" className="search-field-label"></label>
        </div>
      </nav>
    </header>
  );
}

export default Header;
