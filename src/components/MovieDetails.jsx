// import { Suspense } from 'react';
import { NavLink, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useFetchMovie } from 'hooks/useFetchMovie';
import { AdditIfoList, Box, Button, Poster } from 'styled/MovieDetails.styled';

const MovieDetails = () => {
  const movie = useFetchMovie();
  console.log('movie', movie);

  const navigate = useNavigate();
  const location = useLocation();

  const IMAGE_URL = 'https://image.tmdb.org/t/p/';
  const poster = `${IMAGE_URL}w200${movie?.poster_path}`;
  const release = new Date(movie?.release_date).getFullYear();

  const handleClick = () => {
    return navigate(location?.state?.from ?? '/');
  };

  return (
    <>
      {!movie && <h2>Loading...</h2>}

      {movie && (
        <>
          {/* //-------------- Go back ------------------------ */}
          <Button type="button" onClick={handleClick}>
            Go back
          </Button>
          <Box>
            {/* //------------ moviesInfo ----------------------- */}
            <div>
              <Poster
                src={movie.poster_path ? poster : ''}
                alt={movie.tagline}
              />
            </div>
            <div>
              <h2>
                {movie.title} {release ? release : ''}
              </h2>
              <p>User Score: {movie.vote_average} %</p>
              <h3>Overview</h3>
              <p>{movie.overview}</p>
              <h3>Genres</h3>
              <p>
                {movie.genres.map(({ id, name }) => {
                  return <span key={id}>{name} </span>;
                })}
              </p>
            </div>
          </Box>
          <hr />
          {/* //---------- Additional information ------------ */}
          <h2>Additional information</h2>
          <ul>
            <AdditIfoList>
              <NavLink to="cast" state={{ from: location }}>
                Cast
              </NavLink>
            </AdditIfoList>
            <AdditIfoList>
              <NavLink to="reviews" state={{ from: location }}>
                Reviews
              </NavLink>
            </AdditIfoList>
          </ul>
          <hr />
          <Outlet />
        </>
      )}
    </>
  );
};

export default MovieDetails;

// https://textbook.edu.goit.global/javascript-yk5evp/v2/uk/docs/lesson-17/date/#%D0%B2%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%BD%D1%8F-%D0%B4%D0%B0%D1%82%D0%B8
//------------------------
// <NavLink to={'cast'} state={{ from: location?.state?.from }}>

//----------------------------
// const {
//   title,
//   release_date,
//   vote_average,
//   overview,
//   genres,
//   tagline,
//   poster_path,
// } = movie; // замінити movie на іншу назву (вже є  const movie = useFetchMovie();)
//--------------------
// {
//   movie && (
//     <>
//       {/* //-------------- Go back ------------------------ */}
//       <button type="button" onClick={handleClick}>
//         Go back
//       </button>
//       {/* //------------ moviesInfo ----------------------- */}

//      <div>
//   <img src={poster_path ? poster : ''} alt={tagline} />
// </div>
// <div>
//   <h2>
//     {title}
//     {release}
//   </h2>
//   <p>User Score: {vote_average}%</p>
//   <p>Overview</p>
//   <p>{overview}</p>
//   <p>Genres</p>
//   <p>
//     {genres.map(({ id, name }) => {
//       return <span key={id}>{name} </span>;
//     })}
//   </p>
// </div>
