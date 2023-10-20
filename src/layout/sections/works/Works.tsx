import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from './../../../assets/images/proj_1.png'
import Timer from './../../../assets/images/proj_2.png'
import {Container} from "../../../components/Container";


const worksItems = ["All", "Landing Page", "React", "SPA"]
export const Works = () => {
    return (
        <StyledWorks>
            <Container>
                <SectionTitle>
                    My works
                </SectionTitle>
                <TabMenu menuItems={worksItems}/>

                <FlexWrapper justify={"space-between"} align={"flex-start"}>
                    <Work title={"Social Network"} text={"Lorem ipsum dolor"} src={socialImg}/>
                    <Work title={"Timer"} text={"lisks ipsum dolor amet"} src={Timer}/>
                </FlexWrapper>
            </Container>
        </StyledWorks>
    );
};

const StyledWorks = styled.section`
`

