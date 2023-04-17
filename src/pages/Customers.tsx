import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ReusableTable from "../components/ReusableTable";
import { Button } from "@mui/material";
import { setDialogVisibility } from "../store/DialogStateStore";

type Props = {};

const rows = [
  ["16 Mar, 2019", "Elvis Presley", "elvis19@mail.com", "User"],
  ["16 Mar, 2019", "Paul McCartney", "paul@mail.com", "User"],
  ["16 Mar, 2019", "Tom Scholz", "tom@mail.com", "User"],
  ["16 Mar, 2019", "Michael Jackson", "michael@mail.com", "User"],
  ["15 Mar, 2019", "Bruce Springsteen", "bruce@mail.com", "User"],
];

const columns = [
  { name: "Registered Date" },
  { name: "Name" },
  { name: "Email Address" },
  { name: "User Type" },
];

const TriggerElement = () => {
  return (
    <Button
      variant="outlined"
      onClick={() =>
        setDialogVisibility({
          open: true,
          body: <div>Test</div>,
          title: "ADD CUSTOMER",
        })
      }
      sx={{ marginBottom: "10px" }}
    >
      ADD CUSTOMER
    </Button>
  );
};

const Customers = (props: Props) => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <TriggerElement />
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <ReusableTable
              rowData={rows}
              columns={columns}
              title={"Customers"}
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Customers;
