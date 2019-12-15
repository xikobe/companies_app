import styled from '@emotion/styled';

export const Input = styled.input(({ theme }) => ({
  width: '100%',
  fontSize: '1rem',
  fontWeight: '300',
  padding: '1rem',
  transition: 'all .2s ease',
  border: `1px solid ${theme.colors.gray}`,
  marginBottom: '2rem',

  ':hover, :focus': {
    cursor: 'auto',
    border: `1px solid ${theme.colors.teal}`,
  },
}));
