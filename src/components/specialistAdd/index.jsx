import React from 'react'
import styled from "styled-components";
import LogoBrand from '../logoBrand'
import { Marginer } from "../marginer";
import FarmingImage from '../../images/farming.png'
import Button from '../button';
const SpecialistAdContainer=styled.div`
width: 100%;
height: 500;
display: flex;
background-color:  #046b21c5;
align-items: center;
justify-content: center;

`
const ContentContainer=styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
`
const SloganContainer=styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
margin-right: 3em;
`
const Slogan=styled.h2`
margin: 0;
font-size: 34px;
color: #fff;
font-weight: 700;
line-height: 1.3;
`

const StandoutImage=styled.div`
width: 35em;
height: 29em;
img{
    width: 100%;
    height: 100%;
}
`
function SpecialistAdd() {
    return (
        <SpecialistAdContainer>
            <ContentContainer>
                <SloganContainer>
                    <LogoBrand logoSize={25} textSize={30}/>
                       <Marginer direction='vertical' margin='1em'/>
                       <SloganContainer>
                       <Slogan>You're Ready, and you</Slogan>
                       <Slogan>have an outstanding</Slogan>
                       <Slogan>Service to offer?</Slogan>
                       </SloganContainer>
                       <Marginer direction='vertical' margin={10}/>
                       <Button size={15} >Join as Specialist</Button>
                    </SloganContainer>    
                    <StandoutImage>
                        <img src={FarmingImage} alt="Join-as-specialist" />
                        </StandoutImage>      
            </ContentContainer>
        </SpecialistAdContainer>
    )
}

export default SpecialistAdd
