import styled from "styled-components";

import { motion } from "framer-motion";

export const SDropdownWrapper = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  position: relative;
`;

export const SInputWrapper = styled.div`
  width: 26.375rem;
`;

export const SDropdownList = styled(motion.ul)`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 0.813rem;
  right: 0;
  width: 18.563rem;
  padding: 1.875rem 1.563rem;
  list-style: none;
  overflow-y: auto;
  overflow-x: hidden;
  background-color: white;
  color: #090707;
  border-radius: 0.625rem;
  z-index: 1;
`;

export const SDropdownItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  font-size: 0.875rem;
`;

export const SInput = styled.input`
  &:focus {
    outline: 2px solid #2984ce;
  }

  &[type="radio"] {
    /* Hide the default radio button */
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 1.25rem;
    height: 1.25rem;
    border-radius: 50%;
    border: 2px solid #3669a2;
    outline: none;
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease;

    &:hover {
      /* Style when hovering over the radio button */
      border-color: #3669a2;
    }

    &::before {
      /* Add a small circle inside the border */
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 0.719rem;
      height: 0.719rem;
      border-radius: 50%;
      background-color: #3669a2;
      opacity: 0;
      transition: opacity 0.3s ease;
    }

    &:checked::before {
      /* Show the small circle for checked radio button */
      opacity: 1;
    }

    &:hover::before {
      /* Style the small circle on hover */
      opacity: 0.5;
    }
  }
`;

export const SCustomInput = styled.input`
  width: 13.688rem;
  border: none;
  outline: 1px solid #2984ce;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  padding: 0.438rem 0.625rem;
  color: #909090;
  cursor: pointer;
`;

export const SLabel = styled.label`
  font-size: 0.75rem;
  cursor: pointer;
`;
