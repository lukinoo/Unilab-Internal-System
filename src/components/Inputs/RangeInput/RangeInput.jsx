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
          {index === 0 && <>{firstValueName}</>}
          <input type="radio" name={name} key={index}/>
          {index === loopArray.length-1 && <>{lastValueName}</>}
        </>
      ))}
    </SRangeInputContainer>
  );
}
