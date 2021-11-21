import React from "react";
import styled from "styled-components";
const ButtonWrapper = styled.button`
  border: none;
  outline: none;
  color: #fff;
  padding: 5px 2em;
  font-size: ${({size})=>size ? size + 'px' : "18px"};
  font-weight: 500;
  border-radius: 3px;
  background-color: ${({color})=>color?color:'rgba(0, 180, 51, 1)'};
  cursor: pointer;
 transition: all 200ms ease-in-out;
 &:hover{
  background-color: #066621;
  

 }
  &:focus {
    outline: none;
  }
`;
function Button(props) {
  const {size,color}=props
    return <ButtonWrapper size={size} color={color} className={props.className}>{props.children}</ButtonWrapper>
}

export default Button;
