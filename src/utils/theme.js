import { css } from '@emotion/core';

export const theme = {
  colors: {
    white: '#FFFFFF',
    black: '#172241',
    gray: '#f4f7f6',
    grayDark: '#6c7680',
    teal: '#4bc3c9',
  }
}

export const globalStyles = css`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,700i');

  body, html {
    font-family: 'Roboto', sans-serif;
    font-weight: 300;
    line-height: 1.5;
    color: ${theme.colors.black};
    text-align: left;
    background-color: ${theme.colors.gray};
  }

  * {
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

  ul {
    list-style-type: none;
  }

  p{
    color: ${theme.colors.grayDark};
  }

  h1 {
    color: ${theme.colors.teal};
    font-weight: 400;
  }

  h2 {
    font-size: 2.125rem;
    padding: 0 1rem;
  }

  h3 {
    font-size: 1.5rem;
    padding: 0 .5rem;
    font-weight: 300;
  }
`;
