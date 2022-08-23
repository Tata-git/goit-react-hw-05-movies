// import {  Suspense } from 'react';
// import { NavLink } from 'react-router-dom';
import { useFetchMovie } from 'hooks/useFetchMovie';
import { NotFoundView } from './NotFoundView';

export const MovieDetails = ({
  title,
  name,
  release_date,
  vote_average,
  overview,
  // genres: { id: genresId, name: genresName },
  genres,
  tagline,
  poster_path,
}) => {
  const movie = useFetchMovie();
  console.log('movie', movie);

  const IMAGE_URL = 'https://image.tmdb.org/t/p/';
  const poster = `${IMAGE_URL}w300${poster_path}`;
  const release = new Date(release_date).getFullYear();

  return (
    <>
      {/* <Suspense fallback={<div>Loading...</div>}></Suspense> */}
      {/* {!movie && <h2>Загружаем...</h2>} */}

      {movie && (
        <>
          <div>
            <img
              src={poster_path ? `${poster}` : <NotFoundView />}
              alt={tagline ? `${tagline}` : ''}
            />
          </div>
          <div>
            {/* <h2>{title || name}</h2> */}
            <h2>
              {title}
              {release_date ? `${release}` : ''}
            </h2>
            <p>User Score: {vote_average}%</p>
            <p>Overview</p>
            <p>{overview ? `${overview}` : ''}</p>
            <p>Genres</p>
            {/* <p key={genresId}>{ genresName}</p> */}
            <p>
              {genres.map(({ id, name }) => {
                <span key={id}>{name}</span>;
              })}
            </p>
          </div>
        </>
      )}
    </>
  );
};

// https://textbook.edu.goit.global/javascript-yk5evp/v2/uk/docs/lesson-17/date/#%D0%B2%D1%81%D1%82%D0%B0%D0%BD%D0%BE%D0%B2%D0%BB%D0%B5%D0%BD%D0%BD%D1%8F-%D0%B4%D0%B0%D1%82%D0%B8
