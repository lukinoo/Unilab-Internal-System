import { Textarea } from "../Inputs/Textarea/Textarea";
import { STextareaDiv } from "./TextareaAnswer.styled";
import { SCross } from "../DraggableAnswersContainer/DraggableAnswersContainer.styled";
import XSvg from "/assets/svg/xCross.svg";

export const TextareaAnswer = ({
  answers,
  setAnswers,
  deleteAnswer,
  type,
  control,
}) => {
  return (
    <div>
      {answers.map((answerObj) => (
        <STextareaDiv>
          <Textarea
            name={`textAnswer${answerObj.id}`}
            control={control}
            bgColor="transparent"
            color="#ffffff"
            resize={false}
            width="51.9375rem"
            height="9rem"
          />
          <SCross src={XSvg} alt="" onClick={() => deleteAnswer(answerObj.id)} />
        </STextareaDiv>
      ))}
    </div>
  );
};
