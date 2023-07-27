import styled from "styled-components";

export const SInternInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #ffffff;
`

export const SNameAndOccupationDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 4rem;
`

export const SName = styled.p`
  color: #3F48CC;
  font-size: 1.5rem;
  font-weight: 600;
`

export const SOccupation = styled(SName)`
  font-size: 1.125rem;
`

export const SDescription = styled.p`
  font-size: 1rem;
`

export const SImageDiv = styled.div`
  border: .0625rem dashed #3F48CC;
  border-radius: 1.875rem;
  padding: 1.5rem;
  & > img {
    border-radius: 1rem;
    width: 14.9375rem;
    height: 17.9375rem;
    object-fit: cover;
  }
`;
export const SImageAndTextDiv = styled.div`
  width: 59.25rem;
  display: flex;
  justify-content: space-between;
`

export const SInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 36.1875rem;
`