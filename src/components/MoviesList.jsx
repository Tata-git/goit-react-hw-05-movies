import { NavLink, useLocation } from 'react-router-dom';

export const MoviesList = ({ moviesInfo }) => {
  const location = useLocation();

  return (
    <>
      {moviesInfo && (
        <ul>
          {moviesInfo.map(({ id, title }) => (
            <li key={id}>
              <NavLink to={`/movies/${id}`} state={{ from: location }}>
                {title}
              </NavLink>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};


