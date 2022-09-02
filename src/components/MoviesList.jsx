import { Link, useLocation } from 'react-router-dom'; //

export const MoviesList = ({ moviesInfo }) => {
  const location = useLocation();
  console.log('movieList - location ', location);
  
  return (
    <>
      {moviesInfo && (
        <ul>
          {moviesInfo.map(({ id, title }) => (
            <li key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
