import { createGlobalStyle } from "styled-components";
import DotGothic from "./fonts/DotGothic16-Regular.woff";

// this is font style. when add font-faces, you can use those fonts.
const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'DotGothic';
  src: url(${DotGothic}) format('woff');
}

body {
    font-family: "DotGothic", sans-serif;
  }
  
`;

export default FontStyles;
