import { QuestionInput } from "../../components/Inputs/QuestionInput";
import { useState } from "react";
import { QuestionTypeDropdown } from "../../components/Inputs/QuestionTypeDropdown";
import { QuestionDescription } from "../../components/Inputs/QuestionDescription";
import { DraggableAnswersContainer } from "../../components/DraggableAnswersContainer";
import { Button } from "../../components/Button/Button";
import { SPlusIcon } from "./AddQuestions.styled";
import plusSvg from "/assets/svg/plus.svg";
import { TextareaAnswer } from "../../components/TextareaAnswer";
import { RangeInput } from "../../components/Inputs/RangeInput/RangeInput";
import { RangeLabelInput } from "../../components/Inputs/RangeLabelInput";


import { SaveAddButtons } from "../../components/Buttons/SaveAddButtons";
import { CheckboxForm } from "../../components/FormPages/CheckboxForm";
import { MultipleChoiceForm } from "../../components/FormPages/MultipleChoiceForm";
import { TextBoxForm } from "../../components/FormPages/TextBoxForm";
import { RatingScaleForm } from "../../components/FormPages/RatingScaleForm";
import { SAddQuestionsMainDiv, STitle, SAddQuestionsContainer } from "./AddQuestions.styled";
import { FourthHeader } from "../../components/Headers/FourthHeader";
import { useForm, useFieldArray } from "react-hook-form";


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

// create an array of answers
const arrayOfAnswers = (numOfQuestions, type) =>
  Array.from({ length: numOfQuestions }, (_, i) => ({
    id: `${i + 1}`,
    content: "",
    isCorrect: false,
    type,
}));

const FORM_TYPES = {
  CHECKBOX: "checkbox",
  MULTIPLE_CHOICE: "multipleChoice",
  TEXTBOX: "textBox",
  RANGE_INPUT: "rangeInput",
};

export const AddQuestions = () => {
  const { control, register, watch, setValue, getValues } = useForm({
    defaultValues: {
      forms: [
        {
          type: FORM_TYPES.CHECKBOX,
          answers: arrayOfAnswers(3, FORM_TYPES.CHECKBOX),
          question: "",
        },
        {
          type: FORM_TYPES.MULTIPLE_CHOICE,
          answers: arrayOfAnswers(3, FORM_TYPES.MULTIPLE_CHOICE),
          question: "",
        },
        {
          type: FORM_TYPES.TEXTBOX,
          answers: arrayOfAnswers(1, FORM_TYPES.TEXTBOX),
          question: "",
        },
        {
          type: FORM_TYPES.RANGE_INPUT,
          answers: arrayOfAnswers(1, FORM_TYPES.RANGE_INPUT),
          question: "",
        },
      ],
    },
  });
  const { fields, append, remove } = useFieldArray({ control, name: "forms" });
  console.log("FIELDS:", fields);

  const changeAnswersArray = (formIndex, newAnswersArray) => {
    const forms = [...getValues().forms];
    forms[formIndex].answers = newAnswersArray;
    setValue('forms', forms);
  };

  const addAnswer = (formIndex, newAnswer) => {
    const forms = [...getValues().forms];
    forms[formIndex].answers = [...forms[formIndex].answers, newAnswer];
    setValue('forms', forms);
  };

  const deleteAnswer = (formIndex, id) => {
    const forms = [...getValues().forms];
    forms[formIndex].answers = forms[formIndex].answers.filter(answerObj=>answerObj.id !== id);
    setValue('forms', forms);
  }

  const changeQuestion = (formIndex, question) => {
    const forms = [...getValues().forms];
    forms[formIndex].question = question;
    setValue('forms', forms);
  }

  const handleMarkCheckboxAnswer = (formIndex, answerIndex) => {
    const forms = [...getValues().forms];
    const answerObj = forms[formIndex].answers[answerIndex];
    answerObj.isCorrect = !answerObj.isCorrect;
    forms[formIndex].answers[answerIndex] = answerObj;
    setValue('forms', forms);
  }

  const handleMarkRadioAnswer = (formIndex, answerIndex) =>{
    const forms = [...getValues().forms];
    const answers = forms[formIndex].answers;
    for (let i = 0; i < answers.length; i++) {
      answers[i].isCorrect = i === answerIndex;
    }
    setValue('forms', forms);
  }

  const displayForm = (item, index) => {
    const formType = item.type;
    switch (formType) {
      case FORM_TYPES.CHECKBOX:
        return (
          <CheckboxForm
            formIndex={index}
            changeAnswersArray={changeAnswersArray}
            item={item}
            addAnswer={addAnswer}
            deleteAnswer={deleteAnswer}
            changeQuestion={changeQuestion}
            handleRemoveForm={()=>remove(index)}
            handleMarkAnswer={handleMarkCheckboxAnswer}
          />
        );
      case FORM_TYPES.MULTIPLE_CHOICE:
        return (
          <MultipleChoiceForm
            formIndex={index}
            changeAnswersArray={changeAnswersArray}
            item={item}
            addAnswer={addAnswer}
            deleteAnswer={deleteAnswer}
            changeQuestion={changeQuestion}
            handleRemoveForm={()=>remove(index)}
            handleMarkAnswer={handleMarkRadioAnswer}
          />
        );
      case FORM_TYPES.RANGE_INPUT:
        return (
          <RatingScaleForm 
            handleRemoveForm={()=>remove(index)}
          />
        );
      case FORM_TYPES.TEXTBOX:
        return (
          <TextBoxForm 
            handleRemoveForm={()=>remove(index)}
          />
        );
      default:
        return null;
    }
  };
  return (
    <SAddQuestionsMainDiv>
      <FourthHeader />
      {/* SIDEBAR GOES HERE */}
      <STitle>კითხვების შედგენა</STitle>
      <SAddQuestionsContainer>
        {fields.map((item, index) => displayForm(item, index))}
        <SaveAddButtons
          handleAddQuestion={() =>
            append({
              type: FORM_TYPES.CHECKBOX,
              answers: arrayOfAnswers(3, FORM_TYPES.CHECKBOX),
              question: "",
            })
          }
        />
      </SAddQuestionsContainer>
    </SAddQuestionsMainDiv>
  );
};