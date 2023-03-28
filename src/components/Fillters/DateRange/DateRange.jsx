import { useForm } from "react-hook-form";
import { DateInput } from "../../Inputs/DateInput";

export const DateRange = ({ name, setValue }) => {
  const {
    control,
    formState: { errors },
    getValues,
  } = useForm();
  return (
    <div>
      From
      <DateInput
        name={name + "-from"}
        placeholder={"01.01.2000"}
        control={control}
        errors={errors}
        onSubmit={(date) => {
          setValue(name, [date.toISOString(), getValues(name + "-to")]);
        }}
      />
      To
      <DateInput
        name={name + "-to"}
        placeholder={"26.03.2023"}
        control={control}
        errors={errors}
        onSubmit={(date) => {
          setValue(name, [getValues(name + "-from"), date.toISOString()]);
        }}
      />
    </div>
  );
};
