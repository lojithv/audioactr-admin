import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";

export default function ReusableTable({ columns, rowData, title }: any) {
  return (
    <React.Fragment>
      <Title>{title}</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            {columns.map((col: any, i: number) => (
              <TableCell
                key={i}
                align={i === columns.length - 1 ? "right" : "left"}
              >
                {col.name}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowData.map((row: any[], i: number) => (
            <TableRow key={i}>
              {row.map((c: any, j: number) => {
                return (
                  <TableCell align={j === row.length - 1 ? "right" : "left"}>
                    {c.type
                      ? c.type === "PRICE"
                        ? `$${c.amount}`
                        : c.type === "DURATION"
                        ? c.months
                        : c
                      : c}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}
