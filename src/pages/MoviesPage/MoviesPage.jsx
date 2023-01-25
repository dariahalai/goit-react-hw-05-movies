import { useState,useEffect } from 'react';
import { useSearchParams,useLocation } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineSearch } from 'react-icons/ai';
import { RiMovie2Line } from 'react-icons/ri';
import Loader from 'components/Loader/Loader';
import { Section, Input, Btn ,MoviesList,MoviesListItem} from './MoviesPage.styled';

 const MoviesPage = () =>{
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [loading, setLoading] = useState(false);
  const keyword = searchParams.get('query');
  const location = useLocation();
  useEffect(() => {
    if (keyword === '' || keyword === null) {
      return;
    }
    setLoading(true);
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=9068359f92c010fa6a3cf763f10a0606&language=en-US&query=${keyword}&page=1&include_adult=false`
    )
      .then(res => res.json())
      .then(data => {
        const { results} = data;
        if (!results.length) {
          toast.error('Try again with another search word');
        }
        const movies = results.map(({ id, original_title }) => ({
          id,
          original_title,
        }));
        setMovies(movies);
      })
      .catch(() => {
        toast.error('Something went wrong');
      })
      .finally(() => setLoading(false));
  }, [keyword]);

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.query.value === '') {
      return;
    }
    setSearchParams({ query: form.query.value });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <Section>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="query"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <Btn type="submit">
          <AiOutlineSearch size="20" />
        </Btn>
      </form>
      {movies.length > 0 && 
        <MoviesList>
          {movies.map(({ id, original_title }) => (
            <li key={id}>
              <MoviesListItem state={{ from: location }} to={`/movies/${id}`}>
                <RiMovie2Line style={{ paddingRight: '2px' }} />
                {original_title}
              </MoviesListItem>
            </li>
          ))}
        </MoviesList>}
    </Section>
  );
}

export default MoviesPage;