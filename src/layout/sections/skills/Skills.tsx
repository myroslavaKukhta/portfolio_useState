import React from 'react';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {SectionTitle} from "../../../components/SectionTitle";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";
import {S} from './Skills_Styles';
import { Fade } from "react-awesome-reveal";


const skillData = [
    {
        iconId: "code",
        title: "html5",
        description: "html"
    },
    {
        iconId: "css",
        title: "css",
        description: "css"
    },
    {
        iconId: "react",
        title: "react",
        description: "react"
    },
    {
        iconId: "typeScript",
        title: "typeScript",
        description: "typeScript"
    },
    {
        iconId: "styledCompon",
        title: "styled Components",
        description: "styled Components"
    },
    {
        iconId: "design",
        title: "web design",
        description: "figma"
    },
]
export const Skills = () => {
    return (
        <S.Skills id={"skills"}>
            <Container>
                <SectionTitle>

                    My Skills
                </SectionTitle>
                <FlexWrapper wrap={"wrap"} justify={"space-between"}>
                    <Fade cascade={true} damping={0.5}>
                    {skillData.map((s, index) => {
                        return <Skill
                            iconId={s.iconId} key={index}
                            title={s.title}
                            description={s.description}/>
                    })}
                        </Fade>
                </FlexWrapper>
            </Container>
        </S.Skills>
    );
};


