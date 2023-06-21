import React from "react";
import { SLeftArrowButton, SRightArrowButton } from "./CustomArrows.styled";

export const CustomPrevArrow = (props) => {
  const { onClick } = props;

  return (
    <SLeftArrowButton onClick={onClick}>
      <img src="/assets/svg/leftArrow.svg" alt="" />
    </SLeftArrowButton>
  );
};

export const CustomNextArrow = (props) => {
  const { onClick } = props;

  return (
    <SRightArrowButton onClick={onClick}>
      <img src="/assets/svg/rightArrow.svg" alt="" />
    </SRightArrowButton>
  );
};