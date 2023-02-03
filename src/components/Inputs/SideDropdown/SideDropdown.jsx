import React, { useState } from "react";
import {
  SSideDropdownWrapper,
  SSideInputSpan,
  SSideInputItemWrapper,
  SSideMainDiv,
  SSideInputItems,
  SSideArrowButton,
  SSvgLeft,
  SSideClick,
} from "./SideDropdown.styled";
import { DropArrow } from "../../DropArrow";

export const SideDropdown = ({
  id,
  children,
  path,
  label,
  items,
  LeftComponent,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SSideDropdownWrapper>
      <SSideMainDiv isOpen={isOpen}>
        <SSideClick
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <SSvgLeft to={path} aria-label={label}>
            {LeftComponent}
          </SSvgLeft>
          <SSideInputSpan>{children}</SSideInputSpan>
          <SSideArrowButton title="toggle dropdown">
            <DropArrow isOpen={isOpen} stroke={"#FFFFFF"} />
          </SSideArrowButton>
        </SSideClick>
      </SSideMainDiv>
      {isOpen && (
        <>
          <SSideInputItemWrapper
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            // exit={{ opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
          >
            {items &&
              items.map((item) => (
                <SSideInputItems key={item}>{item}</SSideInputItems>
              ))}
          </SSideInputItemWrapper>
        </>
      )}
    </SSideDropdownWrapper>
  );
};
