import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";

export const Skills = () => {
    return (
        <StyledSkills>
            <Container>
                <SectionTitle>

                    My Skills
                </SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    <Skill iconId={"code"}
                           title={"html5"}
                           description={"html"}/>
                    <Skill iconId={"css"}
                           title={"css"}
                           description={"css"}/>
                    <Skill iconId={"react"}
                           title={"react"}
                           description={"react"}/>
                    <Skill iconId={"typeScript"}
                           title={"type script"}
                           description={"typescript"}/>
                    <Skill iconId={"styledCompon"}
                           title={"styled components"}
                           description={"styled"}/>
                    <Skill iconId={"design"}
                           title={"web design"}
                           description={"figma"}/>
                </FlexWrapper>
            </Container>
        </StyledSkills>
    );
};

const StyledSkills = styled.section`
  background-color: cornflowerblue;
  min-height: 100vh;
`
