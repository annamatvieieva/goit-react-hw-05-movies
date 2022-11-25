import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BackLink = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100px;
  height: 30px;
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.grey};
  box-shadow: 0px 2px 8px 0px ${p => p.theme.colors.grey};
  border-radius: ${p => p.theme.radii.md};
  text-decoration: none;
  color: ${p => p.theme.colors.black};
  font-weight: ${p => p.theme.fontWeights.bold};

  :active {
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
    box-shadow: 0px 2px 8px 0px ${p => p.theme.colors.accent};
    background-color: ${p => p.theme.colors.accent};
  }
`;
