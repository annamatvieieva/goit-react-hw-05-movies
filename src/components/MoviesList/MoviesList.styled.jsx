import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieLink = styled(NavLink)`
  color: ${p => p.theme.colors.primary};

  :hover {
    color: ${p => p.theme.colors.red};
  }
`;
