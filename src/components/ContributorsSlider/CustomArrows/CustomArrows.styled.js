import styled from "styled-components";

const BaseArrowButton = styled.button`
  color: red;
  position: absolute;
  top: -5rem;
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    background-color: #4980C0;
  }
`;

export const SLeftArrowButton = styled(BaseArrowButton)`
  right: 13rem;

  @media (min-width: 1024px) {
    right: 13rem;
  }

  @media (max-width: 768px) {
    right: 8rem;
  }
`;

export const SRightArrowButton = styled(BaseArrowButton)`
  right: 8rem;

  @media (min-width: 1024px) {
    right: 8rem;
  }

  @media (max-width: 768px) {
    right: 3rem;
  }
`;
