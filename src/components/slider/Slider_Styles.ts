import styled from "styled-components";
import {theme} from "../../styles/Theme";

const Slider = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
const Slide = styled.div`
  text-align: center;
`

const Text = styled.p`
`
const Name = styled.span`
  font-family: 'Josefin Sans', sans-serif;
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin: 22px 0 42px;
  display: inline-block;
`

const Pagination = styled.span`
  span {
    display: inline-block;
    width: 7px;
    height: 7px;
    background-color: ${theme.colors.border};
    border-radius: 20px;
    
    & + span {
      margin-left: 5px;
    }
    
    &.active {
      background-color: ${theme.colors.accent};
      width: 20px;
    }
  }
`
export const S = {
    Slider,
    Slide,
    Text,
    Name,
    Pagination
}