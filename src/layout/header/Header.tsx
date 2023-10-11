import React from 'react';
import styled from "styled-components";

export const Header = () => {
  return (
    <StyledHeader>
      <nav>
        <ul>
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">Skills</a>
          </li>
          <li>
            <a href="">Works</a>
          </li>
          <li>
            <a href="">Testimony</a>
          </li>
          <li>
            <a href="">Contacts</a>
          </li>
        </ul>
      </nav>

    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  background-color: green;
`

export default Header;
