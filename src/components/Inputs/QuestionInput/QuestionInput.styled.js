import styled from "styled-components";

export const SQuestionInputContainer = styled.div`
  position: relative;
  width: ${({width}) => (width ? width : "51.938rem")};
  height: ${({height}) => (height ? height : "4.375rem")};
  display: flex;
  margin: ${({margin}) => (margin ? margin : "10rem")};
`;

export const SQuestionInput = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: 1px solid #ffffff;
  background-color: inherit;
  border-radius: 0.375rem;
  font-family: "Noto Sans Georgian";
  color: #ffffff;
  font-size: 1rem;
  font-weight: 500;
  padding: 0 1.45rem;

  &:focus {
    border: 1px solid #6c95ff;
  }
`;


export const SQuestionLabel = styled.label`
  background-color: ${({backgroundColor}) => (backgroundColor ? backgroundColor : "#090707")};
  color: ${({color}) => (color ? color : "#FFFFFF")};
  position: ${({position}) => (position ? position : "absolute")};
  width: ${({width}) => (width ? width : "5.938rem")};
  height: ${({height}) => (height ? height : "2.188rem")};
  top: ${({top}) => (top ? top : "-1.188rem")};
  left: ${({left}) => (left ? left : "3.188rem")};
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${({fontSize}) => (fontSize ? fontSize : "1.125rem")};
  font-family: ${({fontFamily}) => (fontFamily ? fontFamily : "FiraGo")};
  font-weight: ${({fontWeight}) => (fontWeight ? fontWeight : "700")};
`;


