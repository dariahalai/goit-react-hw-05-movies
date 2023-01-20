import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import css from './ReviewsPage.module.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader/Loader';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=9068359f92c010fa6a3cf763f10a0606&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(data => {
        const { results } = data;
        setReviews(results);
        console.log(data);
      })
      .catch(() => {
        toast.error('Something went wrong');
      })
      .finally(() => setLoading(false));
  }, [movieId]);
  if (loading) {
    return <Loader/>;
  }

  return (
   reviews.length ? (<ul className={css.reviewsList}>
      {reviews.map(({ author, content }) => (
        <li className={css.reviewsListItem} key={author}>
          <h4>{author}</h4>
          <p>{content}</p>
        </li>
      ))}
    </ul>) : (<p>Reviews  list is empty</p>)
  );
};

export default ReviewsPage;
