import { Routes, Route } from 'react-router-dom';

import { Layout } from './Layout/Layout';
import { HomeView } from 'components/homeView';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}></Route>
      <Route index element={<HomeView />} />
    </Routes>
  );
};
