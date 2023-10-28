import React from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from './../../../assets/images/proj_1.png'
import Timer from './../../../assets/images/proj_2.png'
import {Container} from "../../../components/Container";
import {S} from './Works_Styles'

const workData = [
    {
        title: "Social Network",
        src: socialImg,
        text: "Lorem ipsum dolor"
    },
    {
        title: "Timer",
        src: Timer,
        text: "lisks ipsum dolor amet"
    },

]
const worksItems = ["All", "Landing Page", "React", "SPA"]
export const Works: React.FC = () => {
    return (
        <S.Works>
            <Container>
                <SectionTitle>
                    My works
                </SectionTitle>
                <TabMenu menuItems={worksItems}/>
                <FlexWrapper justify={"space-between"} align={"flex-start"} wrap={"wrap"}>
                    {workData.map((w) => {
                            return <Work title={w.title} text={w.text} src={w.src}/>
                    })}
                </FlexWrapper>
            </Container>
        </S.Works>
    );
};



