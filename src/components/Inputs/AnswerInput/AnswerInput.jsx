import { SAnswerInputWrapper, SAnswerInput, SAnswerContainer } from "./AnswerInput.styled"

export const AnswerInput = ({
  width,
  onClick,
  onChange,
  value, 
  name,
  fontSize,
  fontWeight,
  register,
  LeftComponent,
  RightComponent,
  SelectOption,
}) => {
  return (
    <SAnswerContainer onClick={onClick}>
      {LeftComponent}
      {SelectOption}
      <SAnswerInputWrapper>
        <SAnswerInput
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
