import React from "react"
import Header from "../Header/Header"

// import Footer from "../Footer/Footer"

import { createGlobalStyle } from "styled-components"
import stylesVariables from "../../sharedStyles"

const GlobalStyle = createGlobalStyle`
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    text-decoration: none;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  
  :root {
    --headingFont: "Inconsolata", monospace;
    --bodyFont: "Montserrat", sans-serif;
   
  }

  body {
    font-family: 'Inconsolata ', monospace;
    line-height: 1.2;
    margin: 0;
    padding: 0;
    font-size: 20px;
  }

  p {
    margin-bottom: 14px;
    font-size: ${stylesVariables.fontSizes.bodyText.mobile};
  }

  h1 {
    margin-bottom: 30px;
    font-size: ${stylesVariables.fontSizes.heading1.mobile};
  }

  h2, h3 {
    margin-bottom: 20px;
    font-size: ${stylesVariables.fontSizes.heading2.mobile};
    color: ${stylesVariables.colors.mainText};
    margin-top: 20px;
  }
  
  h4 {
    margin-bottom: 10px;
    font-size: ${stylesVariables.fontSizes.heading4.mobile};
  }

  a , span{
    font-size: ${stylesVariables.fontSizes.aTags.mobile};
    color: ${stylesVariables.colors.mainText};
  }

  

  /* span {
    font-size:
  } */
  
  // tablet
  @media (min-width: ${stylesVariables.media.tablet}) {
    p {
      margin-bottom: 20px;
      font-size: ${stylesVariables.fontSizes.bodyText.tablet};
    }

    h1 {
      margin-bottom: 40px;
      font-size: ${stylesVariables.fontSizes.heading1.tablet};
    }

    h2, h3 {
      margin-bottom: 30px;
      font-size: ${stylesVariables.fontSizes.heading2.tablet};
      margin-top: 30px;
    }

    h4 {
    margin-bottom: 20px;
    }

    a, span {
    font-size: ${stylesVariables.fontSizes.aTags.tablet};
    }
  }

  //tablet
  @media (min-width: ${stylesVariables.media.screen}) {
    p {
      margin-bottom: 20px;
      font-size: ${stylesVariables.fontSizes.bodyText.tablet};
    }

    h1 {
      margin-bottom: 40px;
      font-size: ${stylesVariables.fontSizes.heading1.tablet};
    }

    h2, h3 {
      margin-bottom: 30px;
      font-size: ${stylesVariables.fontSizes.heading2.tablet};
      margin-top: 30px;
    }

    h4 {
    margin-bottom: 20px;
    }

    a, span {
    font-size: ${stylesVariables.fontSizes.aTags.tablet};
    }
  }

  //big screens
  @media (min-width: ${stylesVariables.media.bigScreen}) {
    p {
      margin-bottom: 25px;
      font-size: ${stylesVariables.fontSizes.bodyText.laptop};
    }

    h1 {
      margin-bottom: 50px;
      font-size: ${stylesVariables.fontSizes.heading1.laptop};
    }

    h2, h3 {
      margin-bottom: 40px;
      font-size: ${stylesVariables.fontSizes.heading2.laptop};
      margin-top: 40px;
    }

    h4 {
    margin-bottom: 30px;
    }

    a, span {
    font-size: ${stylesVariables.fontSizes.aTags.laptop};
    }
  }

  

  


  *::-webkit-scrollbar {
      width: 10px;
  }
  *::-webkit-scrollbar-track {
    background: ${stylesVariables.colors.grey};
  }
  *::-webkit-scrollbar-thumb {
    background-color: ${stylesVariables.colors.primary30};
    border-radius: 20px;
    border: 3px solid #37338c;
  }

  input, textarea, select, button {
  width : 150px;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  }

`

const Layout = ({ children }) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
    </>
  )
}

export default Layout
