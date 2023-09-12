import styled from "styled-components";


export const SOverlay = styled.div`
  position: absolute;
  display: none;
  background-color: blue;
  width: inherit;
  height: inherit;
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
      display: block;
    }
  }  
`
export const SLInkIcon = styled.img`
  margin-left: 1.5rem;
`
