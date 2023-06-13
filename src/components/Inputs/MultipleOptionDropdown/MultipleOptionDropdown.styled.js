import styled from 'styled-components';
import { SDropdownList , SDropdownItem} from '../Dropdown/Dropdown.styled';

export const SMultipleDropdownList = styled(SDropdownList)`
  & li::before{
    content: '';
    width: 1rem;
    height: 1rem;
  }
`

export const SMultipleDropdownItem = styled(SDropdownItem)`
  background: ${({checked})=> checked ? 'blue' : '' }; 

`