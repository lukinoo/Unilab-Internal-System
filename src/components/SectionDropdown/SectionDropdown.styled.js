import styled from "styled-components";
import { motion } from "framer-motion";

export const SDropdownWrapper = styled.div``;

export const SLabel = styled.div`
  display: flex;
  color: #565656;
  align-items: center;
  gap: 0.65rem;
  cursor: pointer;
`;

export const SDropdown = styled(motion.div)`
  color: #353535;
  & > * {
    padding: 0.6875rem 1rem;
  }
`;
