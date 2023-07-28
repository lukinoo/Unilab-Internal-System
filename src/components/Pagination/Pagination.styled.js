import styled from "styled-components";

export const SPaginationDiv = styled.div`
  display: flex;
  justify-content: space-around;
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