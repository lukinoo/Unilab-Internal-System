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
  label,
  stroke,
  name,
  filled,
  value,
  fontSize,
  register,
  watch,
}) => {
  const currentValue = watch(name);
  const isChecked = Array.isArray(currentValue)
    ? watch(name)?.find((curVal) => curVal === value)
    : currentValue;

  return (
    <SContainer>
      <SInputWrapper>
        <SInput
          id={value || name}
          type="checkbox"
          variants={checkboxVariants}
          initial={"transparent"}
          value={value}
          animate={isChecked && filled ? "filled" : "transparent"}
          filled={filled}
          {...register(name)}
        />
        <SCheckWrapper>
          <Check isChecked={isChecked} stroke={stroke ?? "#fff"} />
        </SCheckWrapper>
      </SInputWrapper>
      <SLabel htmlFor={value || name} filled={filled} fontSize={fontSize}>
        {label}
      </SLabel>
    </SContainer>
  );
};
