import styled from "styled-components";
import { SInput } from "../Input/Input.styled";
import blueCircleSvg from "/assets/svg/blueCircle.svg";

export const SCustomInput = styled(SInput)`
  height: 1.875rem;
  font-size: 0.75rem;
  border: 0.0625rem solid #2984CE;
  border-radius: 0.375rem;
  padding: 0.375rem 0.625rem;
  color: #7D7D7D;
  font-family: 'firaGO';
`

export const SRadioDropdownItem = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1rem;
`

export const SRadioInput = styled.input`
  all: unset;
  margin-right: 0.625rem;
  width: 1.25rem;
  height: 1.25rem;
  border: .1875rem solid #3669A2;
  border-radius: 100%;
  aspect-ratio: 1;
  &:checked{
    background-image: url(${blueCircleSvg});
    background-position: center;
    background-repeat: no-repeat;
  }
`

export const SRadioDropdownText = styled.p`
  color: #353535;
  font-size: 0.875rem;
`