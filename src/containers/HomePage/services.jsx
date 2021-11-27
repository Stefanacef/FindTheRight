import React from "react";
import styled from "styled-components";
import Axios from "axios";
import { useEffect, useState } from "react";
import ServiceCard from "../../components/serviceCard";
import Button from "../../components/button";
import { deviceSize } from "../../components/responsive";

const ServicesContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const Title = styled.h1`
  margin-left: 1.7em;
  font-weight: 900;
  color: #444644ae;
  font-size: 2.5em;
  span {
    color: rgba(3, 78, 24, 0.637);
  }
  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 2em;
    margin-left: 0em;
  }
`;
const ServiceWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 1em;
`;
const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
const WarningText = styled.h3`
  color: rgba(100, 100, 100);
  font-weight: 500;
`;
const ViewButton = styled(Button)`
  background-color: #f2f2f2;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
  color: #959595;
  &:hover {
    filter: contrast(0.7);
    color: #fff;
  }
`;
function Services(props) {
  const [offeredServices, setServices] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const isServicesEmpty = !offeredServices || offeredServices.length === 0;

  const fetchServices = async () => {
    setLoading(true);
    const response = await Axios.get("http://localhost:9000/services").catch(
      (err) => {
        console.log("error", err);
      }
    );
    if (response) {
      setServices(response.data);
    }
    setLoading(false);
  };
  useEffect(() => {
    fetchServices();
  }, []);
  return (
    <ServicesContainer>
      <Title>
        What you can find here & <span>More</span>
      </Title>
      <ServiceWrapper>
        {isServicesEmpty && !isLoading && (
          <WarningText>No services are published yet 😥</WarningText>
        )}
        {isLoading && <WarningText>Loading...</WarningText>}
        {!isLoading &&
          !isServicesEmpty &&
          offeredServices.map((service, index) => {
            return <ServiceCard key={index} {...service} />;
          })}
      </ServiceWrapper>
      {!isLoading && !isServicesEmpty && (
        <ButtonContainer>
          <ViewButton>View more</ViewButton>
        </ButtonContainer>
      )}
    </ServicesContainer>
  );
}

export default Services;
