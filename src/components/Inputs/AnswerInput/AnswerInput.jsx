import { SAnswerInputWrapper, SAnswerInput, SAnswerContainer } from "./AnswerInput.styled"

export const AnswerInput = ({
  type,
  name,
  value,
  width,
  fontSize,
  fontWeight,
  onClick,
  register,
  validation,
  onChange,
  LeftComponent,
  RightComponent,
  OptionSelector,
}) => {
  return (
    <SAnswerContainer onClick={onClick}>
      {LeftComponent}
      {OptionSelector}
      <SAnswerInputWrapper>
        <SAnswerInput
          type={type}
          name={name}
          width={width}
          fontSize={fontSize}
          fontWeight={fontWeight}
          onChange={onChange}
        />
      </SAnswerInputWrapper>
      {RightComponent}
    </SAnswerContainer>
  )
}
