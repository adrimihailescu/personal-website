import styled, { css } from "styled-components"
import stylesVariables from "../../sharedStyles"

export const MainWrapper = styled.main`
  min-width: 100%;
  overflow: hidden;
  display: flex;
  font-size: ${stylesVariables.fontSizes.bodyText.laptop};
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

  @media (min-width: ${stylesVariables.media.screen}) {
  }

  @media (max-width: ${stylesVariables.media.tablet}) {
    font-size: ${stylesVariables.fontSizes.bodyText.tablet};
  }

  @media (min-width: ${stylesVariables.media.mobile}) {
    font-size: ${stylesVariables.fontSizes.bodyText.mobile};
  }
`

export const SectionMenuStyle = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all ${stylesVariables.animationTime.menuTitles}ms;
  transform: translate(0, 0, 0);
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;

  // section vertical when contracts
  ${({ isActive, state }) =>
    state === "exiting" &&
    !isActive &&
    css`
      transition-timing-function: ${stylesVariables.easing.outCirc};
      transform: rotateY(-180deg);
      opacity: 0.8;
      display: block;
    `};
  ${({ isActive, state }) =>
    state === "exited" &&
    !isActive &&
    css`
      transition-timing-function: ${stylesVariables.easing.outCirc};
      transform: rotate(0deg);
      opacity: 1;
    `};

  // section vertical when expands
  ${({ isActive, state }) =>
    state === "entering" &&
    isActive &&
    css`
      transition-timing-function: ${stylesVariables.easing.outCirc};
      transform: rotateY(180deg);
      opacity: 0.8;
    `};
  ${({ isActive, state }) =>
    state === "entered" &&
    isActive &&
    css`
      transition-timing-function: ${stylesVariables.easing.outCirc};
      transform: rotateY(0deg);
      opacity: 0;
      display: none;
    `};
`

export const SectionPanel = styled.section`
  --mobile: ${stylesVariables.headerHight.mobile};
  --tablet: ${stylesVariables.headerHight.tablet};
  --bigScreen: ${stylesVariables.headerHight.xlScreen};

  height: calc(100vh - var(--mobile));
  transform-style: preserve-3d;
  background-color: #000000;
  background-image: linear-gradient(315deg, #000000 0%, #414141 74%);
  box-shadow: inset 0 0 0 5px rgba(255, 255, 255, 0.1);
  color: ${stylesVariables.colors.mainColor};
  text-align: center;
  align-items: center;
  transition: all ${stylesVariables.animationTime.mainPage}ms
    ${stylesVariables.easing.outCirc};
  font-size: ${stylesVariables.fontSizes.bodyText.laptop};
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  overflow: hidden;

  @media (min-width: ${stylesVariables.media.tablet}) {
    height: calc(100vh - var(--tablet));
  }

  @media (min-width: ${stylesVariables.media.bigScreen}) {
    height: calc(100vh - var(--bigScreen));
  }

  ${({ isActive }) =>
    isActive &&
    css`
      flex: 10;
      cursor: default;
      overflow-y: scroll;
    `}

  ${({ hideOnMobile }) =>
    hideOnMobile &&
    css`
      flex: 1;
      @media (max-width: ${stylesVariables.media.tablet}) {
        flex: 0;
      }
    `}

  // applyes to all child items of panel section
   > div {
    margin: 0;
    width: 100%;
    transition: transform 0.5s;
    max-width: 1200px;
  }
`
