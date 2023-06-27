import { SLabel } from "../Input/Input.styled";
import { STextarea, STextareaWrapper } from "./Textarea.styled";
import { useController } from "react-hook-form";

export const Textarea = ({ name, control, placeholder, label }) => {
  const {
    field: { value, onChange },
  } = useController({ name, control });

  return (
    <STextareaWrapper>
      <SLabel htmlFor={name}>{label}</SLabel>
      <STextarea
        onChange={onChange}
        placeholder={placeholder}
        control={control}
        name={name}
      />
    </STextareaWrapper>
  );
};
