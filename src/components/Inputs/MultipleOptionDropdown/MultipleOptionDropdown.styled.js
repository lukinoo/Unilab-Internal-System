import styled from 'styled-components';
import { SDropdownList , SDropdownItem} from '../Dropdown/Dropdown.styled';
import image from "../../../../public/assets/svg/checkmark.svg";

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
  &>input{
    appearance: none;
    -webkit-appearance: none;
    width: 1rem;
    height: 1rem;
    padding: 0.45rem;
    border-radius: 0.25rem;
    border: 0.0625rem solid #3669A2;
    cursor: pointer;
  }

  &>input {
  position: relative;
  }
  &>input:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: inherit; 
    height: inherit;
    border-radius: inherit;
    display: none;
    background-image: url(${image});
    background-repeat: no-repeat;
    background-position: center;
    background-color: #3669A2;
  }
  &>input:checked::before {
    display: block;
  }
`