import React from 'react'
import { Button } from '../../Button/Button'
import { SAddButton, SSaveAddButtons } from './SaveAddButtons.styled'

export const SaveAddButtons = () => {
  return (
    <SSaveAddButtons>
      <SAddButton>
        <img src="assets/svg/plus2.svg" alt="" />
      </SAddButton>
      <Button width="10.875rem" height="3rem" fontSize="1.125rem">შენახვა</Button>
    </SSaveAddButtons>
  )
}
