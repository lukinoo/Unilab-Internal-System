import { useState } from "react";
import { FormHeader } from "../FormHeader/FormHeader"
import { useForm } from "react-hook-form";
import { TextareaAnswer } from "../../TextareaAnswer";
import { SFormContainer } from "../CheckboxForm/CheckboxForm.styled";
import { STextboxDiv } from "./TextBoxForm.styled";
import { getKeyByValue} from "../../../utils/getKeyByValue";

export const TextBoxForm = ({
  item,
  formIndex,
  handleRemoveForm,
  indexedFormTypes,
  handleFormTypeChange,
  handleDescriptionChange
}) => {
  const [questionTypeId, setQuestionTypeId] = useState(3); // Temporary code
  const { control } = useForm(); // just a test code for textarea

  const setFormType = (newFormTypeId) =>{
    handleFormTypeChange(formIndex, newFormTypeId);
  }
  const changeDescription = (newDescription)=>{
    handleDescriptionChange(formIndex, newDescription);
  }


  return (
    <SFormContainer>
      <FormHeader
        indexedFormTypes={indexedFormTypes}
        setFormType={setFormType}
        questionTypeId={questionTypeId}
        setQuestionTypeId={setQuestionTypeId}
        handleRemoveForm={handleRemoveForm}
        formTypeIndex={getKeyByValue(indexedFormTypes, item.type)}
        changeDescription={changeDescription}
      />
      <STextboxDiv>
        <h3>პასუხი:</h3>
        <TextareaAnswer control={control} name="textAnswer" />
      </STextboxDiv>
    </SFormContainer>
  );
}
