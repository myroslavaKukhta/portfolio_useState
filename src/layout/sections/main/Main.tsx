import React from 'react';
import styled from "styled-components";
import photo from './../../../assets/images/photo.jpg'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

export const Main = () => {
    return (
        <StyledMain>
            <Container>
                <FlexWrapper align={"center"} justify={"space-between"}>
                    <div>
                        <Congrats>Hi There</Congrats>
                        <Name>I am <span>Myroslava Kukhta</span></Name>
                        <MainTitle>A Web Developer</MainTitle>
                    </div>
                    <PhotoWrapper>
                        <StyledPhoto src={photo} alt=""/>
                    </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StyledMain>
    );
};

const StyledMain = styled.section`
  min-height: 100vh;
  background-color: antiquewhite;
  display: flex;
`

const PhotoWrapper = styled.div`
position: relative;
  z-index: 1;
  
  &::before {
    content: "";
    width: 270px;
    height: 300px;
    border: 5px solid ${theme.colors.accent};
    
    position: absolute;
    top: -24px;
    left: 24px;
    z-index: -1;
  }
`

const StyledPhoto = styled.img`
  width: 270px;
  height: 300px;
  object-fit: cover;
`

const MainTitle = styled.h1`
  font-size: 30px;
  font-weight: 400;
`

const Name = styled.h2`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 50px;
  font-weight: 700;
  letter-spacing: 0.05rem;
  margin: 10px 0;

  span {
    position: relative;
    z-index: 0;

    &::before {
      content: "";
      display: inline-block;
      width: 100%;
      height: 20px;
      background-color: ${theme.colors.accent};

      position: absolute;
      bottom: 0;
      z-index: -1;
    }
  }
`

const Congrats = styled.h2`
  font-size: 16px;
  font-weight: 400;
`

