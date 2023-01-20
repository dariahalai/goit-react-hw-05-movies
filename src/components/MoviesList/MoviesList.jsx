import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RiMovie2Line } from 'react-icons/ri';
import css from './MoviesList.module.css';
const MoviesList = ({ query }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [searchMovies, setSearchMovies] = useState([]);
  const location = useLocation();
  // const [error, setError] = useState(false);
  useEffect(() => {
    setSearchQuery(query);
  }, [query]);
  useEffect(() => {
    if (!searchQuery) {
      return;
    }
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=9068359f92c010fa6a3cf763f10a0606&language=en-US&query=${searchQuery}&page=${page}&include_adult=false`
    )
      .then(res => res.json())
      .then(data => {
        const { results,total_pages } = data;
        if (!results.length) {
          console.log('oops,nothing in search');
        }
        const movies = results.map(({ id, original_title }) => ({
          id,
          original_title,
        }));
        setSearchMovies(movies);
        setTotalPages(total_pages);
      })
      .catch(error => {
        console.log(error);
        // setError(true);
      });
  }, [searchQuery, page]);
  const nexPage = () => {
    if(page === totalPages){
      return
    }
    setPage(prev => prev + 1);
  }
    const previousPage = () => {
      if(page === 1){
        return
      }
      setPage(prev => prev - 1);
  };

  return (
    <>
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
      <button type="button" onClick={nexPage}>Next page</button>
      <button type="button" onClick={previousPage}>Prev page</button>
    </>
  );
};

export default MoviesList;
