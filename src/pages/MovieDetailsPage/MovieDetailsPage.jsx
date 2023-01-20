import { useState, useEffect, Suspense } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import css from './MovieDetailsPage.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader/Loader';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  // const location = useLocation();

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=9068359f92c010fa6a3cf763f10a0606&language=en-US`
    )
      .then(res => res.json())
      .then(data => {
        setMovie(data);
      })
      .catch(() => {
        toast.error('Something went wrong');
      })
      .finally(() => setLoading(false));
  }, [movieId]);
  if (loading) {
    return <Loader/>;
  }
  const { original_title, overview, vote_average, genres, backdrop_path } =
    movie;
  const NO_IMAGE =
    'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg';
  const IMG_PATH = 'https://image.tmdb.org/t/p/w500/';
  let image = !!backdrop_path ? IMG_PATH + backdrop_path : NO_IMAGE;

  return (
    <>
      {/* <Link  to={location.state.from} className={css.btn} >Go back</Link> */}
      <div>
        <div className={css.movieCard}>
          <img className={css.movieCardImg} src={image} alt={original_title} />
          <div className={css.movieCardInfo}>
            <h2>{original_title}</h2>
            <h3>Rating</h3>
            <p>{vote_average}</p>
            <h3>Overview</h3>
            <p>{overview}</p>
            <h3>Genres</h3>
            <ul className={css.movieCardGenresList}>
              {genres && genres.map(({ name }) => <li key={name}>{name}</li>)}
            </ul>
          </div>
        </div>
        <div className={css.infoContainer}>
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
      </div>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
