import styled from "styled-components";
import { motion } from "framer-motion";

export const SContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const SInputWrapper = styled.div`
  position: relative;
  display: flex;
  height: fit-content;
`;

export const SInput = styled(motion.input)`
  appearance: none;
  width: 1rem;
  height: 1rem;
  border: solid 1px ${({ filled }) => (filled ? "#3669A2" : "#ffffff")};
  border-radius: 2px;
  cursor: pointer;
`;

export const SCheckWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  pointer-events: none;
  z-index: 2;
`;

export const SLabel = styled.label`
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "0.6875rem")};
  width: fit-content;
  color: ${({ filled }) => (filled ? "#353535" : "#ebebeb")};
  cursor: pointer;
`;
