import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCastDetails } from 'services/moviesApi';

const Cast = () => {
  console.log('Cast');

  const [castDetails, setCastDetails] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getCastDetails(movieId).then(data => {
      console.log('data', data);
      setCastDetails(data);
    });
  }, [movieId]);

  console.log('cast', castDetails);

  return (
    <ul>
      {castDetails &&
        castDetails.map(({ id, name, character }) => {
          return (
            <li key={id}>
              <p>{name}</p>
              <p>Character: {character}</p>
            </li>
          );
        })}
    </ul>
  );
};

export default Cast;
