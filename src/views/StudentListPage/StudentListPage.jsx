import React from "react";
import { FourthHeader } from "../../components/Headers/FourthHeader";
import { Table } from "../../components/Table";
import { studentData } from "../../data";
import {
  SContentWrapper,
  STitle,
  SActionWrapper,
  SSearchIcon,
} from "./StudentListPage.styled";
import { columns } from "./columns";
import { Input } from "../../components/Inputs/Input";
import { useState } from "react";
import { FilterDropdown } from "../../components/FilterDropdown";
import { useFilters } from "../../hooks/useFilters";
import { SideBar } from "../../components/SideBar";
import { SStudentListContainer } from "./StudentListPage.styled";
import { useForm } from "react-hook-form";

export const StudentListPage = () => {
  const {
    register,
    watch,
    control,
    formState: { errors },
    setValue,
  } = useForm();
  const [filters, getFilter, updateFilter] = useFilters();

  return (
    <div>
      <FourthHeader />
      <SStudentListContainer>
        <SContentWrapper>
          <STitle>სტუდენტების სია</STitle>
          <SActionWrapper>
            <FilterDropdown
              fields={[
                {
                  id: "status",
                  type: "multiple",
                  values: [
                    "Registered",
                    "Rejected",
                    "Active",
                    "Completed",
                    "Failed",
                  ],
                },
                {
                  id: "gender",
                  type: "multiple",
                  values: ["Female", "Male"],
                },
                {
                  id: "date_of_birth",
                  type: "date",
                },
              ]}
              getFilter={getFilter}
              updateFilter={updateFilter}
              register={register}
              control={control}
              errors={errors}
              watch={watch}
            />
            <Input
              name="global_filter"
              width="16.25rem"
              placeholder="ძებნა"
              LeftComponent={
                <SSearchIcon src="assets/svg/search.svg" alt="filter" />
              }
              register={register}
            />
          </SActionWrapper>
          <Table
            columns={columns}
            data={studentData}
            columnFilters={filters}
            globalFilter={watch("global_filter")}
            setGlobalFilter={(val) => setValue("global_filter", val)}
          />
          <SideBar />
        </SContentWrapper>
      </SStudentListContainer>
    </div>
  );
};
