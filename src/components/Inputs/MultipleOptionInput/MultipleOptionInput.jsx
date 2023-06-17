import React from "react";
import {
  SContainer,
  SLabel,
  SInputWrapper,
  SError,
} from "../Input/Input.styled";
import { SMultipleOptionDiv, SNameSpan } from "./MultipleOptionInput.styled";
import xCross from "/assets/svg/xCross.svg";

export const MultipleOptionInput = ({
  type,
  label,
  name,
  placeholder,
  value,
  width,
  fontSize,
  fontWeight,
  gridArea,
  readOnly,
  onClick,
  handleSelect,
  register,
  validation,
  errors,
  onChange,
  LeftComponent,
  RightComponent,
}) => {
  const errorMessage = errors && errors[name]?.message;
  const valueObject = value ?? {};

  const renderObjectElements = (obj) => {
    return Object.entries(obj).map(([key, value]) => {
      return (
        <SNameSpan key={key}>
          <span>{value}</span>
          <img
            src={xCross}
            alt="r"
            onClick={() => handleSelect(key)}
          />
        </SNameSpan>
      );
    });
  };

  return (
    <SContainer width={width} gridArea={gridArea} onClick={onClick}>
      <SLabel htmlFor={name}>{label}</SLabel>
      <SInputWrapper>
        {LeftComponent}
        <SMultipleOptionDiv
          id={name}
          type={type}
          placeholder={placeholder}
          width={width}
          fontSize={fontSize}
          fontWeight={fontWeight}
          readOnly={readOnly}
          {...(register
            ? register(name, { ...validation, onChange })
            : { value: value || "" })}
        >
          {renderObjectElements(valueObject)}
        </SMultipleOptionDiv>
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
