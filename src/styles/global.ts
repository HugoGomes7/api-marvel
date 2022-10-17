import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Bebas Neue', cursive;
    }

    body, input, button {
      font-size: 20px;
    }

    body {
      background-image: url(https://wallpapercave.com/wp/wp2903386.gif);
    }
`;

