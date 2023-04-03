import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle` 
  *,
  *::before,
  *::after { 
    margin:0;
    padding: 0;
    box-sizing: border-box;
  } 

  @font-face { 
    font-family: "Helvetica-Regular"; 
    src: url("assets/fonts/Helvetica.ttf");
    font-display: swap;
  };
  

  @font-face {
    font-family: 'FiraGO';
    src: url('assets/fonts/FiraGO-Regular.woff2');
    font-weight: 400;
    font-display: swap;
 }

  @font-face {
    font-family: 'FiraGO';
    src: url('assets/fonts/FiraGO-Medium.woff2');
    font-weight: 500;
    font-display: swap;
 }

  @font-face {
      font-family: 'FiraGO';
      src: url('assets/fonts/FiraGO-Bold.woff2');
      font-weight: 700;
      font-display: swap;
  }

  ul, ol{
    list-style-type: none;
  }

  body {
    background-color: #090707; 
    font-family: "FiraGO";
  } 

  input, select, textarea, button{font-family:inherit;}
`;
