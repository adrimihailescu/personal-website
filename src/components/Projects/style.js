import styled from "styled-components"

export const ProjectsWrapper = styled.div`
  cursor: pointer;
  color: var(--primary-500);
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  background-image: linear-gradient(315deg, #000000 0%, #414141 74%);
  min-height: 100vh;

  max-width: 33.33%;
`

export const Title = styled.h1`
  font-size: 50px;
  color: var(--primary-500);
  font-style: var(--headingFont);
`

export const ContentProWrapper = styled.div`
  align-items: center;
  color: var(--primary-300);
  font-size: 20px;
  text-align: center;
  border-radius: var(--borderRadius);
  padding: 10px;
  margin: 10px;
`
