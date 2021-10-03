import styled from "styled-components"

export const Form = styled.form`
  display: flex;
  align-items: center;

  input {
    width: 180px;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    margin-left: 5px;

    img {
      width: 22px;
      height: 22px;
      filter: invert(100%);
    }
  }
`
