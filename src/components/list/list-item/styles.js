import styled from '@emotion/styled';

export const Wrapper = styled.li(({ theme }) => ({
  display: 'flex',
  padding: '1.5rem',
  backgroundColor: theme.colors.white,
  marginBottom: '1.5rem',
  flexFlow: 'column wrap',
  boxShadow: '0 2px 3px 0 #e8ebed, 0 0 3px 0 #e8ebed',
  transition: 'background .2s',

  ':hover': {
    cursor: 'pointer',
    backgroundColor: `${theme.colors.gray}4d`,
  },
}));

export const Info = styled.div(() => ({
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-between',
  marginBottom: '1.5rem',
}));

export const Subscriptions = styled.ul(() => ({
  display: 'flex',
  flexFlow: 'row wrap',
}));

export const Categories = styled.ul(() => ({
  display: 'flex',
  flexFlow: 'row wrap',
}));

export const Category = styled.li(({ theme }) => ({
  color: theme.colors.teal,
  paddingRight: '4px',
  '&:after': {
    content: '" /"',
  },

  '&:last-of-type': {
    paddingRight: '0',
    '&:after': {
      content: '""',
    },
  },
}));

export const Subscription = styled.li`
  display: flex;
  flex-flow: row wrap;
  align-items: baseline;
  margin-right: 1rem;
  position: relative;

  & sup {
    position: absolute;
    top: -.3rem;
  }
`;
