import React from "react";
import styled from "styled-components";
import LogoBrand from "../logoBrand";
import Button from "../button";
import { Marginer } from "../marginer";

const NavBarContainer = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.1em;
`;
const AccessibilityContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
const AnchorLink = styled.a`
  font-size: 17px;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  transition: all 200ms ease-in-out;

  &:hover {
    filter: contrast(0.6);
  }
`;
const Separator = styled.div`
  height: 40%;
  width: 1px;
  background-color: #fff;
`;

function NavBar(props) {
  return (
    <NavBarContainer>
      <LogoBrand logoSize={35} textSize={25}></LogoBrand>
      <AccessibilityContainer>
        <AnchorLink>Specialist Portal</AnchorLink>
        <Marginer direction="horizontal" margin={10} />
        <Separator />
        <Marginer direction="horizontal" margin={10} />
        <Button size={14} color="#00b43396">
          Register
        </Button>
        <Marginer direction="horizontal" margin={18} />
        <AnchorLink>Login</AnchorLink>
      </AccessibilityContainer>
    </NavBarContainer>
  );
}

export default NavBar;
