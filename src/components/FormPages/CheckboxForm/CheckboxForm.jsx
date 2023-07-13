import { useState } from "react";
import { FormHeader } from "../FormHeader/FormHeader"
import { DraggableAnswersContainer } from "../../DraggableAnswersContainer";
import { SFormContainer } from "./CheckboxForm.styled";

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
  const [questionTypeId, setQuestionTypeId] = useState(1);

  const deleteAnswer = (id) => {
    const newAnswers = [...answers].filter((answer) => answer.id !== id);
    setAnswers(newAnswers);
  };

  return (
    <SFormContainer>
      <FormHeader questionTypeId={questionTypeId} setQuestionTypeId={setQuestionTypeId}/>
      <DraggableAnswersContainer 
        type={items[questionTypeId]}
        answers={answers}
        setAnswers={setAnswers}
        deleteAnswer={deleteAnswer}
      />
    </SFormContainer>
  )
}
