import styled from "styled-components"
import { device } from "../../globalStyle"

export const FormContainer = styled.div`
  width: ${props => (props.customWidth ? "55%" : "100%")};

  @media ${device.tablet} {
    width: 100%;
  }

  p {
    margin-top: 8px;
    font-size: 0.6rem;
  }
`

export const Form = styled.form`
  display: flex;

  input {
    width: 100%;
    margin: 0 auto;
    background-color: black;
    border: none;
    color: white;
    font-size: 0.68rem;
    border-bottom: 1px solid white;
    padding: 10px 0;
    outline: none;
  }
`

export const Button = styled.button`
  padding: 5px 20px;
  font-size: 0.8rem;
  background-color: white;
  border: ${props => (props.customBorder ? "none" : "")};
  cursor: pointer;
`
