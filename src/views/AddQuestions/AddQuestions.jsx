import { SaveAddButtons } from "../../components/Buttons/SaveAddButtons";
import { CheckboxForm } from "../../components/FormPages/CheckboxForm";
import { MultipleChoiceForm } from "../../components/FormPages/MultipleChoiceForm";
import { TextBoxForm } from "../../components/FormPages/TextBoxForm";
import { RatingScaleForm } from "../../components/FormPages/RatingScaleForm";
import {
  SAddQuestionsMainDiv,
  STitle,
  SAddQuestionsContainer,
} from "./AddQuestions.styled";
import { FourthHeader } from "../../components/Headers/FourthHeader";
import { useForm, useFieldArray } from "react-hook-form";

const arrayOfAnswers = (numOfQuestions, type) => {
  if (type !== FORM_TYPES.RANGE_INPUT) {
    return Array.from({ length: numOfQuestions }, (_, i) => ({
      id: `${i + 1}`,
      content: "",
      isCorrect: false,
      type,
    }));
  } else {
    return [
      {
        id: 1,
        minValue: 1,
        maxValue: 3,
        minValueVerbal: "",
        maxValueVerbal: "",
        selectedValue: null,
      },
    ];
  }
};

const indexedFormTypes = {
  1: "Checkbox",
  2: "Multiple Choice",
  3: "Textbox",
  4: "Rating Scale",
};

const FORM_TYPES = {
  CHECKBOX: indexedFormTypes[1],
  MULTIPLE_CHOICE: indexedFormTypes[2],
  TEXTBOX: indexedFormTypes[3],
  RANGE_INPUT: indexedFormTypes[4],
};

export const AddQuestions = () => {
  const { control, setValue, getValues } = useForm({
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
    setValue("forms", forms);
  };

  const addAnswer = (formIndex, newAnswer) => {
    const forms = [...getValues().forms];
    forms[formIndex].answers = [...forms[formIndex].answers, newAnswer];
    setValue("forms", forms);
  };

  const deleteAnswer = (formIndex, id) => {
    const forms = [...getValues().forms];
    forms[formIndex].answers = forms[formIndex].answers.filter(
      (answerObj) => answerObj.id !== id
    );
    setValue("forms", forms);
  };

  const handleQuestionChange = (formIndex, newQuestion) => {
    const forms = [...getValues().forms];
    forms[formIndex].question = newQuestion;
    setValue("forms", forms);
  };

  const handleMarkCheckboxAnswer = (formIndex, answerIndex) => {
    const forms = [...getValues().forms];
    const answerObj = forms[formIndex].answers[answerIndex];
    answerObj.isCorrect = !answerObj.isCorrect;
    forms[formIndex].answers[answerIndex] = answerObj;
    setValue("forms", forms);
  };

  const handleMarkRadioAnswer = (formIndex, answerIndex) => {
    const forms = [...getValues().forms];
    const answers = forms[formIndex].answers;
    for (let i = 0; i < answers.length; i++) {
      answers[i].isCorrect = i === answerIndex;
    }
    setValue("forms", forms);
  };

  const handleFormTypeChange = (formIndex, newFormTypeId) => {
    const forms = [...getValues().forms];
    const questionObj = forms[formIndex];
    const numAnswers = newFormTypeId < 3 ? 3 : 1;
    questionObj.type = indexedFormTypes[newFormTypeId];
    questionObj.description = "";
    questionObj.question = "";
    questionObj.answers = arrayOfAnswers(
      numAnswers,
      indexedFormTypes[newFormTypeId]
    );
    setValue("forms", forms);
  };

  const handleDescriptionChange = (formIndex, newDescription) => {
    const forms = [...getValues().forms];
    const questionObj = forms[formIndex];
    questionObj.description = newDescription;
    setValue("forms", forms);
  };

  const handleTextBoxAnswerChange = (formIndex, newAnswer) => {
    const forms = [...getValues().forms];
    const questionObj = forms[formIndex];
    questionObj.answers[0].content = newAnswer;
    setValue("forms", forms);
  };

  const handleMaxRatingValueChange = (formIndex, index) => {
    const forms = [...getValues().forms];
    const answerObj = forms[formIndex].answers[0];
    answerObj.maxValue = index;
    setValue("forms", forms);
  };

  const handleVerbalChange = (formIndex, newValue, labelNumber) => {
    const forms = [...getValues().forms];
    const answerObj = forms[formIndex].answers[0];
    if (labelNumber === 1) {
      answerObj.minValueVerbal = newValue;
    } else {
      answerObj.maxValueVerbal = newValue;
    }
    setValue("forms", forms);
  };


  const displayForm = (item, index) => {
    const formType = item.type;
    switch (formType) {
      case FORM_TYPES.CHECKBOX:
        return (
          <CheckboxForm
            indexedFormTypes={indexedFormTypes}
            formIndex={index}
            changeAnswersArray={changeAnswersArray}
            item={item}
            addAnswer={addAnswer}
            deleteAnswer={deleteAnswer}
            handleQuestionChange={handleQuestionChange}
            handleRemoveForm={() => remove(index)}
            handleMarkAnswer={handleMarkCheckboxAnswer}
            handleFormTypeChange={handleFormTypeChange}
            handleDescriptionChange={handleDescriptionChange}
          />
        );
      case FORM_TYPES.MULTIPLE_CHOICE:
        return (
          <MultipleChoiceForm
            indexedFormTypes={indexedFormTypes}
            formIndex={index}
            changeAnswersArray={changeAnswersArray}
            item={item}
            addAnswer={addAnswer}
            deleteAnswer={deleteAnswer}
            handleQuestionChange={handleQuestionChange}
            handleRemoveForm={() => remove(index)}
            handleMarkAnswer={handleMarkRadioAnswer}
            handleFormTypeChange={handleFormTypeChange}
            handleDescriptionChange={handleDescriptionChange}
          />
        );
      case FORM_TYPES.RANGE_INPUT:
        return (
          <RatingScaleForm
            item={item}
            formIndex={index}
            handleRemoveForm={() => remove(index)}
            indexedFormTypes={indexedFormTypes}
            handleQuestionChange={handleQuestionChange}
            handleFormTypeChange={handleFormTypeChange}
            handleDescriptionChange={handleDescriptionChange}
            handleMaxRatingValueChange={handleMaxRatingValueChange}
            handleVerbalChange={handleVerbalChange}
          />
        );
      case FORM_TYPES.TEXTBOX:
        return (
          <TextBoxForm
            formIndex={index}
            item={item}
            handleRemoveForm={() => remove(index)}
            indexedFormTypes={indexedFormTypes}
            handleQuestionChange={handleQuestionChange}
            handleFormTypeChange={handleFormTypeChange}
            handleDescriptionChange={handleDescriptionChange}
            handleTextBoxAnswerChange={handleTextBoxAnswerChange}
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
              description: ""
            })
          }
        />
      </SAddQuestionsContainer>
    </SAddQuestionsMainDiv>
  );
};
