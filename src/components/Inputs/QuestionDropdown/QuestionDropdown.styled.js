import styled from "styled-components";
import { SDropdownItem, SDropdownButton, SDropdownList } from "../Dropdown/Dropdown.styled";

export const SQuestionDropdownItem = styled(SDropdownItem)`
`
export const SQuestionDropdownButton = styled(SDropdownButton)`
  background-image: url(${props => props.bgImage});
  background-position: left;
  background-repeat: no-repeat;
  background-size: 1rem;
  height: 1.3rem;
  padding-left: 2rem;
  color: #ffffff;
`
export const SQuestionDropdownList = styled(SDropdownList)`
  background-color: transparent;
  border: .0625rem solid #ffffff;
  padding: 2rem 1rem;
`