import React, { useMemo, useState } from "react";
import { SaleData } from "./Api";
import { useTable, Column } from "react-table";
import { TablePagination, TableStyles } from "../styles/DataTable.styles";

interface DataTableProps {
  data: SaleData[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const pageSize = 4;

  const columns: Array<Column<SaleData>> = useMemo(
    () => [
      { Header: "Year", accessor: "period" },
      { Header: "State", accessor: "stateDescription" },
      { Header: "Sector", accessor: "sectorName" },
      { Header: "Sales", accessor: "sales" },
    ],
    []
  );

  const tableData = useMemo(() => data, [data]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data: tableData });

  const pageCount = Math.ceil(rows.length / pageSize);

  const handlePageChange = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  const renderPageNumbers = () => {
    const pageNumbers = Array.from({ length: pageCount }, (_, index) => index);

    return pageNumbers.map((pageIndex) => (
      <button
        key={pageIndex}
        disabled={currentPage === pageIndex}
        onClick={() => handlePageChange(pageIndex)}
      >
        {pageIndex + 1}
      </button>
    ));
  };

  const startIndex = currentPage * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedRows = rows.slice(startIndex, endIndex);

  return (
    <TableStyles>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th {...column.getHeaderProps()}>{column.render("Header")}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {displayedRows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <TablePagination>
        <button
          disabled={currentPage === 0}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
        {renderPageNumbers()}
        <button
          disabled={currentPage === pageCount - 1}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </TablePagination>
    </TableStyles>
  );
};

export default DataTable;
