import React, { useState } from "react";
import { FormHeader } from "../FormHeader/FormHeader";
import { RangeLabelInput } from "../../Inputs/RangeLabelInput";
import { QuestionTypeDropdown } from "../../Inputs/QuestionTypeDropdown";
import {
  SRangeInputLabel,
  SRangeLabelInputsContainer,
  SRatingScaleFormContainer,
} from "./RatingScaleForm.styled";
import { RangeInput } from "../../Inputs/RangeInput/RangeInput";
import { getKeyByValue} from "../../../utils/getKeyByValue";

const rangeValues = [3, 4, 5, 6, 7, 8, 9];

export const RatingScaleForm = ({
  item,
  name,
  formIndex,
  handleRemoveForm,
  indexedFormTypes,
  handleFormTypeChange,
}) => {

  const [firstRangeLabel, setFirstRangeLabel] = useState("");
  const [secondRangeLabel, setSecondRangeLabel] = useState("");
  const [rangeValue, setRangeValue] = useState(0);

  const setFormType = (newFormTypeId) => {
    handleFormTypeChange(formIndex, newFormTypeId);
  };

  return (
    <SRatingScaleFormContainer>
      <FormHeader
        indexedFormTypes={indexedFormTypes}
        handleRemoveForm={handleRemoveForm}
        setFormType={setFormType}
        formTypeIndex={getKeyByValue(indexedFormTypes, item.type)}
      />
      <QuestionTypeDropdown
        action={setRangeValue}
        value={rangeValue}
        items={rangeValues}
        listWidth="100%"
        labelText="Range"
      />
      <SRangeLabelInputsContainer>
        <RangeLabelInput displayLabel number={1} action={setFirstRangeLabel} />
        <RangeLabelInput
          action={setSecondRangeLabel}
          number={rangeValues[rangeValue]}
        />
      </SRangeLabelInputsContainer>
      <SRangeInputLabel>პასუხები</SRangeInputLabel>
      <RangeInput
        rangeValue={rangeValues[rangeValue]}
        name={"RangeInput"} // test code
        firstRangeLabel={firstRangeLabel}
        secondRangeLabel={secondRangeLabel}
      />
    </SRatingScaleFormContainer>
  );
};
