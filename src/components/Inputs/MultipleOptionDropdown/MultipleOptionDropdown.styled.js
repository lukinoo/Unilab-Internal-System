import styled from 'styled-components';
import { SDropdownList , SDropdownItem} from '../Dropdown/Dropdown.styled';

export const SMultipleDropdownList = styled(SDropdownList)`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SMultipleDropdownItem = styled(SDropdownItem)`
  width: 80%;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  &>input[type="checkbox"]{
    width: 1rem;
    height: 1rem;
    border: 1px solid #3669A2;
    background-color: #3669A2;
    cursor: pointer;
  }
`