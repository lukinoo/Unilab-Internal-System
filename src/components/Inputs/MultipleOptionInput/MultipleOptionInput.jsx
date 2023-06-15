import React from "react";
import {
  SContainer,
  SLabel,
  SInputWrapper,
  SError,
} from "../Input/Input.styled";
import {
  SMultipleOptionDiv,
  SNameSpan,
} from "./MultipleOptionInput.styled";
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
  register,
  validation,
  errors,
  onChange,
  LeftComponent,
  RightComponent,
}) => {
  const errorMessage = errors && errors[name]?.message;
  console.log("value", value);
  const arrayOfValues = value && value.split(",");
  return (
    <SContainer
      width={width}
      gridArea={gridArea}
      onClick={onClick}
    >
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
          {(Array.isArray(arrayOfValues) && arrayOfValues.length>0) &&
            arrayOfValues.map((item) => (
              <SNameSpan>
                <span>{item}</span>
                <img src={xCross} alt="r" />
              </SNameSpan>
            ))}
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
