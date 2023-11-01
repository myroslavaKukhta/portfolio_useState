import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const Contacts = styled.section`
  position: relative;
`

const Form = styled.form`
  max-width: 540px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  margin: 0 auto;
  
  textarea {
    resize: none;
    height: 155px;
  }
`


const Field = styled.input`
width: 100%;
  background-color: ${theme.colors.secondaryBg};
  border: 1px solid ${theme.colors.border};
  padding: 7px 15px;
  
  font-family: 'Poppins', sans-serif;
  color: ${theme.colors.font};
  font-size: 12px;
  font-weight: 400;
  letter-spacing: 0.6px;
  
  &::placeholder {
    color: ${theme.colors.placeholder};
    text-transform: capitalize;
  }
  
  &:focus-visible {
    outline: 1.5px solid ${theme.colors.border};;
  }
`

export const S = {
    Contacts,
    Form,
    Field
}