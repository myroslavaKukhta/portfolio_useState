import React from 'react';
import styled from "styled-components";
import {Link} from "../../../../components/Link";

export type tabsStatusType = "all" | "landing" | "react" | "spa";

type tabMenuPropsType = {
tabsItems: Array<{status: tabsStatusType,
    title: string}>,

    changeFilterStatus: (value: tabsStatusType) => void
    currentFilterStatus: string
}
export const TabMenu = (props: tabMenuPropsType) => {
  return (
    <StyledTabMenu>
      <ul>
        {props.tabsItems.map((item, index) => {
          return <ListItem key={index}>
            <Link active={props.currentFilterStatus === item.status} as={"button"} onClick={() => {props.changeFilterStatus(item.status)}}>{item.title}</Link >
          </ListItem>
        })}
      </ul>
    </StyledTabMenu>
  );
};


const StyledTabMenu = styled.nav`
  ul {
    display: flex;
    justify-content: space-between;
    max-width: 352px;
    width: 100%;
    margin: 0 auto 40px;
  }
`

const ListItem = styled.li`
 position: relative;
  z-index: 0;
`
