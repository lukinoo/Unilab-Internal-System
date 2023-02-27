import styled from "styled-components";
import { Link } from "react-router-dom";

export const SAuthenticationView = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  position: relative;
  color: white;
`;

export const SForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 41.25rem;
  margin: 4.375rem;
  margin-bottom: 6.25rem;
`;

export const STitle = styled.h3`
  font-size: 1.875rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: #ffffff;
`;

export const SDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 3.75rem;
  color: #ffffff;
`;

export const SInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.375rem;
  margin-bottom: 0.75rem;
`;

export const SRememberWrapper = styled.div`
  display: flex;
  width: 21.25rem;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3rem;
`;

export const SForgotPasswordLink = styled(Link)`
  display: block;
  font-size: 0.6875rem;
  width: fit-content;
  color: #ebebeb;
`;

export const SRegistrationText = styled.p`
  font-size: 0.875rem;
  color: #ebebeb;
  margin: 1.75rem 0 6.25rem;
`;

export const SRegistrationLink = styled(Link)`
  margin-left: 0.313rem;
  font-weight: 700;
  color: #ebebeb;
`;

export const SAuthenticationSvgs = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
`;

export const SVectorSvg = styled.img`
  position: absolute;
  left: 0rem;
`;
export const StarTopSvg = styled.img`
  position: absolute;
  right: 4.438rem;
  top: 7.813rem;
`;
export const StarBottomSvg = styled.img`
  position: absolute;
  left: 12.875rem;
  top: 50rem;
`;
