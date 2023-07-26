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
              <Link to="/#" className="header-link">
                <span className="header-text">About</span>
              </Link>
            </li>
            <li className="header-item">
              <Link to="/#" className="header-link">
                <span className="header-text">Movies</span>
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
              <Link to="/#" className="header-link">
                <span className="header-text">Series</span>
              </Link>
            </li>
            <li className="header-item">
              <Link to="/#" className="header-link">
                <span className="header-text">Upcoming</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
