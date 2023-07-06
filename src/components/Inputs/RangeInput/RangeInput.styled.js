import styled from "styled-components";
import circleSvg from "/assets/svg/whiteCircle.svg";

export const SRangeInputContainer = styled.div`
  display: flex;
  color: white;
  width: 56.4375rem;
  align-items: center;
  justify-content: space-around;
  margin: 2rem 0;
`;
export const SRadioButton = styled.input`
  all: unset;
  width: 1.875rem;
  height: 1.875rem;
  background-color: transparent;
  border-radius: 50%;
  border: .125rem solid #ffffff;
  cursor: pointer;

  &:checked{
    background-image: url(${circleSvg});
    background-size: 1.25rem;
    background-position: center;
    background-repeat: no-repeat;
  }
`

export const SRadioDiv = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 3rem;
  font-size: .875rem;
  width: 10rem;

  &>p{
    position: absolute;
    top: 100%;
    text-align: center;
  }
`

export const SLine = styled.div`
  width: ${({width})=> width ? width : '7rem'};
  height: 0.1rem;
  background-color: gray;
`