import { Link } from "react-router-dom";
import styled from "styled-components";

export const SThirdHeader = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
  padding: 0 4.5rem;
  min-height: 10.5rem;
  box-shadow: 0rem 0rem 0.125rem 0.063rem #ecececd4;
`;
export const SIconPairPart = styled.div`
  width: 100%;
`;

export const SHomePart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const SHomePartTitle = styled.p`
  color: white;
  font-size: 1.1rem;
  font-weight: 400;
`;

export const SHomePartIcon = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
`;

export const SRegistrationPart = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  gap: 2rem;
`;

export const SAuthenticationIcon = styled.img`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
`;

export const SAuthenticationLink = styled(Link)`
  display: flex;
`;
