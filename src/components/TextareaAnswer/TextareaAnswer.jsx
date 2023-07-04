import { Textarea } from "../Inputs/Textarea/Textarea";
import { STextareaDiv } from "./TextareaAnswer.styled";

export const TextareaAnswer = ({
  control,
  name
}) => {
  return (
    <STextareaDiv>
      <Textarea
        name={name}
        control={control}
        bgColor="transparent"
        color="#ffffff"
        resize={false}
        width="51.9375rem"
        height="9rem"
      />
    </STextareaDiv>
  );
};
