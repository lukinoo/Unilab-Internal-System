import { SContainer } from "../Input/Input.styled";
import {
  SQuestionTypeDropdownInputWrapper,
  SQuestionTypeDropdownInput,
} from "./QuestionTypeDropdownInput.styled";

export const QuestionTypeDropdownInput = ({
  value,
  LeftComponent,
  RightComponent,
  name,
  width,
  onClick,
  fontSize,
  fontWeight,
  bgImage,
  gridArea,
}) => {
  return (
    <SContainer width={width} onClick={onClick} gridArea={gridArea}>
      <SQuestionTypeDropdownInputWrapper>
        {LeftComponent}
        <SQuestionTypeDropdownInput
          bgImage={bgImage}
          id={name}
          width={width}
          fontSize={fontSize}
          fontWeight={fontWeight}
          readOnly={true}
          value={value}
        />
        {RightComponent}
      </SQuestionTypeDropdownInputWrapper>
    </SContainer>
  );
};
