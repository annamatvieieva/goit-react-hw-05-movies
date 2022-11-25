import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { MovieLink } from './MoviesList.styled';

export const MovieList = ({ movieList }) => {
  const location = useLocation();

  return (
    <ul>
      {movieList.map(({ id, title }) => {
        return (
          <li key={id}>
            <MovieLink to={`/movies/${id}`} state={{ from: location }}>
              {title}
            </MovieLink>
          </li>
        );
      })}
    </ul>
  );
};

MovieList.propTypes = {
  movieList: PropTypes.arrayOf(PropTypes.object).isRequired,
};
