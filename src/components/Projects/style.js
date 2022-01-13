import styled from "styled-components"

export const ProjectsWrapper = styled.div`
  cursor: pointer;
  color: var(--grey-1000);
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f8ef42;
  background-image: linear-gradient(315deg, #f8ef42 0%, #0fd64f 74%);
  min-height: 100vh;

  max-width: 33.33%;
`

export const Title = styled.h1`
  font-size: 50px;
  color: var(--primary-500);
`

export const ContentProWrapper = styled.div`
  align-items: center;
  background-color: lightblue;
  font-size: 20px;
  text-align: center;
  border-radius: var(--borderRadius);
  padding: 10px;
  margin: 10px;
`
