import { useState } from "react";
import {
  Column,
  ColumnDef,
  ExpandedState,
  flexRender,
  getCoreRowModel,
  getExpandedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import Icon from "./Icon";
import data, { Data } from "./data";
import { formatDate, formatString } from "./utils";
import ExpandIcon from "./ExpandIcon";

const COLUMNS = [
  {
    id: "Status",
    header: "Status",
    accessorKey: "statuses",
    cell: ({ getValue }: { getValue: () => Data["statuses"] }) => (
      <>
        {getValue().map(({ id, name }) => (
          <Icon id={id} key={`${id}-${name}`} name={name} />
        ))}
      </>
    ),
  },
  {
    id: "OP Code Source",
    header: "OP Code Source",
    accessorFn: (rowData: Data): string =>
      formatString(rowData?.campaign_code_source),
  },
  {
    id: "OP Code Cible",
    header: "OP Code Cible",
    accessorFn: (rowData: Data): string =>
      formatString(rowData?.campaign_code_target),
  },
  {
    id: "Type de Retour",
    header: "Type de Retour",
    accessorFn: (rowData: Data): string => formatString(rowData?.return_type),
  },
  {
    id: "Code Stock Source",
    header: "Code Stock Source",
    accessorFn: (rowData: Data): string =>
      formatString(rowData?.deal_code_source),
    cell: ({ getValue, row }: { getValue: () => string; row: any }) => (
      <>
        {getValue()}
        {row.getCanExpand() && (
          <ExpandIcon
            isOpen={row.getIsExpanded()}
            className="expand-icon"
            onClick={row.getToggleExpandedHandler()}
          />
        )}
      </>
    ),
  },
  {
    id: "Entrepôt",
    header: "Entrepôt",
    accessorFn: (rowData: Data): string =>
      rowData?.warehouse_name ?? rowData?.warehouses_names?.join?.(", ") ?? "-",
  },
  {
    id: "Date CR2 | TFP",
    header: "Date CR2 | TFP",
    accessorFn: (rowData: Data): string => formatDate(rowData?.cr2_tfp_date),
  },
  {
    id: "Min Theoretical TFP Date",
    header: "Min Theoretical TFP Date",
    accessorFn: (rowData: Data): string =>
      formatDate(rowData?.min_theoretical_tfp_date),
  },
  {
    id: "PR File Receiving Date",
    header: "PR File Receiving Date",
    accessorFn: (rowData: Data): string =>
      formatDate(rowData?.pr_receiving_date),
  },
  {
    id: "Go Reinjection Date",
    header: "Go Reinjection Date",
    accessorFn: (rowData: Data): string =>
      formatDate(rowData?.go_reinjection_date),
  },
  {
    id: "Prochaine action",
    header: "Prochaine action",
    accessorFn: (rowData: Data): string =>
      formatString(rowData?.next_action?.name),
  },
  {
    id: "Business Unit",
    header: "Business Unit",
    accessorFn: (rowData: Data): string => formatString(rowData?.business_unit),
  },
  {
    id: "Secteur",
    header: "Secteur",
    accessorFn: (rowData: Data): string => formatString(rowData?.sector),
  },
  {
    id: "Brand",
    header: "Marque",
    accessorFn: (rowData: Data): string => formatString(rowData?.brand),
  },
  {
    id: "Pièces",
    header: "Pièces",
    accessorFn: (rowData: Data): string => formatString(rowData?.units),
  },
  {
    id: "Valuation",
    header: "Valuation",
    accessorFn: (rowData: Data): string => formatString(rowData?.valuation),
  },
  {
    id: "Date ouverture OP Cible",
    header: "Date ouverture OP Cible",
    accessorFn: (rowData: Data): string =>
      formatDate(rowData?.opening_date_target),
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
    onExpandedChange: setExpanded,
    getSubRows: (row) => row?.subRows,
    getCoreRowModel: getCoreRowModel(),
    getExpandedRowModel: getExpandedRowModel(),
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
