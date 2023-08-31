import styled from "styled-components";
import { SAnotherDirection } from "../../components/Buttons/AnotherDirection/AnotherDirection.styled";
import linkSvg from "/assets/svg/linkIcon.svg";

export const SProjectPageMainDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
  font-family: 'Helvetica', sans-serif;
  font-size: 1.125rem;
  overflow-x: hidden;
  & * {
    font-family: inherit;
  }
`

export const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 68rem;
  align-items: center;
`
export const SInfoDiv = styled.div`
  max-width: 68rem;
  font-size: 1.125rem;
`

export const SDescriptionDiv = styled.div`
  width: ${({width})=>width};
  padding: 1rem 2rem 2.5rem;
  margin-top: 1.25rem;  
  border-radius: 1rem;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='16' ry='16' stroke='%233F48CC' stroke-width='4' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  color: #ffffff;
  &>p{
    opacity: 0.6;
  }
`
export const SLargeText = styled.p`
  font-size: 1.25rem;
  align-self: flex-start;
  margin-bottom: 2.2rem;
  >span{
    font-weight: 600;
  }
`

export const SProjectRole = styled(SLargeText)`
  font-size: 1.125rem;
`
export const SProjectDuration = styled(SLargeText)`
  margin: 5.125rem 0 3.375rem;
`
export const SSliderDiv = styled.div`
  display: flex;
  max-width: 68rem;
  margin: 6.0625rem 0;
  flex-direction: column;
  align-items: center;
  >p{
    margin-bottom: 2rem;
    align-self: flex-start;
  }
`
export const SProjectPageFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20.5rem;
`
export const SProjectLink = styled(SAnotherDirection)`
  display: flex;
  justify-content: space-around;
  span{
    font-family: 'FiraGO';
    background-image: url(${linkSvg});
    background-position: right;
    background-repeat: no-repeat;
    padding-right: 3rem;
  }
`