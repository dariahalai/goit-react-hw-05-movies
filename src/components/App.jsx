import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import { useState, lazy } from 'react';
import { ToastContainer } from 'react-toastify';

import Layout from './Layout';
import HomePage  from 'pages/HomePage';

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
    <BrowserRouter basename='goit-react-hw-05-movies'>
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
      <ToastContainer autoClose={3000} theme="colored"/>
    </BrowserRouter>
    
  );
};
// api_key=9068359f92c010fa6a3cf763f10a0606
