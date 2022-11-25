import styled from 'styled-components';

export const GenresList = styled.ul`
  display: flex;
  padding: ${p => p.theme.space[1]}px;
  list-style: none;
  gap: ${p => p.theme.space[3]}px;
`;
