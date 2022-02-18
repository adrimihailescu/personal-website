import React from "react"
import Header from "../Header/Header"

import { createGlobalStyle } from "styled-components"
import stylesVariables from "../../sharedStyles"
import SEO from "./SEO"
import CookieConsent from "react-cookie-consent"

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

  h2 {
    margin-bottom: 30px;
    font-size: ${stylesVariables.fontSizes.heading2.mobile};
    color: ${stylesVariables.colors.mainText};
    margin-top: 20px;
  }

  h3 {
    margin-bottom: 15px;
    font-size: ${stylesVariables.fontSizes.heading3.mobile};
    color: ${stylesVariables.colors.mainText};
    margin-top: 20px;
  }
  
  h4 {
    margin-bottom: 20px;
    font-size: ${stylesVariables.fontSizes.heading4.mobile};
    color: ${stylesVariables.colors.mainText};
  }

  a , span{
    font-size: ${stylesVariables.fontSizes.aTags.mobile};
    color: ${stylesVariables.colors.mainText};
  }

  
// tablet
  @media (min-width: ${stylesVariables.media.tablet}) {
    p {
      margin-bottom: 20px;
      font-size: ${stylesVariables.fontSizes.bodyText.tablet};
    }

    h1 {
      font-size: ${stylesVariables.fontSizes.heading1.tablet};
    }

    h2 {
      margin-bottom: 30px;
      font-size: ${stylesVariables.fontSizes.heading2.tablet};
      margin-top: 30px;
    }

    h3 {
      font-size: ${stylesVariables.fontSizes.heading3.tablet};
      margin-top: 30px;
    }

    h4 {
    margin-bottom: 20px;
    font-size: ${stylesVariables.fontSizes.heading4.tablet};
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

    h2 {
      margin-bottom: 40px;
      font-size: ${stylesVariables.fontSizes.heading2.tablet};
    }

    h3 {
      margin-bottom: 30px;
      font-size: ${stylesVariables.fontSizes.heading3.tablet};
      margin-top: 30px;
    }

    h4 {
    margin-bottom: 20px;
    font-size: ${stylesVariables.fontSizes.heading4.tablet};
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

    h2 {
      margin-bottom: 50px;
      font-size: ${stylesVariables.fontSizes.heading2.laptop};
    }


    h3{
      margin-bottom: 40px;
      font-size: ${stylesVariables.fontSizes.heading3.laptop};
      margin-top: 40px;

    }

    h4 {
    margin-bottom: 30px;
    font-size: ${stylesVariables.fontSizes.heading4.laptop};
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
    border: 3px solid ${stylesVariables.colors.primary80};
  }

  input, textarea, select, button {
  width : 150px;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  }

  .CookieConsent {
    background: ${stylesVariables.colors.primary86} !important;
    color: ${stylesVariables.colors.mainText} !important;

    div :nth-child(1){
      font-size: 16px;
      margin: 10px 10px !important;
      text-align: center;
    }
    
    div :nth-child(2) {
    width: 100%;
    display: flex;
    justify-content: center;
    }
   
    #rcc-confirm-button{
    background: lime !important;
    color: ${stylesVariables.colors.primary80} !important;
    border-radius: 30px !important;

    }

    #rcc-decline-button {
      background: ${stylesVariables.colors.special}  !important;
      color: black !important;
      border-radius: 30px !important;
    }
  }

`

const Layout = ({ children }) => {
  return (
    <>
      <SEO title={"Frontend Developer"} />
      <GlobalStyle />
      <Header />
      {children}
      <CookieConsent
        location="bottom"
        buttonText="Accept"
        declineButtonText="Decline"
        enableDeclineButton
        cookieName="gatsby-gdpr-google-analytics"
      >
        Have a cookie , it's low fat! I'm only counting how many guests I have!
      </CookieConsent>
    </>
  )
}

export default Layout
