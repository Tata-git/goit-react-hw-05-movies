import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as filmCollectionAPI from '../services/moviesApi';

export const useFetchAuthor = () => {
  const { authorId } = useParams();
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    filmCollectionAPI.getCastDetails(authorId).then(setAuthor);
  }, [authorId]);

  return author;
};
