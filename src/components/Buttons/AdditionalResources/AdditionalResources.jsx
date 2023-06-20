import React from "react";
import { ChevronDownSvg } from "./IconSvg/ChevronDownSvg";
import { SIcon } from "./AdditionaResources.styled";

export const AdditionalResources = ({ title }) => {
  return (
    <>
      <span>{title}</span>
      <SIcon>
        <ChevronDownSvg />
      </SIcon>
    </>
  );
};
