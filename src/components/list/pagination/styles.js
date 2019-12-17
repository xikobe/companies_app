import styled from '@emotion/styled';

export const PagesWrapper = styled.ul(() => ({
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'center',
  alignItems: 'center',
}));

const paginationButtonRules = (theme) => ({
  color: theme.colors.grayDark,
  backgroundColor: 'transparent',
  fontWeight: 300,
  fontSize: '1rem',
  lineHeight: 1.5,
  padding: '6px 7px',
  cursor: 'pointer',
  border: '1px solid transparent',
  transition: 'border-color .2s ease',

  '&:hover': {
    borderColor: theme.colors.teal,
  },
});

export const PageItem = styled.button(({ isActive, theme }) => ({
  ...paginationButtonRules(theme),
  ...(isActive && {
    color: theme.colors.white,
    backgroundColor: theme.colors.teal,
  }),
}));

export const PrevButton = styled.button(({ theme }) => ({
  ...paginationButtonRules(theme),

  '&:before': {
    content: '"<"',
  },
}));

export const NextButton = styled.button(({ theme }) => ({
  ...paginationButtonRules(theme),

  '&:before': {
    content: '">"',
  },
}));
