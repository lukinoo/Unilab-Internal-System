import styled from "styled-components";

const BaseChevronButton = styled.button`
  position: absolute;
  top: 3.5rem;
  width: 4.1875rem;
  height: 4.1875rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
  background-color: #4980C0;
  &>img{
    width: 60%;
    height: 60%;
  }
`;

export const SLeftChevronButton = styled(BaseChevronButton)`
  left: -2.5rem;

  @media (min-width: 1024px) {
  }

  @media (max-width: 768px) {
  }
`;

export const SRightChevronbutton = styled(BaseChevronButton)`
  right: -2.5rem;

  @media (min-width: 1024px) {
  }

  @media (max-width: 768px) {
  }
`;
