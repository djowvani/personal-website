import { createGlobalStyle } from 'styled-components';

import { black_bg } from '@/styles/abstracts/_variables.js';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
    font-family: 'Oxygen', sans-serif;
  }

  html, body {
    width: 100%;
    height: 100%;
    background-color: ${black_bg};
    color: white;
    -webkit-font-smoothing: antialiased;
  }

  button {
    cursor: pointer;
  }
`;