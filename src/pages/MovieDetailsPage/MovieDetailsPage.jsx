import { useState, useEffect,Suspense } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import css from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  // const [error, setError] = useState(false);
  const { movieId } = useParams();
  // const location = useLocation();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=9068359f92c010fa6a3cf763f10a0606&language=en-US`
    )
      .then(res => res.json())
      .then(data => {
        setMovie(data);
      })
      .catch(error => {
        console.log(error);
        // setError(true);
      });
  }, [movieId]);
  const { original_title, overview, vote_average, genres, backdrop_path } =
    movie;
  const image = 'https://image.tmdb.org/t/p/w500/' + backdrop_path;
  return (
    <>
      {/* <Link  to={location.state.from} className={css.btn} >Go back</Link> */}
      <div>
      <div className={css.movieCard}>
        <img className={css.movieCardImg} src={image} alt={original_title} />
        <div className={css.movieCardInfo}>
          <h2>{original_title}</h2>
          <p>{vote_average}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ul className={css.movieCardGenresList}>
            {genres && genres.map(({ name }) => <li>{name}</li>)}
          </ul>
        </div>
      </div>
      <h3>Aditional information</h3>
      <ul className={css.movieCardBtnList}>
        <li className={css.btn} key="cast">
          <Link className={css.movieCardBtnLink} to="cast">
            Cast
          </Link>
        </li>
        <li className={css.btn} key="reviews">
          <Link className={css.movieCardBtnLink} to="reviews">
            Reviews
          </Link>
        </li>
      </ul>
      </div>
      <Suspense fallback={null}>
        <Outlet/>
        </Suspense>
    </>
  );
};

export default MovieDetailsPage;