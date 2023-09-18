import React from "react";
import {
  SContainer,
  SLabel,
  SInputWrapper,
  SInput,
  SError,
} from "./Input.styled";

export const Input = ({
  type,
  label,
  name,
  placeholder,
  value,
  width,
  height,
  fontSize,
  fontWeight,
  gridArea,
  readOnly,
  onClick,
  register,
  validation,
  errors,
  onChange,
  LeftComponent,
  RightComponent,
}) => {
  const errorMessage = errors && errors[name]?.message;
  return (
    <SContainer width={width} gridArea={gridArea} onClick={onClick}>
      <SLabel htmlFor={name}>{label}</SLabel>
      <SInputWrapper height={height}>
        {LeftComponent}
        <SInput
          id={name}
          type={type}
          placeholder={placeholder}
          width={width} // unused prop
          fontSize={fontSize}
          fontWeight={fontWeight}
          readOnly={readOnly}
          {...(register
            ? register(name, { ...validation, onChange })
            : { value: value || "" })}
        />
        {RightComponent}
      </SInputWrapper>
      {errorMessage && (
        <SError
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {errorMessage}
        </SError>
      )}
    </SContainer>
  );
};
