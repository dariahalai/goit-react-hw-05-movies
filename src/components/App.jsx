import { HomePage } from "pages/HomePage";
import { MoviesPage } from "pages/MoviesPage";
import { Routes,Route } from "react-router-dom";
import { useState } from "react";
import { MovieDetailsPage } from "pages/MovieDetailsPage";
import { CastPage } from "pages/CastPage";
import { ReviewsPage } from "pages/ReviewsPage";

import Layout from "./Layout/Layout";
export const App = () => {
  const [query,setQuery] = useState('');
    const handleFormSubmit = query => {
      setQuery(query);
  };
  return (
    <Layout>

    <Routes >
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/movies' element={<MoviesPage onSubmit={handleFormSubmit} query={query}/>}></Route>
      <Route path='/movies/:movieId' element={<MovieDetailsPage/>}>
        <Route path='cast' element={<CastPage/>}></Route>
        <Route path='reviews' element={<ReviewsPage/>}></Route>
      </Route>
    </Routes>
    </Layout>
  );
};
// api_key=9068359f92c010fa6a3cf763f10a0606