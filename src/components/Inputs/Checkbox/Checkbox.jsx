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
  register,
  validation,
  watch
}) => {
  const isChecked = watch(name)

  return (
    <SContainer>
      <SInputWrapper>
        <SInput
          id={id}
          type="checkbox"
          variants={checkboxVariants}
          initial={"transparent"}
          animate={isChecked && filled ? "filled" : "transparent"}
          filled={filled}
          {...register(name, validation)}
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
