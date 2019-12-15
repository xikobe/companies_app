import styled from '@emotion/styled';

export const Wrapper = styled.main(({ theme }) => ({
  display: 'flex',
  flexFlow: 'column',

  [theme.mediaQ[2]]: {
    flexFlow: 'row wrap',
    maxWidth: '1400px',
    margin: '2rem auto',
  },
}));

export const ListWrapper = styled.main(() => ({
  flex: 1,
  padding: '15px',
}));
