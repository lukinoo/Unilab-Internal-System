import { useState } from "react";
import { FormHeader } from "../FormHeader/FormHeader"
import { useForm } from "react-hook-form";
import { TextareaAnswer } from "../../TextareaAnswer";
import { SFormContainer } from "../CheckboxForm/CheckboxForm.styled";
import { TextboxDiv } from "./TextBoxForm.styled";

export const TextBoxForm = () => {
  const [questionTypeId, setQuestionTypeId] = useState(3); // Temporary code
  const { control } = useForm(); // just a test code for textarea

  return (
    <SFormContainer>
      <FormHeader questionTypeId={questionTypeId} setQuestionTypeId={setQuestionTypeId} />
      <TextboxDiv>
        <p>პასუხი:</p>
        <TextareaAnswer
          control={control}
          name="textAnswer"
        />
      </TextboxDiv>
    </SFormContainer>
  )
}
