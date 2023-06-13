import React, { useRef } from "react";
import { Input } from "../Input";
import {
  SArrowButton,
  SDropdownButton,
  SDropdownItem,
  SDropdownList,
  SDropdownWrapper,
} from "../Dropdown/Dropdown.styled";
import { SMultipleDropdownList, SMultipleDropdownItem } from "./MultipleOptionDropdown.styled";
import { DropArrow } from "../../DropArrow";
import { dropdownVariants } from "../Dropdown/Dropdown.variants";
import { getLongestString } from "../../../utils/dropdown";
import { useAutoClose } from "../../../hooks/useAutoClose";
import { AnimatePresence } from "framer-motion";
import { useController } from "react-hook-form";

export const MultipleOptionDropdown = (props) => {
  const { name, gridArea, items, control } = props;

  const {
    field: { value, onChange, onBlur },
  } = useController({ name, control });

  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useAutoClose(dropdownRef, false, onBlur);

  const longestItem = items && getLongestString(Object.values(items));

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (id) => {
    if (value) {
      const isSelected = value.includes(id);
      if (isSelected) {
        const updatedValue = value.filter((selectedId) => selectedId !== id);
        onChange(updatedValue);
      } else {
        const updatedValue = [...value, id];
        onChange(updatedValue);
      }
    } else {
      onChange(id);
    }
  };

  return (
    <SDropdownWrapper gridArea={gridArea} ref={dropdownRef}>
      <Input
        {...props}
        value={
          Array.isArray(value)
            ? value.map((id) => items[id]).join(", ")
            : items[value]
        } // display mutliple values
        readOnly
        type={"text"}
        onClick={toggleOpen}
        RightComponent={
          <SArrowButton type="button" title="toggle dropdown">
            <DropArrow isOpen={isOpen} />
          </SArrowButton>
        }
      />
      <AnimatePresence>
        {isOpen && (
          <SMultipleDropdownList
            variants={dropdownVariants}
            initial={"hidden"}
            animate={"visible"}
            exit={"hidden"}
            transition={{ duration: 0.4, type: "spring" }}
          >
            {!items ? (
              <span>--- no items ---</span>
            ) : (
              Object.entries(items).map(([id, itemValue]) => {
                return (
                  <SMultipleDropdownItem key={id} checked={value?.includes(id)}>
                    <SDropdownButton
                      type="button"
                      onClick={() => handleSelect(id)}
                      data-longestitem={longestItem}
                    >
                      {itemValue}
                    </SDropdownButton>
                  </SMultipleDropdownItem>
                );
              })
            )}
          </SMultipleDropdownList>
        )}
      </AnimatePresence>
    </SDropdownWrapper>
  );
};
