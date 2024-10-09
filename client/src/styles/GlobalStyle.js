import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Montserrat', sans-serif;
    background-color: #121212; /* Default background color */
    color: #ffffff;
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  .content {
    position: relative;
    z-index: 1; /* Ensure content is above the background */
    background: rgba(0, 0, 0, 0.5); /* Make the background of the content transparent */
  }
`;

export default GlobalStyle;
