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

  const changeAnswer = (value) => {
    handleTextBoxAnswerChange(formIndex, value);
  };

  return (
    <SFormContainer>
      <FormHeader
        formIndex={formIndex}
        indexedFormTypes={indexedFormTypes}
        handleFormTypeChange={handleFormTypeChange}
        handleRemoveForm={handleRemoveForm}
        formTypeIndex={getKeyByValue(indexedFormTypes, item.type)}
        handleDescriptionChange={handleDescriptionChange}
        handleQuestionChange={handleQuestionChange}
        handleCopyForm={handleCopyForm}
      />
      <STextboxDiv>
        <h3>პასუხი:</h3>
        <TextareaAnswer changeAnswer={changeAnswer} />
      </STextboxDiv>
    </SFormContainer>
  );
};
