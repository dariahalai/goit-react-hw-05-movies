import { BrowserRouter } from 'react-router-dom';
import { HomePage } from 'pages/HomePage';
import { Routes, Route } from 'react-router-dom';
import { useState, lazy } from 'react';


import Layout from './Layout/Layout';

const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));
const CastPage = lazy(() => import('../pages/CastPage'));
const ReviewsPage = lazy(() => import('../pages/ReviewsPage'));

export const App = () => {
  const [query, setQuery] = useState('');
  const handleFormSubmit = query => {
    setQuery(query);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />}></Route>
          <Route
            path="/movies"
            element={<MoviesPage onSubmit={handleFormSubmit} query={query} />}
          ></Route>
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<CastPage />}></Route>
            <Route path="reviews" element={<ReviewsPage />}></Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
// api_key=9068359f92c010fa6a3cf763f10a0606
