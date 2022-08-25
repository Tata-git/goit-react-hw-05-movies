import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCastDetails } from 'services/moviesApi';

export const useFetchCast = () => {
  const [castDetails, setCastDetails] = useState([]);
  const { movieId } = useParams();

    useEffect(() => {
      
    getCastDetails(movieId).then(data => {
      console.log('data', data);
      setCastDetails(data);
    });
    }, [movieId]);
    
  console.log('cast', castDetails);

  return castDetails;
};
