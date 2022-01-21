import styled from "styled-components"

//wrapper for the Contact component
export const ContactWrapper = styled.div`
  color: var(--primary-100);
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

//wrapper/container for Form
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

//wrapper for title
export const Title = styled.h1`
  color: var(--primary-99);
  font-style: var(--headingFont);
`
//Button
export const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: var(--borderRadius);
  color: var(--primary-500);
  background: lightpurple;
  border: 2px solid pink;
  cursor: pointer;
  display: inline-block;
  width: 100%;
`
//Label
export const Label = styled.label`
  align-items: center;
  display: block;
  gap: 8px;
  margin-bottom: 8px;
  color: var(--primary-100);
`

//Input
export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: palevioletred;
  background: lightpurple;
  border: none;
  border-radius: var(--borderRadius);
  width: 100%;
`

//Textarea
export const Textarea = styled.textarea`
  color: palevioletred;
  background: lightpurple;
  border: none;
  border-radius: var(--borderRadius);
  padding: 10px;
  margin: 10px;
  width: 100%;
  height: 7rem;
  color: var(--primary-100);
`
