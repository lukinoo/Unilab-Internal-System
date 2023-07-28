import styled from "styled-components";
import arrowSvg from "/assets/svg/longArrow.svg";
import arrowBlueSvg from "/assets/svg/longArrowBlue.svg";
import { Link } from "react-router-dom";

export const SProjectInfoContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 19.5625rem;
  width: 67.375rem;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='30' ry='30' stroke='%233F48CC' stroke-width='2' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  margin: 3.0625rem 0;
`;
export const SDateDiv = styled.div`
  position: absolute;
  transform: rotate(-90deg);
  left: -6rem;
`;
export const SProjectInfoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 92%;
  border-radius: 1.875rem;
`;
export const SImage = styled.img`
  width: 14.5625rem;
  height: 14.5625rem;
  object-fit: cover;
  border-radius: 1rem;
`;
export const STitleAndRoleDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 3.5rem;
`;
export const SProjectTitle = styled.p`
  color: #3f48cc;
  font-size: 1.1875rem;
  font-weight: 500;
`;
export const SProjectRole = styled(SProjectTitle)`
  font-size: 1.125rem;
  font-weight: 400;
  opacity: 0.7;
`;
export const SProjectStatus = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.875rem;
  font-weight: 600;
  width: 14.5rem;
  height: 2.25rem;
  background-color: ${({ isFinalProject }) =>
    isFinalProject ? "#3F48CC" : "#EFEFEF"};
  color: ${({ isFinalProject }) =>
    !isFinalProject ? "#3F48CC" : "#EFEFEF"};
  border-radius: 0.25rem;
`;
export const SProjectDescription = styled.p`
  width: 44.375rem; 
  font-size: 1rem;
  font-weight: 400;
`
export const SArrowButton = styled(Link)`
  all: unset;
  position: absolute;
  top: 16rem;
  left: 51.4375rem;
  color: ${({ isFinalProject }) =>
    !isFinalProject ? "#3F48CC" : "#EFEFEF"};
  background-image:  url(${({isFinalProject}) => isFinalProject ? arrowSvg : arrowBlueSvg});
  background-position: right;
  background-repeat: no-repeat;
  font-size: 1.125rem;
  padding-right: 7rem;
  cursor: pointer;
`
export const SInlineTextDiv = styled.div`
  display:flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`