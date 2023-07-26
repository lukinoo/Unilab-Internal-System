import React from 'react'
import { SQuestionTextArea } from './QuestionDescription.styled'

export const QuestionDescription = ({
  marginTop,
  changeDescription
}) => {
  return (
    <SQuestionTextArea 
      placeholder="კითხვის მოკლე აღწერა (Optional)" 
      marginTop={marginTop}
      onInput={(e)=>changeDescription(e.target.value)}
    />
  )
}
