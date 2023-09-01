import styled from "styled-components";

const BaseChevronButton = styled.button`
  position: absolute;
  top: 3.5rem;
  width: 4.1875rem;
  height: 4.1875rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
  &>img{
    width: 60%;
    height: 60%;
  }
`;

export const SLeftChevronButton = styled(BaseChevronButton)`
  left: -1rem;
  @media (min-width: 1024px) {
    left: -3rem;
  }
  @media (min-width: 1200px) {
    left: -6rem;
  }
  @media (max-width: 768px) {
  }
`;

export const SRightChevronbutton = styled(BaseChevronButton)`
  right: -1rem;
  @media (min-width: 1024px) {
    right: -3rem;
  }
  @media (min-width: 1200px) {
    right: -6rem;
  }
  @media (max-width: 768px) {
  }
`;
