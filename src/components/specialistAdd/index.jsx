import React from "react";
import styled from "styled-components";
import LogoBrand from "../logoBrand";
import { Marginer } from "../marginer";
import FarmingImage from "../../images/farming.png";
import Button from "../button";
import { deviceSize } from "../../components/responsive";
import { useMediaQuery } from "react-responsive";
const SpecialistAdContainer = styled.div`
  width: 100%;
  height: 500;
  display: flex;
  background-color: #046b21c5;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: ${deviceSize.mobileS}px) {
    padding: 40px 0 10px 0;
  }
`;
const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: ${deviceSize.mobileS}px) {
    flex-direction: column;
  }
`;
const SloganContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 3em;
  @media screen and (min-width: ${deviceSize.mobileS}px) {
    align-items: center;
    margin-right: 0em;
  }
`;
const Slogan = styled.h2`
  margin: 0;
  font-size: 34px;
  color: #fff;
  font-weight: 500;
  line-height: 1.3;
  @media screen and (min-width: ${deviceSize.mobileS}px) {
    font-size: 35px;
  }
  @media screen and (min-width: ${deviceSize.mobile}px) {
    font-size: 45px;
  }
`;

const StandoutImage = styled.div`
  width: 35em;
  height: 29em;
  img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 20em;
    height: 17em;
  }
`;
function SpecialistAdd() {
  const isMobile = useMediaQuery({ minWidth: deviceSize.mobileS });

  return (
    <SpecialistAdContainer>
      <ContentContainer>
        <SloganContainer>
          <LogoBrand
            logoSize={isMobile ? 30 : 65}
            textSize={isMobile ? 25 : 55}
          />
          <Marginer direction="vertical" margin="1em" />
          <SloganContainer>
            <Slogan>You're Ready, and you</Slogan>
            <Slogan>have an outstanding</Slogan>
            <Slogan>Service to offer?</Slogan>
          </SloganContainer>
          <Marginer direction="vertical" margin={10} />
          <Button size={isMobile ? 20 : 15}>Join as Specialist</Button>
        </SloganContainer>

        <StandoutImage>
          <img src={FarmingImage} alt="Join-as-specialist" />
        </StandoutImage>
      </ContentContainer>
    </SpecialistAdContainer>
  );
}

export default SpecialistAdd;
