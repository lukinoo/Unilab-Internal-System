import styled from "styled-components";

export const SProjectPageMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  font-family: 'Helvetica', sans-serif;
  & * {
    font-family: inherit;
  }
`

export const SInfoDiv = styled.div`
  width: 90%;
  max-width: 68rem;
  font-size: 1.125rem;
`

export const SDescriptionDiv = styled.div`
  padding: 1rem 2rem 2.5rem;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='16' ry='16' stroke='%233F48CC' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 1rem;
  color: #ffffff;
  &>p{
    opacity: 0.6;
  }
`