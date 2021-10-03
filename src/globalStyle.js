import { createGlobalStyle } from "styled-components"

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "465px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px",
}

export const device = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
}

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box ;
    margin: 0;
   padding: 0;
}

body {
    font-family: 'Montserrat', sans-serif;
    /* background-color: #1a1007e6 */
}

a {
    text-decoration: none
}

li {
    list-style-type: none
}



`
