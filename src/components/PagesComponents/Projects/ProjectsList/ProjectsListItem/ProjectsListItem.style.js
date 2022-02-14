import styled from "styled-components"
import stylesVariables from "../../../../../sharedStyles"
import { GatsbyImage } from "gatsby-plugin-image"

export const Card = styled.li`
  list-style: none;
  position: relative;
  margin: 20px;
  background-color: ${stylesVariables.colors.grey};
  border-radius: 40px;
  padding: 15px 0 0 15px;

  &:before {
    z-index: -1;
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 40px;
    box-shadow: 0px 0px 12px -1px ${stylesVariables.colors.mainColor};
    transition: opacity 200ms ${stylesVariables.easing.inSine};
    opacity: 0;
  }

  &:hover {
    &:before {
      transition: opacity 300ms ${stylesVariables.easing.inOutSine};
      opacity: 1;
    }
  }

  .tools {
    display: block;
    margin-top: 10px;
    margin-bottom: 10px;

    @media (min-width: ${stylesVariables.media.tablet}) {
      margin-top: 15px;
      margin-bottom: 15px;
    }

    @media (min-width: ${stylesVariables.media.screen}) {
      margin-top: 20px;
      margin-bottom: 20px;
    }

    @media (min-width: ${stylesVariables.media.bigScreen}) {
      margin-top: 25px;
      margin-bottom: 25px;
    }
  }

  ul {
    display: flex;
    justify-content: space-around;
    max-width: 350px;
    margin: 0 auto 20px;

    a {
      color: ${stylesVariables.colors.primary80};
      background-color: ${stylesVariables.colors.mainText};
      height: 20px;
      padding: 7px 11px 8px;
      border: none;
      border-radius: 30px;
      max-width: 90px;
      position: relative;

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
    }
  }
`

export const CustomGatsbyImage = styled(GatsbyImage)`
  width: 100%;
  height: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${stylesVariables.media.tablet}) {
    border-radius: 10px;
    width: 90%;
  }

  @media (min-width: ${stylesVariables.media.screen}) {
    border-radius: 30px;
    width: 90%;
  }

  @media (min-width: ${stylesVariables.media.bigScreen}) {
    border-radius: 40px;
    width: 80%;
  }
`
