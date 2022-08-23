import { useState, useEffect } from 'react';
import { MoviesList } from './MoviesList';
import { Form } from './Form';
import { useSearchParams } from 'react-router-dom';
import { searchMovieKeyword } from 'services/moviesApi';

export const Movies = ({}) => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

//   const handleSearchAndUrlChange = query => {
//     setIsLoading(true);
//     setSearchParams({ query });
//   };

  return (
    <>
      {/* <Form onSearch={handleSearchAndUrlChange} /> */}
      {movies && <MoviesList films={movies} />}
    </>
  );
};

