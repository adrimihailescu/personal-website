import styled, { css } from "styled-components"
import stylesVariables from "../../../sharedStyles"

export const FormPanelContact = styled.form`
  /* width: 100%; */
  display: flex;
  flex-direction: column;
  color: ${stylesVariables.colors.mainText};
`

export const ParagraphPanelContact = styled.p`
  color: ${stylesVariables.colors.mainText};
`

export const LabelPanelContact = styled.label``

export const InputPanelContact = styled.input`
  border-radius: 10px;
  padding: 10px;
  min-width: 100%;
  margin: 20px 20px;
`
