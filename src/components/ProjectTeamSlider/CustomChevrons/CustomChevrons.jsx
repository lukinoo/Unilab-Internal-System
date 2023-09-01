import { SRightChevronbutton, SLeftChevronButton } from "./CustomChevrons.styled";

export const CustomChevronLeft = (props) =>{
  const {onClick} = props;
  return (
    <SLeftChevronButton onClick={onClick}>
      <img src="/assets/svg/chevronLeft.svg" alt=""/>
    </SLeftChevronButton>
  )
}

export const CustomChevronRight = (props) =>{
  const {onClick} = props;
  return (
    <SRightChevronbutton onClick={onClick}>
      <img src="/assets/svg/chevronRight.svg" alt=""/>
    </SRightChevronbutton>
  )
}