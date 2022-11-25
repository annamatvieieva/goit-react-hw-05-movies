import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { GenresList } from './MovieCard.styled';

const MovieCard = ({ movieInformation }) => {
  const { poster_path, title, vote_average, overview, genres } =
    movieInformation;
  const baseURL = 'https://image.tmdb.org/t/p/w300';
  const path = baseURL + poster_path;
  const score = Math.round(vote_average * 10) + '%';

  return (
    <Box p={2} display="flex">
      <div>
        <img src={path} alt="poster" />
      </div>
      <Box p={4}>
        <h1>{title}</h1>
        <p>User Score: {score} </p>
        <h2>Overview</h2>
        <p>{overview}</p>
        <h3>Genres</h3>
        <GenresList>
          {genres.map(({ id, name }) => {
            return <li key={id}>{name}</li>;
          })}
        </GenresList>
      </Box>
    </Box>
  );
};

MovieCard.propTypes = {
  movieInformation: PropTypes.object.isRequired,
};

export default MovieCard;
