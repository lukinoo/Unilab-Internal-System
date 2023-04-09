import React from "react";
import { Checkbox } from "../../Inputs/Checkbox";
import { SMultipleChoice } from "./MultipleChoice.module";

export const MultipleChoice = ({
  id,
  values,
  watch,
  register,
}) => {
  return (
    <SMultipleChoice>
      {values.map((value) => {
        return (
          <li key={value}>
            <Checkbox
              value={value}
              label={value}
              name={id}
              filled
              fontSize={"0.875rem"}
              fontColor={"#dedede"}
              register={register}
              watch={watch}
            />
          </li>
        );
      })}
    </SMultipleChoice>
  );
};
