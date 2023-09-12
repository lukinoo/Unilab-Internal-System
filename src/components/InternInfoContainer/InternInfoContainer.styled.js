import styled from "styled-components";
import { SButton } from "../Button/Button.styled";

export const SInternInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
`;

export const SNameAndOccupationDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 4rem;
`;

export const SName = styled.p`
  color: #3f48cc;
  font-size: 1.5rem;
  font-weight: 600;
`;

export const SOccupation = styled(SName)`
  font-size: 1.125rem;
`;

export const SDescription = styled.p`
  font-size: 1rem;
`;

export const SImageDiv = styled.div`
  position: relative;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='30' ry='30' stroke='%233F48CC' stroke-width='3' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e");
  border-radius: 1.875rem;
  padding: 1.5rem;
  & > img {
    border-radius: 1rem;
    width: 14.9375rem;
    height: 17.9375rem;
    object-fit: cover;
  }
`;
export const SImageAndTextDiv = styled.div`
  width: 59.25rem;
  display: flex;
  justify-content: space-between;
`;

export const SInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 36.1875rem;
`;

export const SContactButton = styled(SButton)`
  position: absolute;
  left: 0;
  top: 100%;
  margin-top: 4.875rem;
`;

export const SSocialDiv = styled.div`
  position: absolute;
  left: 90%;
  top: 35rem;
  display:flex;
  flex-direction: column;
  align-items: center;
`

export const SLine = styled.div`
  width: 0.0625rem;
  height: 15.4375rem;
  background-color: #3669A2;
  box-shadow: 0rem .625rem .625rem 0rem rgba(255, 255, 255, 0.25);
  margin-top: 2.625rem;
`