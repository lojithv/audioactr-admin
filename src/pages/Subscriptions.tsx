import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ReusableTable from "../components/ReusableTable";
import { Button } from "@mui/material";
import { setDialogVisibility } from "../store/DialogStateStore";

type Props = {};

const rows = [
  [
    "16 Mar, 2019",
    "Elvis Presley",
    "VISA ⠀•••• 3719",
    { type: "PRICE", amount: 15 },
  ],
  [
    "16 Mar, 2019",
    "Paul McCartney",
    "VISA ⠀•••• 2574",
    { type: "PRICE", amount: 15 },
  ],
  [
    "16 Mar, 2019",
    "Tom Scholz",
    "MC ⠀•••• 1253",
    { type: "PRICE", amount: 15 },
  ],
  [
    "16 Mar, 2019",
    "Michael Jackson",
    "AMEX ⠀•••• 2000",
    { type: "PRICE", amount: 15 },
  ],
  [
    "15 Mar, 2019",
    "Bruce Springsteen",
    "VISA ⠀•••• 5919",
    { type: "PRICE", amount: 15 },
  ],
];

const columns = [
  { name: "Date" },
  { name: "Name" },
  { name: "Payment Intent ID" },
  { name: "Amount" },
];

const TriggerElement = () => {
  return (
    <Button
      variant="outlined"
      onClick={() =>
        setDialogVisibility({
          open: true,
          body: <div>Test</div>,
          title: "ADD SUBSCRIPTION",
        })
      }
      sx={{ marginBottom: "10px" }}
    >
      ADD SUBSCRIPTION
    </Button>
  );
};

const Subscriptions = (props: Props) => {
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
              title={"Subscriptions"}
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Subscriptions;
