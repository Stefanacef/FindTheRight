import React from "react";
import styled from "styled-components";
import LogoBrand from "../../components/logoBrand";
import TopSectionContainerBackgroundImg from "../../images/landing-page-2.jpg";
import {Marginer} from "../../components/marginer";
import Button from "../../components/button"
const TopSectionContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      to right,
      rgba(3, 78, 24, 0.596),
      rgba(2, 168, 49, 0.137)
    ),
    url(${TopSectionContainerBackgroundImg});
  background-position: 0px -50px;
  background-size: cover;
`;
const TopSectionInnerContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
const StandoutImg = styled.div`
  width: 40em;
  height: 34em;

  img {
    width: 100%;
    height: 100%;
  }
`;
const LogoContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
`;
const SloganText = styled.h3`
  margin: 0;
  line-height: 1.4;
  color: #fff;
  font-weight: 400;
  font-size: 40px;
  letter-spacing: 0.5px;
`;

const TopSection = (props) => {
  const{children,textSlogan1, textSlogan2,image}=props
  return (
    <TopSectionContainer>
      {children}
      <TopSectionInnerContainer>
        <LogoContainer>
          <LogoBrand logoSize={65} textSize={55}/>
         <Marginer direction='vertical' margin={8}/>
          <SloganText> {textSlogan1} </SloganText>
          <SloganText> {textSlogan2}</SloganText>
         <Marginer direction='vertical' margin={20}/>
          <Button>Join Now</Button>
        </LogoContainer>
        <StandoutImg>
          <img src={image} alt="" />
        </StandoutImg>
      </TopSectionInnerContainer>
    </TopSectionContainer>
  );
};

export default TopSection;
