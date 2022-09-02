import { useFetchCast } from 'hooks/useFetchCast';
import noImage from '../image/no-image-min.png';
const Cast = () => {
  const castDetails = useFetchCast();

  return (
    <>
      {castDetails.length > 0 ? (
        <ul>
          {castDetails.map(({ id, name, character, profile_path }) => {
            return (
              <li key={id}>
                <img
                  src={
                    profile_path
                      ? `https://tmdb.org/t/p/w200${profile_path}`
                      : noImage
                  }
                  alt={name}
                />
                <h3>{name}</h3>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any cast for this movie</p>
      )}
    </>
  );
};

export default Cast;
