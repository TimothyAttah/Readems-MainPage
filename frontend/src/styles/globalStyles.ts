import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
    font-family: 'Lato', sans-serif;
  }

  html {
    font-size: 16px;

    @media screen and (max-width: 420px) {
      font-size: 10px;
    }
  }

  body {
    max-width: 1512px;
    width: 100%;
    margin: 0 auto;
    border: 2px solid red;
  }

  h1, h2, h3, h4, h5, h6, p, div {
    padding: 0;
    margin: 0;
  }

  a {
    color: #000;
    text-decoration: none;
  }

  ul, li {
    margin: 0;
    padding: 0;
    list-style-type: none;
  }

  button {
    border: none;
    outline: none;
    cursor: pointer;

    :focus {
      border: none;
      outline: none;
    }
  }
`;
