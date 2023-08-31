import styled from "styled-components";

export const SProjectTeamSlider = styled.div`
  width: 100%;
`
export const SMemberDiv = styled.div`
  width: 14.1875rem;
  height: 14.1875rem;
  display: flex !important; 
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  &:hover{
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='13' ry='13' stroke='%233F48CC' stroke-width='1' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
    border-radius: 0.8125rem;
  }
`
export const SMemberImg = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 100%;
  border: 0.25rem solid #ffffff;
  object-fit: cover;
  margin-bottom: 1.25rem;
`

export const SName = styled.p`
  font-family: 'Noto Sans Georgian';
  font-size: 0.875rem;
  font-weight: 400;
  color: #ffffff;
  opacity: 0.6;
`
export const SRole = styled(SName)`
  opacity: 1;
`

export const SBlueLine = styled.div`
  width: 9.75rem;
  height: 0.0625rem;
  background-color: #2984CE;
  margin: 0.6875rem 0;
`