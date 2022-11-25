import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MoreInfo = styled.div`
  padding: ${p => p.theme.space[2]}px;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.grey};
`;

export const MoreInfoLink = styled(NavLink)`
  color: ${p => p.theme.colors.primary};

  :hover {
    color: ${p => p.theme.colors.red};
  }
`;
