import styled from "styled-components"

export const Container = styled.section`
  height: 300px;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  h3 {
    display: block;
    font-size: 2.3rem;
    /* transform: scaleY(1.9); */
    text-transform: uppercase;
    text-align: center;
    width: 100%;
    /* transform: translateX(100%); */
    /* animation: move 20s linear infinite; */
  }

  /* @keyframes move {
    to {
      transform: translateX(-100%);
    }
  } */
`
