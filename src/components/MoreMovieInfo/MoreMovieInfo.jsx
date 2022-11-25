import PropTypes from 'prop-types';
import { MoreInfo, MoreInfoLink } from './MoreMovieInfo.styled';

export const MoreMovieInfo = ({ link }) => {
  return (
    <MoreInfo>
      <p>Additional information</p>
      <ul>
        <li>
          <MoreInfoLink to="cast" state={link}>
            Cast
          </MoreInfoLink>
        </li>
        <li>
          <MoreInfoLink to="reviews" state={link}>
            Reviews
          </MoreInfoLink>
        </li>
      </ul>
    </MoreInfo>
  );
};

MoreMovieInfo.propTypes = {
  link: PropTypes.object.isRequired,
};
