import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import {
  STable,
  SPagination,
  SHeaderContent,
  SPaddingRow,
  SRow,
  SHeadCell,
  SBodyCell,
  SHead,
  SBody,
  SPaginationArrow,
} from "./Table.styled";
import { useState, useMemo } from "react";
import { SortArrows } from "../SortArrows";
import { fuzzyFilter, dateRangeFilter } from "../../utils/table";

const itemsPerPage = 7;

export const Table = ({
  columns,
  data,
  globalFilter,
  setGlobalFilter,
  columnFilters,
}) => {
  const [{ pageIndex, pageSize }, setPagination] = useState({
    pageIndex: 0,
    pageSize: itemsPerPage,
  });

  const pagination = useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  );

  const table = useReactTable({
    data,
    columns,
    filterFns: {
      fuzzy: fuzzyFilter,
      inDateRange: dateRangeFilter,
    },
    state: {
      pagination,
      columnFilters,
      globalFilter,
    },
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });
  return (
    <>
      <STable>
        <SHead>
          {table.getHeaderGroups().map((headerGroup) => (
            <SRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <SHeadCell key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder ? null : (
                    <SHeaderContent
                      {...{
                        className: header.column.getCanSort()
                          ? "cursor-pointer select-none"
                          : "",
                        onClick: header.column.getToggleSortingHandler(),
                      }}
                    >
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}

                      {header.column.getCanSort() && (
                        <SortArrows sorting={header.column.getIsSorted()} />
                      )}
                    </SHeaderContent>
                  )}
                </SHeadCell>
              ))}
            </SRow>
          ))}
        </SHead>
        <SBody>
          {table.getRowModel().rows.map((row) => (
            <SRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <SBodyCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </SBodyCell>
              ))}
            </SRow>
          ))}
          {Math.floor(
            table.getFilteredRowModel().rows.length / itemsPerPage
          ) === pageIndex &&
            Array.from(
              {
                length:
                  itemsPerPage -
                  Math.floor(
                    table.getFilteredRowModel().rows.length % itemsPerPage
                  ),
              },
              (_, i) => (
                <SPaddingRow key={"table-padding-" + i} isFirst={i === 0}>
                  <SBodyCell>_</SBodyCell>
                </SPaddingRow>
              )
            )}
        </SBody>
      </STable>
      <SPagination
        breakLabel="..."
        pageRangeDisplayed={5}
        pageCount={table.getPageCount()}
        nextLabel={
          <SPaginationArrow
            src="assets/svg/chevronRight.svg"
            alt="left arrow"
          />
        }
        previousLabel={
          <SPaginationArrow
            src="assets/svg/chevronLeft.svg"
            alt="right arrow"
          />
        }
        onPageChange={({ selected }) => table.setPageIndex(selected)}
        forcePage={pageIndex}
        activeClassName="active"
        renderOnZeroPageCount={null}
      />
    </>
  );
};
