import React from "react";
import { SButton, SContentWrapper } from "./Button.styled";

export const Button = ({
  type,
  secondary,
  width,
  height,
  margin,
  fontSize,
  fontWeight,
  LeftComponent,
  RightComponent,
  children,
  onClick,
}) => {
  return (
    <SButton
      width={width}
      height={height}
      margin={margin}
      fontSize={fontSize}
      fontWeight={fontWeight}
      type={type}
      secondary={secondary}
      onClick={onClick}
    >
      <SContentWrapper>
        {LeftComponent}
        {children}
        {RightComponent}
      </SContentWrapper>
    </SButton>
  );
};
