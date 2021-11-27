import React from "react";
import styled from "styled-components";
import LogoBrand from "../../components/logoBrand";
import TopSectionContainerBackgroundImg from "../../images/landing-page-2.jpg";
import { Marginer } from "../../components/marginer";
import { deviceSize } from "../../components/responsive";
import Button from "../../components/button";
import { useMediaQuery } from "react-responsive";
const TopSectionContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      to right,
      rgba(3, 78, 24, 0.596),
      rgba(2, 168, 49, 0.137)
    ),
    url(${TopSectionContainerBackgroundImg}) no-repeat;
  background-position: bottom;
  background-size: cover;
  background-repeat: no-repeat;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    height: 80vh;
  }
`;
const TopSectionInnerContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media screen and (max-width: ${deviceSize.tablet}px) {
    flex-direction: column-reverse;
  }
`;
const StandoutImg = styled.div`
  width: 40em;
  height: 34em;

  img {
    width: 100%;
    height: 100%;
  }
  @media screen and (min-width: ${deviceSize.mobile}px) {
    img {
      width: 100%;
      height: 100%;
    }
  }
`;
const LogoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    align-items: center;
  }
  @media screen and (min-width: ${deviceSize.mobile}px) {
    align-items: center;
  }
`;
const SloganText = styled.h3`
  margin: 0;
  line-height: 1.4;
  color: #fff;
  font-weight: 400;
  font-size: 40px;
  letter-spacing: 0.5px;

  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 30px;
  }
  @media screen and (min-width: ${deviceSize.mobile}px) {
    font-size: 50px;
  }
`;

const TopSection = (props) => {
  const { children, textSlogan1, textSlogan2, image } = props;
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  const isLargePhone = useMediaQuery({ minWidth: deviceSize.mobile });

  console.log("mobine", isMobile);
  return (
    <TopSectionContainer>
      {children}
      <TopSectionInnerContainer>
        <LogoContainer>
          <LogoBrand
            logoSize={isMobile ? 30 : 65}
            textSize={isMobile ? 35 : 55}
          />
          <Marginer direction="vertical" margin={8} />
          <SloganText> {textSlogan1} </SloganText>
          <SloganText> {textSlogan2}</SloganText>
          <Marginer direction="vertical" margin={20} />
          <Button size={isLargePhone ? 30 : null}>Join Now</Button>
        </LogoContainer>
        {!isMobile && (
          <StandoutImg>
            <img src={image} alt="" />
          </StandoutImg>
        )}
      </TopSectionInnerContainer>
    </TopSectionContainer>
  );
};

export default TopSection;
