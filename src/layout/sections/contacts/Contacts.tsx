import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {StyledButton} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Contact = () => {
    return (
        <StyledContacts>
            <Container>
                <SectionTitle>Contact</SectionTitle>
                <StyledForm>
                    <StyledField placeholder={"name"}/>
                    <StyledField placeholder={"subject"}/>
                    <StyledField as={"textarea"} placeholder={"message"}/>
                    <StyledButton type={"submit"}>Send message</StyledButton>
                </StyledForm>
            </Container>
        </StyledContacts>
    );
};


const StyledContacts = styled.section`
`

const StyledForm = styled.form`
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


const StyledField = styled.input`
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

