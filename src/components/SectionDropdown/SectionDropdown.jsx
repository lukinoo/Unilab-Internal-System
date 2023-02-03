import React, { useRef } from "react";
import { DropArrow } from "../DropArrow";
import { SDropdown, SDropdownWrapper, SLabel } from "./SectionDropdown.styled";
import { AnimatePresence } from "framer-motion";
import { useAutoClose } from "../../hooks/useAutoClose";
import { dropdownVariants } from "./SectionDropdown.variants";

export const SectionDropdown = ({ label, children, parentRef }) => {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useAutoClose(parentRef ?? dropdownRef, false);

  return (
    <SDropdownWrapper ref={dropdownRef}>
      <SLabel
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <DropArrow isOpen={isOpen} />
        <div>{label}</div>
      </SLabel>
      <AnimatePresence>
        {isOpen && (
          <SDropdown
            variants={dropdownVariants}
            initial={"hidden"}
            animate={"visible"}
            exit={"hidden"}
            layout
          >
            {children}
          </SDropdown>
        )}
      </AnimatePresence>
    </SDropdownWrapper>
  );
};
