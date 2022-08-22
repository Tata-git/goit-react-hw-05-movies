import { useState, useEffect } from 'react';
import { PageHeading } from 'frame/PageHeading/PageHeading';
import { NavLink, Outlet } from 'react-router-dom';
import * as filmsCollectionAPI from '../services/moviesApi';

export const Movies = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    filmsCollectionAPI.searchMovieKeyword().then(setMovies);
  }, []);

  return (
    <>
      <PageHeading>Movies</PageHeading>

      {movies && (
        <ul>
          {movies.map(movie => (
            <li key={movie.id}>
              <NavLink to={`${movie.id}`}>{movie.title}</NavLink>
            </li>
          ))}
        </ul>
      )}
      <hr />
      <Outlet />
    </>
  );
};
