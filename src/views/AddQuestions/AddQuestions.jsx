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
import { SaveAddButtons } from "../../components/Buttons/SaveAddButtons";
import { RangeInput } from "../../components/Inputs/RangeInput/RangeInput";
import { RangeLabelInput } from "../../components/Inputs/RangeLabelInput";

import { CheckboxForm } from "../../components/FormPages/CheckboxForm";
import { MultipleChoiceForm } from "../../components/FormPages/MultipleChoiceForm";
import { TextBoxForm } from "../../components/FormPages/TextBoxForm";
import { SAddQuestionsMainDiv, STitle, SAddQuestionsContainer } from "./AddQuestions.styled";

// const items = {
//   1: "Checkbox",
//   2: "Multiple Choice",
//   3: "Textbox",
//   4: "Rating Scale",
// };

// const rangeValues = [ 3, 4, 5, 6, 7, 8, 9];

// export const AddQuestions = () =>{
//   const [questionTypeId, setQuestionTypeId] = useState(1);

//   const [firstRangeLabel, setFirstRangeLabel] = useState('');
//   const [secondRangeLabel, setSecondRangeLabel] = useState('');

//   const [answers, setAnswers] = useState([
//     { id: "1", content: "" },
//     { id: "2", content: "" },
//     { id: "3", content: "" },
//   ]);
//   const [rangeValue, setRangeValue] = useState(0);
  
//   const { control } = useForm(); // just a test code for textarea

//   const addAnswer = () => {
//     const ids = answers.map(obj => obj.id);
//     const largestId = Math.max(...ids) | 0;
//     setAnswers((prevAnswers) => [...prevAnswers, { id: `${largestId+1}`, content: "" }]);
//   };
  
//   const deleteAnswer = (id) => {
//     const newAnswers = [...answers].filter((answer) => answer.id !== id);
//     setAnswers(newAnswers);
//   };

//   return (
//     <>
//       <h1>Add Questions Page</h1>
//       <QuestionInput />
//       <QuestionTypeDropdown
//         action={setQuestionTypeId}
//         value={questionTypeId}
//         items={items}
//         showImgs={true}
//       />
//       <QuestionTypeDropdown
//         action={setRangeValue}
//         value={rangeValue}
//         items={rangeValues}
//         listWidth="100%"
//         labelText="Range"
//       />
//       <DraggableAnswersContainer
//         answers={answers}
//         setAnswers={setAnswers}
//         type={items[questionTypeId]}
//         deleteAnswer={deleteAnswer}
//       />
//       <TextareaAnswer
//         control={control}
//         name="textAnswer"
//       />
//       <QuestionDescription />
//       <Button
//         width="13.5rem"
//         height="3rem"
//         fontSize=".875rem"
//         LeftComponent={<SPlusIcon src={plusSvg} alt="" />}
//         onClick={addAnswer}
//       >
//         პასუხის დამატება
//       </Button>
//       <RangeLabelInput displayLabel number={1} action={setFirstRangeLabel} />
//       <RangeLabelInput number={rangeValues[rangeValue]} action={setSecondRangeLabel} />
//       <RangeInput
//         rangeValue={rangeValues[rangeValue]}
//         name="rangeValue"
//         firstRangeLabel={firstRangeLabel}
//         secondRangeLabel={secondRangeLabel}
//       />
//       <SaveAddButtons />
//     </>
//   );
// };


export const AddQuestions = () => {
  return(
    <SAddQuestionsMainDiv>
      {/* HEADER GOES HERE */}
      {/* SIDEBAR GOES HERE */}
      <STitle>კითხვების შედგენა</STitle>
      <SAddQuestionsContainer>
        <CheckboxForm />
        <MultipleChoiceForm />
        <TextBoxForm />
        {/* Rating scale goes HERE */}
        <SaveAddButtons />
      </SAddQuestionsContainer>
    </SAddQuestionsMainDiv>
  )
}