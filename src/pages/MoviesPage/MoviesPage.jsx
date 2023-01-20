import MoviesList from "components/MoviesList";
import Searchbar from "components/Searchbar";
import PropTypes from 'prop-types';

 const MoviesPage = ({onSubmit,query}) =>{
   return(
    <>
    <Searchbar onSubmit={onSubmit}/>
    <MoviesList query={query}/> 
    </>
   )
}
MoviesPage.propTypes = {
  query: PropTypes.string.isRequired,
  onSubmit:PropTypes.func.isRequired
};
export default MoviesPage;