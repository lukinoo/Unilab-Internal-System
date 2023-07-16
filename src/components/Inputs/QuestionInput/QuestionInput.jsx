import React from "react";
import {
  SQuestionInput,
  SQuestionInputContainer,
  SQuestionLabel,
} from "./QuestionInput.styled";
import { useState } from "react";

export const QuestionInput = ({
  type,
  fontSize,
  children,
  height,
  width,
  margin,
  color,
  fontFamily,
  fontWeight,
  top,
  left,
  position,
  backgroundColor,
  handleQuestionChange,
}) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <SQuestionInputContainer width={width} margin={margin} height={height}>
      <SQuestionLabel
        color={isFocused ? "#6C95FF" : color}
        fontFamily={fontFamily}
        fontWeight={fontWeight}
        top={top}
        left={left}
        width={width}
        height={height}
        position={position}
        fontSize={fontSize}
        backgroundColor={backgroundColor}
      >
        კითხვა
      </SQuestionLabel>

      <SQuestionInput
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        type={type}
        fontSize={fontSize}
        onChange={(e)=>handleQuestionChange(e.target.value)}
      />
    </SQuestionInputContainer>
  );
};
