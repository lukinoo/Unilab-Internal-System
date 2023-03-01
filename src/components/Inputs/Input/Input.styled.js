import styled from "styled-components";
import { motion } from "framer-motion";

export const SContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: ${({ width }) => (width ? width : "100%")};
  grid-area: ${({ gridArea }) => (gridArea ? gridArea : null)};
  gap: 0.5rem;
  cursor: ${({ onClick }) => (onClick ? "pointer" : "auto")};

  & input {
    pointer-events: ${({ onClick }) => (onClick ? "none" : "auto")};
  }
`;

export const SLabel = styled.label`
  font-size: 0.75rem;
  color: #ffffff;
`;

export const SInputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 0.625rem;
  background-color: #f1f1f1;
  padding: 0 1.2rem;
  overflow: hidden;
  gap: 1.2rem;

  &:focus-within {
    background-color: #ffffff;
    box-shadow: inset 0 0 0 2px #2984ce;
  }
`;

export const SInput = styled.input`
  width: 100%;
  font-size: ${({ fontSize }) => (fontSize ? fontSize : "0.875rem")};
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : "400")};
  font-family: "FiraGO";
  padding: 0.75rem 0;
  color: #353535;
  background-color: transparent;
  border: none;
  outline: none;

  &:-webkit-autofill,
  &:-webkit-autofill:focus {
    transition: background-color 600000s ease-in-out 0s;
  }

  &:autofill {
    background: transparent;
  }

  &::-ms-reveal {
    display: none;
  }
`;

export const SError = styled(motion.span)`
  width: 100%;
  max-height: 1.8rem;
  line-height: 0.9rem;
  overflow: hidden;
  margin-top: 0.5rem;
  font-size: 0.75rem;
  color: #bd3a3a;
`;
