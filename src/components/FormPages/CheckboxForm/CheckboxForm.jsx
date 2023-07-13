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

export const CheckboxForm = () => {
  const [answers, setAnswers] = useState([
    { id: "1", content: "" },
    { id: "2", content: "" },
    { id: "3", content: "" },
  ]);
  const [questionTypeId, setQuestionTypeId] = useState(1);  // Temporary code 

  const deleteAnswer = (id) => {
    const newAnswers = [...answers].filter((answer) => answer.id !== id);
    setAnswers(newAnswers);
  }; // Temporary code 

  const addAnswer = () => {
    const ids = answers.map(obj => obj.id);
    const largestId = Math.max(...ids) | 0;
    setAnswers((prevAnswers) => [...prevAnswers, { id: `${largestId+1}`, content: "" }]);
  };

  return (
    <SFormContainer>
      <FormHeader
        questionTypeId={questionTypeId}
        setQuestionTypeId={setQuestionTypeId}
      />
      <SFormBodyDiv>
        <h3>პასუხები:</h3>
        <DraggableAnswersContainer
          type={items[questionTypeId]}
          answers={answers}
          setAnswers={setAnswers}
          deleteAnswer={deleteAnswer}
        />
        <Button
          width="13.5rem"
          height="3rem"
          fontSize=".875rem"
          LeftComponent={<SPlusIcon src={plusSvg} alt="" />}
          onClick={addAnswer}
        >
          პასუხის დამატება
        </Button>
      </SFormBodyDiv>
    </SFormContainer>
  )
}
