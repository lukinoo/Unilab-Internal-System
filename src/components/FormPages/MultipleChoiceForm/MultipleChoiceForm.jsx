import { useState } from "react";
import { FormHeader } from "../FormHeader/FormHeader";
import { DraggableAnswersContainer } from "../../DraggableAnswersContainer";
import { SFormContainer } from "../CheckboxForm/CheckboxForm.styled";
import { SPlusIcon } from "../../../views/AddQuestions/AddQuestions.styled";
import plusSvg from "/assets/svg/plus.svg";
import { Button } from "../../Button/Button";
import { SFormBodyDiv } from "./MultipleChoiceForm.styled";

const items = {
  1: "Checkbox",
  2: "Multiple Choice",
  3: "Textbox",
  4: "Rating Scale",
};

export const MultipleChoiceForm = ({
  item,
  formIndex,
  changeAnswersArray,
  addAnswer,
  deleteAnswer,
  changeQuestion,
  handleRemoveForm,
  handleMarkAnswer,
  handleFormTypeChange,
  indexedFormTypes,
}) => {
  const answers = item.answers;

  const handleAddAnswer = () => {
    const ids = answers.map((obj) => obj.id);
    const largestId = Math.max(...ids) | 0;
    addAnswer(formIndex, {
      id: `${largestId + 1}`,
      content: "",
      isCorrect: false,
      type: item.type,
    });
  };

  const handleQuestionChange = (value) => {
    changeQuestion(formIndex, value);
  };

  const setFormType = (newFormTypeId) =>{
    handleFormTypeChange(formIndex, newFormTypeId);
  }

  return (
    <SFormContainer>
      <FormHeader
        indexedFormTypes={indexedFormTypes}
        setFormType={setFormType}
        handleQuestionChange={handleQuestionChange}
        handleRemoveForm={handleRemoveForm}
      />
      <SFormBodyDiv>
        <h3>პასუხები:</h3>
        <DraggableAnswersContainer
          type={indexedFormTypes[2]} // temporary code
          answers={answers}
          deleteAnswer={deleteAnswer}
          changeAnswersArray={changeAnswersArray}
          formIndex={formIndex}
          handleMarkAnswer={handleMarkAnswer}
        />
        <Button
          width="13.5rem"
          height="3rem"
          fontSize=".875rem"
          LeftComponent={<SPlusIcon src={plusSvg} alt="" />}
          onClick={handleAddAnswer}
        >
          პასუხის დამატება
        </Button>
      </SFormBodyDiv>
    </SFormContainer>
  );
};
