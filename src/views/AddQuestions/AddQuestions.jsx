import { useState } from "react";
import { QuestionTypeDropdown } from "../../components/Inputs/QuestionTypeDropdown";

const questionTypes = {
  1: 'Checkbox',
  2: 'Multiple Choice',
  3: 'Textbox',
  4: 'Rating Scale'
}

export const AddQuestions = () =>{

  const [questionTypeId, setQuestionTypeId] = useState(1);


  return (
    <>
      <h1>Add Questions Page</h1>
      <QuestionTypeDropdown 
        setQuestionTypeId={setQuestionTypeId}
        value={questionTypeId}
        items={questionTypes}
      />
    </>
  );
}