import PropTypes from 'prop-types';
import { MovieCard, GenresList, Section } from './FilmCard.styled';

const FilmCard = ({
  original_title,
  overview,
  vote_average,
  genres,
  backdrop_path,
}) => {
  const NO_IMAGE =
    'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg';
  const IMG_PATH = 'https://image.tmdb.org/t/p/w500/';
  let image = !!backdrop_path ? IMG_PATH + backdrop_path : NO_IMAGE;

  return (
    <Section>
      <MovieCard>
        <img src={image} alt={original_title} />
        <div>
          <h2>{original_title}</h2>
          <h3>Rating</h3>
          <p>{vote_average}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <GenresList>
            {genres && genres.map(({ name }) => <li key={name}>{name}</li>)}
          </GenresList>
        </div>
      </MovieCard>
    </Section>
  );
};
FilmCard.propTypes = {
  original_title:PropTypes.string,
  overview:PropTypes.string,
  vote_average:PropTypes.number,
  genres:PropTypes.array,
  backdrop_path:PropTypes.string,
};

export default FilmCard;
