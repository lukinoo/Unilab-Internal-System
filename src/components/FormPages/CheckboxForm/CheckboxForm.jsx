import { FormHeader } from "../FormHeader/FormHeader";
import { DraggableAnswersContainer } from "../../DraggableAnswersContainer";
import { SFormContainer } from "./CheckboxForm.styled";
import { Button } from "../../Button/Button";
import plusSvg from "/assets/svg/plus.svg";
import { SFormBodyDiv } from "../MultipleChoiceForm/MultipleChoiceForm.styled";
import { SPlusIcon } from "../../../views/AddQuestions/AddQuestions.styled";
import { getKeyByValue } from "../../../utils/getKeyByValue";

export const CheckboxForm = ({
  item,
  formIndex,
  changeAnswersArray,
  addAnswer,
  deleteAnswer,
  handleQuestionChange,
  handleRemoveForm,
  handleMarkAnswer,
  indexedFormTypes,
  handleFormTypeChange,
  handleDescriptionChange,
  handleCopyForm,
}) => {
  const answers = item.answers;

  const handleAddAnswer = () => {
    const ids = answers.map((obj) => obj.id);
    const largestId = Math.max(...ids) | 0;
    addAnswer(formIndex, {
      id: `${largestId + 1}`,
      content: "",
      isCorrect: false,
      type: item.type,
    });
  };

  return (
    <SFormContainer>
      <FormHeader
        formIndex={formIndex}
        indexedFormTypes={indexedFormTypes}
        handleFormTypeChange={handleFormTypeChange}
        handleQuestionChange={handleQuestionChange}
        handleDescriptionChange={handleDescriptionChange}
        handleRemoveForm={handleRemoveForm}
        formTypeIndex={getKeyByValue(indexedFormTypes, item.type)}
        handleCopyForm={handleCopyForm}
      />
      <SFormBodyDiv>
        <h3>პასუხები:</h3>
        <DraggableAnswersContainer
          type={indexedFormTypes[1]} // temporary code
          answers={answers}
          deleteAnswer={deleteAnswer}
          changeAnswersArray={changeAnswersArray}
          formIndex={formIndex}
          handleMarkAnswer={handleMarkAnswer}
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
  );
};
