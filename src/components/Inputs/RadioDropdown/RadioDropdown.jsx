import React, { useRef } from "react";
import { Input } from "../Input";
import {
  SArrowButton,
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
import { useAutoClose } from "../../../hooks/useAutoClose";
import { AnimatePresence } from "framer-motion";
import { useController } from "react-hook-form";

export const RadioDropdown = (props) => {
  const {
    name,
    gridArea,
    items,
    control,
    inputPlaceholder,
    updateCustomInput,
    width
  } = props;

  const {
    field: { value, onChange, onBlur },
  } = useController({ name, control });

  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useAutoClose(dropdownRef, false, onBlur);

  const customInputId = Object.entries(items).length + 1;

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (id) => {
    toggleOpen();
    onChange(id);
  };

  return (
    <SDropdownWrapper gridArea={gridArea} ref={dropdownRef} width={width}>
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
                {Object.entries(items).map(([id, textValue], index, arr) => {
                  const isLastItem = index === arr.length - 1;
                  return isLastItem ? (
                    <SRadioDropdownItem key={customInputId}>
                      <SRadioInput
                        name={name}
                        type="radio"
                        onClick={() => handleSelect(customInputId)}
                        defaultChecked={value === customInputId}
                      />
                      <SCustomInput
                        name={"customInput"}
                        onChange={(e) => updateCustomInput(e.target.value)}
                        placeholder={inputPlaceholder}
                        value={arr[index][1]}
                      />
                    </SRadioDropdownItem>
                  ) : (
                    <SRadioDropdownItem
                      key={id}
                      onClick={() => handleSelect(id)}
                    >
                      <SRadioInput
                        name={name}
                        type="radio"
                        onClick={() => handleSelect(id)}
                        defaultChecked={value === id}
                      />
                      <SRadioDropdownText>{textValue}</SRadioDropdownText>
                    </SRadioDropdownItem>
                  );
                })}
              </>
            )}
          </SDropdownList>
        )}
      </AnimatePresence>
    </SDropdownWrapper>
  );
};
