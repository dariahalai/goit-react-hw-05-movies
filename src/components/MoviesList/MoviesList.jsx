import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RiMovie2Line } from 'react-icons/ri';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import css from './MoviesList.module.css';
import Loader from 'components/Loader/Loader';

const MoviesList = ({ query }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchMovies, setSearchMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setSearchQuery(query);
  }, [query]);
  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=9068359f92c010fa6a3cf763f10a0606&language=en-US&query=${searchQuery}&page=${page}&include_adult=false`
    )
      .then(res => res.json())
      .then(data => {
        const { results,total_pages } = data;
        if (!results.length) {
          toast.error('Try again with another search word');
        }
        const movies = results.map(({ id, original_title }) => ({
          id,
          original_title,
        }));
        setSearchMovies(movies);
        setTotalPages(total_pages);
      })
      .catch(() => {
        toast.error('Something went wrong');
      })
      .finally(() => setLoading(false));
  }, [searchQuery, page]);
  const nexPage = () => {
    if(page === totalPages){
      return
    }
    setPage(prev => prev + 1);
  }
    const prevPage = () => {
      if(page === 1){
        return
      }
      setPage(prev => prev - 1);
  };

  if (loading) {
    return <Loader/>;
  }
  return (
    searchMovies.length > 0 && 
    <div className={css.moviesContainer}>
      <ul className={css.moviesList}>
        {searchMovies.map(({ id, original_title }) => (
          <li key={id} className={css.moviesListItem}>
            <Link
              className={css.moviesListLink}
              state={{ from: location }}
              to={`/movies/${id}`}
            >
              <RiMovie2Line style={{ paddingRight: '2px' }} />
              {original_title}
            </Link>
          </li>
        ))}
      </ul>
      <ul>
        <li className={css.btnItem}><button className={css.btn} type="button" onClick={nexPage}>Next page</button></li>
        <li className={css.btnItem}><button className={css.btn} type="button" onClick={prevPage}>Prev page</button></li>
      </ul>
    </div>
  );
};

export default MoviesList;
