import styled from "styled-components";
import { motion } from "framer-motion";

export const SAdditionalInfoSchool = styled(motion.div)`
  margin: 4rem 0rem;
`;

export const SAdditionalInformationText = styled.p`
  display: flex;
  justify-content: center;
  font-size: 1rem;
  color: #ffffff;
  margin-bottom: 4rem;
`;

export const SAdditionalInfoSchoolContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SAdditionalInfoSchoolGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem 5.5rem;
`;
