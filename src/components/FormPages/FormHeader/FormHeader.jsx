import { QuestionDescription } from "../../Inputs/QuestionDescription"
import { QuestionInput } from "../../Inputs/QuestionInput"
import { QuestionTypeDropdown } from "../../Inputs/QuestionTypeDropdown";
import { SFormHeaderContainer, SFormHeaderDiv } from "./FormHeader.styled";
import { DuplicateDeleteButtons } from "../../Buttons/DuplicateDeleteButtons"

export const FormHeader = ({
  handleQuestionChange,
  handleRemoveForm,
  indexedFormTypes,
  setFormType,
  formTypeIndex
}) => {
  return (
    <SFormHeaderContainer>
      <SFormHeaderDiv marginRight>
        <QuestionInput handleQuestionChange={handleQuestionChange}/>
        <QuestionDescription marginTop="1.125rem" />
      </SFormHeaderDiv>
      <SFormHeaderDiv>
        <QuestionTypeDropdown 
          items={indexedFormTypes}
          action={setFormType}
          showImgs={true}
          value={formTypeIndex}
        />
        <DuplicateDeleteButtons handleRemoveForm={handleRemoveForm}/>
      </SFormHeaderDiv>
    </SFormHeaderContainer>
  )
}
