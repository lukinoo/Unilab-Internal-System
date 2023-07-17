import { STextarea } from "./Textarea.styled";
import { useController } from "react-hook-form";

export const Textarea = ({ name, control, placeholder, bgColor, color, resize, width, height}) => {
  const {
    field: { value, onChange },
  } = useController({ name, control });

  return (
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
    />
  );
};
