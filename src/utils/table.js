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

  if (value[0] && currentDate.isBefore(value[0])) {
    doesExist = false;
  }

  if (value[1] && currentDate.isAfter(value[1])) {
    doesExist = false;
  }

  return doesExist;
};
