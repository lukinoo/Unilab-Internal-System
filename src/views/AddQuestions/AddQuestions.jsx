import { QuestionInput } from "../../components/Inputs/QuestionInput";
import { useState } from "react";
import { QuestionTypeDropdown } from "../../components/Inputs/QuestionTypeDropdown";
import { AnswersContainer } from "../../components/AnswersContainer";
import { Button } from "../../components/Button/Button";
import { SPlusIcon } from "./AddQuestions.styled";
import plusSvg from "/assets/svg/plus.svg";

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
  
  const addAnswer = () => {
    const lastId = parseInt(answers[answers.length-1].id); // get last id
    setAnswers((prevAnswers) => [...prevAnswers, { id: `${lastId+1}`, content: "" }]);
  };

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
      <Button
        width="13.5rem"
        height="3rem"
        fontSize=".875rem"
        LeftComponent={<SPlusIcon src={plusSvg} alt=""/>}
        onClick={addAnswer}
      >
        პასუხის დამატება
      </Button>
    </>
  );
}