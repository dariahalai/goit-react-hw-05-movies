import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RiMovie2Line } from "react-icons/ri";
import css from './MoviesList.module.css';
const MoviesList = ({ query }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);
  const [error, setError] = useState(false);
  useEffect(() => {
    setSearchQuery(query);
  }, [query]);
  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=9068359f92c010fa6a3cf763f10a0606&language=en-US&query=${searchQuery}&page=1&include_adult=false`
    )
      .then(res => res.json())
      .then(data => {
        const { results } = data;
        if (!results.length) {
          console.log('oops,nothing in search');
        }
        const movies = results.map(({ id, original_title }) => ({
          id,
          original_title,
        }));
        setSearchMovies(movies);
      })
      .catch(error => {
        console.log(error);
        setError(true);
      });
  }, [searchQuery]);
  return (
    <ul className={css.moviesList}>
      {searchMovies.map(({ id, original_title }) => (
        <li className={css.moviesListItem}>
          <Link className={css.moviesListLink} to={`/movies/${id}`} key={id}>
          <RiMovie2Line style={{paddingRight:'2px'}}/>{original_title}
        </Link>
        </li>
      ))} 
    </ul>
  );
};

export default MoviesList;
