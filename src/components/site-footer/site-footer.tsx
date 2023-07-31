import React from 'react';
import './site-footer.scss';

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer-wrapper">
        <div className="site-footer-copyright-block">
          <span className="copyright-text">M Cinema &copy; 2023 </span>
        </div>
        <div className="site-footer-logo">
          <img
            src="./img/site-logo.png"
            alt="site logo"
            width="121"
            height="111"
          />
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
