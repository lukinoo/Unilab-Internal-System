import React from 'react'
import { SQuestionTextArea } from './QuestionDescription.styled'

export const QuestionDescription = ({
  marginTop
}) => {
  return (
    <SQuestionTextArea 
      placeholder="კითხვის მოკლე აღწერა (Optional)" 
      marginTop={marginTop}
    />
  )
}
