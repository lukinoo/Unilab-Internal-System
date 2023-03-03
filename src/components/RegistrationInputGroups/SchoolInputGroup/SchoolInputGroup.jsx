import React from "react";
import { PhoneNumberInput } from "../../Inputs/PhoneNumberInput";
import { Input } from "../../Inputs/Input";
import { Dropdown } from "../../Inputs/Dropdown";
import { useFormContext } from "react-hook-form";
import {
  SAdditionalInformationText,
  SAdditionalInfoSchool,
  SAdditionalInfoSchoolGrid,
  SAdditionalInfoSchoolContainer,
} from "./SchoolInputGroup.styled";

export const SchoolInputGroup = () => {
  const {
    register,
    control,
    watch,
    formState: { errors },
  } = useFormContext();

  if (watch("role") != 1) return;

  return (
    <SAdditionalInfoSchool
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SAdditionalInformationText>
        გთხოვთ, მოგვაწოდოთ დამატებითი ინფორმაცია
      </SAdditionalInformationText>
      <SAdditionalInfoSchoolContainer>
        <SAdditionalInfoSchoolGrid>
          <Input
            type="text"
            name="school"
            label="სკოლის ნომერი"
            width="18.75rem"
            placeholder="მიუთითეთ ნომერი"
            register={register}
            errors={errors}
          />
          <Dropdown
            name="grade"
            label="კლასი"
            width="5.5rem"
            gridArea="auto / 2 / auto / 4"
            placeholder=""
            items={{
              1: "1",
              2: "2",
              3: "3",
              4: "4",
            }}
            control={control}
            errors={errors}
          />

          <Input
            type="text"
            name="parent_name"
            label="მშობლის სახელი "
            width="18.75rem"
            placeholder="მიუთითეთ მშობლის სახელი"
            register={register}
            errors={errors}
          />
          <Input
            type="text"
            name="parent_lastname"
            label="მშობლის გვარი"
            width="18.75rem"
            placeholder="მიუთითეთ მშობლის გვარი"
            register={register}
            errors={errors}
          />
          <PhoneNumberInput
            name="parent_number"
            label="მობილურის ნომერი"
            width="18.75rem"
            fontSize="1rem"
            countryCode={995}
            register={register}
            errors={errors}
          />
        </SAdditionalInfoSchoolGrid>
      </SAdditionalInfoSchoolContainer>
    </SAdditionalInfoSchool>
  );
};
