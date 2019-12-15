import { css } from '@emotion/core';

const breakpoints = [480, 768, 992, 1024, 1200];

const mediaQ = breakpoints.map(
  (bp) => `@media (min-width: ${bp}px)`,
);

export const theme = {
  colors: {
    white: '#FFFFFF',
    black: '#172241',
    gray: '#f4f7f6',
    grayDark: '#6c7680',
    teal: '#4bc3c9',
  },
  mediaQ,
};

export const globalStyles = css`
  body, html {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    line-height: 1.5;
    color: ${theme.colors.black};
    text-align: left;
    background-color: ${theme.colors.gray};
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /**
  * Allow adding a border to an element by just adding a border-width.
  */
  *,
  *::before,
  *::after {
    border-width: 0;
    border-style: solid;
  }

  button {
    font-family: inherit;
    line-height: inherit;
  }

  ul {
    list-style-type: none;
  }

  p{
    color: ${theme.colors.grayDark};
  }

  h1 {
    font-size: 1.5rem;
    color: ${theme.colors.teal};
    font-weight: 400;
  }

  h2 {
    font-size: 2.125rem;
    padding: 0 1rem;
    color: ${theme.colors.black};
  }

  h3 {
    font-size: 1.5rem;
    padding: 0 .5rem;
    font-weight: 300;
  }
`;
