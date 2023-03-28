import { useRef } from "react";
import { Button } from "../Button";
import { DateRange } from "../Fillters/DateRange";
import { MultipleChoice } from "../Fillters/MultipleChoice/MultipleChoice";
import {
  SDropdown,
  SDropdownWrapper,
  SFilterIcon,
} from "./FiltersDropdown.styled";
import { AnimatePresence } from "framer-motion";
import { dropdownVariants } from "./FitlerDropdown.variants";
import { useAutoClose } from "../../hooks/useAutoClose";
import { SectionDropdown } from "../SectionDropdown";

export const FilterDropdown = ({
  fields,
  getFilter,
  updateFilter,
  register,
  watch,
  control,
  errors,
}) => {
  const dropdownRef = useRef(null);
  const [isOpen, setIsOpen] = useAutoClose(dropdownRef, false);

  return (
    <SDropdownWrapper ref={dropdownRef}>
      <Button
        secondary
        width="11.875rem"
        onClick={() => setIsOpen(!isOpen)}
        LeftComponent={<SFilterIcon src="assets/svg/filter.svg" alt="filter" />}
      >
        ფილტრი
      </Button>
      <AnimatePresence>
        {isOpen && (
          <SDropdown
            variants={dropdownVariants}
            initial={"hidden"}
            animate={"visible"}
            exit={"hidden"}
            transition={{ duration: 0.4, type: "spring" }}
          >
            {fields.map(({ id, type, values }) => (
              <SectionDropdown key={id} label={id} parentRef={dropdownRef}>
                {type === "multiple" && (
                  <MultipleChoice
                    id={id}
                    values={values}
                    getFilter={getFilter}
                    updateFilter={updateFilter}
                    register={register}
                    watch={watch}
                  />
                )}
                {type === "date" && (
                  <DateRange
                    name="date"
                    id={id}
                    getFilter={getFilter}
                    updateFilter={updateFilter}
                    control={control}
                    errors={errors}
                  />
                )}
              </SectionDropdown>
            ))}
          </SDropdown>
        )}
      </AnimatePresence>
    </SDropdownWrapper>
  );
};
