import React, { useRef } from "react";
import {
  SArrowButton,
  SDropdownButton,
  SDropdownWrapper,
} from "../Dropdown/Dropdown.styled";
import {
  SMultipleDropdownList,
  SMultipleDropdownItem,
  SCheckbox
} from "./MultipleOptionDropdown.styled";
import { DropArrow } from "../../DropArrow";
import { dropdownVariants } from "../Dropdown/Dropdown.variants";
import { getLongestString } from "../../../utils/dropdown";
import { useAutoClose } from "../../../hooks/useAutoClose";
import { AnimatePresence } from "framer-motion";
import { useController } from "react-hook-form";
import { MultipleOptionInput } from "../MultipleOptionInput";

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
      if (value.hasOwnProperty(id)) {
        // remove value
        const { [id]: removedValue, ...updatedValue } = value;
        onChange(updatedValue);
      } else {
        // add value
        const updatedValue = { ...value, [id]: items[id] };
        onChange(updatedValue);
      }
    } else {
      // if empty create an object with one item
      onChange({ [id]: items[id] });
    }
  };

  return (
    <SDropdownWrapper gridArea={gridArea} ref={dropdownRef}>
      <MultipleOptionInput
        {...props}
        value={value}
        readOnly
        type={"text"}
        onClick={toggleOpen}
        handleSelect={handleSelect}
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
              Object.keys(items).map((id) => {
                const itemValue = items[id];
                // check if the item with the id is already in the value
                const checked = value?.hasOwnProperty(id);
                return (
                  <SMultipleDropdownItem key={id}>
                    <SCheckbox
                      type="checkbox"
                      onChange={() => handleSelect(id)}
                      filled={checked}
                    />
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
