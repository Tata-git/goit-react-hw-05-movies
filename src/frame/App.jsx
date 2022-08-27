import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const Layout = lazy(
  () => import('./Layout/Layout') /* webpackChunkName: "layout" */
);
const Home = lazy(
  () => import('components/Home') /* webpackChunkName: "home" */
);
const Movies = lazy(
  () => import('components/Movies') /* webpackChunkName: "movies" */
);
const MovieDetails = lazy(
  () =>
    import('components/MovieDetails') /* webpackChunkName: "movie-details" */
);
const NotFoundView = lazy(
  () =>
    import('components/NotFoundView') /* webpackChunkName: "not-found-view" */
);

const Cast = lazy(
  () => import('components/Cast') /* webpackChunkName: "cast" */
);
const Reviews = lazy(
  () => import('components/Reviews') /* webpackChunkName: "reviews" */
);

export const App = () => {
  return (
    <>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          {/* <Route path="movies/:movieId/cast" element={<Cast />} /> */}
          {/* <Route path="movies/:movieId/reviews" element={<Reviews />} /> */}
          <Route path="*" element={<NotFoundView />} />
        </Route>
      </Routes>
    </Suspense>
     </>
  );
};
//---------------------------------------

// import { Routes, Route } from 'react-router-dom';
// import Layout from './Layout/Layout';
// import Home from 'components/Home';
// import Movies from 'components/Movies';
// import MovieDetails from 'components/MovieDetails';
// import Cast from 'components/Cast';
// import Reviews from 'components/Reviews';
// import NotFoundView from 'components/NotFoundView';

// export const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Layout />}>
//         <Route index element={<Home />} />
//         <Route path="movies" element={<Movies />} />
//         <Route path="movies/:movieId" element={<MovieDetails />}>
//           <Route path="cast" element={<Cast />} />
//           <Route path="reviews" element={<Reviews />} />
//         </Route>
//         {/* <Route path="movies/:movieId/cast" element={<Cast />} /> */}
//         {/* <Route path="movies/:movieId/reviews" element={<Reviews />} /> */}
//         <Route path="*" element={<NotFoundView />} />
//       </Route>
//     </Routes>
//   );
// };
