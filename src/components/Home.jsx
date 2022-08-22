import { NavLink, Outlet } from 'react-router-dom'; // , useLocation
import { useState, useEffect } from 'react';
import { PageHeading } from 'frame/PageHeading/PageHeading';
import { getListTrendingMovies } from '../services/moviesApi';

export const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    // getListTrendingMovies().then(console.log);
    getListTrendingMovies().then(setMovies);
  }, []);
  // const location = useLocation();
  return (
    <>
      <PageHeading>Trending today</PageHeading>
      {movies && (
        <ul>
          {movies.map(({ id, title }) => (
            <li key={id}>
              <NavLink to={'movies/:movieId'}>{title}</NavLink>
            </li>
          ))}
        </ul>
      )}
      <hr />
      <Outlet />
    </>
  );
};
//

//--------    getListTrendingMovies().then(console.log);   ------------------------------
//   0:
// adult: false
// backdrop_path: "/qATVdZdqtKUpO4D78wNCejsfp5S.jpg"
// genre_ids: (2) [18, 10749]
// id: 829560
// media_type: "movie"
// original_language: "pl"
// original_title: "Kolejne 365 dni"
// overview: "Laura and Massimo's relationship hangs in the balance as they try to overcome trust issues while a tenacious Nacho works to push them apart."
// popularity: 655.33
// poster_path: "/6FsGeIp7heHm5eh4tIxTzHIRxmt.jpg"
// release_date: "2022-08-19"
// title: "The Next 365 Days"
// video: false
// vote_average: 7.623
// vote_count: 77
