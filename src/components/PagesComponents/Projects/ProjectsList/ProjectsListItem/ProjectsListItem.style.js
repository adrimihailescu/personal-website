import styled, { css } from "styled-components"
import stylesVariables from "../../../../../sharedStyles"

export const Card = styled.li`
  list-style: none;
  margin: 20px;
  background-color: ${stylesVariables.colors.grey};
  width: 80%;
  border-radius: 40px;
  transition: transform 200ms ${stylesVariables.easing.inSine};

  &:hover {
    transition: transform 200ms ${stylesVariables.easing.inOutSine};
    transform: scale(1.02);
  }

  img {
    width: 60%;
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
  }
  p {
    color: ${stylesVariables.colors.mainText};
    margin-top: 14px;
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
