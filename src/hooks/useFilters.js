import { useState } from "react";

export const useFilters = () => {
  const [filters, setFilters] = useState([]);

  const getFilter = (id) => {
    return filters.find((filter) => filter.id === id)?.value;
  };

  const updateFilter = (id, value) => {
    const updatedFilter = { id, value };

    const filterIndex = filters.findIndex(
      (filter) => filter.id === updatedFilter.id
    );

    if (filterIndex < 0) return setFilters([...filters, updatedFilter]);

    if (!updatedFilter.value || updatedFilter.value.length <= 0) {
      filters.splice(filterIndex, 1);
      return setFilters([...filters]);
    }

    filters[filterIndex] = updatedFilter;
    setFilters([...filters]);
  };

  return [filters, getFilter, updateFilter];
};
