import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`

:root {
    --light-purple: #ECE3F0;
    --dark-purple: #AB6E9F;
    --light-blue: #EBF1F8;
    --dark-blue: #7DABDC;
    --black: #000000;
    --white: #FFFFFF;
  }

body {
    background: var(--white);
    color: var(--black);
    font-family: 'Raleway', sans-serif;
}

h1 {
    font-family: 'Playfair Display', serif;
}

h2 {
    text-transform: uppercase;
    letter-spacing: 0.2em;
}
`;

export default GlobalStyle;