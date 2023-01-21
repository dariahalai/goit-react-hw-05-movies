import { useState, useEffect, Suspense } from 'react';
import { useParams, Outlet,useLocation,useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineArrowLeft } from "react-icons/ai";

import Loader from 'components/Loader/Loader';
import FilmCard from 'components/FilmCard';
import InfoContainer from 'components/InfoContainer';

import {BtnBack} from './MovieDetailsPage.styled';

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

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
    return <Loader />;
  }
  const { original_title, overview, vote_average, genres, backdrop_path } =
  movie;
  return (
    <>
      <BtnBack 
      onClick={()=>navigate(location.state?.from ?? '/')}><AiOutlineArrowLeft size='20'/></BtnBack>
      <FilmCard 
      original_title={original_title} 
      overview={overview} 
      vote_average={vote_average} 
      genres={genres} 
      backdrop_path={backdrop_path} />
      <InfoContainer />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetailsPage;
