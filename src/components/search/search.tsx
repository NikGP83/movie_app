import React, { FormEvent, useState } from 'react';
import Header from '../header/header';
import './search.scss';
import MovieCard from '../movie-card/movie-card';

function Search() {
  const [searchString, setSearchString] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  // const { searchData } = useSearchQuery(searchQuery, {
  //   selectFromResult: ({ data }) => ({
  //     searchData: data?.results,
  //   }),
  // });

  const handleSearch = () => {
    setSearchQuery(searchString);
    setSearchString('');
  };


  const formHandler = (e: FormEvent) => {
    e.preventDefault();
  };

  return (
    <>
      <Header />
      <div className="search-block">
        <form onSubmit={(e) => formHandler(e)}>
          <input
            type="text"
            id="search"
            className="search-field"
            placeholder="Search"
            onChange={(e) => setSearchString(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </form>
        <div className="search-result-block">
          <ul className="search-result-list">
            {searchData?.map((resultItem) => (
              <li key={resultItem.id} className="search-result-item">
                {resultItem.poster_path &&
                  (resultItem.poster_path === null ? (
                    <img
                      src="./unnamed.jpg"
                      width={300}
                      height={400}
                    />
                  ) : (
                    <MovieCard width="300" height="300" filmItem={resultItem} />
                  ))}
                {resultItem.media_type === 'person' && (
                  <div className="actors-img-block">
                    {}
                    <img
                      src={`https://image.tmdb.org/t/p/original${resultItem.profile_path}`}
                      width={300}
                      alt="actors photo"
                      className="actors-img"
                    />
                    <img
                      src={`https://image.tmdb.org/t/p/original${resultItem.profile_path}`}
                      width={300}
                      alt="actors photo"
                      className="actors-img"
                    />
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default Search;
