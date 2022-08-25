import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviews } from 'services/moviesApi';

export const useFetchReviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getReviews(movieId).then(data => {
      console.log('data', data);
      setReviews(data);
    });
  }, [movieId]);

  return reviews;
};
