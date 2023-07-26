import { QuestionDescription } from "../../Inputs/QuestionDescription"
import { QuestionInput } from "../../Inputs/QuestionInput"
import { QuestionTypeDropdown } from "../../Inputs/QuestionTypeDropdown";
import { SFormHeaderContainer, SFormHeaderDiv } from "./FormHeader.styled";
import { DuplicateDeleteButtons } from "../../Buttons/DuplicateDeleteButtons"

export const FormHeader = ({
  formIndex,
  handleQuestionChange,
  handleRemoveForm,
  indexedFormTypes,
  handleFormTypeChange,
  formTypeIndex,
  handleDescriptionChange,
  handleCopyForm,
}) => {
  const changeQuestion = (value) => {
    handleQuestionChange(formIndex, value);
  };
  const setFormType = (newFormTypeId) => {
    handleFormTypeChange(formIndex, newFormTypeId);
  };
  const changeDescription = (newDescription)=>{
    handleDescriptionChange(formIndex, newDescription);
  }

  return (
    <SFormHeaderContainer>
      <SFormHeaderDiv marginRight>
        <QuestionInput changeQuestion={changeQuestion}/>
        <QuestionDescription marginTop="1.125rem" changeDescription={changeDescription}/>
      </SFormHeaderDiv>
      <SFormHeaderDiv>
        <QuestionTypeDropdown 
          items={indexedFormTypes}
          action={setFormType}
          showImgs={true}
          value={formTypeIndex}
        />
        <DuplicateDeleteButtons handleRemoveForm={handleRemoveForm} handleCopyForm={handleCopyForm}/>
      </SFormHeaderDiv>
    </SFormHeaderContainer>
  )
}
