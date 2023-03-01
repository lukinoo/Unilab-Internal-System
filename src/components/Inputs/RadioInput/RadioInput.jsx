import React from "react";
import {
  SCheckWrapper,
  SContainer,
  SInput,
  SInputWrapper,
  SLabel,
} from "./RadioInput.styled";
import { CircleCheck } from "./CircleCheck";

export const RadioInput = ({ label, name, value, register, watch }) => {
  const isChecked = watch(name) === value;
  const id = `${name}-${value}`;

  return (
    <SContainer>
      <SInputWrapper>
        <SInput id={id} type="radio" value={value} {...register(name)} />
        <SCheckWrapper>
          <CircleCheck isChecked={isChecked} />
        </SCheckWrapper>
      </SInputWrapper>
      <SLabel htmlFor={id}>{label}</SLabel>
    </SContainer>
  );
};
