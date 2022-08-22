import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getFullDetailsMovie } from '../services/moviesApi';

export const useFetchMovie = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    // getFullDetailsMovie(movieId).then(setMovie);
    getFullDetailsMovie(movieId).then((data) => {
      console.log('data', data)
          setMovie(data)
        });

  }, [movieId]);
console.log('movie', movie)
  return movie;
};
