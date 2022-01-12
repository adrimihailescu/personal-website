import styled from "styled-components"

export const ContactWrapper = styled.div`
  color: purple;
  cursor: pointer;
  min-height: 100vh;
  background-color: #f9ea8f;
  background-image: linear-gradient(315deg, #f9ea8f 0%, #aff1da 74%);
  width: 100%;
  max-width: 33.33%;
  align-itens: center;
  justify-content: center;
`
export const FormWrapper = styled.div`
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  align-items: center;
  background-color: grey;
  font-style: italic;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  text-transform: capitalize;
  justify-content: center;
`
export const Title = styled.h1`
  font-size: 50px;
  color: blue;
`

export const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;
  color: mediumseagreen;
  background: papayawhip;
  border: 2px solid papayawhip;
  transform: rotate(180deg);
  cursor: pointer;
  display: inline-block;
  width: 100%;
`

export const Label = styled.label`
  align-items: center;
  display: block;
  gap: 8px;
  margin-bottom: 8px;
`
export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  width: 100%;
`
export const Textarea = styled.textarea`
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  padding: 20px;
  margin: 10px;
  width: 100%;
  height: 7rem;
`
