import { SRangeInputContainer } from "./RangeInput.styled"; 
 export const RangeInput = ({
    rangeValue,
    name,
    lastValueName,
    firstValueName,
 }) => {
  const loopArray = Array.from({ length: rangeValue }, (_, index) => index + 1);
  return (
    <SRangeInputContainer>
      {loopArray.map((_, index) => (
        <>
          <input type="radio" name={name} key={index}/>
        </>
      ))}
    </SRangeInputContainer>
  );
}
