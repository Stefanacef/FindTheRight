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
  padding-left: 3em;
  @media screen and (max-width: ${deviceSize.tablet}px) {
    padding: 40px 0 10px 0;
  }
`;
const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: ${deviceSize.tablet}px) {
    flex-direction: column;
  }
`;
const SloganContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-right: 3em;
  @media screen and (max-width: ${deviceSize.tablet}px) {
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
  @media screen and (max-width: ${deviceSize.tablet}px) {
    font-size: 35px;
  }
`;

const StandoutImage = styled.div`
  width: 35em;
  height: 29em;
  img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: ${deviceSize.tablet}px) {
    width: 25em;
    height: 20em;
  }
  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 20em;
    height: 17em;
  }
`;
function SpecialistAdd() {
  const isMobile = useMediaQuery({ maxWidth: deviceSize.mobile });
  const isTablet = useMediaQuery({ maxWidth: deviceSize.tablet });

  return (
    <SpecialistAdContainer>
      <ContentContainer>
        <SloganContainer>
          <LogoBrand
            logoSize={isMobile ? 25 : isTablet ? 30 : 65}
            textSize={isMobile ? 25 : isTablet ? 27 : 55}
          />
          <Marginer direction="vertical" margin="1em" />
          <SloganContainer>
            <Slogan>You're Ready, and you</Slogan>
            <Slogan>have an outstanding</Slogan>
            <Slogan>Service to offer?</Slogan>
          </SloganContainer>
          <Marginer direction="vertical" margin={10} />
          <Button size={isMobile ? 13 : isTablet ? 17 : 20}>
            Join as Specialist
          </Button>
        </SloganContainer>

        <StandoutImage>
          <img src={FarmingImage} alt="Join-as-specialist" />
        </StandoutImage>
      </ContentContainer>
    </SpecialistAdContainer>
  );
}

export default SpecialistAdd;
