import styled from "styled-components"
import stylesVariables from "../../../sharedStyles"

export const Form = styled.form`
  /* box-sizing: border-box; */
  display: flex;
  flex-direction: column;
  color: ${stylesVariables.colors.mainText};
  margin: 0 auto;
  padding: 10px;
  max-width: 320px;
  border-top: 10px solid ${stylesVariables.colors.grey};
  border-bottom: 10px solid ${stylesVariables.colors.grey};
  border-radius: 40px;

  @media (min-width: ${stylesVariables.media.tablet}) {
    max-width: 500px;
    border-top: 0;
    border-bottom: 0;
    border-left: 10px solid ${stylesVariables.colors.grey};
    border-right: 10px solid ${stylesVariables.colors.grey};
  }

  @media (min-width: ${stylesVariables.media.bigScreen}) {
    max-width: 600px;
    border-top: 0;
    border-bottom: 0;
    border-left: 10px solid ${stylesVariables.colors.grey};
    border-right: 10px solid ${stylesVariables.colors.grey};
  }
`

export const Label = styled.label`
  display: block;
  margin: 10px;
  margin-bottom: 10px;

  .form-span {
    display: flex;
    margin-left: 10px;
    margin-bottom: 10px;
  }
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
  margin-bottom: 10px;
`

export const ButtonPanelContact = styled.button`
  display: inline-block;
  padding: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 30px;
  box-sizing: border-box;
  text-decoration: none;
  background-color: ${stylesVariables.colors.mainText};
  align-self: center;
  color: ${stylesVariables.colors.primary80};
  position: relative;
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
`
