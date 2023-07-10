import React from 'react'
import { SDeleteButtonContainer, SDuplicateButtonContainer, SDuplicateDeleteButtons } from './DuplicateDeleteButtons.styled'

export const DuplicateDeleteButtons = () => {
  return (
    <SDuplicateDeleteButtons>
      <SDuplicateButtonContainer>
        <img src="assets/svg/duplicate.svg" alt="" />
      </SDuplicateButtonContainer>
      <SDeleteButtonContainer>
        <img src="assets/svg/delete.svg" alt="" />
      </SDeleteButtonContainer>
    </SDuplicateDeleteButtons>
  )
}
