import React from "react";
import {
  SContainer,
  SLabel,
  SInputWrapper,
  SInput,
  SError,
} from "./Input.styled";

export const Input = ({
  id,
  type,
  label,
  name,
  placeholder,
  width,
  fontSize,
  fontWeight,
  gridArea,
  readOnly,
  onClick,
  register,
  validation,
  errors,
  LeftComponent,
  RightComponent,
}) => {
  const errorMessage = errors[name]?.message;

  return (
    <SContainer width={width} gridArea={gridArea} onClick={onClick}>
      <SLabel htmlFor={id}>{label}</SLabel>
      <SInputWrapper>
        {LeftComponent}
        <SInput
          id={id}
          type={type}
          placeholder={placeholder}
          width={width}
          fontSize={fontSize}
          fontWeight={fontWeight}
          readOnly={readOnly}
          {...register(name, validation)}
        />
        {RightComponent}
      </SInputWrapper>
      {errorMessage && <SError>{errorMessage}</SError>}
    </SContainer>
  );
};
