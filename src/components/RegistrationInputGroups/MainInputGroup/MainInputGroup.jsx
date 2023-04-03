import React from "react";
import { PhoneNumberInput } from "../../Inputs/PhoneNumberInput";
import { Input } from "../../Inputs/Input";
import { Dropdown } from "../../Inputs/Dropdown";
import { SContainer, SGridContainer, SDivisor } from "./MainInputGroup.styled";
import { PasswordInput } from "../../Inputs/PasswordInput";
import { NumberInput } from "../../Inputs/NumberInput";
import { DateInput } from "../../Inputs/DateInput";
import { CountryDropdown } from "../../Inputs/CountryDropdown";
import { Controller, useFormContext } from "react-hook-form";
import dayjs from "dayjs";

export const MainInputGroup = () => {
  const {
    register,
    control,
    watch,
    formState: { errors },
  } = useFormContext();

  return (
    <SContainer>
      <SGridContainer>
        <Input
          type="text"
          name="name"
          label="სახელი"
          width="18.75rem"
          placeholder="სახელი"
          register={register}
          errors={errors}
        />
        <Input
          type="text"
          name="lastname"
          label="გვარი"
          width="18.75rem"
          placeholder="გვარი"
          register={register}
          errors={errors}
        />
        <NumberInput
          name="personal_id"
          label="პირადი ნომერი"
          width="18.75rem"
          placeholder="0123456789"
          register={register}
          errors={errors}
        />
        <Input
          type="email"
          name="email"
          label="ელ-ფოსტა"
          width="18.75rem"
          placeholder="info@unilab.ge"
          register={register}
          errors={errors}
        />
        <PasswordInput
          name="password"
          label="პაროლი"
          width="18.75rem"
          placeholder="∗∗∗∗∗∗∗∗∗∗∗∗∗∗∗∗∗∗∗∗"
          register={register}
          errors={errors}
        />
        <PasswordInput
          name="conf_password"
          label="პაროლი განმეორებით"
          width="18.75rem"
          placeholder="∗∗∗∗∗∗∗∗∗∗∗∗∗∗∗∗∗∗∗∗"
          register={register}
          errors={errors}
        />
        <PhoneNumberInput
          name="number"
          label="მობილურის ნომერი"
          width="18.75rem"
          fontSize="1rem"
          countryCode={995}
          register={register}
          errors={errors}
        />
        <DateInput
          name="date"
          label="დაბადების თარიღი"
          width="18.75rem"
          defaultDate={dayjs()}
          placeholder="15.10.2022"
          control={control}
          errors={errors}
        />
        <Dropdown
          name="gender"
          label="სქესი"
          width="10rem"
          placeholder="-"
          items={{
            1: "მამრობითი",
            2: "მდედრობითი",
            3: "სხვა",
          }}
          control={control}
          errors={errors}
        />
        <CountryDropdown
          name="country_id"
          label="ქვეყანა"
          width="18.75rem"
          items={{
            1: "საქართველო",
            2: "ამერიკა",
            3: "სხვა",
          }}
          control={control}
          errors={errors}
        />
        <Dropdown
          name="region_id"
          label="რეგიონი"
          width="18.75rem"
          placeholder="აირჩიეთ რეგიონი"
          items={{
            1: "საქართველო",
            2: "ამერიკა",
            3: "სხვა",
          }}
          control={control}
          errors={errors}
        />
        <Dropdown
          name="city_id"
          label="ქალაქი"
          width="18.75rem"
          placeholder="აირჩიეთ ქალაქი"
          items={{
            1: "საქართველო",
            2: "ამერიკა",
            3: "სხვა",
          }}
          control={control}
          errors={errors}
        />

        <Input
          type="text"
          name="address"
          label="სრული მისამართი, ქუჩა, ნომერი, შენობა"
          width="42.125rem"
          gridArea="auto / 1 / auto / 4"
          placeholder="ჩაწერეთ სრული მისამართი"
          register={register}
          errors={errors}
        />
        <Dropdown
          name="role"
          label="სტატუსი"
          width="18.75rem"
          gridArea="auto / 1 / auto / 4"
          placeholder="აირჩიეთ სტატუსი"
          items={{
            1: "მოსწავლე",
            2: "სტუდენტი",
            3: "კურსდამთავრებული",
            4: "სხვა",
          }}
          errors={errors}
        />

        {watch("status") == 1 || watch("status") == 2 ? (
          <SDivisor
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 0.5 }}
          />
        ) : null}
      </SGridContainer>
    </SContainer>
  );
};
