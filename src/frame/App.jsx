import { Routes, Route } from 'react-router-dom';

import { Layout } from './Layout/Layout';
import { Home } from 'components/Home';
import { Movies } from 'components/Movies';
// import { MoviesList } from 'components/MoviesList';
import { MovieDetails } from 'components/MovieDetails';
import { NotFoundView } from 'components/NotFoundView';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />} />
        <Route path="*" element={<NotFoundView />} />
      </Route>
    </Routes>
  );
};
