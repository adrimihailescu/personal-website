import styled, { css } from "styled-components"
import stylesVariables from "../../../../../sharedStyles"

export const Card = styled.li`
  list-style: none;
  margin: 20px;
  background-color: ${stylesVariables.colors.grey};
  border-radius: 40px;
  transition: transform 200ms ${stylesVariables.easing.inSine};

  &:hover {
    transition: transform 200ms ${stylesVariables.easing.inOutSine};
    transform: scale(1.02);
  }

  img {
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
      padding: 3px 10px 5px;
      border: none;
      border-radius: 30px;
      max-width: 80px;
    }
  }
`
