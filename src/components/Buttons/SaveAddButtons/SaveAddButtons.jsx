import React from 'react'
import { Button } from '../../Button/Button'
import { SAddButton } from './SaveAddButtons.styled'

export const SaveAddButtons = () => {
  return (
    <div style={{display: "flex", alignItems: "center", gap:"2.188rem"}}>
      <SAddButton>
        <img src="assets/svg/plus2.svg" alt="" />
      </SAddButton>
      <Button width="10.875rem" height="3rem" fontSize="1.125rem">შენახვა</Button>
    </div>
  )
}
