import PropTypes from 'prop-types';
import { BackLink } from './ButtonBack.styled';

export const Buttonback = ({ link, children }) => {
  return <BackLink to={link}>{children}Go back</BackLink>;
};

Buttonback.propTypes = {
  link: PropTypes.object.isRequired,
  children: PropTypes.element,
};
