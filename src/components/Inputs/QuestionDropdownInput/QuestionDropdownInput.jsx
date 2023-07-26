import { SContainer } from "../Input/Input.styled";
import {
  SQuestionDropdownInputWrapper,
  SQuestionDropdownInput,
} from "./QuestionDropdownInput.styled";

export const QuestionDropdownInput = ({
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
      <SQuestionDropdownInputWrapper>
        {LeftComponent}
        <SQuestionDropdownInput
          bgImage={bgImage}
          id={name}
          width={width}
          fontSize={fontSize}
          fontWeight={fontWeight}
          readOnly={true}
          value={value}
        />
        {RightComponent}
      </SQuestionDropdownInputWrapper>
    </SContainer>
  );
};
