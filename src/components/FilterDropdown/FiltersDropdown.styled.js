import styled from "styled-components";
import { motion } from "framer-motion";

export const SDropdownWrapper = styled.div`
  position: relative;
`;

export const SDropdown = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  position: absolute;
  top: 0;
  left: 0;
  background-color: #fff;
  border-radius: 4px;
  list-style: none;
  padding: 1rem;
  width: 18.75rem;
  box-shadow: 0 4px 4px #dddddd40;
`;

export const SFilterIcon = styled.img`
  width: 24px;
  height: 24px;
`;
