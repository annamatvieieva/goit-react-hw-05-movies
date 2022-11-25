import styled from 'styled-components';

export const SearchForm = styled.form`
  input {
    outline: none;
    width: 300px;
    border: ${p => p.theme.borders.normal} ${p => p.theme.colors.grey};

    &:focus {
      border: ${p => p.theme.borders.normal} ${p => p.theme.colors.accent};
      box-shadow: 0px 2px 8px 0px ${p => p.theme.colors.accent};
    }
  }
`;
