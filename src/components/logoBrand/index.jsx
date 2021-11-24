import React from "react";
import styled from "styled-components";
import LogoImg from "../../images/logo/logo.png";
import { Link } from "react-router-dom";

const BrandLogoContainer = styled.div`
  display: flex;
  align-items: center;
`;
const LogoImage = styled.div`
  width: ${({ size }) => (size ? size + "px" : "4rem")};
  height: ${({ size }) => (size ? size + "px" : "4rem")};

  img {
    width: 100%;
    height: 100%;
  }
`;
const LogoTitle = styled.h2`
  margin: 0;
  font-size: ${({ size }) => (size ? size + "px" : "35px")};
  color: ${({ color }) => (color ? color : "#fff")};
  font-weight: 700;
  margin-left: 6px;
`;
const StyleLink = styled(Link)`
  text-decoration: none;
`;

function LogoBrand(props) {
  const { logoSize, textSize, color, hideLogo } = props;
  return (
    <BrandLogoContainer>
      {!hideLogo && (
        <LogoImage size={logoSize}>
          <img src={LogoImg} alt="Logo of the company" />
        </LogoImage>
      )}
      <StyleLink to="/">
        <LogoTitle size={textSize} color={color}>
          FindTheRight
        </LogoTitle>
      </StyleLink>
    </BrandLogoContainer>
  );
}

export default LogoBrand;
