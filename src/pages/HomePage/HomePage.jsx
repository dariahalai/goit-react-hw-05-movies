import { useState, useEffect } from 'react';
import { Link,useLocation } from 'react-router-dom';
import css from './HomePage.module.css';
import { RiMovie2Line } from 'react-icons/ri';

const HomePage = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=9068359f92c010fa6a3cf763f10a0606`
    )
      .then(res => res.json())
      .then(data => setTrendMovies(data.results));
  }, []);
  return (
    <div className={css.container}>
      <h1 className={css.trendMoviesTitle}>Trending today</h1>
      <ul className={css.trendMoviesList}>
        {trendMovies.map(({ original_title, id }) => (
          <li className={css.trendMoviesListItem} key={id}>
            <Link className={css.trendMoviesListLink} state={{ from: location }} to={`/movies/${id}`}>
              <RiMovie2Line style={{paddingRight:'2px'}}/>
              {original_title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;