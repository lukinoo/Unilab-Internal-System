import { STextarea } from './Textarea.styled';
import { useController } from 'react-hook-form';

export const Textarea = ({ name, control, placeholder, bgColor, color,resize }) => {
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
    />
  );
};