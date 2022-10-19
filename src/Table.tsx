import { useState } from "react";
import {
  ColumnDef,
  ExpandedState,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

import Icon from "./Icon";
import data from "./data";

const COLUMNS = [
  {
    id: "Status",
    header: "Status",
    accessorKey: "statuses",
    cell: ({ getValue }) => (
      <>
        {getValue().map(({ id, name }) => (
          <Icon id={id} key={`${id}-${name}`} name={name} />
        ))}
      </>
    ),
  },
  {
    id: "Op Code Source",
    header: "Op Code Source",
    accessorKey: "campaign_code_source",
  },
];

const Table = () => {
  const [expanded, setExpanded] = useState<ExpandedState>({});

  const table = useReactTable({
    data,
    columns: COLUMNS,
    state: {
      expanded,
    },
    // getSubRows: (row) => row.subRows,
    getCoreRowModel: getCoreRowModel(),
    debugTable: true,
  });

  return (
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
