import styled, { css } from "styled-components"
import stylesVariables from "../../sharedStyles"

export const HeaderWrapper = styled.header`
  justify-content: center;
  align-items: center;
  display: flex;
  position: relative;
  justify-content: left;
  height: ${stylesVariables.headerHight.mobile};
  width: 100%;
  top: 0;
  background-color: #000000;
  background-image: linear-gradient(315deg, #000000 0%, #414141 74%);

  @media (min-width: ${stylesVariables.media.tablet}) {
    font-size: ${stylesVariables.fontSizes.titleText.tablet};
    height: ${stylesVariables.headerHight.tablet};
  }

  @media (min-width: ${stylesVariables.media.screen}) {
    font-size: ${stylesVariables.fontSizes.titleText.tablet};
    height: ${stylesVariables.headerHight.tablet};
    justify-content: center;
  }

  @media (min-width: ${stylesVariables.media.bigScreen}) {
    font-size: ${stylesVariables.fontSizes.titleText.laptop};
    height: ${stylesVariables.headerHight.xlScreen};
  }

  h1 {
    color: ${stylesVariables.colors.colorTitle};
    font-size: ${stylesVariables.fontSizes.headerText.mobile};
    margin-left: 10px;

    @media (min-width: ${stylesVariables.media.tablet}) {
      font-size: ${stylesVariables.fontSizes.headerText.tablet};
    }

    @media (min-width: ${stylesVariables.media.screen}) {
      margin-left: 0;
    }

    @media (min-width: ${stylesVariables.media.bigScreen}) {
      font-size: ${stylesVariables.fontSizes.headerText.laptop};
    }
  }
`
export const BackButton = styled.button`
  color: ${stylesVariables.colors.primary80} bold;
  font-size: 10px;
  background-color: ${stylesVariables.colors.mainText};
  border: none;
  border-radius: 30px;
  position: absolute;
  top: 50%;
  right: 5px;
  transform: translate(0, -50%);
  max-width: 60px;
  padding: 3px 6px 4px;
  transition: background-color 300ms ease-in;
  cursor: pointer;

  &:hover {
    transition: background-color 300ms ease-out;
    background-color: cyan;
  }

  @media (min-width: ${stylesVariables.media.tablet}) {
    max-width: 80px;
    font-size: 16px;
    padding: 3px 6px 4px;
    right: 30px;
  }

  @media (min-width: ${stylesVariables.media.bigScreen}) {
    max-width: 100px;
    font-size: 20px;
    padding: 4px 8px 5px;
    right: 40px;
  }
`
