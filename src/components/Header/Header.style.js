import styled, { css } from "styled-components"
import stylesVariables from "../../sharedStyles"

export const HeaderWrapper = styled.header`
  --mobile: ${stylesVariables.headerHight.mobile};
  --tablet: ${stylesVariables.headerHight.tablet};
  --screen: ${stylesVariables.headerHight.screen};
  --bigScreen: ${stylesVariables.headerHight.bigScreen};

  position: relative;
  line-height: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(var(--mobile) - 1px);
  width: 100%;
  border-bottom: 1px solid ${stylesVariables.colors.colorTitle};
  background-color: #000000;
  background-image: radial-gradient(
      ${stylesVariables.colors.primary80} 0.75px,
      transparent 0.75px
    ),
    radial-gradient(${stylesVariables.colors.primary80} 0.75px, #000000 0.75px);
  background-size: 30px 30px;
  background-position: 0 0, 15px 15px;

  > * {
    margin-left: 15px;
  }

  @media (min-width: ${stylesVariables.media.tablet}) {
    font-size: ${stylesVariables.fontSizes.heading1.tablet};
    height: calc(var(--tablet) - 1px);
    text-align: center;
    justify-content: center;
  }

  @media (min-width: ${stylesVariables.media.screen}) {
    font-size: ${stylesVariables.fontSizes.heading1.tablet};
    height: calc(var(--screen) - 1px);
    text-align: center;
    justify-content: center;
  }

  @media (min-width: ${stylesVariables.media.bigScreen}) {
    font-size: ${stylesVariables.fontSizes.heading1.laptop};
    height: calc(var(--bigScreen) - 1px);
    text-align: center;
    justify-content: center;
  }

  .developer {
    text-shadow: 2px 2px 2px ${stylesVariables.colors.primary80},
      3px 3px 3px ${stylesVariables.colors.primary80};
  }

  h1 {
    color: ${stylesVariables.colors.colorTitle};
    font-size: ${stylesVariables.fontSizes.logoText.mobile};
    text-shadow: 2px 2px 2px ${stylesVariables.colors.primary80},
      3px 3px 3px ${stylesVariables.colors.primary80};
    margin-bottom: 0;

    @media (min-width: ${stylesVariables.media.tablet}) {
      font-size: ${stylesVariables.fontSizes.logoText.tablet};
      text-align: center;
      justify-content: center;
    }

    @media (min-width: ${stylesVariables.media.bigScreen}) {
      font-size: ${stylesVariables.fontSizes.logoText.laptop};
    }
  }
`

export const BackButton = styled.button`
  color: ${stylesVariables.colors.primary80};
  font-size: 14px;
  background-color: ${stylesVariables.colors.mainText};
  border: none;
  border-radius: 30px;
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(0, -50%);
  max-width: 90px;
  padding: 7px 11px 8px;
  transition: color 300ms ease-in;
  cursor: pointer;

  ${({ state }) =>
    state === "entering" &&
    css`
      opacity: 0;
      visibility: visible;
    `};

  ${({ state }) =>
    state === "entered" &&
    css`
      transition: all ${stylesVariables.animationTime.headerButton}ms
        ${stylesVariables.easing.inSine};
      opacity: 1;
    `};

  ${({ state }) =>
    state === "exiting" &&
    css`
      opacity: 1;
    `};

  ${({ state }) =>
    state === "exited" &&
    css`
      transition: all ${stylesVariables.animationTime.headerButton}ms
        ${stylesVariables.easing.inOutSine};
      opacity: 0;
      visibility: hidden;
    `};

  &:before {
    z-index: 0;
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 30px;
    box-shadow: 0px 0px 20px -2px lime;
    transition: opacity 200ms ${stylesVariables.easing.inSine};
    opacity: 0;
  }

  &:hover {
    transition: color 300ms ease-out;
    color: ${stylesVariables.colors.greyDarkSlate};

    &:before {
      transition: opacity 300ms ${stylesVariables.easing.inOutSine};
      opacity: 1;
    }
  }

  @media (min-width: ${stylesVariables.media.tablet}) {
    max-width: 90px;
    font-size: 16px;
    padding: 4px 8px 5px;
    right: 30px;
  }

  @media (min-width: ${stylesVariables.media.bigScreen}) {
    max-width: 100px;
    font-size: 20px;
    padding: 6px 10px 7px;
    right: 40px;
  }
`
