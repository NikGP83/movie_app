import React from 'react';
import { Link } from 'react-router-dom';
import './header.scss';

function Header() {
  return (
    <header className="header">
      <nav className="header-nav">
        <div className="container">
          <ul className="header-list">
            <li className="header-item">
              <a href="#movies" className="header-link">
                <span className="header-text">Movies</span>
              </a>
            </li>
            <li className="header-item">
              <Link to="/#" className="header-link">
                <span className="header-text">Actors</span>
              </Link>
            </li>
            <li className="header-item logo-item">
              <Link to="/#" className="header-link logo-link">
                <div className="header-logo">
                  <img src="./img/site-logo.png" alt="site logo" width="58" height="53"/>
                </div>
              </Link>
            </li>
            <li className="header-item">
              <a href="#trailers" className="header-link">
                <span className="header-text">Trailers</span>
              </a>
            </li>
            <li className="header-item">
              <Link to="/#" className="header-link">
                <span className="header-text">About</span>
              </Link>
            </li>
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
