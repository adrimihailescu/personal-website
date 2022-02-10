import styled, { css } from "styled-components"
import stylesVariables from "../../../sharedStyles"

export const Form = styled.form`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  color: ${stylesVariables.colors.mainText};
  margin: 0 auto;
  padding: 10px;
  max-width: 350px;
  border: none;
  position: relative;

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

  @media (min-width: ${stylesVariables.media.tablet}) {
    max-width: 550px;
  }

  @media (min-width: ${stylesVariables.media.bigScreen}) {
    max-width: 600px;
  }
`

export const Label = styled.label`
  display: block;
  margin: 10px;
  margin-bottom: 10px;
`

export const Input = styled.input`
  border-radius: 10px;
  border: none;
  display: block;
  padding: 10px;
  width: 100%;
  margin: 0 auto;
`

export const Textarea = styled.textarea`
  border-radius: 10px;
  border: none;
  display: block;
  padding: 10px;
  width: 100%;
  margin: 0 auto;
`

export const ButtonPanelContact = styled.button`
  display: inline-block;
  padding: 10px;
  margin-top: 10px;
  margin: 0 0.1em 0.1em 0;
  border: none;
  border-radius: 30px;
  box-sizing: border-box;
  text-decoration: none;
  background-color: ${stylesVariables.colors.mainText};
  align-self: center;
  color: ${stylesVariables.colors.primary80};
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
`
