import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding: ${p => p.theme.space[4]}px;
  box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.5), 0px 2px 4px rgba(0, 0, 0, 0.1),
    0px 4px 8px rgba(0, 0, 0, 0.1), 0px 8px 16px rgba(0, 0, 0, 0.1);
`;
export const Navigation = styled.nav`
  display: flex;
  gap: ${p => p.theme.space[4]}px;
`;
export const NavigationElement = styled(NavLink)`
  text-decoration: none;
  color: ${p => p.theme.colors.black};
  font-weight: ${p => p.theme.fontWeights.bold};

  &.active {
    color: ${p => p.theme.colors.red};
  }

  :hover {
    text-decoration: underline;
  }
`;
