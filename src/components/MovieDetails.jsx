// import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
// import { PageHeading } from 'frame/PageHeading/PageHeading';
// import * as filmCollectionAPI from '../services/moviesApi';
import { useFetchMovie } from 'hooks/useFetchMovie';


// export const MovieDetails = () => {
//   // const { movieId } = useParams();
//   // const [movie, setMovie] = useState(null);
//   const movie = useFetchMovie();

//   // useEffect(() => {
//   //   filmCollectionAPI.getFullDetailsMovie(movieId).then(setMovie);
//   // }, [movieId]);
//   console.log(movie);
//   return;
//   // return (
//   //   <>
//   //     {/* <PageHeading>Film {movieId}</PageHeading> */}
//   //     {movie && (
//   //       <>
//   //         <img src={movie.poster_path} alt={movie.title} />
//   //         <h2>{movie.title}</h2>
//   //         {/* <p>Автор: {movie.author.name}</p> */}
//   //         {/* <p>{movie.descr}</p> */}
//   //       </>
//   //     )}
//   //   </>
//   // );
// };
