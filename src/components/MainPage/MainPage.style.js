import styled, { css } from "styled-components"

export const MainWrapper = styled.main`
  min-width: 100%;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
`

export const SectionPanel = styled.section`
  background-color: #000000;
  background-image: linear-gradient(315deg, #000000 0%, #414141 74%);
  box-shadow: inset 0 0 0 5px rgba(255, 255, 255, 0.1);
  color: white;
  text-align: center;
  align-items: center;
  transition: all 0.7s cubic-bezier(0.61, -0.19, 0.7, -0.11);
  font-size: 20px;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  display: flex;
  flex-direction: column;
  max-height: 100vh;
  overflow-y: scroll;

  ${({ isActive }) =>
    isActive &&
    css`
      flex: 10;
    `}

  // applyes to all child items of panel section
  > * {
    margin: 0;
    width: 100%;
    transition: transform 0.5s;
  }
`

export const SectionPanelTitle = styled.h1`
  font-size: 60px;
  transition: all 0.7s cubic-bezier(0.61, -0.19, 0.7, -0.11) 0.5s;
  ${({ isTextVertical }) =>
    isTextVertical &&
    css`
      text-orientation: mixed;
      writing-mode: vertical-rl;
    `}
`
