import styled from '@emotion/styled';

export const Item = styled.button((props) => ({
  position: 'relative',
  width: '100%',
  textAlign: 'left',
  display: 'block',
  padding: '1rem',
  fontSize: '17px',
  fontWeight: '300',
  color: '#202121',
  cursor: 'pointer',
  background: props.theme.colors.gray,
  borderBottom: '1px solid #E6EAEA',
  textDecoration: 'none',
  transition: 'all 0.3s ease',

  ':hover': {
    backgroundColor: props.theme.colors.white,
    transition: 'background 0.3s ease-in-out',
  },
}));
