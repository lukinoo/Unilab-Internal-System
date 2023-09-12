import styled from "styled-components";


export const SOverlay = styled.div`
  position: absolute;
  display: none;
  background-color: blue;
  width: inherit;
  height: inherit;
  border-radius: inherit;
  align-items: center;
  justify-content: center;
`
export const SLinkUploader = styled.div`
  position: relative;
  width: 18.4375rem;
  height: 6.3125rem;
  border-radius: .625rem;
  border: .125rem solid #2984CE;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover{
    ${SOverlay}{
      display: flex;
    }
  }  
`
const SIcon = styled.img`
`
export const SLInkIcon = styled(SIcon)`
  margin-left: 1.5rem;
`
export const SEditIcon = styled(SIcon)`
`
export const SDeleteIcon = styled(SIcon)`
`