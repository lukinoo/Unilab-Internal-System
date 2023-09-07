import React, { useRef } from "react";
import { Input } from "../Input";
import {
  SArrowButton,
  SDropdownButton,
  SDropdownItem,
  SDropdownList,
  SDropdownWrapper,
} from "../Dropdown/Dropdown.styled";
import {
  SCustomInput,
  SRadioDropdownItem,
  SRadioInput,
  SRadioDropdownText,
} from "./RadioDropdown.styled";
import { DropArrow } from "../../DropArrow";
import { dropdownVariants } from "./RadioDropdown.variants";
import { getLongestString } from "../../../utils/dropdown";
import { useAutoClose } from "../../../hooks/useAutoClose";
import { AnimatePresence } from "framer-motion";
import { useController } from "react-hook-form";

export const RadioDropdown = (props) => {
  const { name, gridArea, items, control, inputPlaceholder } = props;

  const {
    field: { value, onChange, onBlur },
  } = useController({ name, control });

  console.log("value:", value, "ITEMS:", items);
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useAutoClose(dropdownRef, false, onBlur);

  const longestItem = items && getLongestString(Object.values(items));

  const customInputId = Object.entries(items).length + 1;

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (id) => {
    toggleOpen();
    onChange(id);
  };

  return (
    <SDropdownWrapper gridArea={gridArea} ref={dropdownRef}>
      <Input
        {...props}
        value={items && items[value]}
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
          <SDropdownList
            variants={dropdownVariants}
            initial={"hidden"}
            animate={"visible"}
            exit={"hidden"}
            transition={{ duration: 0.4, type: "spring" }}
          >
            {!items ? (
              <span>--- no items ---</span>
            ) : (
              <>
                {Object.entries(items).map(([id, textValue]) => {
                  return (
                    <SRadioDropdownItem
                      key={id}
                      onClick={() => handleSelect(id)}
                    >
                      <SRadioInput
                        type="radio"
                        onClick={() => handleSelect(id)}
                        checked={value === id}
                      />
                      <SRadioDropdownText>{textValue}</SRadioDropdownText>
                    </SRadioDropdownItem>
                  );
                })}
                <SRadioDropdownItem key={customInputId}>
                  <SRadioInput
                    type="radio"
                    onClick={() => handleSelect(customInputId)}
                    checked={value === customInputId}
                  />
                  <SCustomInput
                    name={"customInput"}
                    onChange={(e) => console.log(e.target.value)}
                    placeholder={inputPlaceholder}
                  />
                </SRadioDropdownItem>
              </>
            )}
          </SDropdownList>
        )}
      </AnimatePresence>
    </SDropdownWrapper>
  );
};
