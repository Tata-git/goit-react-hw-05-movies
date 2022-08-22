import { PageHeading } from 'frame/PageHeading/PageHeading';
import { useState, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import * as filmCollection from '../services/moviesApi';

export const AuthorsView = () => {
  const [authors, setAuthors] = useState(null);

  useEffect(() => {
    filmCollection.getCastDetails().then(setAuthors);
  }, []);

  return (
    <>
      <PageHeading>Authors</PageHeading>

      {authors && (
        <ul>
          {authors.map(author => (
            <li key={author.id}>
              <NavLink to={`${author.id}`}>{author.name}</NavLink>
            </li>
          ))}
        </ul>
          )}
          <hr />
          <Outlet />
    </>
  );
};
