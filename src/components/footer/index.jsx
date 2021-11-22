import React from "react";
import LogoBrand from "../logoBrand";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter } from "@fortawesome/fontawesome-free-brands";
const FooterContainer = styled.div`
  width: 100%;
  min-height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2em 3em 0 3em;

  border-top: 2px solid rgba(0, 0, 0, 0.1);
`;
const TopContainer = styled.div`
  width: 100%;
  display: flex;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  &:not(:last-child) {
    margin-right: 2%;
  }
`;
const BottomContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  border-top: 2px solid rgba(0, 0, 0, 0.1);
  padding: 0 10px;
`;
const LeftBottomContainer = styled.div`
  display: flex;
`;
const RightBottomContainer = styled.div`
  display: flex;
`;
const Title = styled.h2`
  margin: 0;
  margin-bottom: 8px;
  color: #474444;
  font-weight: 600;
  font-size: 24px;
`;
const FLink = styled.a`
  text-decoration: none;
  color: #6f6f6f;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;
const PrivacyText = styled.div`
  color: #828282a2;
  font-size: 10px;
  margin: 10px;
`;
const SocialIcon = styled.div`
  color: #8a8a8a;
  font-size: 20px;
  cursor: pointer;
  transition: background-color, 200ms ease-in-out;
  &:not(:last-of-type) {
    margin-right: 10px;
  }
  &:hover {
    color: #777777;
  }
`;

function Footer(props) {
  return (
    <FooterContainer>
      <TopContainer>
        <ContentContainer>
          <Title>Categories</Title>
          <FLink>Car Repair</FLink>
          <FLink>Carpentry</FLink>
          <FLink>Landscaping</FLink>
          <FLink>Cleaning</FLink>
          <FLink>Home Improvement</FLink>
          <FLink>Demolition</FLink>
          <FLink>Management</FLink>
          <FLink>Others</FLink>
        </ContentContainer>
        <ContentContainer>
          <Title>Access</Title>
          <FLink>Login</FLink>
          <FLink>Join Us</FLink>
          <FLink>Login as Specialist</FLink>
          <FLink>Become a Specialist</FLink>
        </ContentContainer>
      </TopContainer>
      <BottomContainer>
        <LeftBottomContainer>
          <LogoBrand hideLogo color="#BABABA" textSize={16} />
          <PrivacyText> © All the rights reserve 2021</PrivacyText>
        </LeftBottomContainer>
        <RightBottomContainer>
          <SocialIcon>
            <FontAwesomeIcon icon={faFacebook} />
          </SocialIcon>
          <SocialIcon>
            <FontAwesomeIcon icon={faTwitter} />
          </SocialIcon>
        </RightBottomContainer>
      </BottomContainer>
    </FooterContainer>
  );
}

export default Footer;
