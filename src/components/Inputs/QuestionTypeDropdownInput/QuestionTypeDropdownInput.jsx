import { SContainer } from "../Input/Input.styled";
import {
  SQuestionTypeDropdownInputWrapper,
  SQuestionTypeDropdownInput,
  SFloatingLabel,
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
  labelText
}) => {
  return (
    <SContainer width={width} onClick={onClick} gridArea={gridArea}>
      {labelText && <SFloatingLabel>{labelText}</SFloatingLabel>}
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
