import { QuestionDescription } from "../../Inputs/QuestionDescription"
import { QuestionInput } from "../../Inputs/QuestionInput"
import { QuestionTypeDropdown } from "../../Inputs/QuestionTypeDropdown";
import { SFormHeaderContainer, SFormHeaderDiv } from "./FormHeader.styled";
import { DuplicateDeleteButtons } from "../../Buttons/DuplicateDeleteButtons"

export const FormHeader = ({
  changeQuestion,
  handleRemoveForm,
  indexedFormTypes,
  setFormType,
  formTypeIndex,
  changeDescription
}) => {
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
        <DuplicateDeleteButtons handleRemoveForm={handleRemoveForm}/>
      </SFormHeaderDiv>
    </SFormHeaderContainer>
  )
}
