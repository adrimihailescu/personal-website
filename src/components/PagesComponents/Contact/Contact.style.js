import styled, { css } from "styled-components"
import stylesVariables from "../../../sharedStyles"

export const FormPanelContact = styled.form`
  /* width: 600px; */
  display: flex;
  flex-direction: column;
  color: ${stylesVariables.colors.mainText};
  margin: 50px;
`

export const ParagraphPanelContact = styled.p`
  color: ${stylesVariables.colors.mainText};
`

export const LabelPanelContact = styled.label`
  display: block;
`

export const InputPanelContact = styled.input`
  border-radius: 10px;
  display: block;
  padding: 10px;
  width: 100%;
  margin: 20px;
  overflow: hidden;
`

export const TextareaPanelContact = styled.textarea`
  border-radius: 10px;
  display: block;
  padding: 10px;
  width: 100%;
  margin: 20px;
`

export const ButtonPanelContact = styled.button`
  display: inline-block;
  padding: 0.3em 1.2em;
  margin: 0 0.1em 0.1em 0;
  border: 0.16em solid rgba(255, 255, 255, 0);
  border-radius: 2em;
  box-sizing: border-box;
  text-decoration: none;
  background-color: ${stylesVariables.colors.mainText};
  align-self: center;
`
