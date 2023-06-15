import styled from 'styled-components';

export const SMultipleOptionDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: ${({width})=>width};
  min-height: 2.55rem;
  &>img{
    width: .375rem;
    height: .375rem;
  }
`
export const SNameSpan = styled.span`
  background-color: #EFEFEF;
  color: #353535;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: .3125rem .6875rem .375rem .5rem;
  border: .0625rem solid #D1D1D1;
  margin-right: 0.5rem;
  border-radius: .25rem;
`