import { Link } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";

export const SSideDropdownWrapper = styled.div`
  all: unset;
  display: flex;
  flex-direction: column;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "0.875rem")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "400")};
  background-color: ${({ secondary }) => (secondary ? "#ffffff" : "#1A1B1C")};
  color: ${({ secondary }) => (secondary ? "#000000" : "#ffffff")};
  width: ${({ width }) => (width ? width : "")};
  cursor: pointer;
`;
export const SSvgLeft = styled(Link)`
  display: flex;
  align-items: center;
  padding-right: 1.938rem;
  height: ${({ height }) => (height ? height : "1.5rem")};
`;

export const SSideMainDiv = styled.div`
  display: flex;
  align-items: center;
  color: ${({ isOpen }) => (isOpen ? "#4980c0" : "#ffffff")};
  svg {
    path {
      stroke: ${({ isOpen }) => (isOpen ? "#4980c0" : "#ffffff")};
    }
  }
  &:hover {
    color: ${({ hover }) => (hover ? hover : "#4980C0")};
    svg {
      path {
        stroke: ${({ hover }) => (hover ? hover : "#4980C0")};
      }
    }
  }
`;
export const SSideInputSpan = styled.span`
  margin: 0 0.875rem 0 0;
`;

export const SSideInputItemWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin: 1rem 0 0 3.438rem;
  gap: 0.75rem;
`;

export const SSideInputItems = styled.span`
  display: flex;
  &:hover {
    color: ${({ hover }) => (hover ? hover : "#4980C0")};
  }
`;

export const SSideArrowButton = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
  cursor: pointer;
`;

export const SSideClick = styled.div`
  display: flex;
  white-space: nowrap;
  align-items: center;
`;
