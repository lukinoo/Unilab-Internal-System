import { DateInput } from "../../Inputs/DateInput";

export const DateRange = ({ id, getFilter, updateFilter, control, errors }) => {
  const selectedDates = getFilter(id) ?? [null, null];
  return (
    <div>
      From
      <DateInput
        name="date-from"
        selectedDate={selectedDates[0]?.format("DD/MM/YYYY")}
        placeholder="01.01.2000"
        onSelect={(date) => {
          selectedDates[0] = date;
          updateFilter(id, selectedDates);
        }}
        control={control}
        errors={errors}
      />
      To
      <DateInput
        name="date-to"
        selectedDate={selectedDates[1]?.format("DD/MM/YYYY")}
        placeholder="26.03.2023"
        onSelect={(date) => {
          selectedDates[1] = date;
          updateFilter(id, selectedDates);
        }}
        control={control}
        errors={errors}
      />
    </div>
  );
};
