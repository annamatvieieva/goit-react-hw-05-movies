import PropTypes from 'prop-types';

export const CastList = ({ cast }) => {
  return (
    <ul>
      {cast.map(({ id, name, character, profile_path }) => {
        return (
          <li key={id}>
            <img
              src={`https://image.tmdb.org/t/p/w200${profile_path}`}
              alt="actor"
            />
            <p>{name}</p>
            <p>Character: {character} </p>
          </li>
        );
      })}
    </ul>
  );
};

CastList.propTypes = {
  cast: PropTypes.arrayOf(PropTypes.object).isRequired,
};
