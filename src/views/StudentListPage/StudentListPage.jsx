import React from "react";
import { FourthHeader } from "../../components/Headers/FourthHeader";
import { Table } from "../../components/Table";
import { studentData } from "../../data";
import {
  SContentWrapper,
  STitle,
  SActionWrapper,
} from "./StudentListPage.styled";
import { columns } from "./columns";
import { Input } from "../../components/Inputs/Input";
import { useState } from "react";
import { FilterDropdown } from "../../components/FilterDropdown";
import { useFilters } from "../../hooks/useFilters";
import { SideBar } from "../../components/SideBar";
import { SStudentListContainer } from "./StudentListPage.styled";

export const StudentListPage = () => {
  const [globalFilter, setGlobalFilter] = useState("");
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
            />
            <Input
              width="16.25rem"
              LeftComponent={<img src="assets/svg/search.svg" />}
              value={globalFilter}
              onChange={(e) => {
                setGlobalFilter(e.target.value);
              }}
            />
          </SActionWrapper>
          <Table
            columns={columns}
            data={studentData}
            columnFilters={filters}
            globalFilter={globalFilter}
            setGlobalFilter={setGlobalFilter}
          />
          <SideBar />
        </SContentWrapper>
      </SStudentListContainer>
    </div>
  );
};
