import styled from "styled-components"

//wrapper for the About component
export const AboutWrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  color: var(--primary-100);
  flex: 1;
  justify-content: center;
  min-height: 100vh;
  background-color: #000000;
  background-image: linear-gradient(315deg, #000000 0%, #414141 74%);
  align-itens: center;
  max-width: 33.33%;
`

//wrapper/container for the content
export const ContentWrapper = styled.div`
  color: var(--primary-100);
  font-size: 20px;
  text-align: center;
  border-radius: var(--borderRadius);
  padding: 10px;
  margin: 10px;
`

//wrapper for the title
export const Title = styled.h1`
  color: var(--primary-99);
  font-style: var(--headingFont);
`
