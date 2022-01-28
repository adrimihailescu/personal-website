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
