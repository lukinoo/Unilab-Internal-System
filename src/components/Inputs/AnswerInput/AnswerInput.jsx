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
  OptionSelector,
  placeholder,  // test code
}) => {
  return (
    <SAnswerContainer onClick={onClick}>
      {LeftComponent}
      {OptionSelector}
      <SAnswerInputWrapper>
        <SAnswerInput
          placeholder={placeholder} // test code
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
