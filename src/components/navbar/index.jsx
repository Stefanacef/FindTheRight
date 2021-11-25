import React from "react";
import styled from "styled-components";
import LogoBrand from "../logoBrand";
import Button from "../button";
import { Marginer } from "../marginer";
import { useMediaQuery } from "react-responsive";
import { deviceSize } from "../../components/responsive";

const NavBarContainer = styled.div`
  width: 100%;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.1em;
  background-color: ${({ useTransparent }) =>
    useTransparent ? "none" : "rgba(5, 126, 39, 0.884)"};

  /* @media screen and (max-width: ${deviceSize.mobile}px) {
    justify-content: flex-start;
  } */
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
  const { useTransparent } = props;
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  return (
    <NavBarContainer useTransparent={useTransparent}>
      <LogoBrand
        logoSize={isMobile ? 25 : 35}
        textSize={isMobile ? 17 : 25}
      ></LogoBrand>
      <AccessibilityContainer>
        {!isMobile && <AnchorLink>Specialist Portal</AnchorLink>}
        {!isMobile && <Marginer direction="horizontal" margin={10} />}
        {!isMobile && <Separator />}
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
