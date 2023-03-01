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
  fontSize,
  register,
  watch,
}) => {
  const isChecked = watch(name);

  return (
    <SContainer>
      <SInputWrapper>
        <SInput
          id={name}
          type="checkbox"
          variants={checkboxVariants}
          initial={"transparent"}
          animate={isChecked && filled ? "filled" : "transparent"}
          filled={filled}
          {...register(name)}
        />
        <SCheckWrapper>
          <Check isChecked={isChecked} stroke={stroke ?? "#fff"} />
        </SCheckWrapper>
      </SInputWrapper>
      <SLabel htmlFor={name} filled={filled} fontSize={fontSize}>
        {label}
      </SLabel>
    </SContainer>
  );
};
