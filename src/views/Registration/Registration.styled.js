import styled from "styled-components";
import { motion } from "framer-motion";

export const SRegistrationMainDiv = styled(motion.div)`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const SAdditionalInformationText = styled.p`
  grid-area: auto / 2 / auto / 4;
`;
export const SRegistrationSvgs = styled.div`
  z-index: -1;
`;

export const SStarLeftTop = styled(motion.img)`
  position: absolute;
  left: 4.8rem;
  top: 15rem;
`;
export const SStarLeftBottom = styled(motion.img)`
  position: absolute;
  left: 3rem;
  bottom: 0rem;
`;
export const SVectorRight = styled(motion.img)`
  position: absolute;
  right: 0rem;
  bottom: 0rem;
`;
