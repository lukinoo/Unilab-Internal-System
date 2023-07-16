import { useState } from "react";
import { FormHeader } from "../FormHeader/FormHeader"
import { DraggableAnswersContainer } from "../../DraggableAnswersContainer";
import { SFormContainer } from "./CheckboxForm.styled";
import { Button } from "../../Button/Button";
import plusSvg from "/assets/svg/plus.svg";
import { SFormBodyDiv } from "../MultipleChoiceForm/MultipleChoiceForm.styled";
import { SPlusIcon } from "../../../views/AddQuestions/AddQuestions.styled";

const items = {
  1: "Checkbox",
  2: "Multiple Choice",
  3: "Textbox",
  4: "Rating Scale",
};

export const CheckboxForm = ({
  item,
  formIndex,
  changeAnswersArray,
  addAnswer,
  deleteAnswer,
  changeQuestion,
  handleRemoveForm
}) => {
  const answers = item.answers
  const [questionTypeId, setQuestionTypeId] = useState(1);  // Temporary code 

  const handleAddAnswer = () => {
    const ids = answers.map((obj) => obj.id);
    const largestId = Math.max(...ids) | 0;
    addAnswer(formIndex, {
      id: `${largestId + 1}`,
      content: "",
      isCorrect: false,
      type: items[questionTypeId],
    });
  };

  const handleQuestionChange = (value) => {
    changeQuestion(formIndex, value);
  };

  return (
    <SFormContainer>
      <FormHeader
        questionTypeId={questionTypeId}
        setQuestionTypeId={setQuestionTypeId}
        handleQuestionChange={handleQuestionChange}
        handleRemoveForm={handleRemoveForm}
      />
      <SFormBodyDiv>
        <h3>პასუხები:</h3>
        <DraggableAnswersContainer
          type={items[questionTypeId]}
          answers={answers}
          deleteAnswer={deleteAnswer}
          changeAnswersArray={changeAnswersArray}
          formIndex={formIndex}
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
  )
}
