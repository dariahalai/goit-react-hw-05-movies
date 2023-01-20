import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from './CastPage.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader/Loader';

const CastPage = () => {
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);

  const { movieId } = useParams();
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=9068359f92c010fa6a3cf763f10a0606&language=en-US`
    )
      .then(res => res.json())
      .then(data => {
        const { cast } = data;
        setCast(cast);
      })
      .catch(() => {
        toast.error('Something went wrong');
      })
      .finally(() => setLoading(false));
  }, [movieId]);
  if (loading) {
    return <Loader/>;
  }
  const NO_IMAGE =
    'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg';
  const IMG_PATH = 'https://image.tmdb.org/t/p/w500/';

  return (
    <ul className={css.castList}>
      {cast.map(({ name, character, profile_path }) => (
        <li className={css.castListItem} key={name}>
          <img
            src={!!profile_path ? IMG_PATH + profile_path : NO_IMAGE}
            alt={name}
          />
          <p className={css.castListItemName}>Actor: {name}</p>
          <p className={css.castListItemName}>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};

export default CastPage;
