import styled from "styled-components";
import { motion } from "framer-motion";

export const SAdditionalInfoUniversity = styled(motion.div)`
  margin: 4rem 0rem;
`;
export const SAdditionalInformationText = styled.p`
  display: flex;
  justify-content: center;
  font-size: 1rem;
  color: #ffffff;
  margin-bottom: 4rem;
`;
export const SAdditionalInfoUniversityContainer = styled.div`
  display: flex;
  justify-content: center;
`;
export const SAdditionalInfoUniversityGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem 5.5rem;
`;

export const SDegreeWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

export const SRadioWrapper = styled.div`
  display: flex;
  gap: 3rem;
`;

export const SError = styled.span`
  width: 100%;
  max-height: 1.8rem;
  line-height: 0.9rem;
  overflow: hidden;
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: #bd3a3a;
`;
