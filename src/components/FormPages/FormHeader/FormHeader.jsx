import { QuestionDescription } from "../../Inputs/QuestionDescription"
import { QuestionInput } from "../../Inputs/QuestionInput"
import { QuestionTypeDropdown } from "../../Inputs/QuestionTypeDropdown";
import { SFormHeaderContainer, SFormHeaderDiv } from "./FormHeader.styled";
import { DuplicateDeleteButtons } from "../../Buttons/DuplicateDeleteButtons"

const items = {
  1: "Checkbox",
  2: "Multiple Choice",
  3: "Textbox",
  4: "Rating Scale",
};


export const FormHeader = ({
  questionTypeId,
  setQuestionTypeId
}) => {
  return (
    <SFormHeaderContainer>
      <SFormHeaderDiv>
        <QuestionInput />
        <QuestionDescription marginTop="1.125rem" />
      </SFormHeaderDiv>
      <SFormHeaderDiv>
        <QuestionTypeDropdown 
          items={items}
          action={setQuestionTypeId}
          value={questionTypeId}
          showImgs={true}
        />
        <DuplicateDeleteButtons />
      </SFormHeaderDiv>
    </SFormHeaderContainer>
  )
}
