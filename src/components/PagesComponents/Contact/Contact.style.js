import styled, { css } from "styled-components"
import stylesVariables from "../../../sharedStyles"

export const FormPanelContact = styled.form`
  /* width: 600px; */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  color: ${stylesVariables.colors.mainText};
  margin: 40px;
  padding: 10px;
  /* background-color: #923cb5;
  background-image: linear-gradient(147deg, #923cb5 0%, #000000 74%); */
`

export const ParagraphPanelContact = styled.p`
  color: ${stylesVariables.colors.mainText};
`

export const LabelPanelContact = styled.label`
  display: block;
  margin: 10px;
  margin-bottom: 10px;
`

export const InputPanelContact = styled.input`
  border-radius: 10px;
  border: none;
  display: block;
  padding: 10px;
  width: 100%;
  margin: 0 auto;
`

export const TextareaPanelContact = styled.textarea`
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

  &:hover {
    transition: background-color 300ms ease-out;
    background-color: ${stylesVariables.colors.primary30};
    color: ${stylesVariables.colors.mainText};
    box-shadow: 0 -5px 3px -3px ${stylesVariables.colors.mainColor},
      0 5px 3px -3px ${stylesVariables.colors.mainColor};
  }
`
