import { QuestionInput } from "../../components/Inputs/QuestionInput";
import { useState } from "react";
import { QuestionTypeDropdown } from "../../components/Inputs/QuestionTypeDropdown";
import { AnswersContainer } from "../../components/AnswersContainer";

const items = {
  1: "Checkbox",
  2: "Multiple Choice",
  3: "Textbox",
  4: "Rating Scale",
};

export const AddQuestions = () =>{
  const [questionTypeId, setQuestionTypeId] = useState(1);
  
  const [answers, setAnswers] = useState([
    { id: "1", content: "" },
    { id: "2", content: "" },
    { id: "3", content: "" },
  ]);
  
  
  return (
    <>
      <h1>Add Questions Page</h1>
      <QuestionInput />
      <QuestionTypeDropdown 
        setQuestionTypeId={setQuestionTypeId}
        value={questionTypeId}
        items={items}
      />
      <AnswersContainer 
        answers={answers}
        setAnswers={setAnswers}
        type={items[questionTypeId]}
      />
    </>
  );
}