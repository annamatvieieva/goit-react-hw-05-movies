import PropTypes from 'prop-types';

export const ReviewList = ({ reviews }) => {
  return (
    <ul>
      {reviews.map(({ id, author, content }) => {
        return (
          <li key={id}>
            <h3> Author: {author}</h3>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
};

ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};
