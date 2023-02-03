import React from "react";
import {
  SCheckWrapper,
  SContainer,
  SInput,
  SInputWrapper,
  SLabel,
} from "./Checkbox.styled";
import { Check } from "./Check";
import { checkboxVariants } from "./Checkbox.variants";

export const Checkbox = ({
  id,
  label,
  stroke,
  name,
  filled,
  fontSize,
  isChecked,
  onChange,
}) => {
  return (
    <SContainer>
      <SInputWrapper>
        <SInput
          id={id}
          name={name}
          type="checkbox"
          checked={isChecked}
          onChange={onChange}
          variants={checkboxVariants}
          initial={"transparent"}
          animate={isChecked && filled ? "filled" : "transparent"}
          filled={filled}
        />
        <SCheckWrapper>
          <Check isChecked={isChecked} stroke={stroke ?? "#fff"} />
        </SCheckWrapper>
      </SInputWrapper>
      <SLabel htmlFor={id} filled={filled} fontSize={fontSize}>
        {label}
      </SLabel>
    </SContainer>
  );
};
