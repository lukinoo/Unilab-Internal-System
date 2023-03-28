import { rankItem } from "@tanstack/match-sorter-utils";
import dayjs from "dayjs";

export const fuzzyFilter = (row, columnId, value, addMeta) => {
  // Rank the item
  const itemRank = rankItem(row.getValue(columnId), value);

  // Store the itemRank info
  addMeta({
    itemRank,
  });

  // Return if the item should be filtered in/out
  return itemRank.passed;
};

export const dateRangeFilter = (row, columnId, value) => {
  let doesExist = true;
  const currentDate = dayjs(row.getValue(columnId));
  const minDate = dayjs(value[0]);
  const maxDate = dayjs(value[1]);

  if (minDate && currentDate.isBefore(minDate)) {
    doesExist = false;
  }

  if (maxDate && currentDate.isAfter(maxDate)) {
    doesExist = false;
  }

  return doesExist;
};
