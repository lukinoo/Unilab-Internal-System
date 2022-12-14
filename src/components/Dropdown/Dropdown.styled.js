import styled from "styled-components";
import { motion } from "framer-motion";

export const SDropdownWrapper = styled.div`
  position: relative;
  width: fit-content;
`;

export const SDropdownList = styled(motion.ul)`
  position: absolute;
  display: flex;
  top: 100%;
  right: 0;
  flex-direction: column;
  gap: 0.875rem;
  padding: 1.375rem;
  background-color: #ffffff;
  border-radius: 0.625rem;
  margin-top: 0.375rem;
  z-index: 1;
`;

export const SDropdownItem = styled.li`
  display: flex;
  font-size: 0.875rem;
  color: #737373;
`;

export const SArrowButton = styled.button`
  all: unset;
  display: flex;
  cursor: pointer;
  padding: 0.5rem 0;
`;

export const SDropdownButton = styled(motion.button)`
  all: unset;
  cursor: pointer;

  &:hover {
    font-weight: 700;
    text-decoration-line: underline;
  }

  &::after {
    display: block;
    content: attr(data-longestitem);
    font-weight: 700;
    height: 1px;
    overflow: hidden;
    visibility: hidden;
  }
`;
