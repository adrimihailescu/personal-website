import styled from "styled-components"

export const ContactWrapper = styled.div`
  color: var(--primary-500);
  display: flex;
  flex: 1;
  flex-direction: column;
  cursor: pointer;
  min-height: 100vh;
  background-color: #000000;
  background-image: linear-gradient(315deg, #000000 0%, #414141 74%);
  max-width: 33.33%;
  align-itens: center;
  justify-content: center;
`
export const FormWrapper = styled.div`
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  align-items: center;
  background-color: var(--grey-1);
  font-style: italic;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  text-transform: capitalize;
  justify-content: center;
  color: var(--grey-1000);
`
export const Title = styled.h1`
  font-size: 50px;
  color: var(--primary-500);
`

export const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: var(--borderRadius);
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
  border-radius: var(--borderRadius);
  width: 100%;
`
export const Textarea = styled.textarea`
  color: palevioletred;
  background: papayawhip;
  border: none;
  border-radius: var(--borderRadius);
  padding: 10px;
  margin: 10px;
  width: 100%;
  height: 7rem;
`
