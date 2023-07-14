import React, { useState } from "react";
import { FormHeader } from "../FormHeader/FormHeader";
import { RangeLabelInput } from "../../Inputs/RangeLabelInput";
import { QuestionTypeDropdown } from "../../Inputs/QuestionTypeDropdown";
import { SFormHeaderContainer } from "../FormHeader/FormHeader.styled";
import {
  SRangeInputLabel,
  SRangeLabelInputsContainer,
  SRatingScaleFormContainer,
} from "./RatingScaleForm.styled";
import { RangeInput } from "../../Inputs/RangeInput/RangeInput";

const rangeValues = [ 3, 4, 5, 6, 7, 8, 9];

export const RatingScaleForm = ({name}) => {
  
  const [firstRangeLabel, setFirstRangeLabel] = useState("");
  const [secondRangeLabel, setSecondRangeLabel] = useState("");
  const [rangeValue, setRangeValue] = useState(0);

  return (
    <SRatingScaleFormContainer>
      <FormHeader />
      <QuestionTypeDropdown
        action={setRangeValue}
        value={rangeValue}
        items={rangeValues}
        listWidth="100%"
        labelText="Range"
      />
      <SRangeLabelInputsContainer>
        <RangeLabelInput
          displayLabel
          number={1}
          action={setFirstRangeLabel}
        />
        <RangeLabelInput action={setSecondRangeLabel} number={rangeValues[rangeValue]} />
      </SRangeLabelInputsContainer>
      <SRangeInputLabel>პასუხები</SRangeInputLabel>
      <RangeInput
        rangeValue={rangeValues[rangeValue]}
        name={name}
        firstRangeLabel={firstRangeLabel}
        secondRangeLabel={secondRangeLabel}
      />
    </SRatingScaleFormContainer>
  );
};
