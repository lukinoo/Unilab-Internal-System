import { FormHeader } from "../FormHeader/FormHeader";
import { TextareaAnswer } from "../../TextareaAnswer";
import { SFormContainer } from "../CheckboxForm/CheckboxForm.styled";
import { STextboxDiv } from "./TextBoxForm.styled";
import { getKeyByValue } from "../../../utils/getKeyByValue";

export const TextBoxForm = ({
  item,
  formIndex,
  handleRemoveForm,
  indexedFormTypes,
  handleFormTypeChange,
  handleDescriptionChange,
  handleQuestionChange,
  handleTextBoxAnswerChange,
  handleCopyForm
}) => {
  const setFormType = (newFormTypeId) => {
    handleFormTypeChange(formIndex, newFormTypeId);
  };
  const changeDescription = (newDescription) => {
    handleDescriptionChange(formIndex, newDescription);
  };

  const changeQuestion = (value) => {
    handleQuestionChange(formIndex, value);
  };

  const changeAnswer = (value) => {
    handleTextBoxAnswerChange(formIndex, value);
  };

  return (
    <SFormContainer>
      <FormHeader
        indexedFormTypes={indexedFormTypes}
        setFormType={setFormType}
        handleRemoveForm={handleRemoveForm}
        formTypeIndex={getKeyByValue(indexedFormTypes, item.type)}
        changeDescription={changeDescription}
        changeQuestion={changeQuestion}
        handleCopyForm={handleCopyForm}
      />
      <STextboxDiv>
        <h3>პასუხი:</h3>
        <TextareaAnswer changeAnswer={changeAnswer} />
      </STextboxDiv>
    </SFormContainer>
  );
};
