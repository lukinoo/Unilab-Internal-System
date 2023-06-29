import styled from "styled-components";
import checkmark from "/assets/svg/greenCheckmark.svg";
import circle from "/assets/svg/whiteCircle.svg";

export const SAnswersContainer = styled.div`
  height: fit-content;
`;

export const SAnswerDiv = styled.div`
  margin-top: 1rem;
`

export const SCheckbox = styled.input`
  all: unset;
  width: 1.75rem;
  height: 1.75rem;
  aspect-ratio: 1;
  border: .125rem solid #ffffff;
  border-radius: .1875rem;
  cursor: pointer;
  &:checked{
    background-color: #ffffff;
    background-image: url(${checkmark});
    background-position: center;
    background-repeat: no-repeat;
  }
`

export const SCross = styled.img`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
`

export const SRadioButton = styled.input`
  all: unset;
  position: relative;
  width: 1.75rem;
  height: 1.75rem;
  aspect-ratio: 1;
  background-color: transparent;
  outline: .1125rem solid #ffffff;
  border-radius: 50%;
  cursor: pointer;
  &:checked{
    background-image: url(${circle});
    background-position: center;
    background-repeat: no-repeat;
  }
` 