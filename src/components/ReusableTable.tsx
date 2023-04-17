import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import { Button } from "@mui/material";
import { setDialogVisibility } from "../store/DialogStateStore";
import { CSVLink, CSVDownload } from "react-csv";

const flatData = (data:any[]) => {
  const valueArray = data.map(row => row.map((item:any) => {
    if (typeof item === "object" && item !== null) {
      const { months, amount } = item;
      return months !== undefined ? months : amount;
    }
    return item;
  }));
  return valueArray
}

export default function ReusableTable({ columns, rowData, title }: any) {
  return (
    <React.Fragment>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Title>{title}</Title>
        <Button variant="outlined">
          <CSVLink
            data={flatData(rowData)}
            headers={columns}
            style={{
              outline: "none",
              textDecoration: "none",
              fontWeight: "normal",
              color: "#1976d2",
            }}
          >
            Export
          </CSVLink>
        </Button>
      </div>

      <Table size="small">
        <TableHead>
          <TableRow>
            {columns.map((col: any, i: number) => (
              <TableCell
                key={i}
                align={i === columns.length - 1 ? "right" : "left"}
              >
                {col}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rowData.map((row: any[], i: number) => (
            <TableRow
              key={i}
              onClick={() =>
                setDialogVisibility({
                  open: true,
                  title: "test",
                  body: <div>Test123</div>,
                })
              }
            >
              {row.map((c: any, j: number) => {
                return (
                  <TableCell
                    key={j}
                    align={j === row.length - 1 ? "right" : "left"}
                  >
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
