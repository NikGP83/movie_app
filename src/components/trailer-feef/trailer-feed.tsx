import React from 'react';
import './trailer-feed.scss';

function TrailerFeed() {
  return (
    <div className="trailer-feed-block">
      <ul className="trailer-feed-list">
        <li className="trailer-feed-item">
          <video
            poster="./img/la-la-land.jpg"
            height="375"
            width="791"
          >
          </video>
          <div className="play-btn-block">
            <button className="play-btn" />
            <span className="play-btn-text">Watch trailer</span>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default TrailerFeed;
