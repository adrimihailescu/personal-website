import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;

  justify-content: center;
  text-align: center;
  flex-direction: column;
  background-color: yellow;
  height: 100vh;
  margin: 0;
  padding: 0;
  h1 {
    font-style: italic;
    font-size: 60px;
    color: #ada7ff;
  }
  background-color: #000000;
  background-image: linear-gradient(315deg, #000000 0%, #414141 74%);
`
export const ButtonMain = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 10px 10px;
  width: 20%;
  border-radius: 10px;
  color: #645cff;
  background: papayawhip;
  border: 2px solid papayawhip;
  cursor: pointer;
`
