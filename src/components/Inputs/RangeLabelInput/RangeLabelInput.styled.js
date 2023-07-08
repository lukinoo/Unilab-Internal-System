import styled from "styled-components";
import { SInput, SLabel } from "../Input/Input.styled";
import infoSvg from "/assets/svg/info.svg";

export const SRangeLabelInputDiv = styled.div`
  display: flex;
  flex-direction: column;
  color: #ffffff;
  width: 50%;
`;

export const SRangeLabelInput = styled(SInput)`
  border: 0.0625rem solid #ffffff;
  border-radius: 0.375rem;
  width: 26.125rem;
  color: #ffffff;
  padding: 1.25rem 1.4375rem;
`;

export const SRangeLabel = styled(SLabel)`
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 0.875rem;
`;

export const SBottomLabel = styled.p`
  background-image: url(${infoSvg});
  background-repeat: no-repeat;
  padding-left: 1.5rem;
  max-width: 15rem;
  margin-top: 0.6875rem;
`;
