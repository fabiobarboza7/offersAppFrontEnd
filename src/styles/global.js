import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle` 
  :root {
    --primary-color: #11e374;
    --secondary-color: #9e2fba;
    --dark-secondary-color: #5d0067;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', Helvetica, Arial,serif;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    min-height: 100vh;
  }
  body {
    -webkit-font-smoothing: antialiased !important;
  }

  a {
    color: grey;
    text-decoration-color: var(--secondary-color);
  }
  
`;
