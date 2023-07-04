import { QuestionInput } from "../../components/Inputs/QuestionInput";
import { useState } from "react";
import { QuestionTypeDropdown } from "../../components/Inputs/QuestionTypeDropdown";
import { QuestionDescription } from "../../components/Inputs/QuestionDescription";
import { DraggableAnswersContainer } from "../../components/DraggableAnswersContainer";
import { Button } from "../../components/Button/Button";
import { SPlusIcon } from "./AddQuestions.styled";
import plusSvg from "/assets/svg/plus.svg";
import { TextareaAnswer } from "../../components/TextareaAnswer";
import { useForm } from "react-hook-form";

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
  const [rangeValue, setRangeValue] = useState(4);

  const { control } = useForm(); // just a test code for textarea

  const addAnswer = () => {
    const ids = answers.map(obj => obj.id);
    const largestId = Math.max(...ids) | 0;
    setAnswers((prevAnswers) => [...prevAnswers, { id: `${largestId+1}`, content: "" }]);
  };
  
  const deleteAnswer = (id) => {
    const newAnswers = [...answers].filter((answer) => answer.id !== id);
    setAnswers(newAnswers);
  };

  return (
    <>
      <h1>Add Questions Page</h1>
      <QuestionInput />
      <QuestionTypeDropdown
        action={setQuestionTypeId}
        value={questionTypeId}
        items={items}
        showImgs={true}
      />
      <QuestionTypeDropdown
        action={setRangeValue}
        value={rangeValue}
        items={ Array.from({ length: 10 }, (_, index) => index + 1)}
        listWidth="100%"
        displayScroll={true}
        labelText="Range"
      />
      <DraggableAnswersContainer
        answers={answers}
        setAnswers={setAnswers}
        type={items[questionTypeId]}
        deleteAnswer={deleteAnswer}
      />
      <TextareaAnswer
        control={control}
        name="textAnswer"
      />
      <QuestionDescription />
      <Button
        width="13.5rem"
        height="3rem"
        fontSize=".875rem"
        LeftComponent={<SPlusIcon src={plusSvg} alt="" />}
        onClick={addAnswer}
      >
        პასუხის დამატება
      </Button>
    </>
  );
};
