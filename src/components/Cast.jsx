import { useFetchCast } from 'hooks/useFetchCast';

const Cast = () => {
  const [castDetails] = useFetchCast();

  return (
    <>
      {castDetails && (
        <ul>
          {castDetails.map(({ id, name, character }) => {
            return (
              <li key={id}>
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Cast;
