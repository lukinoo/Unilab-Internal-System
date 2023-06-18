import styled from 'styled-components';

export const SMultipleOptionDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: .5rem 1.0938rem .5rem .5625rem;
  width: ${({width})=>width};
  min-height: 2.55rem;
`
export const SNameSpan = styled.span`
  background-color: #D1D1D1;
  color: #353535;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: .3125rem .6875rem .375rem .5rem;
  border: .0625rem solid #D1D1D1;
  margin: 0 .5rem .2rem 0;
  border-radius: .25rem;
  font-size: .625rem;

  &>img{
    margin-left: .5625rem;
    width: .75rem;
    height: .75rem;
  }
`