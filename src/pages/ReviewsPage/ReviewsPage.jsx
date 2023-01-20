import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import css from './ReviewsPage.module.css';

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);
  // const [error, setError] = useState(false);
  const { movieId } = useParams();
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=9068359f92c010fa6a3cf763f10a0606&language=en-US&page=1`
    )
      .then(res => res.json())
      .then(data => {
        const { results } = data;
        setReviews(results);
        console.log(data);
      })
      .catch(error => {
        console.log(error);
        //   setError(true);
      });
  }, [movieId]);
  return (
    <ul className={css.reviewsList}>
      {reviews.map(({ author, content }) => (
        <li className={css.reviewsListItem} key={author}>
          <h4>{author}</h4>
          <p>{content}</p>
        </li>
      ))}
    </ul>
  );
};

export default ReviewsPage;
