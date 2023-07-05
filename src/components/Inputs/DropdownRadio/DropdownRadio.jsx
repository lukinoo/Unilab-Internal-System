import { useState, useRef } from "react";
import { useAutoClose } from "../../../hooks/useAutoClose";
import {
  SDropdownList,
  SDropdownItem,
  SDropdownWrapper,
  SInput,
  SCustomInput,
  SLabel,
  SInputWrapper,
} from "./SDropdownRadio.styled";
import { Input } from "../Input";
import { SArrowButton } from "../Dropdown/Dropdown.styled";
import { DropArrow } from "../../DropArrow";
import { dropdownVariants } from "./DropdownRadio.variants";
import { useForm } from "react-hook-form";
import { AnimatePresence } from "framer-motion";
import { useController } from "react-hook-form";

export const DropdownRadio = ({ name, control }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [customValue, setCustomValue] = useState("");

  const {
    field: { value, onChange, onBlur },
  } = useController({ name, control });

  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useAutoClose(dropdownRef, false, onBlur);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionChange = (event) => {
    const optionValue = event.target.value;
    setSelectedOption(optionValue);
    onChange(optionValue);

    setIsOpen(false); // Hide the <ul> element
    setCustomValue("");
  };

  const handleCustomValueChange = (event) => {
    const value = event.target.value;
    setSelectedOption(value); // Set the selected option to the custom value
    setCustomValue(value);
  };

  return (
    <SDropdownWrapper ref={dropdownRef}>
      <SInputWrapper>
        <Input
          value={selectedOption}
          placeholder="ჩაწერეთ პოზიცია"
          label="პოზიცია"
          type={"text"}
          readOnly
          onClick={toggleOpen}
          RightComponent={
            <SArrowButton type="button" title="toggle dropdown">
              <DropArrow isOpen={isOpen} />
            </SArrowButton>
          }
        />
      </SInputWrapper>
      <AnimatePresence>
        {isOpen && (
          <SDropdownList
            variants={dropdownVariants}
            initial={"hidden"}
            animate={"visible"}
            exit={"hidden"}
            transition={{ duration: 0.4, type: "spring" }}
          >
            <SDropdownItem onChange={handleOptionChange}>
              <SInput
                type="radio"
                id="option1"
                name="options"
                value="UI/UX დიზაინერი"
                defaultChecked={selectedOption === "UI/UX დიზაინერი"}
              />
              <SLabel htmlFor="option1">UI/UX დიზაინერი</SLabel>
            </SDropdownItem>
            <SDropdownItem onChange={handleOptionChange}>
              <SInput
                type="radio"
                id="option2"
                name="options"
                value="Front End დეველოპერი"
                defaultChecked={selectedOption === "Front End დეველოპერი"}
              />
              <SLabel htmlFor="option2">Front End დეველოპერი</SLabel>
            </SDropdownItem>
            <SDropdownItem onChange={handleOptionChange}>
              <SInput
                type="radio"
                id="option3"
                name="options"
                value="პროექტის მენეჯერი"
                defaultChecked={selectedOption === "პროექტის მენეჯერი"}
              />
              <SLabel htmlFor="option3">პროექტის მენეჯერი</SLabel>
            </SDropdownItem>
            <SDropdownItem>
              <SInput
                type="radio"
                id="custom"
                name="options"
                value={customValue}
                defaultChecked={!selectedOption && !!customValue}
                onChange={handleOptionChange}
              />
              <SCustomInput
                type="text"
                id="customValue"
                value={customValue}
                onChange={handleCustomValueChange}
                placeholder="მიუთითეთ სხვა პოზიცია"
              />
            </SDropdownItem>
          </SDropdownList>
        )}
      </AnimatePresence>
    </SDropdownWrapper>
  );
};
