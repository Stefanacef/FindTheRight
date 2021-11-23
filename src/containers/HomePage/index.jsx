import React from "react";
import NavBar from "../../components/navbar";
import {
  InnerPageContainer,
  PageContainer,
} from "../../components/pageContainer";
import TopSection from "./topSection";
import styled from "styled-components";
import { deviceSize } from "../../components/responsive";
import Services from "./services";
import TopBestSpecialistImg from "../../images/Work only with the best.png";
import SpecialistAdd from "../../components/specialistAdd";
import { Marginer } from "../../components/marginer";
import Footer from "../../components/footer";

const Title = styled.h1`
  font-weight: 900;
  color: #000;
`;
const ContentContainer = styled.div`
  width: 100%;
  max-width: ${deviceSize.laptop}px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1em;
`;

const HomePage = () => {
  return (
    <PageContainer>
      <TopSection
        textSlogan1="Find the right specialist"
        textSlogan2="For the right Job"
        image={TopBestSpecialistImg}
      >
        <NavBar useTransparent />
      </TopSection>
      <InnerPageContainer>
        <Marginer direction="vertical" margin="2em" />
        <ContentContainer>
          <Services />
        </ContentContainer>
        <Marginer direction="vertical" margin="5em" />
        <SpecialistAdd />
        <Marginer direction="vertical" margin="3.5em" />
      </InnerPageContainer>
      <Footer />
    </PageContainer>
  );
};

export default HomePage;
