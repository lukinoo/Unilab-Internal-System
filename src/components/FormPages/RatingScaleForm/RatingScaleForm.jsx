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
  handleRatingValueChange,
  handleMaxRatingValueChange
}) => {
  const [firstRangeLabel, setFirstRangeLabel] = useState("");
  const [secondRangeLabel, setSecondRangeLabel] = useState("");
  
  const maxValue = item.answers[0].maxValue;
  console.log("MAX VALUE:", maxValue);


  const setFormType = (newFormTypeId) => {
    handleFormTypeChange(formIndex, newFormTypeId);
  };

  const changeDescription = (newDescription)=>{
    handleDescriptionChange(formIndex, newDescription);
  }

  const changeQuestion = (value) => {
    handleQuestionChange(formIndex, value);
  };

  const markAnswer = (value) =>{
    handleRatingValueChange(formIndex, value);
  }

  const setMaxValue = (id) => {
    console.log(rangeValues, rangeValues[id]);
    const newMaxValue = rangeValues[id];
    handleMaxRatingValueChange(formIndex, newMaxValue);
  }

  return (
    <SRatingScaleFormContainer>
      <FormHeader
        indexedFormTypes={indexedFormTypes}
        handleRemoveForm={handleRemoveForm}
        setFormType={setFormType}
        formTypeIndex={getKeyByValue(indexedFormTypes, item.type)}
        changeDescription={changeDescription}
        changeQuestion={changeQuestion}
      />
      <QuestionTypeDropdown
        action={setMaxValue}
        value={rangeValues.indexOf(maxValue)}
        items={rangeValues}
        listWidth="100%"
        labelText="Range"
      />
      <SRangeLabelInputsContainer>
        <RangeLabelInput displayLabel number={1} action={setFirstRangeLabel} />
        <RangeLabelInput
          action={setSecondRangeLabel}
          number={maxValue}
        />
      </SRangeLabelInputsContainer>
      <SRangeInputLabel>პასუხები</SRangeInputLabel>
      <RangeInput
        markAnswer={markAnswer}
        rangeValue={maxValue}
        firstRangeLabel={firstRangeLabel}
        secondRangeLabel={secondRangeLabel}
      />
    </SRatingScaleFormContainer>
  );
};
