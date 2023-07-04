import styled from "styled-components";
import { SInput, SInputWrapper } from "../Input/Input.styled";


export const SQuestionTypeDropdownInputWrapper = styled(SInputWrapper)`
  background-color: transparent;
  border: .0625rem solid #FFFFFF;
  border-radius: .375rem;
  color: #ffffff;
  &:focus-within {
    background-color: transparent;
  }
`;

export const SQuestionTypeDropdownInput = styled(SInput)`
  font-size: 1.125rem;
  font-weight: 500;
  color: #FFFFFF;
  background-image: url(${props => props.bgImage});
  background-position: left;
  background-repeat: no-repeat;
  padding-left: ${({bgImage})=> bgImage && '3rem'};
  background-size: 1.625rem;
  height: 4.375rem;
`;

export const SFloatingLabel = styled.label`
  color: #ffffff;
  position: absolute;
  left: 1.625rem;
  top: -1rem;
  padding: .375rem .9375rem;
  background-color: #080707;
`
