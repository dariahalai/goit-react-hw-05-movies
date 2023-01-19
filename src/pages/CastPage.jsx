import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import css from './CastPage.module.css';

export const CastPage = () => {
  const [cast, setCast] = useState([]);
//   const [error, setError] = useState(false);
  const { movieId } = useParams();
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=9068359f92c010fa6a3cf763f10a0606&language=en-US`
    )
      .then(res => res.json())
      .then(data => {
        const { cast } = data;
        setCast(cast);
      })
      .catch(error => {
        console.log(error);
        // setError(true);
      });
  }, [movieId]);
  const baseUrlImg = 'https://image.tmdb.org/t/p/w500/';
  return (
    <ul className={css.castList}>
      {cast.map(({ name, character, profile_path }) => (
        <li className={css.castListItem} key={name}>
          {profile_path!==null ? <img
            src={baseUrlImg + profile_path}
            alt={name}
          /> : 'Not image'}
          <p className={css.castListItemName}>Actor: {name}</p>
          <p className={css.castListItemName}>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};

