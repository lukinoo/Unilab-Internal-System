import styled from "styled-components";
import circleSvg from "/assets/svg/whiteCircle.svg";

export const SRangeInputContainer = styled.div`
  display: flex;
  color: white;
  align-items: center;
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
