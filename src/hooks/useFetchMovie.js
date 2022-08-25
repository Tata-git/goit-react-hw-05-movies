import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getFullDetailsMovie } from '../services/moviesApi';

export const useFetchMovie = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    // console.log(movieId);
    
    // getFullDetailsMovie(movieId).then(data => {
    //   console.log('data', data);
    //   setMovie(data);
    // });

    getFullDetailsMovie(movieId).then(setMovie);

  }, [movieId]);

  // console.log('movie', movie);

  return movie;
};
