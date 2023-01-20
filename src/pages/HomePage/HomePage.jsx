import { useState, useEffect } from 'react';
import {useLocation } from 'react-router-dom';
import { RiMovie2Line } from 'react-icons/ri';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from 'components/Loader/Loader';

import {Section,Title,TrendList,TrendListItem} from './HomePage.styled';
const HomePage = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=9068359f92c010fa6a3cf763f10a0606`
    )
      .then(res => res.json())
      .then(data => setTrendMovies(data.results))
      .catch(() => {
        toast.error('Something went wrong');
      })
      .finally(() => setLoading(false));
  }, []);
  if (loading) {
    return <Loader/>;
  }
  return (
    <Section >
      <Title >Trending today</Title>
      {trendMovies && (
        <TrendList >
          {trendMovies.map(({ original_title, id }) => (
            <li key={id}>
              <TrendListItem
                state={{ from: location }}
                to={`/movies/${id}`}
              >
                <RiMovie2Line style={{ paddingRight: '2px' }} />
                {original_title}
              </TrendListItem>
            </li>
          ))}
        </TrendList>
      )}
    </Section>
  );
};

export default HomePage;
