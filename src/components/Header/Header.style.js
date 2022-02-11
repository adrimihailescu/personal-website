import styled from "styled-components"
import stylesVariables from "../../sharedStyles"

export const HeaderWrapper = styled.header`
  position: relative;
  line-height: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: ${stylesVariables.headerHight.mobile};
  width: 100%;
  background-color: #000000;
  background-image: linear-gradient(315deg, #000000 0%, #414141 74%);

  > * {
    margin-left: 15px;
  } 

  @media (min-width: ${stylesVariables.media.tablet}) {
    font-size: ${stylesVariables.fontSizes.heading1.tablet};
    height: ${stylesVariables.headerHight.tablet};
  }

  @media (min-width: ${stylesVariables.media.screen}) {
    font-size: ${stylesVariables.fontSizes.heading1.tablet};
    height: ${stylesVariables.headerHight.screen};
  }

  @media (min-width: ${stylesVariables.media.bigScreen}) {
    font-size: ${stylesVariables.fontSizes.heading1.laptop};
    height: ${stylesVariables.headerHight.bigScreen};
  }

  .developer {
    text-shadow: 2px 2px 2px ${stylesVariables.colors.primary80}, 3px 3px 3px ${stylesVariables.colors.primary80};
  }

  

    @media (min-width: ${stylesVariables.media.tablet}) {
      text-align: center;
      justify-content: center;
    }

    @media (min-width: ${stylesVariables.media.screen}) {
      text-align: center;
      justify-content: center;
    }

    @media (min-width: ${stylesVariables.media.bigScreen}) {
      text-align: center;
      justify-content: center;
    }
  }

  h1 {
    color: ${stylesVariables.colors.colorTitle};
    font-size: ${stylesVariables.fontSizes.logoText.mobile};
    text-shadow: 2px 2px 2px ${stylesVariables.colors.primary80}, 3px 3px 3px ${stylesVariables.colors.primary80};
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
  transition: background-color 300ms ease-in;
  cursor: pointer;

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
