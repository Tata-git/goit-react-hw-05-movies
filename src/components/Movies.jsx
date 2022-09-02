import { useState, useEffect } from 'react';
import { searchMovieKeyword } from 'services/moviesApi';
import { useLocation, useSearchParams } from 'react-router-dom';
import { MoviesList } from './MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState(null);
  const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const location = useLocation();
  console.log('movies - location ', location);

  const searchQuery = searchParams.get('query'); //зчитуємо значення query з адресного рядка
  console.log('searchQuery', searchQuery);

  useEffect(() => {
    if (searchQuery === null) return; // searchQuery === ''не працює, рендериться список фільмів з назвою null

    searchMovieKeyword(searchQuery).then(results => setMovies(results));
  }, [searchQuery]);

  const handleChange = ({ target: { value } }) => {
    setQuery(value);
  };

  const handleSubmit = async event => {
    event.preventDefault();

    try {
      const response = await searchMovieKeyword(query);
      console.log(response);
      setMovies(response);
      setSearchParams({ query });
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
