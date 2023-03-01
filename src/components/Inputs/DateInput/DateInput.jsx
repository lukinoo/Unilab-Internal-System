import React, { useRef } from "react";
import { Input } from "../Input";
import DatePicker from "uni-date-picker";
import { Button } from "../../Button";
import dayjs from "dayjs";
import {
  SDateInputWrapper,
  SDatePickerWrapper,
  SCalendarIconContainer,
  SCalendarIcon,
} from "./DateInput.styled";
import { datePickerVariants } from "./DateInput.variants";
import { useAutoClose } from "../../../hooks/useAutoClose";
import { AnimatePresence } from "framer-motion";
import { useController } from "react-hook-form";

export const DateInput = (props) => {
  const {
    name,
    maxDate,
    defaultDate = dayjs(),
    control,
    RightComponent,
  } = props;

  const {
    field: { value, onChange, onBlur },
  } = useController({ name, control });

  const handleSubmit = (date) => {
    setIsOpen(false);
    onChange(date.toISOString());
  };

  const dateInputRef = useRef(null);

  const [isOpen, setIsOpen] = useAutoClose(dateInputRef, false, onBlur);

  return (
    <SDateInputWrapper ref={dateInputRef}>
      <Input
        {...props}
        value={value && dayjs(value).format("DD.MM.YYYY")}
        readOnly
        type={"text"}
        onClick={() => setIsOpen(!isOpen)}
        LeftComponent={
          <SCalendarIconContainer>
            <SCalendarIcon src="assets/svg/calendar.svg" alt="calendar" />
          </SCalendarIconContainer>
        }
        RightComponent={RightComponent}
      />
      <AnimatePresence>
        {isOpen && (
          <SDatePickerWrapper
            variants={datePickerVariants}
            initial={"hidden"}
            animate={"visible"}
            exit={"hidden"}
            transition={{ duration: 0.4, type: "spring" }}
          >
            <DatePicker
              defaultDate={defaultDate}
              maxDate={maxDate}
              onSubmit={handleSubmit}
              locale={dayjs.locale()}
              submitComponent={<Button type="button">არჩევა</Button>}
            />
          </SDatePickerWrapper>
        )}
      </AnimatePresence>
    </SDateInputWrapper>
  );
};
