import styled from "styled-components"

//this wrappes the projects for styling individually

export const ProWrapper = styled.div`
  border-radius: var(--borderRadius);
  background-color: var(--grey-1);
  color: var(--primary-100);
  a {
    text-decoration: none;
  }
  p {
    color: var(--primary-100);
    font-size: 16px;
  }
  h5 {
    color: var(--primary-100);
    padding: 10px;
    font-size: 30px;
    &:hover {
      color: lime;
    }
  }
`