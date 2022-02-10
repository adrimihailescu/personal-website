import styled from "styled-components"
import stylesVariables from "../../sharedStyles"
import { Link } from "gatsby"

export const NotFoundWrapper = styled.div`
  --mobile: ${stylesVariables.headerHight.mobile};
  --tablet: ${stylesVariables.headerHight.tablet};
  --bigScreen: ${stylesVariables.headerHight.bigScreen};

  position: relative;
  height: calc(100vh - var(--mobile));
  background: #030005;

  @media (min-width: ${stylesVariables.media.tablet}) {
    height: calc(100vh - var(--tablet));
  }

  @media (min-width: ${stylesVariables.media.bigScreen}) {
    height: calc(100vh - var(--bigScreen));
  }
`

export const NotFoundComponent = styled.div`
  max-width: 770px;
  width: 100%;
  line-height: 1.4;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
`

export const NotFoundContent = styled.div`
  position: relative;
  height: 230px;
  margin-bottom: 20px;
  z-index: -1;

  h1 {
    font-family: "Montserrat", sans-serif;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    font-size: 150px;
    font-weight: 900;
    margin-top: 0px;
    margin-bottom: 0px;
    margin-left: -12px;
    color: #030005;
    text-transform: uppercase;
    text-shadow: -1px -1px 0px ${stylesVariables.colors.primary50},
      1px 1px 0px ${stylesVariables.colors.special};
    letter-spacing: -20px;
  }

  h2 {
    font-family: "Montserrat", sans-serif;
    position: absolute;
    left: 0;
    right: 0;
    top: 110px;
    font-size: 30px;
    font-weight: 600;
    color: #fff;
    text-transform: uppercase;
    text-shadow: 0px 2px 0px ${stylesVariables.colors.primary50};
    letter-spacing: 13px;
    margin: 0;
  }
`

export const NotFoundButton = styled(Link)`
  font-family: "Montserrat", sans-serif;
  display: inline-block;
  text-transform: uppercase;
  color: ${stylesVariables.colors.special};
  text-decoration: none;
  border: 2px solid;
  background: transparent;
  padding: 10px 40px;
  font-size: 14px;
  font-weight: 700;
  -webkit-transition: 0.2s all;
  transition: 0.2s all;

  &:hover {
    color: ${stylesVariables.colors.primary50};
  }
`
