import React, { useState } from "react";
import { Input } from "../../Inputs/Input";
import { Dropdown } from "../../Inputs/Dropdown";
import { RadioInput } from "../../Inputs/RadioInput";

import {
  SAdditionalInfoUniversity,
  SAdditionalInformationText,
  SAdditionalInfoUniversityContainer,
  SAdditionalInfoUniversityGrid,
  SDegreeWrapper,
  SRadioWrapper,
  SError,
} from "./UniversityInputGroup.styled";
import { useFormContext } from "react-hook-form";

export const UniversityInputGroup = () => {
  const {
    register,
    control,
    watch,
    formState: { errors },
  } = useFormContext();

  if (watch("role") != 2) return;

  return (
    <SAdditionalInfoUniversity
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <SAdditionalInformationText>
        გთხოვთ, მოგვაწოდოთ დამატებითი ინფორმაცია
      </SAdditionalInformationText>
      <SAdditionalInfoUniversityContainer>
        <SAdditionalInfoUniversityGrid>
          <Dropdown
            name="university"
            label="უნივერისტეტის დასახელება"
            width="18.75rem"
            placeholder="აირჩიე უნივერსიტეტი"
            items={{
              1: "მოსწავლე",
              2: "სტუდენტი",
              3: "კურსდამთავრებული",
              4: "სხვა",
            }}
            control={control}
            errors={errors}
          />

          <Input
            type="text"
            name="faculty"
            label="ფაკულტეტი"
            width="18.75rem"
            placeholder="ფაკულტეტის დასახელება"
            register={register}
            errors={errors}
          />
          <Input
            type="text"
            name="program"
            label="პროგრამა"
            width="18.75rem"
            placeholder="პროგრამის დასახელება"
            register={register}
            errors={errors}
          />
          <SDegreeWrapper>
            <SRadioWrapper>
              <RadioInput
                label="ბაკალავრი"
                value="bachelors"
                name="degree"
                register={register}
                watch={watch}
              />
              <RadioInput
                label="მაგისტრატურა"
                value="masters"
                name="degree"
                register={register}
                watch={watch}
              />
            </SRadioWrapper>
            {errors && (
              <SError
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
              >
                {errors.degree?.message}
              </SError>
            )}
          </SDegreeWrapper>
          <Dropdown
            name="semester"
            label="სემესტრი"
            width="5.5rem"
            placeholder=""
            items={{
              1: "1",
              2: "2",
              3: "3",
              4: "4",
              5: "5",
              6: "6",
              7: "7",
              8: "8",
            }}
            control={control}
            errors={errors}
          />
        </SAdditionalInfoUniversityGrid>
      </SAdditionalInfoUniversityContainer>
    </SAdditionalInfoUniversity>
  );
};
