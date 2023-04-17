import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Chart from "../components/Chart";
import Deposits from "../components/Deposits";
import createData from "../helpers/createData";
import ReusableTable from "../components/ReusableTable";
import { Button } from "@mui/material";
import ReusableDialogLayout from "../layouts/DialogLayout";

type Props = {};

const rows = [
  [
    "Free",
    "Free",
    { type: "DURATION", months: "NONE" },
    ,
    { type: "PRICE", amount: 0 },
  ],
  [
    "Pro",
    "Paid",
    { type: "DURATION", months: 12 },
    { type: "PRICE", amount: 15 },
  ],
];

const columns = [
  { name: "Plan Name" },
  { name: "Plan Type" },
  { name: "Expiration Period (Months)" },
  { name: "Amount" },
];

const TriggerElement = () => {
  return <Button variant="outlined">ADD PLAN</Button>;
};

const SubscriptionPlans = (props: Props) => {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* Recent Orders */}
        <Grid item xs={12}>
          <ReusableDialogLayout
            TriggerElement={<TriggerElement />}
            triggerElementMargin="10px"
          />
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <ReusableTable
              rowData={rows}
              columns={columns}
              title={"Subscription Plans"}
            />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SubscriptionPlans;
