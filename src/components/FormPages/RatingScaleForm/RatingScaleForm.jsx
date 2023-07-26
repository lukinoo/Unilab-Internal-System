import React from "react";
import { FormHeader } from "../FormHeader/FormHeader";
import { RangeLabelInput } from "../../Inputs/RangeLabelInput";
import { QuestionTypeDropdown } from "../../Inputs/QuestionTypeDropdown";
import {
  SRangeInputLabel,
  SRangeLabelInputsContainer,
  SRatingScaleFormContainer,
} from "./RatingScaleForm.styled";
import { RangeInput } from "../../Inputs/RangeInput/RangeInput";
import { getKeyByValue } from "../../../utils/getKeyByValue";

const rangeValues = [3, 4, 5, 6, 7, 8, 9];

export const RatingScaleForm = ({
  item,
  formIndex,
  handleRemoveForm,
  indexedFormTypes,
  handleFormTypeChange,
  handleQuestionChange,
  handleDescriptionChange,
  handleMaxRatingValueChange,
  handleVerbalChange,
  handleCopyForm,
}) => {
  const firstRangeLabel = item.answers[0].minValueVerbal;
  const secondRangeLabel = item.answers[0].maxValueVerbal;

  const maxValue = item.answers[0].maxValue;

  const changeLabelValue = (value, number) => {
    handleVerbalChange(formIndex, value, number);
  };

  const setMaxValue = (index) => {
    const newMaxValue = rangeValues[index];
    handleMaxRatingValueChange(formIndex, newMaxValue);
  };

  return (
    <SRatingScaleFormContainer>
      <FormHeader
        formIndex={formIndex}
        indexedFormTypes={indexedFormTypes}
        handleFormTypeChange={handleFormTypeChange}
        handleQuestionChange={handleQuestionChange}
        handleDescriptionChange={handleDescriptionChange}
        handleRemoveForm={handleRemoveForm}
        formTypeIndex={getKeyByValue(indexedFormTypes, item.type)}
        handleCopyForm={handleCopyForm}
      />
      <QuestionTypeDropdown
        action={setMaxValue}
        value={rangeValues.indexOf(maxValue)}
        items={rangeValues}
        listWidth="100%"
        labelText="Range"
      />
      <SRangeLabelInputsContainer>
        <RangeLabelInput displayLabel number={1} action={changeLabelValue} />
        <RangeLabelInput action={changeLabelValue} number={maxValue} />
      </SRangeLabelInputsContainer>
      <SRangeInputLabel>პასუხები</SRangeInputLabel>
      <RangeInput
        rangeValue={maxValue}
        firstRangeLabel={firstRangeLabel}
        secondRangeLabel={secondRangeLabel}
      />
    </SRatingScaleFormContainer>
  );
};
