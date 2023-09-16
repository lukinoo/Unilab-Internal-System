import { SLabel } from "../Input/Input.styled";
import { STextarea, STextareaDiv } from "./Textarea.styled";
import { useController } from "react-hook-form";

export const Textarea = ({
  name,
  control,
  placeholder,
  bgColor,
  color,
  resize,
  width,
  height,
  label,
  marginTop,
}) => {
  const {
    field: { value, onChange },
  } = useController({ name, control });

  return (
    <STextareaDiv>
      {label && <SLabel>{label}</SLabel>}
      <STextarea
        onChange={onChange}
        placeholder={placeholder}
        control={control}
        name={name}
        bgColor={bgColor}
        color={color}
        resize={resize}
        width={width}
        height={height}
        marginTop={marginTop}
      />
    </STextareaDiv>
  );
};
