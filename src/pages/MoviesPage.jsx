import MoviesList from "components/MoviesList";
import Searchbar from "components/Searchbar";
// import { useState,useEffect } from "react";

 const MoviesPage = ({onSubmit,query}) =>{
   return(
    <>
    <Searchbar onSubmit={onSubmit}/>
    <MoviesList query={query}/> 
    </>
   )
}

export default MoviesPage;