import React from 'react';
import Header from '../header/header';
import MovieFeed from '../movie-feed/movie-feed';
import MovieCollection from '../movie-collection/movie-collection';
import SiteFooter from '../site-footer/site-footer';

function App() {
  return (
    <div className="app">
      <Header />
      <MovieFeed />
      <MovieCollection />
      <SiteFooter />
    </div>
  );
}

export default App;
