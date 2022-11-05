import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
   
   *,
   *::before,
   *::after {
      box-sizing: border-box;
   }

   html {
      font-size: 18px;
   }

   body {
      display: grid;
      height: 100vh;
      background: #00a40f;
      margin: 0;
      font-family: "Gill Sans", sans-serif;
      place-items: center;
   }

   @media (min-width: 550px) {
      html {
         font-size: 20px;
      }
   }

   @media (min-width: 670px) {
      html {
         font-size: 22px;
      }
   }
`;
