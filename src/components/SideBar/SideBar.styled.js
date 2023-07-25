import styled from "styled-components";
import { motion } from "framer-motion";

export const SSideBarContainer = styled(motion.nav)`
  position: absolute;
  width: ${({ width }) => (width ? width : "22rem")};
  min-height: 45.188rem;
  background-color: #1a1b1c;
  border-radius: 0px 0px 6px 0px;
  top: 6.4rem;
  left: 0;
  z-index: 1;
`;

export const SSideBarDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.3rem;
  height: 100%;
  margin: 5.75rem 0 2rem 1.875rem;
  overflow: hidden;
`;

export const SSideBarButton = styled.div`
  position: absolute;
  width: 1.313rem;
  height: 9.688rem;
  transform: translate(100%, -50%);
  top: 50%;
  right: 0;
  background-color: #1a1b1c;
  border-radius: 0px 10px 10px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const SSideBarArrowButton = styled.button`
  all: unset;
  display: flex;
  cursor: pointer;
  padding: 0.5rem 0;
  transform: rotate(270deg);
`;
//

export const SSideButton = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  width: 6.563rem;
  height: 1.5rem;
  cursor: pointer;
  color: #ffffff;
  gap: 1.875rem;
`;
export const SArrowButton = styled.button`
  all: unset;
  display: flex;
  cursor: pointer;
  padding: 0.5rem 0;
`;

export const SSideBarImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`