import { useState } from "react";
import { FormHeader } from "../FormHeader/FormHeader";
import { DraggableAnswersContainer } from "../../DraggableAnswersContainer";
import { SFormContainer } from "../CheckboxForm/CheckboxForm.styled";
import { SPlusIcon } from "../../../views/AddQuestions/AddQuestions.styled";
import plusSvg from "/assets/svg/plus.svg";
import { Button } from "../../Button/Button";
import { SFormBodyDiv } from "./MultipleChoiceForm.styled";
import { getKeyByValue } from "../../../utils/getKeyByValue";

export const MultipleChoiceForm = ({
  item,
  formIndex,
  changeAnswersArray,
  addAnswer,
  deleteAnswer,
  handleQuestionChange,
  handleRemoveForm,
  handleMarkAnswer,
  handleFormTypeChange,
  indexedFormTypes,
  handleDescriptionChange,
  handleCopyForm
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

  const changeQuestion = (value) => {
    handleQuestionChange(formIndex, value);
  };

  const setFormType = (newFormTypeId) =>{
    handleFormTypeChange(formIndex, newFormTypeId);
  }
  const changeDescription = (newDescription)=>{
    handleDescriptionChange(formIndex, newDescription);
  }

  return (
    <SFormContainer>
      <FormHeader
        indexedFormTypes={indexedFormTypes}
        setFormType={setFormType}
        changeQuestion={changeQuestion}
        handleRemoveForm={handleRemoveForm}
        formTypeIndex={getKeyByValue(indexedFormTypes, item.type)}
        changeDescription={changeDescription}
        handleCopyForm={handleCopyForm}
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
