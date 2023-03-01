import styled from "styled-components";
import { Link } from "react-router-dom";

export const STitle = styled.h3`
  display: flex;
  justify-content: center;
  margin: 4.3rem 0 3rem 0;
  font-size: 1.875rem;
  font-weight: 700;
  color: #ffffff;
`;
export const SDescription = styled.p`
  display: flex;
  justify-content: center;
  font-size: 1rem;
  margin-bottom: 6.8rem;
  color: #ffffff;
`;

export const SAuthenticationText = styled.p`
  font-size: 0.875rem;
  color: #ebebeb;
  margin-bottom: 6.25rem;
`;

export const SAuthenticationLink = styled(Link)`
  margin-left: 0.313rem;
  font-weight: 700;
  color: #ebebeb;
`;

export const SCenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SPrivacyCheckbox = styled.div`
  display: flex;
  margin-top: 5rem;
  margin-bottom: 2.5rem;
  align-items: center;
`;

export const SPrivacyLink = styled(Link)`
  display: flex;
  margin-left: 0.75rem;
  margin-bottom: 0.25rem;
`;

export const SPrivacyCheckboxImg = styled.img`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
`;

export const SError = styled.span`
  font-size: 0.75rem;
  color: #bd3a3a;
  max-width: 40rem;
  margin-bottom: 2.5rem;
`;
