import styled from "styled-components";
import { motion } from "framer-motion";

export const SContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const SGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem 5.5rem;
`;

export const SDivisor = styled(motion.div)`
  height: 1px;
  background-color: #ffffff;
  grid-area: auto / 1 / auto / 4;
`;
