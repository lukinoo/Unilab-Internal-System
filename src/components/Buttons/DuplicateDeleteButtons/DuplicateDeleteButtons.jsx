import React from 'react'
import { SDeleteButtonContainer, SDuplicateButtonContainer, SDuplicateDeleteButtons } from './DuplicateDeleteButtons.styled'

export const DuplicateDeleteButtons = ({
  handleRemoveForm
}) => {
  return (
    <SDuplicateDeleteButtons>
      <SDuplicateButtonContainer>
        <img src="assets/svg/duplicate.svg" alt="" />
      </SDuplicateButtonContainer>
      <SDeleteButtonContainer>
        <img src="assets/svg/delete.svg" alt="" onClick={handleRemoveForm}/>
      </SDeleteButtonContainer>
    </SDuplicateDeleteButtons>
  )
}
