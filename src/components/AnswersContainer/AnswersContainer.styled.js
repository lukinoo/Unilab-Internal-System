import styled from "styled-components";
import checkmark from "/assets/svg/greenCheckmark.svg";

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