import styled from "styled-components";
import arrowLeft from "/assets/svg/chevronLeft.svg"
import arrowRight from "/assets/svg/chevronRight.svg"
import doubleArrowLeft from "/assets/svg/doubleChevronLeft.svg";
import doubleArrowRight from "/assets/svg/doubleChevronRight.svg";

export const SPaginationDiv = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 11.4375rem;
  height: 1.5rem;
  font-size: 1.125rem;
  color: #ffffff;
`
export const SPageNumber = styled.p`
  width: 0.625rem;
  cursor: pointer;
  text-align: center;
  font-weight: ${({active})=>active && '700'};
  text-decoration: ${({active})=>active && 'underline'};
`
export const SNumbersDiv = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-around;
  align-items: center;
`
export const SArrow = styled.button`
  all:unset;
  width: 1rem;
  height: 1rem;
  background-image: url(${({ left }) => (left ? arrowLeft : arrowRight)});
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`
export const SDoubleArrow = styled(SArrow)`
  background-image: url(${({ left }) => (left ? doubleArrowLeft : doubleArrowRight)});
`