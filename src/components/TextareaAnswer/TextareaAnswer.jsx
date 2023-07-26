import { STextareaDiv } from "./TextareaAnswer.styled";
import { STextarea } from "../Inputs/Textarea/Textarea.styled";

export const TextareaAnswer = ({changeAnswer}) => {
  return (
    <STextareaDiv>
      <STextarea
        bgColor="transparent"
        color="#ffffff"
        resize={false}
        width="51.9375rem"
        height="9rem"
        marginTop="1.5rem"
        onInput={(e)=>changeAnswer(e.target.value)}
      />
    </STextareaDiv>
  );
};
