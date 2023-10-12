import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";

export const Contact = () => {
  return (
    <StyledContacts>
      <SectionTitle>Contact</SectionTitle>
      <StyledForm>
        <StyledField placeholder={"name"}/>
        <StyledField placeholder={"subject"}/>
        <StyledField as={"textarea"} placeholder={"message"}/>
      </StyledForm>
    </StyledContacts>
  );
};


const StyledContacts = styled.section`
  min-height: 50vh;
  background-color: cyan;
`

const StyledForm = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`


const StyledField = styled.input`
  
`

