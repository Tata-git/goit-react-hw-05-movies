import { useState } from 'react';
import { searchMovieKeyword } from 'services/moviesApi';
import { MoviesList } from './MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState(null);

  const [query, setQuery] = useState('');


  const handleChange = ({ target: { value } }) => {
    setQuery(value);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const response = await searchMovieKeyword(query);
      console.log(response);
      setMovies(response);
    } catch (error) {
      console.error('could not get data:', error.message);
    }

    setQuery('');
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter query"
          value={query}
          onChange={handleChange}
        ></input>
        <button type="submit">Search</button>
      </form>
      {movies && <MoviesList moviesInfo={movies} />}

    </>
  );
};

export default Movies;
