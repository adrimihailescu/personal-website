import styled from "styled-components"

export const AboutWrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  color: var(--primary-500);
  flex: 1;
  justify-content: center;
  min-height: 100vh;
  background-color: #f3f4f7;
  background-image: linear-gradient(315deg, #f3f4f7 0%, #caccd1 74%);
  align-itens: center;
  max-width: 33.33%;
`
export const ContentWrapper = styled.p`
  background-color: grey;
  color: var(--grey-1000);
  font-size: 20px;
  text-align: center;
  border-radius: var(--borderRadius);
  padding: 10px;
  margin: 10px;
`
export const Title = styled.h1`
  font-size: 50px;
  color: var(--primary-500);
  font-style: var(--headingFont);
`
