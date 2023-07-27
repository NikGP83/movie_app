import React from 'react';
import Header from '../header/header';
import MovieFeed from '../movie-feed/movie-feed';
import MovieCollection from '../movie-collection/movie-collection';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieFeed />
      <MovieCollection />
    </div>
  );
}

export default App;
