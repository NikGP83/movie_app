import React from 'react';
import Header from '../header/header';
import MovieFeed from '../movie-feed/movie-feed';
import TrailerFeed from '../trailer-feef/trailer-feed';

function App() {
  return (
    <div className="App">
      <Header />
      <MovieFeed />
      <TrailerFeed />
    </div>
  );
}

export default App;
