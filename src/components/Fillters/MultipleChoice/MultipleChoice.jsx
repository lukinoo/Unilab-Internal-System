import React from "react";
import { Checkbox } from "../../Inputs/Checkbox";
import { SMultipleChoice } from "./MultipleChoice.module";

export const MultipleChoice = ({ id, values, getFilter, updateFilter }) => {
  const selectedValues = getFilter(id) ?? [];
  return (
    <SMultipleChoice>
      {values.map((value) => {
        const isChecked = selectedValues.includes(value);
        return (
          <li key={value}>
            <Checkbox
              id={value}
              label={value}
              filled
              isChecked={isChecked}
              fontSize={"0.875rem"}
              fontColor={"#dedede"}
              onChange={() => {
                if (isChecked) {
                  selectedValues.splice(
                    selectedValues.findIndex(
                      (selectedValue) => selectedValue === value
                    ),
                    1
                  );
                } else {
                  selectedValues.push(value);
                }
                updateFilter(id, selectedValues);
              }}
            />
          </li>
        );
      })}
    </SMultipleChoice>
  );
};
